import React from "react";
import Banner from "../components/banner";
import CompanySlider from "../components/companySlider";
import TestimonialSlider from "../components/testimonials.jsx";
import FAQ from "../components/faq.jsx";
import TeamSlider from "../components/teamSlider";
import { ChevronRight, Film, Users, MessageSquare, HelpCircle, Play } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Banner Section - Full width with better visual impact */}
      <Banner
        heading="About Us"
        paragraph="Welcome to Movie Tickets Booking & Resell - your platform for buying, selling, and transferring movie tickets effortlessly"
      />

      {/* About Us Section - Responsive layout with better spacing */}
      <section className="w-full max-w-7xl py-20 px-8 md:px-12 lg:px-20 border-b">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section - Improved sizing and shadow */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-500/20 rounded-lg"></div>
              <img
                src="/images/about-Img1.jpg"
                alt="About Us"
                className="w-full max-w-md rounded-lg shadow-lg object-cover relative z-10"
              />
            </div>
          </div>

          {/* Text Section - Better typography and spacing */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Film className="w-8 h-8 text-red-600" />
              <h2 className="text-sm uppercase tracking-wider text-stone-500 font-bold">Get To Know Us</h2>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Providing The Best Ticket Booking Experience
            </h1>
            
            <p className="text-stone-600 text-base leading-relaxed mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quis quasi rerum quo vitae ullam odio reprehenderit. Our platform connects movie lovers with the tickets they need.
            </p>

            {/* Years of Innovation - Better alignment and visual design */}
            <div className="flex items-center gap-6 mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
                <Play className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">6 Years of Innovation</h3>
                <p className="text-stone-600">We're here for you from start to finish.</p>
              </div>
            </div>
            
            {/* Discover More Button - Better design */}
            <div className="mt-8">
              <button className="bg-red-600 px-8 py-3 text-sm font-bold text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out hover:shadow-lg flex items-center gap-2">
                Discover More
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Slider Section - Better spacing and heading */}
      <section className="w-full max-w-7xl py-16 px-8">
        <h2 className="text-2xl font-bold text-center mb-10">Our Partners</h2>
        <CompanySlider />
      </section>

      {/* Team Section - Added container and improved spacing */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-3">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-sm uppercase tracking-wider text-red-600 font-bold">Meet Our Team</h2>
            <h1 className="text-3xl font-bold mt-2">The People Behind Our Success</h1>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Our dedicated team works tirelessly to provide you with the best movie ticket booking experience.
            </p>
          </div>
          <TeamSlider />
        </div>
      </section>

      {/* Testimonial Section - Better visual design */}
      <section className="w-full max-w-7xl py-20 px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <MessageSquare className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-sm uppercase tracking-wider text-red-600 font-bold">Testimonials</h2>
          <h1 className="text-3xl font-bold mt-2">What People Say About Us</h1>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <TestimonialSlider />
      </section>

      {/* FAQ Section - Better design and spacing */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-3">
              <HelpCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-sm uppercase tracking-wider text-red-600 font-bold">Got Questions?</h2>
            <h1 className="text-3xl font-bold mt-2">Frequently Asked Questions</h1>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      
      {/* CTA Section - Added new section */}
      <section className="w-full bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Book Your Next Movie?</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who use our platform for all their movie ticket needs.
          </p>
          <button className="bg-white px-8 py-3 text-red-600 font-bold rounded-md hover:bg-gray-100 transition duration-300 flex items-center gap-2 mx-auto">
            Get Started Now
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;