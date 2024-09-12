import React from 'react'
import Slider from '../components/slider'
import Slider2 from '../components/slider2'
// import BackgroundImg from '../components/backgroundImg'
import ServiceCard from '../components/serviceCard.jsx'
import CardSlider from '../components/cardSlider.jsx'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='pt-28 mx-8'>
        <Slider />
      </div>

      <div className='py-10 pb-10 mx-8'>
        <h1 className='text-2xl text-red-500 mx-3 font-bold py-2'>Upcoming..</h1>
        <div className='my-2 flex justify-center items-center'>
          <Slider2 />

        </div>
      </div>

      <div className="relative h-[150vh] bg-[#e3e0e3] w-full overflow-hidden">
        <div>
          <img src="./images/image-lines-header.jpg" alt="" />
        </div>

        {/* Container with the pseudo-element for the shared background */}
        <div className="relative w-full h-full flex flex-col pt-14">
          <div className="w-full  z-10 flex justify-center gap-10">
            <ServiceCard image="service-card3.png" title="Upcoming Film Festivals" />
            <ServiceCard image="service-card2.png" title="Watch Film Awards" />
            <ServiceCard image="service-card1.png" title="Comedy TV Shows" />
          </div>

          <div className='flex flex-col justify-center items-center py-10 '>
            <img src="./images/film-logo.png" className='w-10' alt="" />
            <p>Watch New Movies</p>
            <h1 className='text-4xl font-bold'> Movies Now Playing</h1>
          </div>

          <div className='flex items-center gap-1 text-red-500 justify-end pr-10 cursor-pointer'>
            <p>See All</p>
            <i className="fa-solid fa-angle-right text-xs"></i>
          </div>

          <div className="w-full flex justify-center">
            <CardSlider />
          </div>
        </div>
      </div>

      {/* <div className='w-full flex justify-center items-center object-cover '>
          <img src="./images/banner-templete.png" alt="" className='w-full h-[85px] rounded-md'/>
        </div> */}

    </div>
  )
}

export default Home;