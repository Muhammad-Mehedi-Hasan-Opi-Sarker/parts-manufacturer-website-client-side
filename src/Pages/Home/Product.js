import React from 'react';

const Product = ({ product }) => {
    const { name, description, img, availableQuantity, minQuantity, price } = product;
    return (
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img style={{height:'300px',width:'300px'}} src={img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3 className='text-xl'>Available Quantity: {availableQuantity}</h3>
                    <h3 className='text-xl'>Minimum Order Quantity: {minQuantity}</h3>
                    <h3 className='text-xl'>Price: {price}</h3>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">button</button>
                    </div>
                </div>
            </div>
    );
};
export default Product;