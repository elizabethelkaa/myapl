import React from 'react'

const EditableRow = () => {
  return (
   <tr>
       <td>
           <input
           type="text"
           required="required"
           placeholder="Enter a car..."
           name="Name"
          ></input> 
       </td>
       <td>
           <input
           type="text"
           required="required"
           placeholder="Enter a price..."
           name="Price"
          ></input> 
       </td>
   <td>
           <input
           type="text"
           required="required"
           placeholder="Enter a year..."
           name="Year"
          ></input> 
       </td>
   <td>
           <input
           type="text"
           required="required"
           placeholder="Enter a model..."
           name="Model"
          ></input> 
       </td>
  
</tr>
  );
};

export default EditableRow;