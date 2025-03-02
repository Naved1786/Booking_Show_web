import React from 'react';
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ className = "" }) => {
    return (
        <div className={`flex items-center w-full bg-white rounded-sm shadow-sm border ${className}`}>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-grow px-4 py-2 outline-none bg-transparent rounded-l-full text-gray-600"
                    />
                    <button className="bg-red-500 p-3 rounded-r-sm flex items-center justify-center">
                      <FiSearch className="text-white text-lg" />
                    </button>
                  </div>
    );
};

export default SearchBar;
