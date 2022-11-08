import React from 'react';

const Services = () => {
    return (<div>
        <h1 className='text-5xl text-yellow-900 font-bold text-center my-4'>
            Hand make Foods
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative'>
            {/* <div className='absolute'>
                <img className='w-screen' style={{ height: "32rem" }} src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
            </div> */}
            <div className="card w-96 glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center py-4'>
            <button className='btn btn-primary'>See all food</button>
        </div>
    </div>);
};

export default Services;