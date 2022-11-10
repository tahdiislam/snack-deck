import axios from 'axios';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cookingImg from '../../assets/cooking.png';
import { UserContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const googleProvider = new GoogleAuthProvider()

const Login = () => {
    // set title 
    useTitle("Login")
    const { logInUser, providerSignIn } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    // form submit handler
    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // login user with email and password
        logInUser(email, password)
            .then(res => {
                const user = res.user;
                const currentUser = {
                    email: user.email,
                }
                // email to the server and get the access token
                axios.post("https://assignment-11-two.vercel.app/jwt", currentUser)
                    .then(res => {
                        localStorage.setItem("access-token", res.data.token)
                        toast.success("User log in successfully.")
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                toast.error(err.message.split("Firebase:").join("").split("(").join("").split("-").join(" ").split("auth/").join("").split(")").join(""))
            })
    }

    // sign In with google 
    const handleSignInWithGoogle = () => {
        providerSignIn(googleProvider)
            .then(res => {
                const user = res.user;
                const currentUser = {
                    email: user.email,
                }
                // email to the server and get the access token
                axios.post("https://assignment-11-two.vercel.app/jwt", currentUser)
                    .then(res => {
                        localStorage.setItem("access-token", res.data.token)
                        toast.success("User sign in successfully.")
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                toast.error(err.message.split("Firebase:").join("").split("(").join("").split("-").join(" ").split("auth/").join("").split(")").join(""))
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 relative">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-full  md:w-1/2">
                        <img src={cookingImg} alt="" />
                    </div>
                    <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <h1 className='text-center text-3xl font-bold text-amber-900'>Login Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-error">Login</button>
                            </div>
                        </form>
                        <div className="divider">Social Sign In</div>
                        <div className='flex justify-center mb-4'>
                            <button className='btn btn-ghost text-yellow-400 rounded-full tooltip tooltip-top tooltip-error' data-tip="Sign in with google" onClick={handleSignInWithGoogle}><FaGoogle className='text-2xl' /></button>
                        </div>
                        <p className='text-center mb-5 font-semibold'><span>New in SnackDeck? <Link className='text-amber-800 underline hover:no-underline' to="/register">Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;