import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })

const handleMakeAdmin = (user) =>{
fetch(`http://localhost:5000/users/admin/${user._id}`, {
  method: 'PATCH'
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data.modifiedCount > 1){
    refetch()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${user.name} is an Admin Now!`,
      showConfirmButton: false,
      timer: 1500
    })
  }
})
}

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | AllUsers</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users?.map((user, index) => <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === 'admin' ? 'admin' : 
                  <button onClick={() => handleMakeAdmin(user)} className="btn text-2xl text-orange-400 btn-ghost btn-xs">
                      <FaUserShield></FaUserShield>
                    </button>
                  }</td>
                  <td>
                    <button onClick={() => handleDelete(user._id)} className="btn text-2xl text-orange-400 btn-ghost btn-xs">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>)
              }




            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;