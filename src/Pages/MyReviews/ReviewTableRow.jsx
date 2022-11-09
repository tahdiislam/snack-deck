import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

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

    // update review handler
    const handleUpdateReview = e => {
        e.preventDefault()
        const updatedReviewText = e.target.reviewText.value;
        // console.log(updatedReviewText);

        // update method
        axios.put(`http://localhost:5000/reviews/${_id}`, { updatedReviewText })
            .then(res => {
                if (res.data.result.modifiedCount) {
                    toast.success("Review updated successfully.")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
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
                        <label htmlFor={`my-modal-${_id}`} className="btn btn-success">Edit</label>
                        <button onClick={() => handleDeleteReview(_id)} className="btn btn-error">Delete</button>
                    </div>

                    <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor={`my-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2 btn-error">✕</label>
                            <h3 className="text-xl font-bold">{name}</h3>
                            <form onSubmit={handleUpdateReview}>
                                <textarea name="reviewText" className="textarea textarea-error rounded w-full my-4" placeholder="Your review" defaultValue={reviewText}></textarea>
                                <div className="modal-action">
                                    <button type='submit'><label htmlFor={`my-modal-${_id}`} className="btn btn-success">Update</label></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ReviewTableRow;