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
        if (!request.body) return response.status(422).send("item is required");
        if (!request.body.item)
            return response.status(422).send("item is required");
        // create new todo
        Todo(request.body).save((err) => {
            if (err) throw err;
            console.log("item saved");
        });
        return response.status(201).json({ message: "Item saved" });
    });

    // * Remove from todo
    app.delete(`${prefix}/todo/:id`, (request, response) => {
        // Validation
        if (!request.params.id)
            return response.status(422).send("item id is required");
        // Find todo by id
        Todo.deleteOne({ _id: request.params.id }, (err) => {
            if (err) throw err;
            return response.status(201).json({ message: "Item deleted !" });
        });
    });
};