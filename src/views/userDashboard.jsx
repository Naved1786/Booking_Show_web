import React from 'react';
import { FaUser, FaFilm, FaTicketAlt, FaHistory, FaCog } from 'react-icons/fa';

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-xl text-red-500 border-b border-gray-200">
          User Dashboard
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <a href="#profile" className="text-gray-700 hover:text-red-500 font-medium">
                Profile
              </a>
            </li>
            <li className="mb-4">
              <a href="#my-bookings" className="text-gray-700 hover:text-red-500 font-medium">
                My Bookings
              </a>
            </li>
            <li className="mb-4">
              <a href="#upcoming-movies" className="text-gray-700 hover:text-red-500 font-medium">
                Upcoming Movies
              </a>
            </li>
            <li className="mb-4">
              <a href="#booking-history" className="text-gray-700 hover:text-red-500 font-medium">
                Booking History
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
          <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
            Logout
          </button>
        </header>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">Upcoming Bookings</h2>
            <p className="text-3xl font-bold text-red-500">2</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">Available Movies</h2>
            <p className="text-3xl font-bold text-red-500">12</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">Booking History</h2>
            <p className="text-3xl font-bold text-red-500">20</p>
          </div>
        </div>

        {/* User Options */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">User Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-blue-500 hover:text-white transition-all">
              <FaUser className="text-4xl" />
              <h3 className="text-lg font-semibold">View Profile</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-green-500 hover:text-white transition-all">
              <FaFilm className="text-4xl" />
              <h3 className="text-lg font-semibold">Browse Movies</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-yellow-500 hover:text-white transition-all">
              <FaTicketAlt className="text-4xl" />
              <h3 className="text-lg font-semibold">Book Tickets</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-purple-500 hover:text-white transition-all">
              <FaHistory className="text-4xl" />
              <h3 className="text-lg font-semibold">Booking History</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-md flex flex-col items-center justify-center text-center gap-4 hover:bg-teal-500 hover:text-white transition-all">
              <FaCog className="text-4xl" />
              <h3 className="text-lg font-semibold">Settings</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;
