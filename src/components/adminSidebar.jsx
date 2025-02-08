import React from 'react';
import { FaUsers, FaFilm, FaTicketAlt, FaChartBar, FaCog, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/");
      };
    return (
        <div className='w-full'>
            {/* Sidebar */}
            <aside className="w-full bg-gradient-to-b from-red-500 to-red-600 p-6 pt-10 flex flex-col h-full shadow-lg">
                <div className="flex flex-col items-center border-b pb-4">
                    <FaUserPlus className="text-white text-4xl mb-2" />
                    <h2 className="text-white font-semibold">Admin Panel</h2>
                </div>
                <nav className="mt-4">
                    <ul className="space-y-3 text-white">
                        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer" onClick={() => navigate("/adminDashboard/dashboard")}>
                            <FaChartBar className="text-lg" />
                            <span className="text-base">Dashboard</span>
                        </li>
                        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
                            <FaUsers className="text-lg" />
                            <span className="text-base">Manage Users</span>
                        </li>
                        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer" onClick={() => navigate("/adminDashboard/movieList")}>
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
        </div>
    )
}

export default AdminSidebar