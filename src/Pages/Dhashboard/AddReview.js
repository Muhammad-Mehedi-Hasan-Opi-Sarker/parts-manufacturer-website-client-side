import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleReview =event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const review = event.target.review.value;
        const rating = event.target.rating.value;
        console.log(name,review,rating);

        const reviews = {
            customerName: name,
            customerReview: review,
            rating: rating
        };
        fetch(`https://safe-tor-70644.herokuapp.com/review`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviews),
        })
            .then(response => response.json())
            .then(data => {
                toast('successfuly review')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h1 className='text-2xl'>Wirte a review</h1>
            <form onSubmit={handleReview}>
            <input type="text" name='name' value={user.displayName} disabled placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs mb-3" /><br />
            <input type="text" name='review' placeholder="Write Your Comment" class="input input-bordered input-primary input-lg w-full max-w-xs mb-3" /><br />
            <input type="number" name='rating' placeholder="Rating here please" class="input input-bordered input-primary w-full max-w-xs mb-3" /><br />
            <input className='btn btn-primary w-80' type="submit" value={'Review Submit'} />
            </form>
        </div>
    );
};

export default AddReview;