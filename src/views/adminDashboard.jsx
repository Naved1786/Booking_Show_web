import React from 'react';
import { FaUsers, FaFilm, FaTicketAlt, FaChartBar, FaCog, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function AdminDashboard() {
  const navigate=useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="flex h-100vh bg-gray-100 pt-20">
      {/* Sidebar */}
      <aside className="w-56 bg-gradient-to-b from-red-500 to-red-600 p-6 pt-10 flex flex-col h-full shadow-lg">
        <div className="flex flex-col items-center border-b pb-4">
          <FaUserPlus className="text-white text-4xl mb-2" />
          <h2 className="text-white font-semibold">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-3 text-white">
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
              <FaChartBar className="text-lg" />
              <span className="text-base">Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
              <FaUsers className="text-lg" />
              <span className="text-base">Manage Users</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
              <FaFilm className="text-lg" />
              <span className="text-base">Manage Movies</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
              <FaTicketAlt className="text-lg" />
              <span className="text-base">Manage Tickets</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
              <FaChartBar className="text-lg" />
              <span className="text-base">Reports</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
              <FaCog className="text-lg" />
              <span className="text-base">Settings</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
              <FaUserPlus className="text-lg" />
              <button
                onClick={logout}>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
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
  );
}

export default AdminDashboard;