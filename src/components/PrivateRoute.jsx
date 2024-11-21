import React, { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(authContext)

  const location = useLocation()

  if(loading){
    return <h1 className='text-3xl font-bold'>Loading....... </h1>
  }

  if(!user){
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
  }

  return children
};

export default PrivateRoute;