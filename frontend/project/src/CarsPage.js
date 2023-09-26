import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/cars') 
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <h3>{car.name}</h3>
            <p>{car.title}</p>
            <img src={car.image} alt={car.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
