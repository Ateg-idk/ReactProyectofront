import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import CityPhotos from './components/CityPhotos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logomoni.png" alt="TRAVELING" className="logo" />
        <h1 className="title">MonkeyTravel</h1>
        <Menu />
      </header>

      <Carousel />
      <CityPhotos />
      <Testimonials />
      <Footer />
    </div>
    
  );
}

export default App;
