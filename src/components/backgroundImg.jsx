import React from 'react';
import ServiceCard from './serviceCard';
import MovieCard from './movieCard';

const BackgroundImg = () => {
  return (
    <div className="relative h-[130vh] bg-[#f3f3f3] w-full">
      <div>
        <img src="./images/image-lines-header.jpg" alt="" />
      </div>
      {/* Container with the pseudo-element for the shared background */}
      <div className="relative w-full h-full flex flex-col pt-10">
        <div className="w-full  z-10 flex justify-center gap-10">
          <ServiceCard image="service-card3.png" title="Upcoming Film Festivals" />
          <ServiceCard image="service-card2.png" title="Watch Film Awards" />
          <ServiceCard image="service-card1.png" title="Comedy TV Shows" />
        </div>
        <div className='flex flex-col justify-center items-center'>
      <img src="./images/film-logo.png"className='w-10' alt="" />
      <p>Watch New Movies</p>
      <h1 className='text-3xl font-bold'> Movies Now Playing</h1>
    </div>
        <MovieCard />
      </div>

      {/* Pseudo-element styling for the background image */}
      <style jsx>{`
        .relative::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('./images/bg-img1.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.03; /* Controls the opacity of the background image */
          z-index: -1; /* Sends the pseudo-element behind the cards */
        }
      `}</style>
    </div>
  );
};

export default BackgroundImg;
