import axios from 'axios';
import React from 'react';

const ReviewTableRow = ({ review, reviews, setReviews }) => {
    const { name, reviewText, _id, image, date } = review;

    // delete review handler 
    const handleDeleteReview = _id => {
        // console.log(_id);
        const proceed = window.confirm("Are you sure you want to delete this review?")
        if (proceed) {
            axios.delete(`http://localhost:5000/reviews/${_id}`)
                .then(res => {
                    console.log(res.data)
                    const filteredReviews = reviews.filter(review => review._id !== _id)
                    const newReviews = [...filteredReviews]
                    setReviews(newReviews)
                })
                .catch(err => console.log(err))
        }

    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="avatar w-24">
                            <img className='rounded' src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className='h-auto w-32  whitespace-pre-wrap'>
                    {reviewText}
                </p>
            </td>
            <td>
                <div>
                    <button className="btn btn-success mr-1">Edit</button>
                    <button onClick={() => handleDeleteReview(_id)} className="btn btn-error">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default ReviewTableRow;