import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Akshay Kumar",
      feedback: "This platform is amazing! I was able to sell my movie ticket with ease.",
      profilePic: "/images/Akshay-kumar.avif",
      role: "Movie Enthusiast"
    },
    {
      name: "Michael Smith",
      feedback: "A great experience! I found discounted tickets and had no trouble transferring them.",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      role: "Regular User"
    },
    {
      name: "Samantha Lee",
      feedback: "User-friendly and efficient. Highly recommend for anyone with unused tickets.",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "Frequent Traveler"
    },
    // Additional testimonials can be added here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000); // Increased to 5 seconds for better readability
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause autoplay when user interacts with slider
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timeout);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex"; // Show fallback avatar
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">      
      
      <div 
        className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
        onMouseEnter={handleInteraction}
      >
        {/* Testimonial content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img 
                src={testimonials[currentIndex].profilePic} 
                alt={testimonials[currentIndex].name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                onError={handleImageError}
              />
              <div className="hidden absolute inset-0 bg-gray-200 rounded-full items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-blue-600 text-sm">{testimonials[currentIndex].role || "Customer"}</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="text-gray-700 italic text-lg mb-4 min-h-24">
              "{testimonials[currentIndex].feedback}"
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={() => {
              prevSlide();
              handleInteraction();
            }}
            className="bg-white/80 hover:bg-white rounded-r-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={() => {
              nextSlide();
              handleInteraction();
            }}
            className="bg-white/80 hover:bg-white rounded-l-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              handleInteraction();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              currentIndex === index 
                ? 'bg-blue-600 scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;