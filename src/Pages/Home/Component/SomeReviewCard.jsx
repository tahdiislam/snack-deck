import React from 'react';
import reviewLogo from '/review-icon.png';

const SomeReviewCard = ({ review }) => {
    // console.log(review);
    const { name, reviewText, reviewerPhoto, userName } = review;
    return (
        <div className="flex">
            <div className="pt-1 mr-6 text-center">
                <img className='w-10' src={reviewLogo} alt="" />
            </div>
            <div>
                <div className="mb-2">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        {name}
                    </a>
                </div>
                <p className="mb-5 text-gray-700">
                    {reviewText}
                </p>
                <div className="flex items-center">
                    <span aria-label="Author" title="Author" className="mr-3">
                        <img
                            src={reviewerPhoto}
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </span>
                    <div>
                        <a
                            href="/"
                            aria-label="Author"
                            title="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {userName}
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SomeReviewCard;