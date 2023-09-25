const http = require("http");
const fs= require("fs")
const server = http.createServer((req, res) => {
    // console.log(req.url); 
    if (req.url =="/")
    {
        res.end('Hello from the home side');
    }
    else if (req.url == "/home")
    {
        res.end("Hello from home page")
    }
    else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/USERAPI/userapi.json`, "utf-8", (err,data) => {
            console.log(data)
            const obj=JSON.parse(data)
            res.end(obj.age)

        })
    }
    else
    {
        res.end("404 error")
        }
}); 
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000")
});