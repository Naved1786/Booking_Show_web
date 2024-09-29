import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles if necessary

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='slider rounded-2xl overflow-hidden'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img7.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
        <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
        </div>
          <img src="./images/slider-img2.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img1.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img6.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img5.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img4.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img8.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img3.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-80 flex justify-center items-center">
          <div className="h-full w-full absolute  top-0" style={{background:'linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 65%)'}}>
          </div>
          <img src="./images/slider-img5.jpg" alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className=' inline-block text-yellow-500'>28 APR 2024</h2>
            <h1 className='font-bold text-5xl'>AVENGERS</h1>
            <br />
            <p>Earth's Mightiest Heroes stand as the planet's first line of defense
               against the most powerful threats in the universe</p>
               <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-sm rounded-sm my-5'>Buy Ticket</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
