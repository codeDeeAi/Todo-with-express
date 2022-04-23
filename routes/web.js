// Get Controllers
const homepageController = require("../controllers/generalHomeViewController.js");

module.exports = (app) => {
    homepageController(app);
};