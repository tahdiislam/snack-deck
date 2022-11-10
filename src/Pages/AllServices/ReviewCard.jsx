import React from 'react';
import reviewLogo from '/review-icon.png';

const ReviewCard = ({ review }) => {
    const { userName, email, reviewerPhoto, date, reviewText } = review;
    return (
        <div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                    <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                        <img className="w-6 h-6 text-fuchsia-600" src={reviewLogo} alt="" />{reviewText}
                        <img className="absolute right-0 w-6 h-6 text-fuchsia-600" src={reviewLogo} alt="" />
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-amber-800 text-gray-50">
                    <img src={reviewerPhoto} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                    <p className="text-xl font-semibold leading-tight">{userName}</p>
                    <p className="text-sm uppercase">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;