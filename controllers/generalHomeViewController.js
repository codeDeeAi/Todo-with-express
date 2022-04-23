const express = require("express");

module.exports = (app) => {
    // Returns home view
    app.get("/", (req, res) => {
        res.send(`welcome to the node js todo homepage :)`);
    });
};