import React, { useState } from "react";
import { FaUser, FaHome, FaFilm, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { doLogout } from "../auth";
import { useSelector } from "react-redux";

const UserSidebar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    doLogout(() => {
      navigate("/");
    });
  };

  return (
    <div className="w-56 bg-white p-6 pt-10 flex flex-col h-screen shadow-md border-r">
      {/* Profile Section */}
      <div className="flex flex-col items-center border-b pb-4">
        <img
          src={user?.image || "./images/dummy-img.jpg"}
          alt="Profile"
          className="rounded-full w-16 h-16 mb-2 border-2 border-gray-200 shadow"
        />
        <h2 className="text-gray-800 font-semibold">{user?.username}</h2>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors" 
              onClick={() => navigate("/userDashboard/userProfile")}>
            <FaUser className="text-gray-500" />
            <span className="text-base">Profile</span>
          </li>

          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors" 
              onClick={() => navigate("/useDashboard/dashboard")}>
            <FaHome className="text-gray-500" />
            <span className="text-base">Dashboard</span>
          </li>
          
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <FaFilm className="text-gray-500" />
            <span className="text-base">Movies</span>
          </li>
          
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <FaCalendarAlt className="text-gray-500" />
            <span className="text-base">Bookings</span>
          </li>
          
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <FaCog className="text-gray-500" />
            <span className="text-base">Settings</span>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-4 border-t">
        <button
          onClick={logout}
          className="w-full text-left flex items-center space-x-3 text-base p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
        >
          <FaSignOutAlt className="text-gray-500" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;