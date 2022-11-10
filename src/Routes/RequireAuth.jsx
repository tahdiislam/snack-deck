import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthProvider';

const RequireAuth = ({ children }) => {
    const { user, loading } = useContext(UserContext)
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center my-56'>
            <div className="w-12 h-12 border-4 border-dotted rounded-full animate-spin border-rose-400"></div>
        </div>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default RequireAuth;