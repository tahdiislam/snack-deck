import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { name, price, image, ratings, description, _id } = service;
    return (
        <div className="card w-96 glass">
            <figure>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')} >
                    <PhotoView src={image}>
                        <img src={image} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-amber-900">{name}</h2>
                <div className='flex justify-between'>
                    <h2 className="card-title">Price: $<span className='text-amber-900'>{price}</span></h2>
                    <h3 className="text-lg font-semibold flex items-center"><span className='mr-2'>Rating: {ratings}</span> <span className='text-yellow-400'>{ratings < 5 ? <FaStarHalfAlt /> : <FaStar />}</span></h3>
                </div>
                <p>{description.length > 100 ? <>{description.slice(0, 100)}...</> : description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/foods/${_id}`}><button className="btn btn-error">View details!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;