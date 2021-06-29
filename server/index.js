global.__basedir = __dirname;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require("./config")
//const db = require('./db');

const rest = require("./REST")

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/rest", rest);

app.use(function (err, req, res, next) {
    if (err.message === 'BAD_REQUEST') {
        res.status(400).send('BAD REQUEST');
        return;
    }
    res.status(500).send('SERVER ERROR');
});

//establish connection with database and server
//db.connect().then(() => {
    app.listen(config.port, function () {
        console.log(`Server is listening on :${config.port}`);
    });
//});