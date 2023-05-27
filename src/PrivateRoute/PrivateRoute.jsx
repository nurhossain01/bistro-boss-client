import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();

  if (loading) {
    return <div className='flex justify-center'>
      <div className="w-20 h-20 my-96 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 bg-black"></div>
    </div>
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;