import React from 'react'
import Slider from '../components/slider'
import Slider2 from '../components/slider2'
import BackgroundImg from '../components/backgroundImg'
import ServiceCard from '../components/serviceCard.jsx'
const Home = () => {
  return (
    <div className=''>
      <div className='pt-28 mx-8'>
        <Slider />
      </div>

      <div className='py-10 pb-10 mx-8'>
        <h1 className='text-2xl text-red-500 mx-3 font-bold py-2'>Upcoming..</h1>
        <div className='my-2 flex justify-center items-center'>
          <Slider2 />

        </div>
      </div>

      <div>
        <BackgroundImg/>
        
      </div>

      {/* <div className='w-full flex justify-center items-center object-cover '>
          <img src="./images/banner-templete.png" alt="" className='w-full h-[85px] rounded-md'/>
        </div> */}

    </div>
  )
}

export default Home;