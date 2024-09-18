import React from 'react'

const Contact = () => {
    return (
        <div className='pt-20 flex flex-col justify-center items-center bg-[url("./images/seat-bg.png")] bg-cover bg-center'>
            <form className='flex justify-center items-center flex-col w-[50%] h-[100vh] bg-white bg-opacity-80 p-8 shadow-lg'>
                <div className='w-8'>
                    <img src="./images/film-logo.png" alt="Film logo" />
                </div>
                <p className='text-xs text-gray-400 font-bold '>Contact With Us</p>
                <h1 className='font-semibold text-4xl text-center pb-10'>Feel Free to Write Us <br /> Anytime</h1>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-row gap-4 '>
                        <input type="text" placeholder='Your Name' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' aria-label="Your Name" required />
                        <input type="email" placeholder='Email Address' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' aria-label="Email Address" required />
                    </div>
                    <div className='flex flex-row gap-4 '>
                        <input type="tel" placeholder='Phone' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' aria-label="Phone" />
                        <input type="text" placeholder='Subject' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' aria-label="Subject" />
                    </div>
                    <textarea placeholder='Write comment here' className='w-full h-36 bg-[#f3f3f3] text-xs pl-6 pt-4 outline-none' aria-label="Write comment here"></textarea>
                </div>
                <button type="submit" className='w-44 h-12 bg-red-500 text-xs mt-6 text-white font-bold border hover:bg-transparent hover:border-red-500 hover:text-red-500 transition duration-300 ease-in-out hover:scale-105 outline-none'>Send a Message</button>
            </form>
        </div>
    )
}

export default Contact
