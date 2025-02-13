import React from "react";
import {
  FaAddressBook,
  FaCalendar,
  FaHome,
  FaList,
  FaSafari,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaEarDeaf } from "react-icons/fa6";
import { GrAdd } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

  // Todo get admin value from the database : 
  const isAdmin = true;
  // const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 bg-orange-400 min-h-screen">
        <div className="py-10">
          <p className="md:pl-10 text-3xl font-Dancing  font-bold ">
            Master Cafe
          </p>
          <div className="border w-3/6 mr-[90px] mt-1 mx-auto border-black"></div>
          <p className="md:pl-10 text-3xl font-Dancing ">Restrurent</p>
        </div>
        <ul className="menu space-y-4">
          {
            isAdmin ?
             <>
            <li className="text-[18px] font-medium">
            <NavLink to={"/dashboard/adminHome"}>
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"/dashboard/addItems"}>
              <FaUtensils></FaUtensils> Add Items
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"/dashboard/manageItems"}>
              <FaSafari></FaSafari> Manage Items
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"/dashboard/users"}>
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>
        
            </> 
            :
            <>
            <li className="text-[18px] font-medium">
            <NavLink to={"/dashboard/userHome"}>
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"dashboard/reservation"}>
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"dashboard/paymentHistory"}>
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart> My Cart
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"dashboard/addReview"}>
              <GrAdd />
              Add Review
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"dashboard/booking"}>
              <FaList></FaList> My Booking
            </NavLink>
          </li>
            </>
          }

          {/* show all user and admin */}
          <div className="border  w-11/12"></div>
          <li className="text-[18px] font-medium">
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"/order/salad"}>
              <FaHome></FaHome> menu
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"/"}>
              <FaShoppingCart></FaShoppingCart> Shop
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to={"/"}>
              <FaEarDeaf></FaEarDeaf>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1  bg-slate-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
