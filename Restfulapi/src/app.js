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

// app.post("/students", (req, res) => {
//     console.log(req.body)

//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.send(user);
//     }).catch((e) => {
//         res.send(e)
//     })
//     // res.send("response from this side ")
    
// })
//post method
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save();
        res.status(201).send * (createUser)
        
    } catch (e) {
        res.status(400).send(e)

    }
   
   
    
})
//get method
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData)

    } catch (e) {
        res.status(400).send(e)

    }
})
//get by id 
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;  
        const studentData = await Student.findById(_id);
        console.log(studentData)
        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData)
        }
    } catch (e) {
        res.send(e)
    }
})

//update
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;  
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body);
        res.send(updateStudents)
        console.log(updateStudents)
        
    } catch (e) {
        res.status(404).send(e)
    }
})
app.listen(port, () => {
    console.log(`connection is successful ${port}`)
})