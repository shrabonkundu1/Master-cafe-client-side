import React from "react";
import UseCart from "../../../Hooks/UseCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const Cart = () => {
  const [cart,refetch] = UseCart();
  const axiosSecure = UseAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);


  const handleDelete = id => {
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
          axiosSecure.delete(`/carts/${id}`)
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
  }


  return (
    <div className="">
      <SectionTitle
        subHeading={"My Cart"}
        heading={"Wana add more"}
      ></SectionTitle>
      <div className="card bg-white  rounded-xs w-9/12 py-8 mx-auto">
        <div className="flex justify-around items-center">
          <h2 className="text-3xl font-semibold font-Cinzel">
            Total Orders : {cart.length}
          </h2>
          <h2 className="text-3xl font-semibold font-Cinzel">
            Total Price : ${totalPrice}
          </h2>
          <button className="btn btn-primary bg-[#fb923c] border-none text-white font-Cinzel">
            Pay
          </button>
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
                <th className="px-6 py-4 rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cart.map((item, index) => (
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
                    <button onClick={() => handleDelete(item._id)} className="w-10 h-10  grid items-center justify-center cursor-pointer text-red-500 ml-10"><FaTrash size={18}></FaTrash></button>
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

export default Cart;
