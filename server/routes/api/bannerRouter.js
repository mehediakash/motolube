const express = require("express");
const { bannerUpload, editBanner, deleteBanner, getAllbanner } = require("../../Controller/bannerController");

const _ = express.Router()

_.post("/upload", bannerUpload);
_.get("/all", getAllbanner);
_.put("/edit/:id", editBanner);
_.delete("/delete/:id", deleteBanner);

module.exports = _