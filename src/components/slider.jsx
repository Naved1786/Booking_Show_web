import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles if necessary
const slides = [
  {
    src: "./images/slider-img6.jpg",
    src2: "./images/slider1-small-khel-khel-me.jpg",
    releasedDate: "November 19, 2021",
    movieName: "KHEL KHEL MEIN",
    aboutMovie: "A group of students unravels hidden truths from the past while retracing a mysterious event in history."
  },
  {
    src: "./images/slider-img3.jpg",
    src2: "./images/slider1-small-stree2.jpg",
    releasedDate: "Coming Soon",
    movieName: "STREE 2",
    aboutMovie: "The village of Chanderi faces the return of a supernatural entity, sparking new fears and adventures."
  },
  {
    src: "./images/slider-img5.jpg",
    src2: "./images/slider1-small-avengers.jpg",
    releasedDate: "28 APR 2024",
    movieName: "AVENGERS",
    aboutMovie: "Earth's Mightiest Heroes band together to protect against the greatest threats in the universe."
  },
  {
    src: "./images/slider-img1.jpg",
    src2: "./images/slider1-small-amran.jpg",
    releasedDate: "Expected in 2025",
    movieName: "AMRAN",
    aboutMovie: "An intense journey of self-discovery and resilience against the backdrop of a small town's challenges."
  },
  {
    src: "./images/slider-img2.jpg",
    src2: "./images/slider1-small-lapata-ladies.jpg",
    releasedDate: "August 10, 2023",
    movieName: "LAPATA LADIES",
    aboutMovie: "Two brides go missing in rural India, leading to a comedic and heartfelt search filled with twists."
  },
  {
    src: "./images/slider-img4.jpg",
    src2: "./images/slider1-small-ulajh.jpg",
    releasedDate: "Coming Soon",
    movieName: "ULAJH",
    aboutMovie: "A suspenseful thriller following a diplomat who finds herself tangled in a web of danger and espionage."
  },
  {
    src: "./images/slider2-img2.jpg",
    src2: "./images/slider1-small-bad-news.jpg",
    releasedDate: "Expected in 2024",
    movieName: "BAD NEWS",
    aboutMovie: "A black comedy that brings to light the humorous side of an unexpected family crisis."
  },
  {
    src: "./images/slider-img8.jpg",
    src2: "./images/slider1-small-badeMiya-chhoteMiya.jpg",
    releasedDate: "Eid 2024",
    movieName: "BADE MIYAN CHHOTE MIYAN",
    aboutMovie: "An action-packed adventure with two unlikely heroes who take on a high-stakes mission together."
  }
];



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
        {slides.map((slide,index)=>(
          <SwiperSlide className="relative w-full h-80 flex justify-center items-center">
          <div className="h-full bg-black opacity-30 w-full absolute  top-0">
          </div>
          <div className='absolute w-40 h-44 top-11 right-28 z-20 shadow-lg'>
            <img src={slide.src2} alt="" />
            <button className="bi bi-play-circle top-[40%] text-white text-4xl hover:text-red-500 absolute inset-0 flex items-center justify-center cursor-pointer"></button>
          </div>
          <img src={slide.src} alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
          <div className='absolute bottom-3 left-20 text-white w-[500px]'>
            <h2 className=' inline-block text-yellow-500'>{slide.releasedDate}</h2>
            <h1 className='font-bold text-5xl'>{slide.movieName}</h1>
            <br />
            <p>{slide.aboutMovie}</p>
            <button className='bg-red-500 hover:bg-white hover:text-red-500  text-white w-20 h-8 text-xs  my-5'>Get Ticket</button>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
