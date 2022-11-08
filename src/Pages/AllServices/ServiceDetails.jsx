import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const food = useLoaderData()
    console.log(food);
    const {name, _id, image, ratings, price, description} = food.service;
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;