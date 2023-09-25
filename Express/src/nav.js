const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>this is root page<h1>")
})

app.get("/home", (req, res) => {
    res.send("this is home page")

})
app.get("/temp", (req, res) => {
    res.send([
        {
        id: 1,
        name:"shlok",
        },
         {
            id: 1,
            name: "shlok",
        }
    ])

})

app.listen(8000, () => {
    console.log(`listening to the localhost `)
})