import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const navigate=useNavigate();
    let location =useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(loading){
        return <button class="btn btn-square loading"></button>
    }
    let errorElement;
    if (error) {
        errorElement= <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }
      if (user) {
        navigate(from, { replace: true });
      }

    return (
        <div>
            <div className='d-flex align-items-center ml-72 mr-72'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <div className='p-2'>or</div>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className="right-items mt-5">
                <button onClick={() => signInWithGoogle()} className='btn btn-secondary'><small>
                    Google Sing In</small></button>
            </div>
        </div>
    );
};

export default SocialLogin;