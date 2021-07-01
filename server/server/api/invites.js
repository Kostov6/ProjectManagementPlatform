const { Router } = require('express');

const { createQueriesForCollection } = require('../db/queries');

const invitesCollection = createQueriesForCollection("invites");
const projectsCollection = createQueriesForCollection("projects");

const invites = Router();



invites.post("/accept/:owner/:project", async (req,res) => {
    const invitedUser = req.user.name;
    const projectOwner = req.params['owner'];
    const project = req.params['project'];
    
    console.log(`User ${invitedUser} accepted project ${project} by ${projectOwner}`)

    await invitesCollection.remove({invitedUser, projectOwner, project})
    const result= await projectsCollection.get({projectOwner, project})
    const { participants } = result[0]
    console.log(participants)
    participants.push(invitedUser)
    await projectsCollection.update({projectOwner, project}, { participants })
    res.json({msg: "ok"})
})


invites.post("/decline/:owner/:project", async (req,res) => {
    const invitedUser = req.user.name;
    const projectOwner = req.params['owner'];
    const project = req.params['project'];
    
    console.log(`User ${invitedUser} decline project ${project} by ${projectOwner}`)

    await invitesCollection.remove({invitedUser, projectOwner, project})
    res.json({msg: "ok"})
})

invites.get("/allInvited" , async (req, res) => {
    const invitedUser = req.user.name;

    const results = await invitesCollection.get({ invitedUser })
    console.log(results)
    const data = results.map( result => `${result.project} by ${result.projectOwner}`)
    res.json(data);
})


module.exports = invites;