global.__basedir = __dirname;

const express = require('express');
const path = require('path');
const cors = require("cors")
const db = require('./db');


const config = require("./config")
const logger = require("./dev/logger")
const api = require("./api")
const {auth, LoggedUser} = require("./auth")
const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.static("public"));
app.use(function (err, req, res, next) {
    if (err.message === 'BAD_REQUEST') {
        res.status(400).send('BAD REQUEST');
        return;
    }
    res.status(500).send('SERVER ERROR');
});
app.use(logger)


app.use("/api", api);
//app.use("/auth", auth);

db.connect().then(() => {
    app.listen(config.port, function () {
        console.log(`Server is listening on :${config.port}`);
    });
});