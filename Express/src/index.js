var path = require ("path")
var express = require('express')
var hbs = require('hbs')
var app = express();
const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")


app.set('view engine', 'hbs');
// app.set('views', '/home/shlok/Desktop/Stuff/1923/Express/vi""ews');
app.set("views", templatePath)

hbs.registerPartials(partialsPath);

// app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.render('index.hbs')
})

 
console.log(path.join(__dirname,"../public"))
app.get("/", (req, res) => {
    res.send("hello world");
})
app.get("/start", (req, res) => {
    res.send("this is start page");

})

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: 'oops page not found'
    })
})
app.listen(8000, () => {
    console.log("listining to the port")
});