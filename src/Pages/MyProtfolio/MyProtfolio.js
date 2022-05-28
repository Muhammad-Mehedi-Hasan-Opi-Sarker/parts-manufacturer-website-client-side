import React from 'react';

const MyProtfolio = () => {
    return (
        <div className='px-12 grid lg:grid-cols-2 sm:grid-cols-1'>
            <div>
                <h4 className='text-2xl font-bold'>Name: Muhammad Mehedi Hasan</h4>
                <p>Email: opisarker99@gmail.com</p>
                <p>Education: HSC</p>
                <h4 className='text-2xl font-bold'>My Skill</h4>
                <ul>
                    <li>HTML</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>CSS3</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Reactjs</li>
                    <li>Nodejs</li>
                    <li>Mongodb</li>
                    <li>Express js</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-bold'>My Project</h2>
                <a href="https://sprightly-cranachan-d3a91e.netlify.app">https://sprightly-cranachan-d3a91e.netlify.app</a><br />
                <a href="https://beamish-salamander-1f2835.netlify.app">https://beamish-salamander-1f2835.netlify.app</a><br />
                <a href="https://stunning-gecko-edea49.netlify.app">https://stunning-gecko-edea49.netlify.app</a><br />
            </div>
        </div>
    );
};

export default MyProtfolio;