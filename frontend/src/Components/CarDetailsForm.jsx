import { Form } from "react-router-dom";
import classes from "./CarDetailsForm.module.css"
import DropdownSelector from "./DropdownSelector";
import axios from "axios";
import { useState } from "react";

const CardetailsForm = (props) => {
  const [make,setMake]=useState("");
  const [model,setModel]=useState("");
  const [year,setYear]=useState("");
  const [VIN,setVIN]=useState("");

  const getMakeValue=(value)=>{
    setMake(value)
  }
  const getModelValue=(value)=>{
    setModel(value)
  }
  const getYearValue=(value)=>{
    setYear(value)
  }
  const addEnrollMentHandler=async ()=>{
    const response= await axios.post('http://localhost:3000/Enrollments',{
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      data:{
        username:props.username,
        vin:VIN,
        status:"pending"
      },
      credentials: "include",})
  }
  return (
    <Form method="post" className={classes.form}>
      <DropdownSelector label="Make" onSelect={getMakeValue}/>
      <DropdownSelector label="Model" onSelect={getMakeValue}/>
      <DropdownSelector label="Year" onSelect={getYearValue}/>
      <p>
        <label htmlFor="VIN">VIN</label>
        <input id="VIN" type="text" name="VIN" required />
      </p>
       
      <button>Enroll</button>
    </Form>
  );
};

export default CardetailsForm;
