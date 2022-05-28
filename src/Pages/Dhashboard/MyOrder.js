import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] =useAuthState(auth);
    const [myorder,setOrder] = useState([]);
    useEffect(()=>{
        if (user) {
            fetch(`http://localhost:5000/booking?customerEmail=${user.email}`)
            .then(res=>res.json())
            .then(data=>setOrder(data))
        }
    },[])
    return (
        
        <div>
            <h1>My order {myorder?.length}</h1>
        </div>
    );
};

export default MyOrder;