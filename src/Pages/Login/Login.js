import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='login mb-20'>
            <h1 className='text-primary text-3xl font-bold mb-10'>Login</h1>
            <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" /> <br />
            <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" /> <br />
            <button className="btn btn-active btn-primary">Button</button>
            <p>Already have a account? <span className='text-primary'><Link to='/register'>Register Please</Link></span></p>
        </div>
    );
};

export default Login;