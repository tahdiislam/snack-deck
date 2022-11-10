import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2  right-1 top-1/3">
                        <a href="#slide4" className="btn btn-circle btn-error mr-2"><FaArrowLeft/></a>
                        <a href="#slide2" className="btn btn-circle btn-error"><FaArrowRight/></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 right-1 top-1/3">
                        <a href="#slide1" className="btn btn-circle btn-error mr-2"><FaArrowLeft/></a>
                        <a href="#slide3" className="btn btn-circle btn-error"><FaArrowRight/></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 right-1 top-1/3">
                        <a href="#slide2" className="btn btn-circle btn-error mr-2"><FaArrowLeft/></a>
                        <a href="#slide4" className="btn btn-circle btn-error"><FaArrowRight/></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://plus.unsplash.com/premium_photo-1663840344687-a91e96693fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 right-1 top-1/3">
                        <a href="#slide3" className="btn btn-circle btn-error mr-2"><FaArrowLeft/></a>
                        <a href="#slide1" className="btn btn-circle btn-error"><FaArrowRight/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;