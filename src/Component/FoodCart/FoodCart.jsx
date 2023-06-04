import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCart = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart(); //TODO comma

  const handleOrder = (orderItems) => {
    console.log(orderItems);
    if (user) {
      const orderMenu = {menuId:_id, name, price, image, recipe, email:user.email};
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(orderMenu)
      })
        .then(res => res.json())
        .then(data => {
         
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please Login Now',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: {from: location}}) //TODO...........
        }
      })
    }
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <p className='absolute right-0 mr-4 mt-4 px-4 bg-black text-white'>Price: {price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={() => handleOrder(item)} className="btn btn-outline border-0 border-b-4 bg-slate-200 border-orange-400">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;