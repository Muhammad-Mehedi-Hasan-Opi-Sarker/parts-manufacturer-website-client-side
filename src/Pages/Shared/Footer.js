import React from 'react';
import logo from '../../picture/logo/logo3.png';
const Footer = () => {
    return (
        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>As the leading dealer, we are confident that we will save you <br /> time and money.</p>
            </div>
            <div>
                <span className="footer-title ">Your Account</span>
                <a className="link link-hover text-base">Personal info</a>
                <a className="link link-hover text-base">Orders</a>
                <a className="link link-hover text-base">My cart</a>
                <a className="link link-hover text-base">Addresses</a>
            </div>
            <div>
                <span className="footer-title">Our Company</span>
                <a className="link link-hover text-base">Delivery Info</a>
                <a className="link link-hover text-base">Legal Notice</a>
                <a className="link link-hover text-base">About Us</a>
                <a className="link link-hover text-base">Contact Us</a>
            </div>
            <div>
                <span className="footer-title">Customer Service</span>
                <a className="link link-hover text-base">Monday to Friday</a>
                <a className="link link-hover text-base">10am - 6.30pm</a>
                <a className="link link-hover text-base"> (NewYork time) </a>
                <a className="link link-hover text-base">  +(001) 23 45 67 89 </a>
            </div>
            <div>
                <span className='footer-title'>Instagram</span>
            </div>
        </footer>
    );
};

export default Footer;