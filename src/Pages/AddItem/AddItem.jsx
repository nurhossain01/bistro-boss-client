import React from 'react';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
const img_hosting_token=import.meta.env.VITE_Image_upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = data => {
    
    const formData = new FormData();
    formData.append('image', data.file[0]);
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name, price, category, recipe} = data;
        const newItems = {name, price: parseFloat(price), category, recipe, image:imgURL};
        axiosSecure.post('/menu', newItems)
        .then(data => {
          if(data.data.insertedId){
            Swal.fire({
              position: 'top-start',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        
      }
    })
  
  };
 

  return (
    <div>
      <div>
          <SectionTitle 
          heading={''}
          subHeading={''}
          ></SectionTitle>
      </div>
      <form className='bg-slate-400 p-10' onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Name*</label>
        <input className='w-full mb-4 p-2' defaultValue="" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <label>Recipe name*</label>
        <input className='w-full mb-4 p-2' defaultValue="" {...register("recipe", { required: true })} />
        {errors.recipe && <span>This field is required</span>}
        <div className='flex space-x-5'>
          <div className='w-full'>
            <label>Category name*</label>
            <select className='w-full py-4 px-2'  {...register("category")}>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="salad">Salad</option>
              <option value="drink">Drinks</option>
            </select>
          </div>
          <div className='w-full'>
            <label>Price*</label>
            <input type='number' className='w-full py-4 px-2' {...register("price", { required: true })} />
            {errors.price && <span>This field is required</span>}
          </div>
        </div>
        <div className='w-full pt-4'>
          <label>Text*</label>
          <textarea type='text' className='w-full h-36 px-2' {...register("description", { required: true })} />
          {errors.description && <span>This field is required</span>}
        </div>
        <div className='w-full pt-4'>
          <input type='file' className='w-full px-2' {...register("file", { required: true })} />
          {errors.file && <span>This field is required</span>}
        </div>
        <div className='flex justify-center pt-4'>
          <input className='btn w-full' value='Add Item' type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;