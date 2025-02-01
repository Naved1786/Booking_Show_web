import React, { useState } from "react";
import { FaTicketAlt, FaRecycle, FaBell, FaHome, FaCog, FaEnvelope, FaChartBar } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    doLogout(() => {
      navigate("/");
    });
  };

  return (
    <div className="w-48 h-100vh bg-gradient-to-b from-red-500 to-red-600 p-4 flex flex-col shadow-lg">
      {/* Profile Section */}
      <div className="flex flex-col items-center border-b pb-4">
        <img
          src="./images/profile-img.jpg"
          alt="Profile"
          className="rounded-full border-4 border-white w-16 h-16 mb-2"
        />
        <h2 className="text-white font-semibold text-sm">Lorem Ipsum</h2>
        <span className="text-white text-xs">Online</span>
      </div>
      
      {/* Navigation Links */}
      <nav className="mt-4">
        <ul className="space-y-3 text-white text-sm">
          <li className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaHome className="text-lg" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaChartBar className="text-lg" />
            <span>Chart</span>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaEnvelope className="text-lg" />
            <span>Message</span>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaCog className="text-lg" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      
      {/* Logout Button */}
      <div className="mt-auto pt-4 border-t">
        <button
          onClick={logout}
          className="w-full text-left flex items-center space-x-2 text-sm p-2 text-white hover:bg-red-700 rounded-lg cursor-pointer"
        >
          <FaRecycle className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  
  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  };

  if (isLoggedIn()) {
    return (
      <div className="flex h-screen bg-gray-100 pt-20">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-extrabold text-red-600 mb-6">Welcome, Mr Sarfraz</h1>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Booking Stats Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Upcoming Bookings</h2>
                <p className="text-gray-500">You have 3 upcoming bookings</p>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-full">
                <FaTicketAlt className="text-2xl" />
              </div>
            </div>

            {/* Ticket Stats Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Tickets Available</h2>
                <p className="text-gray-500">You have 5 tickets available for resale</p>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-full">
                <FaRecycle className="text-2xl" />
              </div>
            </div>

            {/* Notifications Stats Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
                <p className="text-gray-500">No new notifications</p>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-full">
                <FaBell className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/LoginPage" />;
  }
};

export default Dashboard;
