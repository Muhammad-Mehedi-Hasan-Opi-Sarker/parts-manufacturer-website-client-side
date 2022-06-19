import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://safe-tor-70644.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='lg:px-12 mb-32'>
            <h1>Review</h1>
            <div className='grid lg:grid-cols-3'>
            {
                reviews.map(review => <div class="card w-96 bg-base-100 shadow-xl mb-5">
                    <div class="card-body">
                        <h2 class="card-title">{review.customerName}</h2>
                        <p>{review.customerReview}</p>
                        <p>Ratting: <span>{review.rating}</span></p>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Review;