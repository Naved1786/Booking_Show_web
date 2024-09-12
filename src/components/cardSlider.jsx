import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import MovieCard from './movieCard';

export default function CardSlider() {
  return (
    <>
      <Swiper slidesPerView={5} navigation={true} modules={[Navigation]}  className="mySwiper w-full h-[85%]">
        <SwiperSlide className=' flex justify-center items-center'>
          <MovieCard image="card-slider-img1.avif" title="8.9/10" movieName="JOKER" />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img2.avif" title="8.9/10" movieName="THE BOOKINGHEM MURDERS"  />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img3.avif" title="8.9/10" movieName="STREE 2"  />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img4.avif" title="8.9/10" movieName="KHEL KHEL MAIN"  />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img5.avif" title="8.9/10" movieName="VEEDA"  />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img6.avif" title="8.9/10" movieName="THE GREATEST OF ALL TIME......"  />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img7.avif" title="8.9/10" movieName="BEETLEJUICE BEETLIJUICE"  />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img8.avif" title="8.9/10" movieName="BIBI RAJNI"  />
        </SwiperSlide>
        <SwiperSlide className=' flex justify-center items-center '>
          <MovieCard image="card-slider-img9.avif" title="8.9/10" movieName="UDAN CHOO"  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
