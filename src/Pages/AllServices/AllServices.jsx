import React, { useEffect, useState } from 'react';
import Service from '../Home/Component/Service';

const AllServices = () => {
    const [services, setServices] = useState([])
    
    // load services
    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
            .then(data => setServices(data.storedServices))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-amber-900 text-center my-4'>Total {services.length} Home made Dishes</h2>
            <div className='w-full px-4 flex justify-center'>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;