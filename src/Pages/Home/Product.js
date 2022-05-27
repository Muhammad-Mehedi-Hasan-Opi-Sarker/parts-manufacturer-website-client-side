import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id,name, description, img, availableQuantity, minQuantity, price } = product;
    const navigate =useNavigate();
    const handleServiceDetails =id=>{
        navigate(`/product/${_id}`)
    }
        // navigate (`/product/${}`)
    return (
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure><img style={{height:'220px',width:'220px'}} src={img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3 className='text-xl'>Available Quantity: {availableQuantity}</h3>
                    <h3 className='text-xl'>Minimum Order Quantity: {minQuantity}</h3>
                    <h3 className='text-xl'>Price: ${price}</h3>
                    <div className="card-actions justify-end">
                        <button onClick={()=>{handleServiceDetails(_id)}} className="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
    );
};
export default Product;