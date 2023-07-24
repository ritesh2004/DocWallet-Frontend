import React from 'react';
import Header from '../components/Header';
import './Homepage.css';
import Carousel from '../components/Carousel';
import Cardslider from '../components/Cardslider';
import Middlesection from '../components/Middlesection';
import Animatesec from '../components/Animatesec';
import Footer from '../components/Footer';

function Homepage() {
  
  return (
    <div className='home'>
        <Header/>
        <Carousel/>
        <Animatesec/>
        <Cardslider/>
        <Middlesection/>
        <Footer/>
    </div>
  )
}

export default Homepage;