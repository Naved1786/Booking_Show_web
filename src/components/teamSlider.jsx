import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function TeamSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 2</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 3</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 4</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 5</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 6</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 7</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 8</SwiperSlide>
        <SwiperSlide className='w-20 h-40 bg-red-200'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
