// src/AboutUs.js
import React from "react";
import Banner from "../components/banner";
import CompanySlider from "../components/companySlider";
const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Banner heading="About Us" paragraph="Welcome to Movie Tickets Booking & Resell - your platform for buying, selling, and transferring movie tickets effortlessly" />
      <div className="flex flex-row  h-[100vh] px-20 border-b-[1px]">
        <div className="w-1/2 flex justify-center items-center">
          <img src="./images/about-Img1.jpg" alt="" className="w-96" />
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-1">
          <img src="./images/film-logo.png" className="w-8" alt="" />
          <h2 className="text-sm text-stone-400 font-bold">Get To Know</h2>
          <h1 className="text-3xl font-bold">Providing The Best Ticket Booking Service</h1>
          <p className="pt-4 text-stone-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quis quasi rerum quo vitae ullam odio reprehenderit. Nam nobis, asperiores sapiente beatae error repudiandae consequuntur deleniti, iure aliquam fugiat necessitatibus.</p>
          <div className="flex flex-row gap-4 items-center pt-4">
            <div className="w-14">
              <img src="./images/about-logo2.png" alt="" />
            </div>
            <div>
              <h1>6 Years of Innovation</h1>
              <p>We're here for look even you from start to finish.</p>
            </div>
          </div>
          <div className='pt-9'>
            <button className='bg-red-500 w-40 h-10 text-xs font-bold text-white hover:bg-black hover:text-white transition duration-300 ease-in-out hover:scale-105'>Discover More</button>
          </div>
        </div>


      </div>
      <div className="w-[80%]">
        <CompanySlider />
      </div>
    </div>
  );
};

export default About;
