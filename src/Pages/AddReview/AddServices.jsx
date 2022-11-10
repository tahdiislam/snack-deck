import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
    // set title 
    useTitle("Add New Food")

    // add service handler
    const handleAddService = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.foodName.value;
        const image = form.imgLink.value;
        const ratings = form.rating.value;
        const price = form.price.value;
        const description = form.foodDetails.value;

        const service = {
            name,
            image,
            ratings,
            price,
            description
        }
        // add food to server 
        axios.post("https://assignment-11-two.vercel.app/services", service)
            .then(res => {
                if (res.data.result.acknowledged) {
                    toast.success("Food added successfully")
                    form.reset()
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 className='text-amber-900 text-4xl font-bold text-center mb-3 mt-8'>Add a Food</h1>
            <form onSubmit={handleAddService} className="py-4 md:w-3/4 mx-2 md:mx-auto"><div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <input name="foodName" type="text" placeholder="Food Name" className="input input-bordered input-error w-full rounded" required />
                <input name='price' type="number" placeholder="Food price" className="input input-bordered input-error w-full rounded" required />
                <input name="imgLink" type="text" placeholder="Food image link" className="input input-bordered input-error w-full rounded" required />
                <input name="rating" type="text" placeholder="Food rating" className="input input-bordered input-error w-full rounded" required />
            </div>
                <textarea name="foodDetails" className="textarea textarea-error w-full rounded" placeholder="Food details" required></textarea>
                <div className='flex justify-center py-4'>
                    <input className='btn btn-error' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddServices;