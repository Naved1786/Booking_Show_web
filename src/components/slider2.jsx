import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const SliderItems = ({ videolink, thumbnailImg }) => {
  const [playBtn, setPlayBtn] = useState(false);
  return (
    <>
      {playBtn ? (
        <iframe
          className="h-full w-full"
          src={videolink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen // Correctly placed and formatted attribute
        ></iframe>
      ) : (
        <>
          <i
            className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={() => setPlayBtn(true)}
          ></i>
          <img src={thumbnailImg} alt="" />
        </>
      )}
    </>
  );

}
export default function Slider2() {


  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pb-12"
      >
        {
        /* <SwiperSlide className='h-40 w-72 relative'>
          {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img1.jpg" alt="" className='' />

              </>

            )

          }
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img2.jpg" alt="" />

              </>

            )

          }         
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img3.jpg" alt="" />

              </>

            )

          }        
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img4.jpg" alt="" />

              </>

            )

          }      
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative '>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img5.jpg" alt="" />

              </>

            )

          }      
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative '>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img6.jpg" alt="" />

              </>

            )

          }      
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img7.jpg" alt="" />

              </>

            )

          }      
        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img8.jpg" alt="" />

              </>

            )

          }      

        </SwiperSlide>
        <SwiperSlide className='h-40 w-72 relative'>
        {
            playBtn ? <iframe className='h-full w-full' src="https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : (
              <>
                <i className="bi bi-play-circle text-red-500 text-4xl hover:text-white absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayBtn(true)}></i>
                <img src="./images/slider2-img9.jpg" alt="" />

              </>

            )

          }                

        </SwiperSlide> */}

        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw' thumbnailImg='./images/slider2-img1.jpg' />

        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/uV50UfcIT68?si=OBqBhWPvovmAfHrc' thumbnailImg='./images/slider2-img2.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/uSWNCCChrC0?si=wY5Dx5gYi7-MbMnv' thumbnailImg='./images/slider2-img3.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/lVjieoMPN-c?si=nWj_myjNYJI4iPwd' thumbnailImg='./images/slider2-img4.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw' thumbnailImg='./images/slider2-img5.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw' thumbnailImg='./images/slider2-img6.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw' thumbnailImg='./images/slider2-img7.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw' thumbnailImg='./images/slider2-img8.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slider2 h-40 w-72 relative'>
          <SliderItems videolink='https://www.youtube.com/embed/szovD3BnvJI?si=G6qQXuHK5MX0mNJw' thumbnailImg='./images/slider2-img9.jpg' />
        </SwiperSlide>

      </Swiper>

    </>
  );
}


