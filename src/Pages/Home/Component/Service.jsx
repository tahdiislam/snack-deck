import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Service = ({ service }) => {
    const { name, price, image, ratings, description, _id} = service;
    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-amber-900">{name}</h2>
                <div className='flex justify-between'>
                    <h2 className="card-title">Price: $<span className='text-amber-900'>{price}</span></h2>
                    <h3 className="text-lg font-semibold flex items-center"><span className='mr-2'>Rating: {ratings}</span> <span className='text-yellow-400'>{ratings < 5 ? <FaStarHalfAlt /> : <FaStar />}</span></h3>
                </div>
                <p>{description.length > 100 ? <>{description.slice(0, 100)}...</> : description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-error">View details!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;