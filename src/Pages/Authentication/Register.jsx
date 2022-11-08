import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import cookingImg from '../../assets/cooking.png';
import { UserContext } from '../../Context/AuthProvider';

const Register = () => {
    const { createUserEmailPass } = useContext(UserContext)

    // form submit handler
    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // create user with email and password
        createUserEmailPass(email, password)
        .then(result => {
            toast.success("Account created successfully.")
        })
        .catch(err => {
            toast.error(err.message.split("Firebase:").join("").split("(").join("").split("-").join(" ").split("auth/").join("").split(")").join(""))
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 relative">
                <div className='absolute'>
                    <img src="" alt="" />
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-full  md:w-1/2">
                        <img src={cookingImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <h1 className='text-center text-3xl font-bold text-amber-900'>Login Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-error">Login</button>
                            </div>
                        </form>
                        <p className='text-center mb-3 font-semibold'><span>Already have an account? <Link className='text-amber-800 underline hover:no-underline' to="/login">Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;