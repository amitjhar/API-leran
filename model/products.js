const mongoose = require('mongoose') // module

const productSchema = mongoose.Schema({
    name:String,
    desc:String,
    price:Number
});

module.exports = mongoose.model('product',productSchema)