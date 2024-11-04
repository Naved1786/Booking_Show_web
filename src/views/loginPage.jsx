import React from 'react';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4">Sign in</h1>
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-google"></i>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <p className="text-gray-500 mb-4">or use your account</p>
        <form className="flex flex-col space-y-4 w-3/4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <a href="#" className="text-sm text-orange-500 hover:underline text-right">
            Forgot your password?
          </a>
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition duration-300">
            SIGN IN
          </button>
        </form>
      </div>

      <div className="w-1/2 bg-gradient-to-br from-red-500 to-orange-500 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Hello, Friend!</h1>
        <p className="text-center mb-6">Enter your personal details and start journey with us</p>
        <Link to="/SignUpPage">
        <button className="px-8 py-2 border-2 border-white rounded-full text-lg hover:bg-white hover:text-red-500 transition duration-300">
          SIGN UP
        </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
