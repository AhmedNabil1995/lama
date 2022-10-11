const express = require('express');
const UserModel = require('../models/user')
const {verifyTokenAndAdmin,verifyTokenAndAuthorizationuser} = require('../middleware/verifyToken')
const router = express.Router();
const cryptoJS = require('crypto-js');

//update user

router.put('/:id',verifyTokenAndAuthorizationuser,async(req,res)=>{

    if(req.body.password){
         req.body.password = cryptoJS.AES.encrypt(req.body.password,process.env.PASS_KEY).toString();
    }

    try{
        let updateUser = await UserModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        let {password,...other} = updateUser._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err)
    }
})

//delete user
router.delete('/:id',verifyTokenAndAuthorizationuser,async(req,res)=>{

    try{
        let deletedUser = await UserModel.findByIdAndDelete(req.params.id);
        let {password,...other} = deletedUser._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err)
    }
})

//get user 
router.get('/:id',verifyTokenAndAuthorizationuser,async(req,res)=>{

    try{
        let user = await UserModel.findById(req.params.id);
        let {password,...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err)
    }
})

//get all user

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    let limit = req.query.limit;
    try{
        let users = limit? await UserModel.find({}).sort({_id:-1}).limit(limit) :await UserModel.find({});
        
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
})


//get user stats

router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await UserModel.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;