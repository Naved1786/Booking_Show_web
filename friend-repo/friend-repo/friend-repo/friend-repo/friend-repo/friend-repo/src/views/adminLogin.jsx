import React from 'react';

function AdminLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-500">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-center text-2xl font-bold mb-6">Admin Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <span className="text-gray-500 pr-2">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full outline-none px-2 py-1 text-gray-700"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <span className="text-gray-500 pr-2">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full outline-none px-2 py-1 text-gray-700"
            />
          </div>
        </div>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md">
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
