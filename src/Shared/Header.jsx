import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, logOut, setLoading } = useContext(UserContext)
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-foods">All Foods</Link></li>
        {
            !user?.uid ? undefined : <><li><Link to="/myreviews">My Reviews</Link></li>
                <li><Link to="/add-food">Add Food</Link></li></>
        }
        <li><Link to="/blogs">Blogs</Link></li>
    </>;

    // log out handler
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Log Out Successfully")
            })
            .catch(err => {
                toast.error(err.message.split("Firebase:").join("").split("(").join("").split("-").join(" ").split("auth/").join("").split(")").join(""))
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div style={{ height: "10vh" }} className="navbar bg-base-100 shadow-md rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars className="text-2xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="my-3 btn btn-ghost normal-case text-xl flex items-center"><img className='h-10 mr-2' src="/snackdeck-logo.png" alt="" /><span className='text-2xl'>Snackdeck</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user?.uid ? <><Link to="/login">
                        <button className="btn btn-error">Login</button>
                    </Link></> : <><button onClick={handleLogOut} className="btn btn-error">Log Out</button></>
                }
            </div>
        </div>
    );
};

export default Header;