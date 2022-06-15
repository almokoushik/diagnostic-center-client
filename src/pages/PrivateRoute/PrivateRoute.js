import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { Navigate, useLocation, Navigatet, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute =({ children, ...rest }) => {
    const { user,
        registerUser,
        loginUser,
        logoutUser,
        loading } = useAuth()
        const location = useLocation()  
        console.log(user)
        console.log(children)
        console.log(rest)
        console.log(location)
    return (
        // replace
        // {user?.email?&& console.log(user.email)}

        user?.email ? children :
            <Navigate to="/login"  state={{ path: location.pathname }}></Navigate>

    );
};

export default PrivateRoute;