import React from 'react';
import pic from '../../../picture/pic1.jpg';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className='gir mx-12 mb-8 p-10'>
            <div className='bottom'>
                <h4 className='text-base font-bold'>WELCOME!</h4>
                <h1 className='text-3xl font-bold'>ABOUT OUR</h1>
                <p>For 25 years, we raising the standard of used car retailing with one of the most
                    innovative and reliable used vehicle programmes ever created. A comprehensive
                    range of benefits as standard has evolved
                    over time and, today, drivers can leave the forecourt with total reassurance and
                    peace of mind.</p>
                    <button className='btn btn-primary mt-7'>Explore Now</button>
            </div>
            <div className='name'>
                <img src={pic} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;