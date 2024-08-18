import React from 'react';
import './CityPhotos.css';

const cities = [
  { name: 'Iquitos', image: '/images/Iquitos.jpg' },
  { name: 'Amazonas', image: '/images/Amazonas.jpg' },
  { name: 'Nazca', image: '/images/Nazca.jpg' },
];

const CityPhotos = () => {
  return (
    <div className="city-photos">
      {cities.map((city, index) => (
        <div key={index} className="city-photo">
          <img src={city.image} alt={city.name} />
          <p>{city.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CityPhotos;