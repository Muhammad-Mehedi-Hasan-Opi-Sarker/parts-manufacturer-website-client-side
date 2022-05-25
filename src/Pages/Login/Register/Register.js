import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div className='register mb-10'>
            <h1 className='text-primary text-3xl font-bold mb-10'>Register</h1>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /> <br />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /> <br />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /> <br />
            <button className="btn btn-active btn-primary">Register</button>
            <p>Already have a account? <span className='text-primary'><Link to='/login'>Login Please</Link></span></p>
        </div>
    );
};

export default Register;