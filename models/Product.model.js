const { Schema, model } = require('mongoose')

const productSchema = Schema({
    
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [String]
      

})

const Product = model('product', productSchema)

module.exports = Product