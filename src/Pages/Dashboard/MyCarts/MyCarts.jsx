import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const MyCarts = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:5000/carts/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch()
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
      <Helmet>
        <title>Bistro Boss | myCart</title>
      </Helmet>
      <div>
        <SectionTitle
          heading={"My Cart"}
          subHeading={"wanna add more?"}
        ></SectionTitle>
      </div>
      <div className='flex justify-evenly items-center pb-10 uppercase font-bold'>
        <h2>total cart items: {cart.length}</h2>
        <h2>Total price: ${total}</h2>
        <Link to='/dashboard/payment'><button className="btn btn-warning">Pay</button></Link>
      </div>
      <div>
        <div className="overflow-auto  w-full">
          <table className="table overflow-y-scroll w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                cart?.map((item, index) => <tr>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image && item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br />
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item._id)} className="btn text-2xl text-orange-400 btn-ghost btn-xs">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;