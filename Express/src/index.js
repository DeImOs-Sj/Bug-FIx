var path = require ("path")
var express = require('express')
var app = express();
const staticPath = path.join(__dirname, "../public")

app.set('view engine', 'hbs');
app.set('views', '/home/shlok/Desktop/Stuff/1923/Express/views');

// app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.render('index.hbs')
})

 
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