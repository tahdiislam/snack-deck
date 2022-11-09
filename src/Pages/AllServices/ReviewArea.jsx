import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Context/AuthProvider';
import ReviewCard from './ReviewCard';

const ReviewArea = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(UserContext)
    const food = useLoaderData()
    const { name, _id, image } = food.service;
    // const { displayName, email, photoURL } = user

    // add review handler 
    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target
        const reviewText = form.reviewText.value;
        const date = new Date().toLocaleDateString();
        const reviewDetails = {
            userName: user?.displayName,
            email: user?.email,
            reviewerPhoto: user?.photoURL,
            food_id: _id,
            date,
            reviewText,
            name, 
            image
        }

        // post review to server
        axios.post("http://localhost:5000/reviews", reviewDetails)
            .then(res => {
                toast.success("Review added successfully")
                const newReviews = [...reviews, reviewDetails]
                setReviews(newReviews)
                form.reset()
            })
            .catch(err => console.log(err))
    }

    // get previous review 
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews/${_id}`)
            .then(data => setReviews(data.data.result))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h3 className='text-2xl font-semibold text-center my-4'>{name}'s Review</h3>
            {!user?.uid ? <>
                <div className='flex flex-col items-center my-4'>
                    <p className='text-lg font-semibold text-amber-900'>Please login to add a review.</p>
                    <Link to="/login" className='my-3'>
                        <button className='btn btn-error'>Login</button>
                    </Link>
                </div>
            </> : <>
                <div>
                    <form onSubmit={handleAddReview} className="flex flex-col items-center">
                        <textarea name='reviewText' className="textarea textarea-error rounded w-2/3 md:w-1/3" placeholder="write your review" required></textarea>
                        <button type="submit" className='btn my-4 btn-error'>Add Review</button>
                    </form>
                </div>
            </>
            }
            <div className='my-4'>
                <h3 className='text-3xl font-semibold text-center'>{reviews.length} reviews found</h3>
                <div className="divider"></div>
                <section className="my-8text-gray-800">
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                        {
                            reviews.map(review => <ReviewCard key={review._id} review={review} />)
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReviewArea;