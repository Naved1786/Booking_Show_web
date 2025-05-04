import React from 'react';
import { useSelector } from "react-redux";

const WelcomeHeader = () => {
  const user = useSelector((state) => state.auth.user);
  
  return (
    <div className="rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 text-white p-6 mb-8 flex justify-between items-center shadow-md">
      <div className="flex-1">
        <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">
          Welcome Back, {user?.username || "User"}!
        </h1>
        <p className="text-sm opacity-90 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
        </p>
      </div>
      <div className="flex-shrink-0 ml-4">
        {/* This would be replaced with an actual avatar component or image */}
        <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full overflow-hidden">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx="50" cy="35" r="20" fill="#4A5568" /> {/* Head */}
            <circle cx="42" cy="30" r="3" fill="#FFF" /> {/* Left eye */}
            <circle cx="58" cy="30" r="3" fill="#FFF" /> {/* Right eye */}
            <path d="M43,45 Q50,50 57,45" stroke="#FFF" strokeWidth="2" fill="none" /> {/* Smile */}
            <rect x="30" y="55" width="40" height="40" rx="10" fill="#4A5568" /> {/* Body */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;