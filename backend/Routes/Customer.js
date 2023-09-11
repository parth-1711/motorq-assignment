const express = require('express');
const Customer = require("../Models/Customer");

const router=express.Router();

router.get('/:username',async(req,res,next)=>{
    try{
        let foundUser=await Customer.find({username:req.params.username});
        res.json(foundUser);
    }
    catch(error){
        next(error);
    }
})

module.exports=router;