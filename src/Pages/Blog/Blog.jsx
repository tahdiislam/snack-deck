import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    // set title 
    useTitle("Blogs")
    const blogs = useLoaderData()
    const {result} = blogs;
    // console.log(blogs);
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            Blog Section
                        </span>
                    </h2>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    {
                        result?.map(blog => <div className='border p-3 rounded bg-red-50 hover:bg-red-100' key={blog._id}>
                            <h3 className='text-3xl font-semibold text-amber-900 mb-3'>
                                {blog.question}
                            </h3>
                            <p className='text-justify'>
                                {blog.ans}
                            </p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;