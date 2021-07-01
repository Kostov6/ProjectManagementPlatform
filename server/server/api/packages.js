const { Router } = require('express');

const { createQueriesForCollection } = require('../db/queries');

const packagesCollection = createQueriesForCollection("packages");
const tasksCollections = createQueriesForCollection("tasks");

const packages = Router();

packages.post("/add/", async (req,res) => {
    const user = req.user.name;
    await packagesCollection.insert(req.body);

    const {owner, project, packageTitle, packageEndDate} = req.body;
    const initialTask = {owner, project, title: packageTitle, deadline: packageEndDate, stage: 0, descr : `This is automatically generated task for package ${packageTitle}`}
    await tasksCollections.insert(initialTask)
})

packages.get("/all/:owner/:project", async (req,res) => {
    const user = req.user.name;
    const owner = req.params["owner"];
    const project = req.params["project"];
    const result = await packagesCollection.get({project, owner});
   // const data = result.map(el => ({ packageTitle : el.packageTitle, packageStartDate: el.packageStartDate, packageEndDate: el.packageEndDate}))
    res.json(result)
})

packages.get("/get/:packageId", async (req,res) => {
    const user = req.user.name;
    const packageId = req.params["packageId"];
    const result = await packagesCollection.get({_id: packageId});
   // const data = result.map(el => ({ packageTitle : el.packageTitle, packageStartDate: el.packageStartDate, packageEndDate: el.packageEndDate}))
    res.json(result[0])
})

packages.post("/delete/:packageId", async (req,res) => {
    const user = req.user.name;
    const packageId = req.params["packageId"];
    await packagesCollection.remove({_id: packageId});
   // const data = result.map(el => ({ packageTitle : el.packageTitle, packageStartDate: el.packageStartDate, packageEndDate: el.packageEndDate}))
    res.json({msg: "ok"})
})

packages.post("/update/:packageId", async (req,res) => {
    const user = req.user.name;
    const packageId = req.params["packageId"];
    const newPackage = req.body;
    await packagesCollection.update({_id: packageId}, newPackage);
   // const data = result.map(el => ({ packageTitle : el.packageTitle, packageStartDate: el.packageStartDate, packageEndDate: el.packageEndDate}))
    res.json({msg: "ok"})
})




module.exports = packages;