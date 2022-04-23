// Get Controllers
const todoController = require("../controllers/todoController");
const prefix = "/api/v1";
module.exports = (app) => {
    todoController(app, prefix);
};