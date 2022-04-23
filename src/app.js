var express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("this is the express homepage");
});

app.get("/contact", (req, res) => {
    res.send("this is the express contact page");
});

app.get("/profile/:id", (req, res) => {
    res.send(
        `this is the express profile page for a  user with id of ${req.params.id}`
    );
});

app.get("/query", (req, res) => {
    var data = req.query;
    res.send(`this is the express query page for a query of ${data}`);
});

app.listen(5000);