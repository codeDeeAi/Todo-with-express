module.exports = () => {
    // Require Mongoose
    var mongoose = require("mongoose");

    // Connect to MongoDB
    mongoose.connect("mongodb://localhost/netninja_todo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
        console.log("Connected to netninja_todo database");
    });
};