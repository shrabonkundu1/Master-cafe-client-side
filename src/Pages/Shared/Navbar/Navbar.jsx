import React from "react";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Our Menu</a>
      </li>
      <li>
        <a>Our Shop</a>
      </li>
    </>
  );
  return (
    <div class="navbar bg-black bg-opacity-40 text-white fixed z-20  px-10">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a class="md:pl-10 text-3xl font-Dancing ">Master Cafe</a>
      </div>
      <div class="navbar-end hidden lg:flex font-bold">
        <ul class="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    
    </div>
  );
};

export default Navbar;
