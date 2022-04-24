module.exports = () => {
    const host = process.env["DB_HOST"] ? process.env["DB_HOST"] : "";
    const name = process.env["DB_NAME"] ? process.env["DB_NAME"] : "";
    // Require Mongoose
    var mongoose = require("mongoose");
    // Connect to MongoDB
    mongoose.connect(host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
        console.log(`Connected to database : ${name}`);
    });
};