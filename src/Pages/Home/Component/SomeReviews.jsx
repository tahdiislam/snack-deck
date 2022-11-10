import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SomeReviewCard from './SomeReviewCard';

const SomeReviews = () => {
    const [reviews, setReviews] = useState([])

    // load 3 review 
    useEffect(() => {
        axios.get("https://assignment-11-two.vercel.app/limitedReviews?limit=3")
            .then(res => setReviews(res.data.result))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="divider text-xl md:text-3xl font-semibold text-amber-900 my-8">Some reviews of my foods</div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        reviews.map(review => <SomeReviewCard key={review._id} review={review} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SomeReviews;