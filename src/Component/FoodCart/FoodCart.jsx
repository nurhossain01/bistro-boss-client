import React from 'react';

const FoodCart = ({ item }) => {
  const { image, name, price, recipe } = item;
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
            <button className="btn btn-outline border-0 border-b-4 bg-slate-200 border-orange-400">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;