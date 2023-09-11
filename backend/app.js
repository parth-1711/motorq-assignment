const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors= require("cors")
const app=express();

const carRoutes=require("./Routes/Cars");
const EnrollmentRoutes=require("./Routes/Enrollment");
const customerRoutes=require("./Routes/Customer");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
const mongoURI="mongodb+srv://parthirache8:Spm2masufyOAeim5@cluster0.qyadagc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI,{ useNewUrlParser: true })

app.use("/cars",carRoutes);
app.use("/Enrollments",EnrollmentRoutes);
app.use("/customer",customerRoutes);

app.listen(3000,()=>{
    console.log("server up and running !");
})