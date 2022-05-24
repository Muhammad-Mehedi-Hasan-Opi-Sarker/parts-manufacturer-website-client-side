import React from 'react';

const Product = ({ product }) => {
    const { name, description, img, availableQuantity, minQuantity, price } = product;
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Product;