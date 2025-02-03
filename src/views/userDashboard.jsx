import React, { useEffect, useState } from "react";
import { FaTicketAlt, FaRecycle, FaBell, FaHome, FaCog, FaEnvelope, FaChartBar, FaFilm, FaCalendarAlt } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../auth";
const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const[ImageUrl,setImageUrl]=useState("");

  useEffect(()=>{
    const profileImage=JSON.parse(localStorage.getItem("user"));
    setImageUrl(profileImage?.profileImage);
  },[]);

  const logout = () => {
    localStorage.clear();
    doLogout(() => {
      navigate("/");
    });
  };

  return (
    <div className="w-56 bg-gradient-to-b from-red-500 to-red-600 p-6 pt-10 flex flex-col h-100vh shadow-lg">
      {/* Profile Section */}
      <div className="flex flex-col items-center border-b pb-4">
        <img
          // src={`http://localhost:1111/api/v1/post/image/${ImageUrl}`}
          src="./images/user-dummy.png"
          alt="Profile"
          className="rounded-full border-4 border-white w-16 h-16 mb-2"
        />
        <h2 className="text-white font-semibold">{user?.username}</h2>
      </div>
      
      {/* Navigation Links */}
      <nav className="mt-4">
        <ul className="space-y-3 text-white">
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaHome className="text-lg" />
            <span className="text-base">Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaFilm className="text-lg" />
            <span className="text-base">Movies</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaCalendarAlt className="text-lg" />
            <span className="text-base">Bookings</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 cursor-pointer">
            <FaCog className="text-lg" />
            <span className="text-base">Settings</span>
          </li>
        </ul>
      </nav>
      
      {/* Logout Button */}
      <div className="mt-auto pt-4 border-t">
        <button
          onClick={logout}
          className="w-full text-left flex items-center space-x-3 text-base p-2 text-white hover:bg-red-700 rounded-lg cursor-pointer"
        >
          <FaRecycle className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const UserDashboard = () => {
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

export default UserDashboard;
