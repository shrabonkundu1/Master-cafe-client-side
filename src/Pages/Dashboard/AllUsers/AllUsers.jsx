import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();
    const {data:  users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });


     const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/users/${user._id}`)
              .then(res => {
                  console.log(res.data)
                if(res.data?.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
      };


      const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0 ){
                refetch()
                Swal.fire({
                    position: "center",
                    title: "Updated!",
                    text: "User Updated Successfully.",
                    icon: "success",
                    showConfirmButton:false,
                    timer:1500
                  });
            }
        })
      }


    return (
        <div className="">
        <SectionTitle
          subHeading={"All Users"}
          heading={"Manage All Users"}
        ></SectionTitle>
        <div className="card bg-white  rounded-xs w-9/12 py-8 mx-auto">
          <div className="flex justify-around items-center">
            <h2 className="text-3xl font-semibold font-Cinzel">
              Total Users : {users.length}
            </h2>
          </div>
  
          <div className="overflow-x-auto my-8 mx-16">
            <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden">
              {/* head */}
              <thead className="bg-[#fb923c] text-white text-left uppercase">
                <tr className="rounded-t-xl">
                  <th className="px-6 py-4 rounded-tl-lg">#</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4 rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={user._id} className="hover:bg-gray-100">
                    <th className="px-6 py-4">{index + 1}</th>
                    <td className="px-6 py-4">
                    <p>{user.name}</p>
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className=" ">
                     {
                        user.role === 'admin' ? 'Admin' :    <button onClick={() => handleMakeAdmin(user)} className='bg-[#fb923c] p-4 rounded-lg'><FaUsers className=' text-white ' size={20}></FaUsers></button>
                     }
                        </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDeleteUser(user)}  className="w-10 h-10  grid items-center justify-center cursor-pointer bg-red-500 text-white rounded-lg ml-10"><FaTrash size={18}></FaTrash></button>
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

export default AllUsers;