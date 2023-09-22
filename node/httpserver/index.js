const http= require("http");
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
    else
    {
        res.end("404 error")
        }
}); 
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000")
});