import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { Navigate, useLocation, Navigatet, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AdminLogin =({ children, ...rest }) => {
    const { user,
        admin,
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

        user?.email&& admin ? children :
            <Navigate to="/"  state={{ path: location.pathname }}></Navigate>

    );
};

export default  AdminLogin;