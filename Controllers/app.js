const express = require('express')
const app = express()
const PORT = process.env.PORT ||8000;
app.get('/', (req, res) => {
    res.send("Hi")
});
const products_routes= require("./routes/products")
app.use("/api/products",products_routes)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()