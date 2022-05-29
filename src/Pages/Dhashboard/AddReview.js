import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h1 className='text-2xl'>Wirte a review</h1>
            <input type="text" name='name' value={user.displayName} disabled placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs mb-3" /><br />
            <input type="text" name='review' placeholder="Write Your Comment" class="input input-bordered input-primary input-lg w-full max-w-xs mb-3" /><br />
            <input type="number" name='rating' placeholder="Rating here please" class="input input-bordered input-primary w-full max-w-xs mb-3" /><br />
            <input className='btn btn-primary w-80' type="submit" value={'Review Submit'} />
        </div>
    );
};

export default AddReview;