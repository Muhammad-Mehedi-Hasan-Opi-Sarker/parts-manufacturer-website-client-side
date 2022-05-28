import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dhashboard = () => {
    return (
        <div className='px-12 mb-24'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-primary text-2xl font-bold'>Dhashboard</h1>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dhashboard'>Sidebar Item 1</Link></li>
                        <li><Link to='/dhashboard/myorder'>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dhashboard;