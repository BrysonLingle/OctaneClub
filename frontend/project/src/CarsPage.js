import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ name: '', image: '', title: '' });

  useEffect(() => {
   
    axios.get('/getAllPosts') 
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const handleCreateCar = () => {
    axios.post('/createPost', newCar) 
      .then((response) => {
        setCars([...cars, response.data]);
        setNewCar({ name: '', image: '', title: '' });
      })
      .catch((error) => {
        console.error('Error creating a car:', error);
      });
  };

  const handleUpdateCar = (id) => {
    // Implement the logic to update a car (similar to create)
  };

  const handleDeleteCar = (id) => {
    // Implement the logic to delete a car
  };

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <h2>{car.name}</h2>
            <p>{car.title}</p>
            <img src={car.image} alt={car.name} />
            <button onClick={() => handleUpdateCar(car._id)}>Update</button>
            <button onClick={() => handleDeleteCar(car._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Create New Car</h2>
      <input
        type="text"
        placeholder="Name"
        value={newCar.name}
        onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newCar.image}
        onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
      />
      <input
        type="text"
        placeholder="Title"
        value={newCar.title}
        onChange={(e) => setNewCar({ ...newCar, title: e.target.value })}
      />
      <button onClick={handleCreateCar}>Create</button>
    </div>
  );
}

export default App;
