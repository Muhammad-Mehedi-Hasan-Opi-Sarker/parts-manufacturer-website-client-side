import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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
        console.log(email,password)
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        // navigate(from, { replace: true });
        navigate('/home')
    }
    return (
        <div className='login mb-20'>
            <h1 className='text-primary text-3xl font-bold mb-10'>Login</h1>
            <form onSubmit={handleSubmitLogin}>
            <input type="email" name='email' required placeholder="Type Email" className="input input-bordered input-primary w-full max-w-xs" /> <br />
            <input type="password" name='password' required placeholder="Type Password" className="input input-bordered input-primary w-full max-w-xs" /> <br />
            {errorElement}
            <input className='btn btn-active btn-primary' type="submit" value={'Login'} />
            </form>
            <p>No Account <span className='text-primary'><Link to='/register'>Register Please</Link></span></p>
        </div>
    );
};

export default Login;