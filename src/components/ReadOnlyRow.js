import React from 'react'

const ReadOnlyRow = ({ cars }) => {
  return (
    <tr>
    <td>{cars.Name}</td>
    <td>{cars.Price}</td>
    <td>{cars.Year}</td>
    <td>{cars.Model}</td>
  </tr>
  );
};

export default ReadOnlyRow;