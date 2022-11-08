import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const food = useLoaderData()
    console.log(food);
    const { name, _id, image, ratings, price, description } = food.service;
    return (
        <div className='mx-3 md:mx-auto'>
            <div className='rounded-lg shadow-lg w-full md:w-2/3 bg-red-50 mx-auto p-4 my-4 '>
                <img className='w-full rounded-md' src={image} alt="food image" />
                <h2 className='text-5xl font-semibold my-4 ml-3 text-amber-900'>{name}</h2>
                <div>
                    <h3 className='text-2xl fond-semibold my-4'>Price: <span className='text-amber-900 text-4xl fond-semibold'>${price}</span></h3>
                    <h3 className='text-2xl fond-semibold my-4 flex items-center'><span className='mr-2'>Ratings:</span> <span className='text-amber-900 text-4xl fond-semibold flex items-center'> <span className='mr-2 text-amber-400'>{ratings < 5 ? <FaStarHalfAlt /> : <FaStar />}</span> <span>{ratings}</span></span></h3>
                </div>
                <p className='text-lg '>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceDetails;