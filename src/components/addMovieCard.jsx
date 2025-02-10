import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt,FaEye, FaEdit, FaTrash } from 'react-icons/fa';
const AddMovieCard = () => {
  return (
    <div className='flex flex-wrap mt-10 ml-10'>
      <div className='w-full sm:w-1/4 xl:w-1/4 bg-white rounded-xl overflow-hidden shadow-lg pb-3'>

        <div className='relative w-full flex justify-center items-center pt-4 group'>
          <img
            src="/images/adminMovieCard-img.jpg"
            alt="Movie"
            className='w-56 h-60 rounded-lg object-cover'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center gap-4 w-56 h-60 mt-4 ml-4 rounded-lg">
          <button className="text-white p-2 bg-gray-500 bg-opacity-80 rounded-full hover:bg-gray-400 transition duration-300" title="View">
              <FaEye size={18} />
            </button>
            <button className="text-white p-2 bg-blue-600 bg-opacity-80 rounded-full hover:bg-blue-500 transition duration-300" title="Edit">
              <FaEdit size={18} />
            </button>
            <button className="text-white p-2 bg-red-600 bg-opacity-80 rounded-full hover:bg-red-500 transition duration-300" title="Delete">
              <FaTrash size={18} />
            </button>
          </div>
        </div>

        <div className="bg-white px-4 py-3 flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Movie Title</h2>
          <p className="text-sm text-gray-500">Genre: Action, Drama</p>

          <div className="flex items-center text-yellow-500">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} size={18} />
            ))}
            <FaStarHalfAlt size={18} />
            <span className="text-gray-600 text-sm ml-2">(4.5/5)</span>
          </div>

          <p className="text-sm text-gray-600">
            A thrilling action-packed movie with intense.
          </p>
        </div>

      </div>
      
      <div className=" w-full flex justify-left">
      <button className="p-3 text-sm pr-4 bg-green-600 text-white rounded-3xl hover:bg-green-500 transition-all absolute top-36 right-12">
        ➕
        Add Movie
      </button>
      </div>
    </div>
  );
}

export default AddMovieCard;
