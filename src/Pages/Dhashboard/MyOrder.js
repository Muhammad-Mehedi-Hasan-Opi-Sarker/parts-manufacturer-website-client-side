import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const navigate = useNavigate();
    const [reload,setReload]= useState(false);
    const [user] = useAuthState(auth);
    const [myorder, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
        }
    }, [reload])

    const handleDelete =id=>{
        const proceed = window.confirm('Are you sure')
        if(proceed){
            const url = `http://localhost:5000/booking/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setReload(!reload);
            })
        }
    }
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myorder.map((my,index)=><tr>
                            <th>{index +1}</th>
                            <td>{my.customerName}</td>
                            <td>{my.customerEmail}</td>
                            <td>{my.productName}</td>
                            <td>{my.order}</td>
                            <td><Link to='/payment'><button className='btn bg-danger'>Payment</button></Link></td>
                            <td><button onClick={()=>handleDelete(my.customerEmail)} className='btn bg-danger'>Delete</button></td>
                        </tr>)
                    }
                    
                   
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;