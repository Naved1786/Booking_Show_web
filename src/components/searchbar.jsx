import React from 'react';
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = ({ className = "",}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            navigate(`/movies?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className={`flex items-center w-full bg-white rounded-md shadow-sm border ${className}`}>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-4 py-2 outline-none bg-transparent rounded-l-full text-gray-600"
            />
            <button className="bg-red-500 p-3 rounded-r-sm flex items-center justify-center"
                onClick={handleSearch}
            >
                <FiSearch className="text-white text-lg" />
            </button>
        </div>
    );
};

export default SearchBar;
