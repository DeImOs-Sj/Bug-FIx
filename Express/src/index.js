var path = require ("path")
var express = require('express')
var app = express();
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath));

 
console.log(path.join(__dirname,"../public"))
app.get("/", (req, res) => {
    res.send("hello world");
})
app.get("/Start", (req, res) => {
    res.send("hello world");
})
app.listen(8000, () => {
    console.log("listining to the port")
});