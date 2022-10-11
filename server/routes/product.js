const express = require('express');
const ProductModel = require('../models/product')
const {verifyTokenAndAdmin,verifyTokenAndAuthorization,verify} = require('../middleware/verifyToken')
const router = express.Router();
const cryptoJS = require('crypto-js');


//create product

router.post('/:id',verifyTokenAndAdmin,async(req,res)=>{
    
    const product = new ProductModel(req.body);
    try{
        let savedProduct = await product.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err)
    }
})


 //update product

router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{

    try{
        let updateProduct = await ProductModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateProduct);
    }catch(err){
        res.status(500).json(err)
    }
})

//delete product
router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{

    try{
        let deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProduct);
    }catch(err){
        res.status(500).json(err)
    }
})

//get product 
router.get('/:id',async(req,res)=>{

    try{
        let product = await ProductModel.findOne({id:req.params.id});
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
})


//get all product
 
router.get('/',async(req,res)=>{
    let limit = req.query?.limit;
    let page = req.query?.page;
    let qCategort = req.query?.category;
    console.log(limit,page)
    try{
        let products ;
        if(qCategort){
            products = await ProductModel.find({category:{$in:[qCategort]}})
        }else{
            products = (limit&&page)? await ProductModel.find({}).sort({createdAt:-1}).skip(limit*(page-1)).limit(limit) : await ProductModel.find({});
        }
 
        
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;