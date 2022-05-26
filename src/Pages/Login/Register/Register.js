import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const handleRegister=event=>{
        event.preventDefault();
        const name = event.target.email.value;
        const email =event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(name,email,password);
    }
    if (user) {
        navigate('/home')
      }

    return (
        <div className='register mb-10'>
            <form onSubmit={handleRegister}>
                <h1 className='text-primary text-3xl font-bold mb-10'>Register</h1>
                <input type="text" name="name" required placeholder="Type Your Name" className="input input-bordered input-primary w-full max-w-xs" /> <br />
                <input type="email" name="email" required placeholder="Type Your Email" className="input input-bordered input-primary w-full max-w-xs" /> <br />
                <input type="password" name="password" placeholder="Type Your Password" className="input input-bordered input-primary w-full max-w-xs" /> <br />
                {/* <button className="btn btn-active btn-primary">Register</button> */}
                <input className='btn btn-active btn-primary' type="submit" value={'Register'} />
                <p>Already have a account? <span className='text-primary'><Link to='/login'>Login Please</Link></span></p>
            </form>
        </div>
    );
};

export default Register;