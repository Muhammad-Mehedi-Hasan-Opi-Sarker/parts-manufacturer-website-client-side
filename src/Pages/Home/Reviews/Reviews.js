import React from 'react';
import './Reviews.css';
import picture1 from '../../../picture/reviews/picture12.jpg'
import picture2 from '../../../picture/reviews/picture13.jpg';
import picture11 from '../../../picture/reviews/picture11.jpg';
import picture4 from '../../../picture/reviews/picture4.jpg';
import picture5 from '../../../picture/reviews/picture5.jpg';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const Reviews = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        toast("Thank's for sent email and phone number")
    };
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
            </div>
            <div className="mt-16 mb-16">
                <h1 className='text-2xl font-bold mb-5'>Get our latest news and special sales</h1>
                <p className='mb-5'>You may unsubscribe at any moment. For that purpose, please
                    find our contact info in the legal notice.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} type="number" placeholder="Your Phone" className="input input-bordered input-primary w-full max-w-xs mb-2" /> <br />
                    <input {...register("secondName")} type="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs mb-2" /> <br />
                    <input className='btn btn-primary' type="submit" value={'Submit'} />
                </form>
            </div>
        </div>
    );
};

export default Reviews;