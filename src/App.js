import React, { useState }  from "react";
import "./App.css";
import data from "./mock-data.json";
import { observer } from "mobx";

const App = ()  => {

  const [cars, setCars] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: '',
    Price:'',
    Year:'',
    Model:''
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('Name');
    const fieldValue = event.target.value;

    const nerwformData = {...addFormData};
    nerwformData[fieldName] = fieldValue;
    


  }
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Year</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((cars) => (
          <tr>
            <td>{cars.Name}</td>
            <td>{cars.Price}</td>
            <td>{cars.Year}</td>
            <td>{cars.Model}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
      <h2>Add</h2>
      <form>
        <input 
        type="text" 
        name="Name"
        required="required"
        placeholder="Enter a name of car..."
        />
         <input 
        type="text" 
        name="Price"
        required="required"
        placeholder="Enter a price of car..."
        />
         <input 
        type="text" 
        name="Year"
        required="required"
        placeholder="Enter a year of car..."
        />
         <input 
        type="text" 
        name="Model"
        required="required"
        placeholder="Enter a model of car..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default App;
