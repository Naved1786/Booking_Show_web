// src/AboutUs.js
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">About Us</h1>
        <p className="text-lg mx-auto max-w-2xl">
          Welcome to Movie Tickets Booking & Resell - your platform for buying, selling, and transferring movie tickets effortlessly.
        </p>
      </header>

      <div className="container mx-auto py-12 px-4">

        {/* Vision Section */}
        <section className="flex flex-col md:flex-row items-center my-16 mx-4">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to create a community-driven marketplace where movie lovers can securely exchange, transfer, and resell tickets in a sustainable way.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Community vision"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </section>

        {/* Offerings Section */}
        <section className="flex flex-col md:flex-row items-center my-16 mx-4">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 leading-relaxed">
              We provide an easy ticket transfer service, discounted reselling options, secure transactions, and a review system to ensure safe exchanges. Enjoy movies while helping others by reducing ticket waste!
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Ticket offerings"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="flex flex-col md:flex-row items-center my-16 mx-4">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              With a user-friendly interface, powerful filters, and secure payment, we prioritize convenience and trust. Our goal is to make ticket management and exchange as easy as possible.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Why choose us"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="flex flex-col md:flex-row items-center my-16 mx-4">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 leading-relaxed">
              Our values center around community, sustainability, and trust. We aim to foster a positive experience where users feel confident in buying, selling, and transferring tickets.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Our values"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
