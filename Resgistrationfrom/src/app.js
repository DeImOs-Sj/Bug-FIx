const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const hbs=require("hbs")

const app = express();
const Login = require("./models/Login"); // Adjust the path as needed

const port = process.env.PORT || 8000;
require("./db/con");


const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// console.log(path.join(__dirname,"../views"))
// app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.get("/", (req, res) => {
    res.render("index")
})
app.post("/", async (req, res) => {
    try {

        console.log(req.body.mail)
        // res.send(req.body.mail)
        console.log(req.body.password)
        // res.send(req.body.password)
        const registeremployee = new Login({
            email: req.body.mail,
            password: req.body.password,

        })
        const registered = await registeremployee.save();
        res.send("Registration successful"); // Send a success response


    } catch (error) {
        res.status(400).send("Registration failed: " + error.message); // Send an error response

        
    }
})
// app.get("/", (req, res) => {
//     res.render("index")
// })

app.listen(port, () => {
    console.log(`server is running at port no ${port}`)
})