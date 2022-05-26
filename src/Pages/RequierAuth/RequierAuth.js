import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
const RequierAuth = ({children}) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth);

    if(loading){
        return <button class="btn btn-square loading"></button>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
    
};

export default RequierAuth;