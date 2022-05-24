import React from 'react';
import banner from '../../picture/pic5.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className='carousel carousel-center rounded-box mt-10'>
            <div className="carousel-item">
                <img src={banner} alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src={banner} alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src={banner} alt="Pizza" />
            </div>
        </div>
    );
};

export default Banner;