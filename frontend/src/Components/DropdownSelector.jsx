import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

function DropdownSelector(props) {
  // Initialize state to manage the selected value
  const [selectedOption, setSelectedOption] = useState("");
  const [options,setOptions]=useState([])

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  let recievedCars=[];
  const getCars =useCallback( async () => {
    const cars = await axios.get("http://localhost:3000/cars", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      credentials: "include",
    });
    // console.log(cars.data)
    recievedCars=cars.data;
    setOptions(cars.data);
    return cars.data;
  },[])
  useEffect(() => {
     recievedCars=getCars();
  }, []);
  let flag = 0;
  if (props.label === "Model") flag = 1;
  else if (props.label === "Year") flag = 2;
  return (

    <div>
      <h2>{props.Label}</h2>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        {options.map((car) => {
          if (flag === 0) {
            return <option key={car.id} value={car.Make}>{car.Make}</option>;
          } else if (flag === 1) {
            return <option key={car.id} value={car.Model}>{car.Model}</option>;
          }
          return <option key={car.id} value={car.Year}>{car.Year}</option>;
        })}
      </select>
      {props.onSelect(selectedOption)}
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default DropdownSelector;
