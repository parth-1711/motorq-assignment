const express = require("express");
// const Cars = require("../Models/");
const Enrollment = require("../Models/Enrollment");

const router=express.Router();
router.get("/", async (req, res, next) => {
  try {
    const enrollments = await Enrollment.aggregate([
      {
        $lookup: {
            from:"Cars",
            let:{subVINPrefix:{$substr:['$VINPrefix',0,8]}},
            pipeline:[
                {
                    $match:{
                        $expr:{$eq:['$$subVINPrefix',{$substr:['$vin',0,8]}]}
                    }
                }
            ],
            as:'carinfo'
        },
      },
    ]);
    res.json(enrollments);
  } catch (error) {
    next(error);
  }
});

router.post("/:acc/:vin",async(req,res,next)=>{
    try{
        const enrollments=await Enrollment.updateOne({vin:req.params.vin},{status:req.params.acc});
        if(enrollments.acknowledged){
            res.status(201).json({message:"Updated successfully !"});
        }
    }
    catch(error){
        next(error)
    }

})

module.exports=router;