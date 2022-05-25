import React from 'react';
import './Reviews.css';
import picture1 from '../../../picture/reviews/picture12.jpg'
import picture2 from '../../../picture/reviews/picture13.jpg';
import picture11 from '../../../picture/reviews/picture11.jpg';
import picture4 from '../../../picture/reviews/picture4.jpg';
import picture5 from '../../../picture/reviews/picture5.jpg';
import picture6 from '../../../picture/reviews/picture6.jpg';
import picture7 from '../../../picture/reviews/picture7.jpg';
import picture8 from '../../../picture/reviews/picture8.jpg';
import picture9 from '../../../picture/reviews/picture9.jpg';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Customers Says</h1>
            <div className='px-12 grid lg:grid-cols-5 sm:grid-cols-1 p-3'>
                <div style={{ width: '240px', height: '300px' }} className="card opi mb-3 w-96 bg-primary text-primary-content">
                    {/* avatar  */}
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture1} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Boris Jonson</h2>
                        <p>The products here are very good. They deliver the product very
                            quickly. I already buy the products. </p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture2} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Adam</h2>
                        <p>The products here are of very high quality. People in
                            my country love this company's products.</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture11} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Messi</h2>
                        <p>I import products to my country every year from now on.
                            The products here are very good</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture4} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Jonson</h2>
                        <p>The main carriers here are very good, and their products are
                            also very good. They can be trusted</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture5} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Harry Protal</h2>
                        <p>I import products to my country every year from now on.
                            The products here are very good poducts .</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture6} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Ronaldo</h2>
                        <p>I import products to my country every year from now on.
                            The products here are very good</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture6} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Deniel</h2>
                        <p>The products here are very good. They deliver the product very
                            quickly. I already buy the products.</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture7} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Robin</h2>
                        <p>The products here are of very high quality. People in
                            my country love this company's products.</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture8} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Yeadov</h2>
                        <p>I am very proud to work with them. They are v
                            ery careful about their products. That's why I b
                            uy products from their work</p>

                    </div>
                </div>
                <div style={{ width: '240px', height: '300px', padding: '9px' }} className="card opi w-96 bg-primary text-primary-content">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture9} alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Hasan</h2>
                        <p>The products of this company are of very high quality. I regular
                            ly buy these products from now on. You have to trust them</p>

                    </div>
                </div>
            </div>
            <div className="mt-16 mb-16">
                <h1 className='text-2xl font-bold mb-5'>Get our latest news and special sales</h1>
                <p className='mb-5'>You may unsubscribe at any moment. For that purpose, please 
                    find our contact info in the legal notice.</p>
                <input type="text" placeholder="Email Addres" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary ml-3">Get</button>
            </div>
        </div>
    );
};

export default Reviews;