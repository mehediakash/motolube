const mongoose = require("mongoose")
const {Schema} = mongoose

const uploadProduct = new Schema({
    title:{
        type: String,
        require: true
        
    },
    details:{
        type: String,
        require:[ true, "details is require"]
    },
    price:{
        type: Number,
        require: [true, "price is require"]
    },
    discountPrice:{
        type:Number
    },
    discription:{
        type: String,
        require: [true, "discription is require"]
    },
    color:{
        type:Array
    },
    size: {
        type: Array
    },
    photo:[{
        type:String
    }]
    ,
    category:{
        type: Schema.Types.ObjectId,
        ref: "Category",
        },
    subCategory:{
        type: Schema.Types.ObjectId,
        ref:"SubCategory",
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref:"Brand",
    }
    
})

module.exports = mongoose.model("Product", uploadProduct)