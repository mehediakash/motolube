const mongoose = require("mongoose")
const {Schema} = mongoose

const subCategory = new Schema({
    name:{
        type:String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        // required: [true, "Category is required to create sub-category"],
      }
})

module.exports = mongoose.model("SubCategory", subCategory)