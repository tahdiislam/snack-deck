import React from 'react';

const Service = ({ service }) => {
    const {name, price, image, rating, description} = service;
    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Service;