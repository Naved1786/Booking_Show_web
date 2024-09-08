import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
export default function Slider2() {
  const [playBtn, setPlayBtn] = useState(false);

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className='h-40 w-72 relative'>
          {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img1.jpg" alt=""  className=''/>

              </>

            )

          }



        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative '>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative '>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
          <i className="bi bi-play-circle text-red-500 text-4xl absolute inset-0 flex items-center justify-center"></i>
          <img src="./images/slider2-img9.jpg" alt="" />

        </SwiperSlide>
      </Swiper>

    </>
  );
}
