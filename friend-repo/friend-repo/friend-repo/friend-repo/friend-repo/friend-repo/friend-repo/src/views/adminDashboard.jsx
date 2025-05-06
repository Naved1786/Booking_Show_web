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
     

    
    </div>
  );
}

export default AdminDashboard;