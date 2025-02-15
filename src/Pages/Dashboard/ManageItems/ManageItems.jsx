import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/UseMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, ,refetch] = useMenu();
    const axiosSecure = UseAxiosSecure();
    

    const handleUpdate = item => {
        
    }
    const handleDelete = item => {
        console.log("Deleting item  ID:", item._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
              if (result.isConfirmed) {
                  const res = await axiosSecure.delete(`/menu/${item._id}`)
                  console.log(res.data)
                if (res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text:`${item.name} has been deleted.`,
                    icon: "success"
                  });
             }
            }
          });
    }      
    return (
        <div>
            <SectionTitle heading={"Manage ALl Items"} subHeading={"Hurry Up"}></SectionTitle>
             <div className="card bg-white  rounded-xs w-9/12 py-8 mx-auto">
                    <div className="flex mx-16 items-center">
                      <h2 className="text-3xl font-semibold font-Cinzel">
                        Total Items : {menu.length}
                      </h2>
                    
                    </div>
            
                    <div className="overflow-x-auto my-8 mx-16">
                      <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden">
                        {/* head */}
                        <thead className="bg-[#fb923c] text-white text-left uppercase">
                          <tr className="rounded-t-xl">
                            <th className="px-6 py-4 rounded-tl-lg">#</th>
                            <th className="px-6 py-4">Image</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4 text-center ml-10 ">Action</th>
                            <th className="px-6 py-4 text-center ml-10 rounded-tr-lg">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {menu.map((item, index) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                              <th className="px-6 py-4">{index + 1}</th>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                      <img src={item.image} alt={item.name} />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">{item.name}</td>
                              <td className="px-6 py-4">${item.price}</td>
                              <td className="px-6 py-4">
                               <Link to={`/dashboard/updateItem/${item._id}`}>
                               <button onClick={() => handleUpdate(item)} className="w-10 h-10  grid items-center justify-center cursor-pointer text-red-500 ml-10"><FaEdit size={18}></FaEdit></button>
                               </Link>
                              </td>
                              <td className="px-6 py-4">
                                <button onClick={() => handleDelete(item)} className="w-10 h-10  grid items-center justify-center cursor-pointer text-red-500 ml-10"><FaTrash size={18}></FaTrash></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
        </div>
    );
};

export default ManageItems;