const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Starting the app
const app = express()
app.use(express.json())

// Starting the DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true})
requireDir('./src/models')

// Routes.
app.use('/api', require('./src/routes'))

app.listen(3001)