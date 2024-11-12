import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Akshay Kumar",
      feedback: "This platform is amazing! I was able to sell my movie ticket with ease.",
      profilePic: "/images/Akshay-kumar.avif",
    },
    {
      name: "Michael Smith",
      feedback: "A great experience! I found discounted tickets and had no trouble transferring them.",
      profilePic: "/images/user2.jpg",
    },
    {
      name: "Samantha Lee",
      feedback: "User-friendly and efficient. Highly recommend for anyone with unused tickets.",
      profilePic: "/images/user3.jpg",
    },
    // Additional testimonials can be added here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <div className="flex flex-col items-center gap-6 w-80 mx-auto">
      <div className="flex flex-col items-center text-center border p-4 rounded-lg shadow-md w-full">
        <img 
          src={testimonials[currentIndex].profilePic} 
          alt={testimonials[currentIndex].name} 
          className="w-16 h-16 rounded-full mb-2" 
        />
        <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
        <p className="text-stone-500 text-sm mt-2">{testimonials[currentIndex].feedback}</p>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
