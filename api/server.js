const express = require('express')
const mongoose = require('mongoose')
const dogRoutes = require('./routes/dogRoutes')

const app = express()
const port = 3000
const URI = 'mongodb://localhost:27017'

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/dogs', dogRoutes)

app.get("/", (req, res)  => {
    res.json({
        name: "dog API",
        description: "can I pet that dawg"
    })
})

mongoose.connect(URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to DB & Listening on port ${port}!`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
