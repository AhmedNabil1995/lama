const express = require('express');
const CartModel = require('../models/cart')
const {verifyTokenAndAdmin,verifyTokenAndAuthorization,verify} = require('../middleware/verifyToken')
const router = express.Router();
const cryptoJS = require('crypto-js');

//create cart

router.post('/',verify,async(req,res)=>{
    
    const cart = new CartModel(req.body);
    try{
        let savedCart = await cart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err)
    }
})


 //update cart

router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{

    try{
        let updateCart = await CartModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateCart);
    }catch(err){
        res.status(500).json(err)
    }
})

//delete cart
router.delete('/:id',verifyTokenAndAuthorization,async(req,res)=>{

    try{
        let deletedCart = await CartModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCart);
    }catch(err){
        res.status(500).json(err)
    }
})

//get cart 
router.get('/:id',verifyTokenAndAuthorization,async(req,res)=>{

    try{
        let cart = await CartModel.findById(req.params.id);
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err)
    }
})

//get all cart

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    
    try{

        let  carts =  await CartModel.find();
        
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;