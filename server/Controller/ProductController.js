const fs = require("fs");
const path = require("path");

const uploadProductModel = require("../model/uploadProductModel");
const upload = require("../utils/multerConfig");
const brandModel = require("../model/brandModel");

async function uploadProduct(req, res) {
    upload(req, res, async (err) => {
        if (err) {
          return res.status(500).json({ message: "File upload failed", error: err.message });
        }
    
        try {
          const { title, details, price, discountPrice, discription, size, category, subCategory,brand } = req.body;

        
     
          const photoPaths = req.files.map(file => file.path);
    
       
          const newProduct = new uploadProductModel({
            title,
            details,
            price,
            discountPrice,
            discription,
            size,
            photo: photoPaths, 
            category,
            subCategory,
            brand
          });
    
       
          await newProduct.save();

          await brandModel.findByIdAndUpdate(
            brand, // The brand ID passed in the request body
            { $push: { product: newProduct._id } }, // Push the new product ID into the brand's product array
            { new: true, useFindAndModify: false } // Ensure the updated brand document is returned
        );
    
          res.status(201).json({ message: "Product uploaded successfully", product: newProduct });
        } catch (error) {
          res.status(500).json({ message: "Failed to upload product", error: error.message });
        }
      });
};

async function getAllProduct (req, res){
  try {
    const products = await uploadProductModel.find().populate("category","name").populate("subCategory","name").populate("brand"); 
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
async function getproduct (req, res){
  try {
    const { id } = req.params;

    // Fetch the product by ID and populate category and subCategory fields if needed
    const product = await uploadProductModel.findById(id)
        .populate("category") // Populating category
        .populate("subCategory"); // Populating subcategory

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
} catch (error) {
    res.status(500).json({ message: "Failed to get product", error: error.message });
}
}

async function editProduct (req,res){
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "File upload failed", error: err.message });
    }

    try {
      const { id } = req.params;
      const { title, details, price, discountPrice, description, size, category, subCategory } = req.body;

      // Collect the file paths for any uploaded photos
      const photoPaths = req.files ? req.files.map(file => file.path) : null;

      // Update the product fields
      const updatedProduct = await uploadProductModel.findByIdAndUpdate(
        id,
        {
          title,
          details,
          price,
          discountPrice,
          description,
          size,
          photo: photoPaths || undefined, // Only update if new photos are uploaded
          category,
          subCategory,
        },
        { new: true } // Return the updated document
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
      res.status(500).json({ message: "Failed to update product", error: error.message });
    }
  });
}

async function deleteProduct (req,res){
  try {
    const { id } = req.params;

    // Find the product by ID
    const product = await uploadProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete product photos from the uploads folder
    product.photos.forEach(photo => {
      const photoPath = path.join(__dirname, "../", photo); // Construct the full path to the photo
      if (fs.existsSync(photoPath)) {
        fs.unlinkSync(photoPath); // Delete the photo
      }
    });

    // Delete the product from the database
    await uploadProductModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error: error.message });
  }
}

module.exports = {uploadProduct, getAllProduct, editProduct,deleteProduct, getproduct}