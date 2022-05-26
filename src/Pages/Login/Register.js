import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    // code for create password and email 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    // below code for onsubmit

    const handleRegister = event => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='mb-12'>
            <h1 className='text-2xl text-primary font-bold mb-12'>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name"  placeholder='Enter Name' required className="input input-bordered w-full max-w-xs mb-3" /> <br />
                <input type="email" name="email"  placeholder='Email' required className="input input-bordered w-full max-w-xs mb-3" /><br />
                <input type="password" name="password"  placeholder='Password' required className="input input-bordered w-full max-w-xs mb-3" /><br />
                {errorElement}
                <input type="submit" className='btn btn-primary' value={'Login'} />
                <p>Have Account <Link to='/login'><span className='text-primary'>Login Please</span></Link></p>
            </form>
        </div>
    );
};

export default Register;