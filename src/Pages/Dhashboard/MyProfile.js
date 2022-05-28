import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import picture from '../../../src/picture/icon/profile1.png';
import edu from '../../../src/picture/icon/edu.png';
import email from '../../../src/picture/icon/email.png';
import location from '../../../src/picture/icon/location.png';
import phone from '../../../src/picture/icon/phone.png';
import link from '../../../src/picture/icon/linkden.png';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='mt-12 grid lg:grid-cols-2 sm:grid-cols-1'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center"><div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='mt-3 ml-3' style={{ height: '70px', width: '70px' }} src={picture} alt="" />
                    </div>
                </div>

                    <h2 className="card-title">{user?.displayName}</h2>
                    <div className='flex'>
                        <div><img style={{ height: '30px', width: '30px' }} src={email} alt="" /></div>
                        <div><p>Email: {user.email}</p></div>
                    </div>
                    <div className='flex'>
                        <div><img style={{ height: '30px', width: '30px' }} src={edu} alt="" /></div>
                        <div className='mr-16'><p>Education: </p></div>
                    </div>
                    <div className='flex'>
                        <div><img style={{ height: '30px', width: '30px' }} src={location} alt="" /></div>
                        <div className='mr-16'><p>Location:  </p></div>
                    </div>
                    <div className='flex'>
                        <div><img style={{ height: '30px', width: '30px' }} src={phone} alt="" /></div>
                        <div className='mr-16'><p>Phone Number:  </p></div>
                    </div>
                    <div className='flex'>
                        <div><img style={{ height: '30px', width: '30px' }} src={link} alt="" /></div>
                        <div className='mr-16'><p>Phone Number:  </p></div>
                    </div>

                </div>
            </div>
            <div className='text-2xl'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                    <h1>Update Your Profile</h1>
                    <input type="text" name='name' value={user.displayName} disabled placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="email" value={user.email} disabled placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Education" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Location or City" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="number" placeholder="Number" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Your Any Social Link" class="input input-bordered input-primary w-full max-w-xs" />
                    <input className='btn btn-primary' type="submit" value="UPDATE" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;