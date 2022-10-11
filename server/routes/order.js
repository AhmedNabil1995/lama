const express = require('express');
const OrderModel = require('../models/order')
const {verifyTokenAndAdmin,verifyTokenAndAuthorization,verify} = require('../middleware/verifyToken')
const router = express.Router();
const cryptoJS = require('crypto-js');

//create order

router.put('/',verify,async(req,res)=>{
    
    const order = new OrderModel(req.body);
    try{
        let savedorder = await order.save();
        res.status(200).json(savedorder);
    }catch(err){
        res.status(500).json(err)
    }
})


 //update order

router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{

    try{
        let updateorder = await OrderModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateorder);
    }catch(err){
        res.status(500).json(err)
    }
})

//delete order
router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{

    try{
        let deletedorder = await OrderModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedorder);
    }catch(err){
        res.status(500).json(err)
    }
})

//get user order 
router.get('/:id',verifyTokenAndAuthorization,async(req,res)=>{

    try{
        let order = await OrderModel.findById(req.params.id);
        res.status(200).json(order);
    }catch(err){
        res.status(500).json(err)
    }
})

//get all order

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    
    try{

        let  orders =  await OrderModel.find();
        
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err)
    }
})

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await OrderModel.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;