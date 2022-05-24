import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
           <h1>Our Cars Parts</h1>
           {
               products.map(product=><Product
               key={product._id}
               product={product}
               ></Product>)
           }
        </div>
    );
};

export default Products;