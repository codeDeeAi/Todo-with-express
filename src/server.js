// const app = require('./app')

// app.listen(process.env.PORT, () => console.log(`Running from port: ${process.env.PORT}`));

var http = require("http");

var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// myReadStream.on('data', (chunk) => {
//     console.log('new chunk recieved')
//     console.log(chunk)
// })

var server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    // var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    // myReadStream.pipe(res);

    var myJson = {
        var: "me",
        var2: "me",
        var3: "me",
        var4: "me",
    };
    res.end(JSON.stringify(myJson));
});

server.listen(5000, "127.0.0.1");
console.log("You're connected to port 5000");