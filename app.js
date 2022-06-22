const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static('public'))  //for css static
app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

// Database
require('./db')                     // Default index.js file loading

// Model

const Product = require('./models/Product.model')

app.get('/', (req, res) => {

    res.render('product-list');
})

app.get('/tienda', (req, res) => {

    Product
        .find()
        .select({ title: 1, price: 1, description: 1, images: 1 })
        .sort({ price: 1 })
        .limit(10)
        .then(allProducts => {

            res.render('tienda', { allProducts })
        })
        .catch(err => console.log(err))

})



app.listen(3000, console.log('SERVER RUNNING ON PORT 3000'))