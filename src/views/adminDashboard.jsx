import React from 'react';
import { FaUsers, FaFilm, FaTicketAlt, FaChartBar, FaCog, FaUserPlus } from 'react-icons/fa'; // Added FaUserPlus for 'Add New Admin'

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-xl text-red-500 border-b border-gray-200">
          Admin Panel
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <a href="#dashboard" className="text-gray-700 hover:text-red-500 font-medium">
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#manage-users" className="text-gray-700 hover:text-red-500 font-medium">
                Manage Users
              </a>
            </li>
            <li className="mb-4">
              <a href="#manage-movies" className="text-gray-700 hover:text-red-500 font-medium">
                Manage Movies
              </a>
            </li>
            <li className="mb-4">
              <a href="#manage-tickets" className="text-gray-700 hover:text-red-500 font-medium">
                Manage Tickets
              </a>
            </li>
            <li className="mb-4">
              <a href="#reports" className="text-gray-700 hover:text-red-500 font-medium">
                Reports
              </a>
            </li>
            <li className="mb-4">
              <a href="#settings" className="text-gray-700 hover:text-red-500 font-medium">
                Settings
              </a>
            </li>
            <li className="mb-4">
              <a href="#logout" className="text-gray-700 hover:text-red-500 font-medium">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
            Logout
          </button>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl font-bold text-red-500">120</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">Movies Uploaded</h2>
            <p className="text-3xl font-bold text-red-500">45</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">Active Tickets</h2>
            <p className="text-3xl font-bold text-red-500">80</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-md p-4">
            <ul>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>User John Doe purchased a ticket.</span>
                <span className="text-gray-500">2 hrs ago</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>New movie "Inception" added by Admin.</span>
                <span className="text-gray-500">1 day ago</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>User Sarah Lee requested a refund.</span>
                <span className="text-gray-500">3 days ago</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Admin Options */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Admin Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Option Cards */}
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-blue-500 hover:text-white transition-all">
              <FaUsers className="text-4xl" />
              <h3 className="text-lg font-semibold">Manage Users</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-green-500 hover:text-white transition-all">
              <FaFilm className="text-4xl" />
              <h3 className="text-lg font-semibold">Add New Movie</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-yellow-500 hover:text-white transition-all">
              <FaTicketAlt className="text-4xl" />
              <h3 className="text-lg font-semibold">Manage Tickets</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-purple-500 hover:text-white transition-all">
              <FaChartBar className="text-4xl" />
              <h3 className="text-lg font-semibold">View Reports</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-red-500 hover:text-white transition-all">
              <FaCog className="text-4xl" />
              <h3 className="text-lg font-semibold">Settings</h3>
            </div>
            {/* Add New Admin Card */}
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-teal-500 hover:text-white transition-all">
              <FaUserPlus className="text-4xl" />
              <h3 className="text-lg font-semibold">Add New Admin</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
