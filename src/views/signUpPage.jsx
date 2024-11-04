// SignUpPage.js
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex h-screen bg-gray-100 pt-20">
      <div className="w-1/2 flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-center text-red-400">Sign up</h2>
          <p className="text-center text-gray-600 mb-6">Create your account</p>
          <form>
            <div className="mb-4">
              <label className="block text-red-400 font-semibold mb-2">USERNAME</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border border-red-400 rounded-lg bg-gray-50 focus:outline-none focus:border-red-400"
              />
            </div>
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
            <div className="mb-6">
              <label className="block text-red-400 font-semibold mb-2">CONFIRM PASSWORD</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border border-red-400 rounded-lg bg-gray-50 focus:outline-none focus:border-red-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-400 text-white font-bold py-2 rounded-lg transition duration-200 hover:bg-red-500"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full flex items-center justify-center bg-white border border-red-400 text-red-400 font-bold py-2 rounded-lg transition duration-200 hover:bg-gray-50">
            <span className="mr-2">🔍</span> Sign up with Google
          </button>
          <p className="text-center text-gray-600 mt-6">
            Already have an account? <a href="#" className="text-red-400 font-semibold">Login</a>
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-red-400 flex items-center justify-center text-white pt-20">
        <div className="text-center px-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to Sign Up</h2>
          <p className="mb-4">Join us and create your account</p>
          <button className="bg-white text-red-400 font-bold py-2 px-6 rounded-full border-2 border-white hover:bg-gray-100 transition duration-200">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
