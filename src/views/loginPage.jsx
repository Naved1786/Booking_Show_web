// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-gray-100 pt-20">
      <div className="w-1/2 flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-400">Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-red-400 font-semibold mb-2">EMAIL</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-red-400 rounded-lg bg-gray-50 focus:outline-none focus:border-red-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-400 font-semibold mb-2">PASSWORD</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-red-400 rounded-lg bg-gray-50 focus:outline-none focus:border-red-400"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-red-400">
                <input type="checkbox" className="form-checkbox text-red-400" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a href="#" className="text-red-400 hover:text-red-500">Forgot Password</a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-400 text-white font-bold py-2 rounded-lg transition duration-200 hover:bg-red-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-red-400 flex items-center justify-center text-white pt-20">
        <div className="text-center px-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to login</h2>
          <p className="mb-4">Don't have an account?</p>
          <Link to="/SignUpPage">
            <button className="bg-white text-red-400 font-bold py-2 px-6 rounded-full border-2 border-white hover:bg-gray-100 transition duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
