const express = require('express')
require("./db/con")
const mongoose = require('mongoose')
const validator = require('validator')
const app = express()
const port = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//  res.send("hello from get side")
// })

app.post("/students", (req, res) => {
    res.send("response from this side ")
    
})
app.listen(port, () => {
    console.log(`connection is successful ${port}`)
})