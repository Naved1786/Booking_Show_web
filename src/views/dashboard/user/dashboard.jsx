import React from 'react'
import { FaTicketAlt, FaRecycle, FaBell, FaHome, FaCog, FaEnvelope, FaChartBar, FaFilm, FaCalendarAlt } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../auth";



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
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-extrabold text-red-600 mb-4">User Dashboard</h1>

          {/* Booking Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Upcoming Bookings</h2>
                <p className="text-gray-500">You have 3 upcoming movie shows</p>
              </div>
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FaTicketAlt className="text-xl" />
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Available Movies</h2>
                <p className="text-gray-500">Check latest movie releases</p>
              </div>
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FaFilm className="text-xl" />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <ul>
                <li className="border-b py-2 flex justify-between items-center">
                  <span className="text-gray-700">Booked 'Avengers: Endgame' on 12/11/2024</span>
                  <span className="text-gray-500">2:00 PM</span>
                </li>
                <li className="border-b py-2 flex justify-between items-center">
                  <span className="text-gray-700">Booked 'Spider-Man: No Way Home' on 10/11/2024</span>
                  <span className="text-gray-500">5:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/LoginPage" />;
  }
};
export default Dashboard