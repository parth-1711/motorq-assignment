const mongoose=require("mongoose");

const schema=mongoose.Schema;

const CarSchema=new schema(
    {
        Make:{type:String , required:true},
        Model:{type:String , required:true},
        Year:{type:String , required:true},
        VINPrefix:{type:String , required:true},

    }
)

module.exports=mongoose.model("Car",CarSchema);
