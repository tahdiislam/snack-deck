import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthProvider';
import ReviewTableRow from './ReviewTableRow';

const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const {user} = useContext(UserContext)
    // console.log(user);
    // load reviews by email
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => {
            // console.log(res)
            setReviews(res.data.result)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-amber-900 my-4'>You have {reviews.length} reviews</h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Your Review</th>
                                <th>Edit <span className='text-xl'>/</span> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewTableRow key={review._id} review={review} reviews={reviews} setReviews={setReviews}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;