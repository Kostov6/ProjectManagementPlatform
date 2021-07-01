const { workers, worker } = require('cluster');
const { Router } = require('express');

const { createQueriesForCollection } = require('../db/queries');

const tasksCollections = createQueriesForCollection("tasks");
const workersCollections = createQueriesForCollection("workers");
const usersCollections = createQueriesForCollection("users");
const subtasksCollections = createQueriesForCollection("subtasks");

const tasks = Router();

tasks.get("/all/:owner/:project", async (req, res) => {
    const owner = req.params["owner"]
    const project = req.params["project"]
    const allTasks = await tasksCollections.get({owner, project})
    const allTassWithWorkers = await Promise.all(
        allTasks.map(task => 
            async function(){
                const taskId = task._id.toString();
                console.log(taskId)
                const allWorkers = await workersCollections.get({taskId})
                const participants = allWorkers.map(worker => ({name: worker.userId, voted: worker.voted}))
                task.participants = participants
                return task;
            }()
        )
    )
    console.log(allTassWithWorkers);
    const output = await Promise.all(
        allTassWithWorkers.map(task => 
            async function(){
                const taskId = task._id.toString();
                const allSubtasks = await subtasksCollections.get({taskId})
                const subtasks = await Promise.all(
                    allSubtasks.map(subtask => 
                        async function(){
                            const subtaskId = subtask.subtaskId.toString();
                            const subtaskFull = await tasksCollections.get({_id: subtaskId})
                            //console.log(subtaskFull)
                            const {_id, stage, title} = subtaskFull[0];
                            //console.log({_id, stage, title})
                            return {_id, stage, title}
                        }()    
                    )
                )
                //console.log(subtasks)
                task.subtasks = subtasks;
                
                //console.log(task)
                return task;
            }()
        )
    )
    console.log(output)
    res.json(output)

})

tasks.post("/nextStep/:taskId", async (req, res) => {
    const taskId = req.params["taskId"]
    const user = req.user.name;
    const taskList = await tasksCollections.get({_id: taskId})
    const task = taskList[0];
    //update nextStep
    await workersCollections.update({taskId, userId: user},{voted: true})
    //check if next stage update
    const allWorkers = await workersCollections.get({taskId})
    const nextStep = allWorkers.reduce((acc, worker) => acc && worker.voted, true)
    console.log(nextStep)
    if(nextStep){
        //update task to next stage
        const stage = task.stage
        console.log("Updating to stage " + (stage + 1))
        await tasksCollections.update({_id: taskId}, {stage: (stage + 1)})
        //clear all workers
        await workersCollections.update({taskId}, {voted: false})
    }
    res.json(task)

})

tasks.post("/add", async (req, res) => {
    const body = req.body;
    const { owner, participants, allUsers, project, subTasks, taskDeadline, taskDescr, taskTitle} = body;
    const participantsNames = allUsers.filter((item,index) => participants[index])
    const task = {owner, project, title: taskTitle, descr: taskDescr, deadline: taskDeadline, stage: 0}
    const result = await tasksCollections.insert(task);
    const taskId = result._id.toString()
    //console.log(result)
    await Promise.all(
        participantsNames.map(userId => async function(){
            await workersCollections.insert({taskId, voted: false, userId})
        }())
    )
    await Promise.all(
        subTasks.map(subtaskName => async function(){
            const subtask = await tasksCollections.get({title: subtaskName})
            console.log(subtask.length)
            if(subtask.length>0){
                const subtaskId = subtask[0]._id.toString();
                console.log({taskId, subtaskId})
                await subtasksCollections.insert({taskId, subtaskId})
            }
        }())
    )
    res.json(result)
})

tasks.post("/delete/:taskId", async (req, res) => {
    const taskId = req.params["taskId"]
    console.log(taskId)
    await tasksCollections.remove({_id : taskId})
})

module.exports = tasks;
/*

            */
/*
            tasksCollections.get({}).then(allTasks =>{
                console.log(allTasks);
                return Promise.all(
                    allTasks.map(task => {
                        const taskId = task._id.toString();
                        console.log(taskId)
                        return workersCollections.get({taskId})
                        
                    })
                ).then(res => {console.log(res);return res})
             })
             */