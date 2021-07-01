//api router
const { auth , LoggedUser } = require('../auth')
const { Router } = require('express');
const projects = require("./projects")
const invites = require("./invites")
const packages = require("./packages")
const tasks = require("./tasks")

const api = Router();

//authenticate before accessing api
api.use(auth)

api.use('/projects', projects)
api.use('/invites', invites)
api.use("/packages", packages)
api.use("/tasks", tasks)

api.get("/user", (req,res) => {
    res.json({msg:'Im here yo', user: req.user})
})



module.exports = api;