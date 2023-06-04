import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure()

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            }

          })


      }
    })
  }

  return (
    <div className='w-full'>
      <SectionTitle heading={'Manage All Items'} subHeading={'Hurry up'}></SectionTitle>
      <div className="overflow-x-auto">
        <h2>total Items: {menu.length}</h2>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>sl</th>
              <th>items</th>
              <th>category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              menu?.map((item, index) => <tr>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{item.category}</span>
                </td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs"><FaEdit></FaEdit></button>
                </th>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;