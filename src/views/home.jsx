import React from 'react'
import Slider from '../components/slider'
import Slider2 from '../components/slider2'
const Home = () => {
  return (
    <div className=' '>
      <div className='pt-28'>
        <Slider />
      </div>

      <div className='my-6'>
        <h1 className='text-xl mx-3 font-bold'>Upcoming..</h1>
        <div className='my-2 flex justify-center items-center mx-3'>
          <Slider2 />
        </div>
      </div>

    </div>
  )
}

export default Home;