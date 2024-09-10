import React from 'react'

const ServiceCard = (props) => {
    return (
        <div className="bg-black flex w-[22rem] h-[10rem] justify-center items-center ">
            <div className='text-white h-36 w-56 flex justify-center flex-col' >
                <p className='text-gray-400'>Join Now</p>
                <h1 className='text-2xl font-bold'>{props.title}</h1>
            </div>
            <div className='w-20 h-20 rounded-full bg-red-500 flex justify-center items-center'>
                <img src={`./images/${props.image}`} className='w-12' alt="" />
            </div>

        </div>
    )
}

export default ServiceCard