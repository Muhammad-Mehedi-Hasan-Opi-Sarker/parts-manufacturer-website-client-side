import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    //   code for error show
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    //   submit login file 

    const handleSubmitLogin = event => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='mb-32'>
            <h1 className='text-2xl text-primary font-bold mb-12'>Login</h1>
            <form onSubmit={handleSubmitLogin}>
                <input  type="email" name="email"  placeholder='Enter Email' required className="input input-bordered w-full max-w-xs mb-3" /> <br />
                <input type="password" name="password"  placeholder='Password' required className="input input-bordered w-full max-w-xs mb-3" /><br />
                {errorElement}
                <input className='btn btn-primary' type="submit" value="Submit" /> <br />
                <Link className='text-decoration-none' to={'/register'}>No account <span className='text-primary'>Register Please</span></Link>
            </form>
        </div>
    );
};

export default Login;