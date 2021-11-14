import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const { admin, loading } = useAuth();
    if (loading) {<CircularProgress style={{color: '#ff5a3c'}} />}
    return (
        <Route
            {...rest}
            render={({ location }) => admin ? children : <Redirect
            to={{
              pathname: "/admindashboard",
              state: { from: location }
            }}
            ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;