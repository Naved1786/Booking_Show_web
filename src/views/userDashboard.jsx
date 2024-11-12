import React, { useState } from "react";
import { doLogout, isLoggedIn } from "../auth";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [login,setLogin] = useState(false);
  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  }
  if (isLoggedIn()) {
      return (
        <div className="flex h-screen bg-white pt-20">
          {/* Sidebar */}
          <div className="w-64 bg-red-500 p-6">
            <div className="flex justify-center items-center mb-8">
              <img
                src="./images/profile-img.jpg" // Placeholder for profile image
                alt="Profile"
                className="rounded-full border-4 border-white w-24 h-24"
              />
            </div>
            <nav>
              <ul className="space-y-6 text-white">
                <li>
                  <a href="#" className="text-xl hover:text-gray-300">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="text-xl hover:text-gray-300">Bookings</a>
                </li>
                <li>
                  <a href="#" className="text-xl hover:text-gray-300">Tickets</a>
                </li>
                <li>
                  <a href="#" className="text-xl hover:text-gray-300">Settings</a>
                </li>
                <li>
                  <p onClick={logout} className="text-xl cursor-pointer hover:text-gray-300">Logout</p>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold text-red-500 mb-4">Welcome to Mr Sarfraz</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Booking Stats Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl text-gray-700">Upcoming Bookings</h2>
                  <p className="text-gray-500">You have 3 upcoming bookings</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-full">
                  <i className="fas fa-ticket-alt"></i>
                </div>
              </div>

              {/* Ticket Stats Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl text-gray-700">Tickets Available</h2>
                  <p className="text-gray-500">You have 5 tickets available for resale</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-full">
                  <i className="fas fa-recycle"></i>
                </div>
              </div>

              {/* Notifications Stats Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl text-gray-700">Notifications</h2>
                  <p className="text-gray-500">No new notifications</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-full">
                  <i className="fas fa-bell"></i>
                </div>
              </div>
            </div>

            {/* Recent Activities Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ul>
                  <li className="border-b py-3 flex justify-between">
                    <span className="text-gray-700">Booked 'Avengers' on 12/11/2024</span>
                    <span className="text-gray-500">2:00 PM</span>
                  </li>
                  <li className="border-b py-3 flex justify-between">
                    <span className="text-gray-700">Resold 'Spider-Man' ticket on 10/11/2024</span>
                    <span className="text-gray-500">5:30 PM</span>
                  </li>
                  <li className="border-b py-3 flex justify-between">
                    <span className="text-gray-700">Booked 'Batman' on 09/11/2024</span>
                    <span className="text-gray-500">1:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
else {
    return <Navigate to={"/LoginPage"} />
  }
};

export default Dashboard;
