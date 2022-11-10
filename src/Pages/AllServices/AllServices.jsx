import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Service from '../Home/Component/Service';

const AllServices = () => {
    const [loading, setLoading] = useState(true)
    //set title 
    useTitle("All foods")
    const [foods, setFoods] = useState([])
    // const foods = useLoaderData()
    const storedFoods = foods;
    // load services
    useEffect(() => {
        fetch("https://assignment-11-two.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setFoods(data.storedServices)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    // loader
    if (loading) {
        return <div className='flex justify-center my-56'>
            <div className="w-12 h-12 border-4 border-dotted rounded-full animate-spin border-rose-400"></div>
        </div>
    }
    return (
        <div className='mb-4'>
            <h2 className='text-3xl font-bold text-amber-900 text-center my-4'>Total {storedFoods.length} Home made Dishes</h2>
            <div className='w-full px-4 flex justify-center'>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        storedFoods.map(service => <Service key={service._id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;