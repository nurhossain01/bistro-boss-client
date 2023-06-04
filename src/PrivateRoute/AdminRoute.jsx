import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div className='flex justify-center'>
      <div className="w-20 h-20 my-96 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 bg-black"></div>
    </div>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;