import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ReviewTableRow = ({ review, reviews, setReviews }) => {
    const { name, reviewText, _id, image, date } = review;

    // delete review handler 
    const handleDeleteReview = _id => {
        // console.log(_id);
        const proceed = window.confirm("Are you sure you want to delete this review?")
        if (proceed) {
            axios.delete(`http://localhost:5000/reviews/${_id}`)
                .then(res => {
                    if(res.data.result.deletedCount)
                    {
                        toast.success("Review deleted successfully")
                        const filteredReviews = reviews.filter(review => review._id !== _id)
                        const newReviews = [...filteredReviews]
                        setReviews(newReviews)
                    }
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
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="avatar md:mr-2">
                            <div className="avatar w-20 md:w-24">
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')} >
                                    <PhotoView className="rounded" src={image}>
                                        <img src={image} style={{ objectFit: 'cover' }} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
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
                    <p className='h-auto w-20 md:w-36  whitespace-pre-wrap'>
                        {reviewText}
                    </p>
                </td>
                <td>
                    <div>
                        <label htmlFor={`my-modal-${_id}`} className="btn btn-success mr-1"><FaPen className='text-sm md:text-lg' /></label>
                        <button onClick={() => handleDeleteReview(_id)} className="btn btn-error"><FaTrashAlt className='text-sm md:text-lg'/></button>
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