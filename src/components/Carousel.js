import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  '/images/carru1.jpg',
  '/images/carru2.jpg',
  '/images/carru3.jpg',
  '/images/carru4.jpg',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt="Destinos" />
    </div>
  );
};

export default Carousel;