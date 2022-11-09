import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthProvider';

const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const {user} = useContext(UserContext)
    console.log(user);
    // load reviews by email
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews?email=tshdi60@gmail.com`)
        .then(res => {
            console.log(res)
            setReviews(res.data.result)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <h2>You have {reviews.length} reviews</h2>
        </div>
    );
};

export default MyReviews;