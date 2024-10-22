import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex h-20 items-center justify-between border-y-2 shadow-lg fixed w-full bg-white z-[1000]'>
      <ul className='mx-10 flex items-center justify-center'>
        <li><img src="./images/navbar-logo.png" alt="" className='w-[80px]' /></li>
      </ul>
      <ul className='flex gap-10 justify-center text-base  '>
        <li className='group flex justify-center flex-col items-center'><Link to='/'>Home</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center  group-hover:transition-all duration-300 ease-in-out'></div>
        </li>
        <li className='group flex justify-center flex-col items-center'><Link to='/All Movies'>All Movies</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center group-hover:transition-all duration-300 ease-in-out '></div>
        </li>
        <li className='group flex justify-center flex-col items-center'><Link to='/Contact'>Contact</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center group-hover:transition-all duration-300 ease-in-out  '></div>
        </li>
        <li className='group flex justify-center flex-col items-center'><Link to='/About'>About</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center group-hover:transition-all duration-300 ease-in-out '></div>
        </li>
      </ul>
      <ul className='flex flex-row gap-10 mx-10 items-center'>

        <li className='relative'>
          <input
            type="text"
            className=" w-56 text-base h-10 p-3 border-2 border-gray-300 rounded-full outline-none focus:border-blue-500"
            placeholder="Search movie?"
          />
          <i className="bi bi-search text-xl font absolute top-2 right-3"></i>
        </li>
        <li><button className='w-16 h-7 text-xs bg-red-500 hover:bg-red-600 hover:text-white text-white  py-1 px-3 rounded transition duration-300 ease-in-out hover:scale-105'>Login</button></li>
      </ul>
    </div>
  )
}

export default Navbar