// Get Express Js
const express = require("express");

const app = express();
const env = require("dotenv").config({ path: __dirname + "/.env" });
const port = process.env["PORT"];
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

app.use(express.json());
// Access static files
app.use(express.static("/public"));

// Get/ Open Database Connection
var database = require("./database/mongodb");
database();

// Use Middleware
// var userMiddleware = require("./middleware/user");
// app.use(userMiddleware);

// Register Routes
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");

// Fire Controllers
webRoutes(app);
apiRoutes(app);

// Start Server
app.listen(port); // listen to port
// log connected to server
console.log(`connected on port: ${port}`);