import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Context/AuthProvider';

const ReviewArea = () => {
    const { user } = useContext(UserContext)
    const food = useLoaderData()
    console.log(food);
    const { name, _id, image, ratings, price, description } = food.service;

    // add review handler 
    const handleAddReview = e => {
        e.preventDefault()
        const reviewText = e.target.reviewText.value;
        console.log(reviewText);
    }
    return (
        <div>
            <h3 className='text-2xl font-semibold text-center my-4'>{name}'s Review</h3>
            <div>
                <form onSubmit={handleAddReview} className="flex flex-col items-center">
                    <textarea name='reviewText' className="textarea textarea-error rounded w-2/3 md:w-1/3" placeholder="write your review" required></textarea>
                    <button type="submit" className='btn my-4 btn-error'>Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewArea;