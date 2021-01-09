var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ProductId: Number,
    Name: String,
    Cost: Number,
    Code: String,
    Status: Boolean
});

module.exports = mongoose.model(
    'product', ProductSchema, "Products"
);