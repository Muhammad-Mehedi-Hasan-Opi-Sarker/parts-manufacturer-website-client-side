import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews/Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
        
        </div>
       
    );
};

export default Home;