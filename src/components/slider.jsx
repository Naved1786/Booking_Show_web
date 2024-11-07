import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    src: "./images/slider-img6.jpg",
    src2: "./images/slider1-small-khel-khel-me.jpg",
    releasedDate: "November 19, 2021",
    movieName: "KHEL KHEL MEIN",
    aboutMovie: "A group of students unravels hidden truths from the past while retracing a mysterious event in history.",
    videoUrl: "https://www.youtube.com/embed/RKZJtoFoaQg?si=DUStIewFbWrDpwN6",
  },
  {
    src: "./images/slider-img3.jpg",
    src2: "./images/slider1-small-stree2.jpg",
    releasedDate: "Coming Soon",
    movieName: "STREE 2",
    aboutMovie: "The village of Chanderi faces the return of a supernatural entity, sparking new fears and adventures.",
    videoUrl: "https://www.youtube.com/embed/KVnheXywIbY?si=t1yrQZWfcNrRtu4c",
  },
  {
    src: "./images/slider-img5.jpg",
    src2: "./images/slider1-small-avengers.jpg",
    releasedDate: "28 APR 2024",
    movieName: "AVENGERS",
    aboutMovie: "Earth's Mightiest Heroes band together to protect against the greatest threats in the universe.",
    videoUrl: "https://www.youtube.com/embed/6ZfuNTqbHE8?si=zrm-6qzXyINcE98V",
  },
  {
    src: "./images/slider-img1.jpg",
    src2: "./images/slider1-small-amran.jpg",
    releasedDate: "Expected in 2025",
    movieName: "AMRAN",
    aboutMovie: "An intense journey of self-discovery and resilience against the backdrop of a small town's challenges.",
    videoUrl: "https://www.youtube.com/embed/molA7xjD_nQ?si=XJQQxsc2hNq5ujpV",
  },
  {
    src: "./images/slider-img2.jpg",
    src2: "./images/slider1-small-lapata-ladies.jpg",
    releasedDate: "August 10, 2023",
    movieName: "LAPATA LADIES",
    aboutMovie: "Two brides go missing in rural India, leading to a comedic and heartfelt search filled with twists.",
    videoUrl: "https://www.youtube.com/embed/sm8t7aW5_4s?si=bMi8gxcEjohmOtfi",
  },
  {
    src: "./images/slider-img4.jpg",
    src2: "./images/slider1-small-ulajh.jpg",
    releasedDate: "Coming Soon",
    movieName: "ULAJH",
    aboutMovie: "A suspenseful thriller following a diplomat who finds herself tangled in a web of danger and espionage.",
    videoUrl: "https://www.youtube.com/embed/Tk1EQD7vGiY?si=l07pWWcS0WPwvH4U",
  },
  {
    src: "./images/slider2-img2.jpg",
    src2: "./images/slider1-small-bad-news.jpg",
    releasedDate: "Expected in 2024",
    movieName: "BAD NEWS",
    aboutMovie: "A black comedy that brings to light the humorous side of an unexpected family crisis.",
    videoUrl: "https://www.youtube.com/embed/uV50UfcIT68?si=FEccrF5gKGxI9Pg1",
  },
  {
    src: "./images/slider-img8.jpg",
    src2: "./images/slider1-small-badeMiya-chhoteMiya.jpg",
    releasedDate: "Eid 2024",
    movieName: "BADE MIYAN CHHOTE MIYAN",
    aboutMovie: "An action-packed adventure with two unlikely heroes who take on a high-stakes mission together.",
    videoUrl: "https://www.youtube.com/embed/IGzLHNPO4QI?si=sOjBTDMEYj92JDfN",
  }
];

export default function Slider() {
  const [activeTrailer, setActiveTrailer] = useState(null);

  const handlePlayClick = (videoUrl) => {
    setActiveTrailer(videoUrl);
  };

  const handleCloseTrailer = () => {
    setActiveTrailer(null);
  };

  return (
    <div className='slider rounded-2xl overflow-hidden'>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-80 flex justify-center items-center">
            <div className="h-full bg-black opacity-30 w-full absolute top-0"></div>
            <div className='absolute w-40 h-44 top-11 right-28 z-20 shadow-lg'>
              <img src={slide.src2} alt="" />
              <button
                onClick={() => handlePlayClick(slide.videoUrl)}
                className="bi bi-play-circle top-[40%] text-white text-4xl hover:text-red-500 absolute inset-0 flex items-center justify-center cursor-pointer"
              ></button>
            </div>
            <img src={slide.src} alt="" className="w-[1250px] h-full object-cover rounded-2xl" />
            <div className='absolute bottom-3 left-20 text-white w-[500px]'>
              <h2 className='inline-block text-yellow-500'>{slide.releasedDate}</h2>
              <h1 className='font-bold text-5xl'>{slide.movieName}</h1>
              <br />
              <p>{slide.aboutMovie}</p>
              <button className='bg-red-500 hover:bg-white hover:text-red-500 text-white w-20 h-8 text-xs my-5'>Get Ticket</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl h-96">
            <iframe
              src={activeTrailer}
              title="Movie Trailer"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseTrailer}
              className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
