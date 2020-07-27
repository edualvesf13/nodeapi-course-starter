const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, servidor!')
})

app.listen(3001)