import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const movie = {
  title: "Avengers: Endgame",
  genre: "Action, Sci-Fi",
  description:
    "The Avengers reunite to restore balance after the devastating effects of Thanos' snap.",
  image: "/images/feature-img9.jpg",
};

const theaters = [
  { id: 1, name: "PVR Forum Sujana Mal", timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"] },
  { id: 2, name: "PVR Cinemas", timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"] },
  { id: 3, name: "AMB Cinemas", timings: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] },
  { id: 4, name: "RK Cineplex", timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"] },
  { id: 5, name: "INOX", timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"] },
  { id: 6, name: "Aparna Cinemas", timings: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] },
];

const BookTickets = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* Hero Section with Movie Image */}
      <div className="relative w-full h-[400px]">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
          <h1 className="text-white text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 text-lg">{movie.genre}</p>
        </div>
      </div>

      {/* Movie Info & Booking Options */}
      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{movie.title}</h2>
        <p className="text-gray-600">{movie.description}</p>

        {/* Date Picker */}
        <div className="mt-4">
          <label className="text-gray-700 font-medium">Select Date:</label>
          <DatePicker
            placeholderText="Choose a Date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Theaters & Timings Grid */}
      <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {theaters.map((theater) => (
          <div key={theater.id} className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-800">{theater.name}</h3>

            <div className="grid grid-cols-2 gap-3 mt-3">
              {theater.timings.map((time) => (
                <button
                  key={time}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 border 
                    ${
                      selectedTime === time
                        ? "bg-red-500 text-white"
                        : "border-gray-400 text-gray-800 hover:bg-red-400 hover:text-white"
                    }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proceed Button */}
      <div className="flex justify-center mt-8">
        <button
          className={`px-8 py-3 text-white font-semibold rounded-md transition-all duration-300 
            ${
              selectedDate && selectedTime
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          disabled={!selectedDate || !selectedTime}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default BookTickets;
