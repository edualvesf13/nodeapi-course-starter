const express = require('express')
const mongoose = require('mongoose')

// Starting the app
const app = express()

// Starting the DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true})
require('./src/models/Product')

// Creating the route.
app.get('/', (req, res) => {
    res.send('Hello, servidor!')
})

app.listen(3001)