import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-orange-400 via-purple-500 to-purple-700 text-white">
                <div className="w-full h-full relative">
                    <img
                        src="./images/cinema-popcorn-img.jpg"
                        alt="Cinema Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-3/4 max-w-md">
                    <h2 className="text-3xl font-semibold mb-2 text-gray-800">Login</h2>
                    <p className="text-gray-500 mb-8">Welcome back! Please login to your account.</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700" htmlFor="username">User Name</label>
                            <input
                                id="username"
                                type="email"
                                placeholder="username@gmail.com"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-purple-500" />
                                <span className="ml-2 text-gray-600">Remember Me</span>
                            </label>
                            <a href="#" className="text-sm text-purple-500 hover:underline">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-2 rounded-md transition duration-200"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-center text-gray-600">
                        New User? <a href="#" className="text-purple-500 hover:underline">Signup</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
