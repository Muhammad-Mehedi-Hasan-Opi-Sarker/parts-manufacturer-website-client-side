import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import picture from '../../../src/picture/icon/profile1.png';
import edu from '../../../src/picture/icon/edu.png';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center"><div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img className='mt-3 ml-3' style={{ height: '70px', width: '70px' }} src={picture} alt="" />
                </div>
            </div>

                <h2 className="card-title">{user?.displayName}</h2>
                <div className='grid grid-cols-5'>
                    <div><img style={{height:'30px',width:'30px'}} src={edu} alt="" /></div>
                    <div className='mr-16'><p>Education </p></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;