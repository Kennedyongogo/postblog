import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Importing necessary icons

// Sample car data
const cars = [
  { id: 1, name: 'Ford Mustang', type: 'Vintage', image: '/images/car-4445171_1280.jpg' },
  { id: 2, name: 'Beetle', type: 'Vintage', image: '/images/vw-beetle-405876_1280.jpg' },
  { id: 3, name: 'Nissan GTR', type: 'Vintage', image: '/images/opel-5190050_1280.jpg' },
  { id: 4, name: 'Convertible', type: 'Vintage', image: '/images/oldtimer-1197800_1280.jpg' },
  { id: 5, name: 'Ferrari', type: 'Sport', image: '/images/ferrari-721858_1280.jpg' },
  { id: 6, name: 'Lamborghini', type: 'Sport', image: '/images/lamborghini-4815249_1280.jpg' },
  { id: 7, name: 'BMW', type: 'Sport', image: '/images/bmw-4565066_1280.jpg' },
  { id: 8, name: 'Porsche', type: 'Sport', image: '/images/porsche-4795517_1280.jpg' }
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm)
  );

  return ( 
    <div className='cars'>
      <div className='search-container'>
        <div className='search-icon'>
          <input 
            type="text" 
            placeholder='Search Cars'  
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      
      <div className="image-container">
        <h1>Vintage Cars</h1>
        <div className="images-wrapper">
          {filteredCars.filter(car => car.type === 'Vintage').map(car => (
            <div className="image" key={car.id}>
              <img src={car.image} alt={car.name} />
              <h2>{car.name}</h2>
              <Link to={`/car/${car.id}`}>
                <button>View More Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='image-container'>
        <h1>Sport Cars</h1>
        <div className="images-wrapper">
          {filteredCars.filter(car => car.type === 'Sport').map(car => (
            <div className="image" key={car.id}>
              <img src={car.image} alt={car.name} />
              <h2>{car.name}</h2>
              <Link to={`/car/${car.id}`}>
                <button>View More Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;