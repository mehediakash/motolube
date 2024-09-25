const Brand = require("../model/brandModel");
const Brandupload = require("../utils/brandUploads");
const fs = require("fs");
const path = require("path");

async function createBrand(req, res) {
    // Use multer to handle the file upload
    Brandupload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: "File upload failed", error: err.message });
        }

        try {
            const { title, description } = req.body;
            const photoPath = req.file ? req.file.path : null; // Handling single file upload

            if (!photoPath) {
                return res.status(400).json({ success: false, message: "No photo uploaded" });
            }
            // Create a new brand with the uploaded photo
            const newBrand = new Brand({
                photo: photoPath, // Store the uploaded photo path
                title,
                description
            });
            
            await newBrand.save();
            res.status(201).json({ success: true, message: "Brand created successfully", brand: newBrand });
        } catch (error) {
            res.status(500).json({ success: false, message: "Failed to create brand", error: error.message });
        }
    });
}

async function getAllBrands(req, res) {
    try {
        const brands = await Brand.find().populate('product'); 
        if (!brands || brands.length === 0) {
            return res.status(404).json({ success: false, message: "No brands found" });
        }
        res.status(200).json({ success: true, brands });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to retrieve brands", error: error.message });
    }
}

async function getBrandById(req, res) {
    try {
        const { id } = req.params;
        const brand = await Brand.findById(id).populate('product'); 

        if (!brand) {
            return res.status(404).json({ success: false, message: "Brand not found" });
        }

        res.status(200).json({ success: true, brand });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to retrieve brand", error: error.message });
    }
}

async function updateBrand(req, res) {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const photos = req.file ? req.file.path : null; // Assuming single photo upload using multer

        const updatedData = {
            title,
            description,
        };
        if (photos) updatedData.photo = photos;

        const updatedBrand = await Brand.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedBrand) {
            return res.status(404).json({ success: false, message: "Brand not found" });
        }

        res.status(200).json({ success: true, message: "Brand updated successfully", brand: updatedBrand });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update brand", error: error.message });
    }
}

async function deleteBrand(req, res) {
    try {
        const { id } = req.params;

        // Find the brand by its ID
        const brand = await Brand.findById(id);

        if (!brand) {
            return res.status(404).json({ success: false, message: "Brand not found" });
        }

        // Delete each brand photo from the uploads folder if they exist
        if (brand.photo && brand.photo.length > 0) {
            brand.photo.forEach((photo) => {
                const photoPath = path.join(__dirname, "../", photo);
                fs.unlink(photoPath, (err) => {
                    if (err) {
                        console.error("Error deleting photo:", err);
                    }
                });
            });
        }

        // Delete the brand document from the database
        await Brand.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Brand deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete brand", error: error.message });
    }
}

module.exports = { createBrand , getAllBrands, getBrandById, updateBrand, deleteBrand };
