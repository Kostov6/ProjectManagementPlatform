const { Router } = require('express');
const { createQueriesForCollection } = require('../db/queries');

const projectsCollection = createQueriesForCollection("projects");
const invitesCollection = createQueriesForCollection("invites");

const projects = Router();

function persistInvitation(projectOwner, project, invitedUser){
    if(invitedUser === "")
        return false;
    invitesCollection.insert({projectOwner, project, invitedUser})
    console.log(`Set invitation from ${projectOwner} to ${invitedUser} about ${project}`)
    return true;
}

projects.post("/newProject", (req,res) => {
    const { project, participants } = req.body;
    const projectOwner = req.user.name;
    //TODO Check users for validity
    projectsCollection.get({ project, projectOwner })
        .then(results => {
            if(results.length > 0){
                throw "You have already reacted a project with this name"
            }
            participants.forEach( participant => persistInvitation(projectOwner, project, participant))
            return projectsCollection.insert({ project, projectOwner, participants: [projectOwner] })
        })
        .then(result => {
            console.log(result)
            res.json({msg: "Project created successfully"})
        })
        .catch(err => {
            console.log(err)
            res.json({err})
        })
})

projects.get("/allProjectNames" , async (req, res) => {
    const user = req.user.name;

    const resultsWhenOwner = await projectsCollection.get({ projectOwner: user })
    const resultWhenParticipant = await projectsCollection.get({participant: user})
    console.log(resultsWhenOwner)
    const data = resultsWhenOwner.map(result => `${result.project} by ${result.projectOwner}`).concat(
        resultWhenParticipant.map(result => `${result.project} by ${result.projectOwner}`)
    )
    console.log(data)
    res.json(data);
})

projects.get("/all" , async (req, res) => {
    const projectOwner = req.user.name;

    const results = await projectsCollection.get({ projectOwner })
    console.log(results)
    const data = results.map( result => result.project)
    res.json(data);
})

projects.get("/:user", (req,res) => {
    res.json(["A","B"])
})


module.exports = projects;