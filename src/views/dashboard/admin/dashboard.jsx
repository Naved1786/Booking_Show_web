import React from 'react';
import { FaUsers, FaFilm, FaTicketAlt, FaChartBar, FaCog, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>  {/* Main Content */}
    <main className="flex-1 p-6 overflow-y-auto">
      <h1 className="text-3xl font-extrabold text-red-600 mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
            <p className="text-3xl font-bold text-red-500">120</p>
          </div>
          <div className="bg-red-500 text-white p-3 rounded-full">
            <FaUsers className="text-xl" />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Movies Uploaded</h2>
            <p className="text-3xl font-bold text-red-500">45</p>
          </div>
          <div className="bg-red-500 text-white p-3 rounded-full">
            <FaFilm className="text-xl" />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Active Tickets</h2>
            <p className="text-3xl font-bold text-red-500">80</p>
          </div>
          <div className="bg-red-500 text-white p-3 rounded-full">
            <FaTicketAlt className="text-xl" />
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            <li className="border-b py-2 flex justify-between items-center">
              <span className="text-gray-700">Added a new movie 'Inception'</span>
              <span className="text-gray-500">11:00 AM</span>
            </li>
            <li className="border-b py-2 flex justify-between items-center">
              <span className="text-gray-700">Updated user details for 'John Doe'</span>
              <span className="text-gray-500">2:30 PM</span>
            </li>
          </ul>
        </div>
      </section>
    </main>

    </div>
  )
}

export default Dashboard