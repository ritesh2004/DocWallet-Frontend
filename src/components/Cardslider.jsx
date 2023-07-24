import React from 'react';
import Slider from 'react-slick';
import './Cardslider.css'
import { Typography } from '@mui/material';
import Card from './Card';

function Cardslider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className='slider-section' style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', padding: '20px', background: 'conic-gradient(from -.5turn at bottom right, deeppink, cyan, rebeccapurple)' }}>
            <div className="slider-con">
                <Typography variant='h5' sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                    Available Documents
                </Typography>
                <div className="cardslider">
                    <Slider {...settings}>
                        <div>
                            <Card name="ABC ID" color="blue" />
                        </div>
                        <div>
                            <Card name="PAN CARD" color="yellow" />
                        </div>
                        <div>
                            <Card name="VOTER CARD" color="purple" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Cardslider