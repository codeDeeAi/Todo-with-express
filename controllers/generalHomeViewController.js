module.exports = (app) => {
    // Returns home view
    app.get("/", (req, res) => {
        res.sendFile("index.html", { root: "views/" });
    });
};