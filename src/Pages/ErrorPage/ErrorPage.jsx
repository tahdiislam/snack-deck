import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-red-200">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-amber-900 text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 text-gray-600">But don't worry, you can find plenty of other things on our homepage.</p>
                        <Link rel="noopener noreferrer" to="/"><button className="btn btn-error">Back to homepage</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;