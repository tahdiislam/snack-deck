import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    // load services from server
    useEffect(() => {
        fetch("https://assignment-11-two.vercel.app/services?limit=3")
            .then(res => res.json())
            .then(data => {
                setServices(data.storedServices)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    // return loader
    if (loading) {
        return <div className='flex justify-center my-56'>
            <div className="w-12 h-12 border-4 border-dotted rounded-full animate-spin border-rose-400"></div>
        </div>
    }

    return (<div className='bg-red-50'>
        <h1 className='text-5xl text-yellow-900 font-bold text-center my-4'>
            Hand make Foods
        </h1>
        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative'>
                {/* <div className='absolute'>
                <img className='w-screen' style={{ height: "32rem" }} src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
            </div> */}
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
        <div className='flex justify-center py-4'>
            <Link to="/all-foods">
                <button className='btn btn-error btn-outline'>See all food</button>
            </Link>
        </div>
    </div>);
};

export default Services;