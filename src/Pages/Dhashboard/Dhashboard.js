import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dhashboard = () => {
    return (
        <div className='lg:px-12 mb-24'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-primary text-2xl font-bold'>Dhashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        <li><Link to='/dhashboard'>My Profile</Link></li>
                        <li><Link to='/dhashboard/myorder'>My Order</Link></li>
                        <li><Link to='/dhashboard/addreview'>Add Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dhashboard;