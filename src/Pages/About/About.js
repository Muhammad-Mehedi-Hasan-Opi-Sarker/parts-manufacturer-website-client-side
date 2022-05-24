import React from 'react';
import pic from '../../picture/pic1.jpg';
const About = () => {
    return (
        <div className=''>
            <h4 className='text-base font-bold text-primary'>WELCOME!</h4>
                <h1 className='text-3xl font-bold text-primary'>ABOUT OUR</h1>
            <div className='gir mx-12 mb-8 p-10'>
            <div>
                
                <p>For 25 years, we raising the standard of used car retailing with one of the most
                    innovative and reliable used vehicle programmes ever created. A comprehensive
                    range of benefits as standard has evolved
                    over time and, today, drivers can leave the forecourt with total reassurance and
                    peace of mind.Our reputation rests equally on our creative design approach, as well
                    as our technica
                    l expertise and attention to detail to turn your visions into reality. We pride ourselv
                    es on delivering a proactive service designed to ensure we meet your needs consistently.
                    We monitor our service performance continuously to make sure customers consistently jud
                    ge us to be the benchmark within the industry. You are at the center of everything we do
                    and we look forward to helping you.
                    At Ambius we believe that its our people that make our company what it is and we have a gr
                    eat team built on a shared vision, mission, and values.We are passionate abo
                    ut our colleagues and customers. They are at the center of everything we do. 
                    We live by four actions that express how we feel abou
                    t our relationships …inspire, connect, engage and grow.</p>

            </div>
            <div className='name'>
                <img src={pic} alt="" />
            </div>
            </div>
        </div>
    );
};

export default About;