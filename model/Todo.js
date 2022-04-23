// Require Mongoose
var mongoose = require("mongoose");

// Schema
var schema = require("../schema/todoSchema");
var todoSchema = schema.todoSchema;

// Model
var Todo = mongoose.model("todo", todoSchema);

module.exports = {
    Todo: Todo, // Export Model
};