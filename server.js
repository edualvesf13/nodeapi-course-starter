const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Starting the app
const app = express()

// Starting the DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true})
requireDir('./src/models')

const Product = mongoose.model('Product')

// Creating the route.
app.get('/', (req, res) => {

    Product.create({
        title: 'React Native',
        descriptions: 'Build native apps with React Native',
        url: 'https://github.com/facebook/react-native'
    })

    return res.send('Hello, servidor!')
})

app.listen(3001)