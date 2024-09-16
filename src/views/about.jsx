import React from 'react'

const About = () => {
  return (
    <div className='pt-20 flex flex-col justify-center items-center '>
      <div className=' flex justify-center items-center flex-col w-[50%] h-[100vh]'>
        <div className='w-8'>
          <img src="./images/film-logo.png" alt="" />
        </div>
        <p className='text-xs text-gray-400 font-bold '>Contact With Us</p>
        <h1 className='font-semibold text-4xl text-center pb-10'>Feel Free to Write us <br /> Anytime</h1>
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex flex-row gap-4 '>
            <input type="text" placeholder='Your Name' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none'  />
            <input type="text" placeholder='Email Address' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' />
          </div>
          <div className='flex flex-row gap-4 '>
            <input type="text" placeholder='Phone' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' />
            <input type="text" placeholder='Subject' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' />
          </div>
          <textarea name="" id="" placeholder=' Write comment here' className='w-full h-36 bg-[#f3f3f3] text-xs pl-6 pt-4 outline-none'></textarea>
        </div>
        <button className='w-44 h-11 bg-red-500 text-xs mt-6 text-white font-bold border hover:bg-transparent hover:border-red-500 hover:text-red-500 transition duration-300 ease-in-out hover:scale-105 outline-none'>Send a Messege</button>

      </div>
    </div>
  )
}

export default About