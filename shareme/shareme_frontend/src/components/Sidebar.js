import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo.png"
import {RiH1, RiHomeFill} from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io';
import { categories } from "../utils/data";


const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const category = [
    {name: 'Animals'},
    {name: 'Wallpapers'},
    {name: 'Photography'},
    {name: 'Gaming'},
    {name: 'Coding'},
    {name: 'Others'}
]

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
    return (
        <div className="flex flex-col justify-between bg-white  overflow-y-scroll min-w-210 hide-scrollbar h-full shadow-md">
            <div className="flex flex-col">
                <Link to='/' className="flex px-5 gap-2 my-6 pt-1 w-170 items-center" onClick={handleCloseSidebar}>
                    <img src={logo} alt="logo" className="w-full" />
                </Link>
                <div className="flex flex-col gap-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                        onClick={handleCloseSidebar}
                    >
                        <RiHomeFill />
                        Home
                    </NavLink>
                    <h3>Discover Categories</h3>
                    {categories.map((cat)=>(
                        <NavLink
                        to={`/category/${cat.name}`}
                        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                        onClick={handleCloseSidebar}
                        key={cat.name}
                        >
                        <img src={cat.image} alt="pic" className="rounded-full w-8 h-8 shadow-sm" />
                        {cat.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user && (
        <Link
          to={`user-profile/${user?._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={user?.image} className="w-10 h-10 rounded-full" alt="user-profile" />
          <p>{user?.userName}</p>
          <IoIosArrowForward />
        </Link>
      )}
        </div>
    )
}

export default Sidebar;