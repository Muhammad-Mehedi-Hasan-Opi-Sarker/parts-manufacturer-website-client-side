import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
const ProductDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-primary'>You can choose Quantity</h1>
            <div className='px-12 mb-16 mt-16 gird justify-items-center lg:ml-24'>
                <div className="card card-compact w-fit bg-base-100 shadow-xl">
                    <figure><img style={{ height: '300px', width: '300px' }} src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <h4 className='text-2xl'>Available Quantity: {product.availableQuantity}</h4>
                        <h4 className='text-2xl'>Price: {product.price}</h4>
                    </div>
                </div>
                <form>
                    <label >Name </label>
                    <input type="text" name="name" placeholder='Name' value={user?.displayName} required className="input input-bordered w-full max-w-xs mb-3 mt-12" /> <br />
                    <label>Email </label>
                    <input type="email" name="email" placeholder='Enter Email' value={user?.email} required className="input input-bordered w-full max-w-xs mb-3" /> <br />
                    <label>Phone </label>
                    <input type="number" name="phone" placeholder='Phone Number' value={user?.phone} required className="input input-bordered w-full max-w-xs mb-3" /> <br />
                    <label>Address </label>
                    <input type="text" name="address" placeholder='Enter Address' value={user?.address} required className="input input-bordered w-full max-w-xs mb-3" /> <br />
                    <label>Order Quantity</label>
                    <select name='order' className="select select-bordered w-full max-w-xs m-3">
                        <option>500</option>
                        <option>650</option>
                        <option>1000</option>
                        <option>2000</option>
                    </select> <br />
                    <input className='btn btn-primary' type="submit" value="Submit" /> <br />
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;