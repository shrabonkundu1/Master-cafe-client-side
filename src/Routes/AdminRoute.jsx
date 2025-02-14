import React from 'react';
import UseAdmin from '../Hooks/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const [isAdmin,isAdminLoading] = UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading) {
        return  <span className="loading loading-bars loading-lg"></span>
    }

    if(user && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
};

export default AdminRoute;