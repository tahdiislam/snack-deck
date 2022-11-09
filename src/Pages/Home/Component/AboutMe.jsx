import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className="divider mt-4 mb-8"><span className='text-xl font-medium text-amber-900'>About Me</span></div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="w-full md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-full md:w-1/2 px-8'>
                        <h1 className="text-5xl font-bold">Hello, I'm Aliz</h1>
                        <p className="py-6">I'm the chef of this cloud kitchen and also the owner of this kitchen. I provide you 100% fresh food. Food food are home made and healthy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;