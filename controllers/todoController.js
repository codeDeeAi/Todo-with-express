// Body Parser
var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

// Import Models
var model = require("../model/Todo");
// Model
var Todo = model.Todo;

module.exports = (app, prefix) => {
    // Define methods and api's here

    // * Get Todo lists
    app.get(`${prefix}/todo`, (request, response) => {
        Todo.find({}, (err, data) => {
            if (err) throw err;
            response.send(data);
        });
    });

    // * Add a new todo
    app.post(`${prefix}/todo`, (request, response) => {
        // Validation
        if (!request.body) return response.status(422).send('item is required');
        if (!request.body.item) return response.status(422).send('item is required');
        // create new todo
        Todo(request.body).save((err) => {
            if (err) throw err;
            console.log("item saved");
        });
        return response.status(201).send('Item saved');
    });
};