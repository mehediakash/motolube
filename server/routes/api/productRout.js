const express = require("express");
const _ = express.Router()

const { uploadProduct, getAllProduct, editProduct, deleteProduct, getproduct } = require("../../Controller/ProductController");

_.post('/uploadProduct', uploadProduct)
_.get('/allproduct', getAllProduct)
_.get('/byproduct/:id', getproduct)
_.put("/editProduct/:id", editProduct);
_.delete("/deleteProduct/:id", deleteProduct);

module.exports = _