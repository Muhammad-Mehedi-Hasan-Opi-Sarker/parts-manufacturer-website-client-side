import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myorder, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
        }
    }, [])
    return (

        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>My Product</th>
                        <th>Order Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myorder.map((my,index)=><tr>
                            <th>{index}</th>
                            <td>{my.customerName}</td>
                            <td>{my.customerEmail}</td>
                            <td>{my.productName}</td>
                            <td>{my.order}</td>
                        </tr>)
                    }
                    
                   
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;