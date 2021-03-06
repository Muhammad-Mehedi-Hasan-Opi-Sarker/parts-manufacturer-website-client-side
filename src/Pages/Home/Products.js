import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-tor-70644.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    
    return (
        <div className='mt-5 lg:px-12 p-5'>
            <h1 className='text-2xl font-bold mb-5'>Our Cars Parts</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;