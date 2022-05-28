import React, { useState } from 'react';
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
    const [nameInForm, setNameInForm] = useState("");

    const handleUpdate =event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const link = event.target.link.value;
        setNameInForm(name,email,education,address,phone,link);
    }
    
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
                        <div className='mr-16'><p>Education:{nameInForm.education} </p></div>
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
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1>Update Your Profile</h1>
                        <form onSubmit={handleUpdate}>
                            <input type="text" name='name' value={user.displayName} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            <input type="email" name='email' value={user.email} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <input type="text" name='education' placeholder="Education" className="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <input type="text" name='address' placeholder="Location or City" className="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <input type="number" name='phone' placeholder="Number" className="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <input type="text" name='link' placeholder="Your Any Social Link" className="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <input className='btn btn-primary mt-2' type="submit" value="UPDATE" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;