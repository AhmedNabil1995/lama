const mongoose = require('mongoose');


const CartSchema = mongoose.Schema({
    userId : {type:mongoose.Schema.Types.ObjectId,required:true,unique:true,ref:'User'},
    products : [{
        product : {type:Object},
        quantity :{type:Number,default:1}
    }
    ],
    total:{type:Number}
},{timestamps:true});



module.exports = mongoose.model('Cart',CartSchema);