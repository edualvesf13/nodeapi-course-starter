const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
   /* Product.create({
        title: 'React Native',
        descriptions: 'Build native apps with React Native',
        url: 'https://github.com/facebook/react-native'
    })
    */
    return res.send('Continuando o exercicio!')
})

module.exports = routes