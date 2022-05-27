import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
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
            <div  className='px-12 mb-16 mt-16 gird justify-items-center lg:ml-32'>
                <div className="card card-compact w-fit bg-base-100 shadow-xl">
                    <figure><img style={{height:'300px',width:'300px'}} src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <h4 className='text-2xl'>Available Quantity: {product.availableQuantity}</h4>
                        <h4 className='text-2xl'>Price: {product.price}</h4>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;