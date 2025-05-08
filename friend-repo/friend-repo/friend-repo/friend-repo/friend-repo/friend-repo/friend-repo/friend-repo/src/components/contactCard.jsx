import React from 'react'

const ContactCard = (props) => {
  return (
    <div className="flex w-[20rem] h-[12rem] justify-center items-center shadow-sm p-6 bg-[#f3f3f3] rounded-xs hover:border-2 hover:border-red-400 overflow-hidden" >
        <div className='flex flex-col gap-4'>
            <h1 className="font-bold text-xl">{props.title}</h1>
            <p className='text-sm text-[#737373]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='h-36 w-36'>
            <img src={`./images/${props.image}`} alt="" />
        </div>
    </div>
    
  )
}

export default ContactCard