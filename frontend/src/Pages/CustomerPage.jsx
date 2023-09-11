import { NavLink, useParams } from "react-router-dom";
import CardetailsForm from "../Components/CarDetailsForm";
import axios from "axios";
import { useCallback, useEffect,useState } from "react";

const CustomerPage = () => {
  let username=useParams();
  const [Enrollments,setEnrollments]=useState([])
  const getEnrollments = useCallback(async () => {
    const enrollments = await axios.get("http://localhost:3000/Enrollments", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      credentials: "include",
    });

    setEnrollments(enrollments.data);
  },[]);

  useEffect(()=>{
    getEnrollments();
  });
  return (
    <>
      <CardetailsForm userName={username}/>
        <ul>
      {Enrollments.map((enrollment)=>{
        if(enrollment.username=params.username){
            return (
                <li key={enrollment.id}>
                    <h4>{enrollment.Make}</h4>
                    <h4>{enrollment.Model}</h4>
                    <h4>{enrollment.vin}</h4>
                    <p>{enrollment.Year}</p>
                    <p>{enrollment.status}</p>
                    {enrollment.status=="Rejected" && <button>Retry</button>}
                </li>
            )
        }
    })}
    </ul>
    </>
  );
};

export default CustomerPage;
