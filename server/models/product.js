const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    id:{type:Number,unique:true},
    title : {type:String,required:true,unique:true},
    description : {type:String,required:true},
    price : {type:Number,required:true},
    discountPercentage:{type:Number},
    rating:{type:Number},
    stock:{type:Number},
    brand:{type:String},
    category : {type:String},
    thumbnail:{type:String},
    images : {type:Array,required:true},
},{timestamps:true});



module.exports = mongoose.model('Product',ProductSchema);