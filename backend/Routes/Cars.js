const express = require('express');
const Cars = require("../Models/Cars");

const router=express.Router();

router.get('/',async(req,res,next)=>{
    
    try{
        const foundCars=await Cars.find();
        if(foundCars){
            res.json(foundCars);
        }
    }
    catch (error){
        next(error);
    }
});

router.post("/",async(req,res,next)=>{
    let {make,model,year,vinPrefix}=req.body;
    let car=new Cars({
        Make:make,
        Model:model,
        Year:year,
        VINPrefix:vinPrefix
    })

    await car.save();
    res.status(201).json({message:"New Car Added !"});
})


module.exports=router;