import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewTableRow from './ReviewTableRow';

const MyReviews = () => {
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    // set title
    useTitle("My Reviews")
    const { user, logOut } = useContext(UserContext)
    // console.log(user);
    // load reviews by email
    useEffect(() => {
        fetch(`https://assignment-11-two.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then(res => {
                // console.log(res)
                if (res.status === 403 || res.status === 401) {
                    logOut()
                } else {
                    return res.json()
                }
            })
            .then(data => {
                setReviews(data?.result)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    if (loading) {
        return <div className='flex justify-center my-56'>
            <div className="w-12 h-12 border-4 border-dotted rounded-full animate-spin border-rose-400"></div>
        </div>
    }

    // if no review found
    if (!reviews?.length) {
        return (
            <div style={{ height: "55vh" }} className="flex items-center justify-center">
                <h1 className='text-4xl font-bold text-amber-900'>No reviews were added</h1>
            </div>
        )
    }
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
                                reviews.map(review => <ReviewTableRow key={review._id} review={review} reviews={reviews} setReviews={setReviews} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;