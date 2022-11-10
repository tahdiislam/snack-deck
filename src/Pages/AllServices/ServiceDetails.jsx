import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewArea from './ReviewArea';

const ServiceDetails = () => {
    const { user } = useContext(UserContext)
    const food = useLoaderData()
    const { name, _id, image, ratings, price, description } = food.service;
    // set title
    useTitle(`${name} Details`)
    
    // handle order food
    const handleOrder = () => {
        toast.success("Ordered Successfully")
    }
    return (
        <div className='mx-3 md:mx-auto'>
            <div className='rounded-lg shadow-lg w-full md:w-2/3 bg-red-50 mx-auto p-4 my-4'>
                <img className='w-full rounded-md' src={image} alt="food image" />
                <h2 className='text-5xl font-semibold my-4 ml-3 text-amber-900'>{name}</h2>
                <div>
                    <h3 className='text-2xl fond-semibold my-4'>Price: <span className='text-amber-900 text-4xl fond-semibold'>${price}</span></h3>
                    <h3 className='text-2xl fond-semibold my-4 flex items-center'><span className='mr-2'>Ratings:</span> <span className='text-amber-900 text-4xl fond-semibold flex items-center'> <span className='mr-2 text-amber-400'>{ratings < 5 ? <FaStarHalfAlt /> : <FaStar />}</span> <span>{ratings}</span></span></h3>
                </div>
                <p className='text-lg '>
                    {description}
                </p>
                <button onClick={handleOrder}  className='btn btn-error my-3'>Order Now</button>
            </div>
            <div className='rounded-lg shadow-lg w-full bg-red-100 mx-auto p-4 my-4'>
                <ReviewArea/>
            </div>
        </div>
    );
};

export default ServiceDetails;