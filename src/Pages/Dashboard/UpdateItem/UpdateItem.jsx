import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { FaUtensils } from 'react-icons/fa';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const item = useLoaderData();
    const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    const imageFile = {image : data.image[0]}
    const res =  await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        "Content-Type": "multipart/form-data"
      }
    })
    if(res.data.success){
      const menuItem = {
        name : data.name,
        recipe : data.recipe,
        price : parseFloat(data.price),
        category : data.category,
        image : res.data.data.display_url
      }
      const menuRecipe = await axiosSecure.patch(`/menu/${item._id}`,menuItem);
      console.log(menuRecipe.data)
      if(menuRecipe.data.modifiedCount > 0){
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Item Updated Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data)
  };
    return (
        <div>
            <SectionTitle heading={"update Menu Item"} subHeading={"Refresh Info"}></SectionTitle>
             <div className="w-9/12 mx-auto bg-gray-200 rounded-md">
                    <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text font-medium text-xl">Recipe name*</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Recipe Name"
                          defaultValue={item.name}
                          {...register("name",{required:true})}
                          className="input input-bordered w-full rounded-md"
                        />
                      </label>
                     <div className="flex flex-col md:flex-row gap-8 justify-center items-center my-4">
                     <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text font-medium text-xl">Category*</span>
                        </div>
                        <select
                          {...register("category",{required:true})}
                          defaultValue={item.category}
                          className="select select-bordered w-full rounded-md"
                        >
                          <option disabled >
                            Select a Category
                          </option>
                          <option value="salads">Salad</option>
                          <option value="dessert">Dessert</option>
                          <option value="drinks">Drinks</option>
                          <option value="soup">Soup</option>
                          <option value="pizza">Pizza</option>
                        </select>
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text font-medium text-xl">Price*</span>
                        </div>
                        <input
                          type="number"
                          {...register("price",{required:true})}
                          defaultValue={item.price}
                          placeholder="Select Price"
                          className="input input-bordered w-full rounded-md"
                        />
                      </label>
                     </div>
                      <label className="form-control w-full">
                        <div className="label"> 
                          <span className="label-text font-medium text-xl">Recipe Details*</span>
                        </div>
                        <textarea
                          placeholder="Recipe Details"
                          {...register("recipe" ,{required:true})}
                          defaultValue={item.recipe}
                          className="textarea textarea-bordered textarea-lg w-full h-[150px] rounded-md"
                        ></textarea>
                      </label>
                      <input type="file" {...register("image",{required:true})}   className="file-input w-full max-w-xs mt-4" /> <br />
            
                      {/* <input  type="submit" /> */}
                      <button   className="px-8 rounded-md my-4 py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold flex justify-center items-center gap-2">Add Item <FaUtensils /> </button>
                    </form>
                  </div>
        </div>
    );
};

export default UpdateItem;