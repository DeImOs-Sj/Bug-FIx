const express = require('express')
require("./db/con")
const Student = require("./db/models/students")
const mongoose = require('mongoose')
const validator = require('validator')
const app = express()
const port = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//  res.send("hello from get side")
// })
app.use(express.json())

app.post("/students", (req, res) => {
    console.log(req.body)

    const user = new Student(req.body)
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send(e)
    })
    // res.send("response from this side ")
    
})
app.listen(port, () => {
    console.log(`connection is successful ${port}`)
})