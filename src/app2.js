const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const Knex = require('knex');
const { Model } = require('objection');

dotenv.config();
const app = express();

// Objection Setup
const knexfile = require('./knexfile');
const knex = Knex(knexfile[process.env.NODE_ENV]);
Model.knex(knex);

app.use(bodyParser.json());
// Api Routes

app.get("/*", (req, res) => {
    res.sendFIle(path.join(__dirname, 'index.html'));
})


module.exports = app