import React, { useEffect, useState } from "react";
import { FaTicketAlt, FaRecycle, FaBell, FaHome, FaCog, FaEnvelope, FaChartBar, FaFilm, FaCalendarAlt } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../auth";
import { FaUser } from "react-icons/fa";

function UserDashboard() {
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



export default UserDashboard;
