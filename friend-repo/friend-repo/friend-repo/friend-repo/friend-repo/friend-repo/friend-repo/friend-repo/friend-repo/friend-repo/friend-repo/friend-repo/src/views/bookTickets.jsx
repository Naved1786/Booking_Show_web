import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Film, ChevronRight, Info } from "lucide-react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const BookTickets = () => {
  // Initialize with today's date
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [theaters, setTheaters] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const movie = location.state?.data


  const fetchTheaters = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Movie ID:", movie);
      if (!token || !movie?.movieId) {
        console.error("Missing token or movie ID");
        return;
      }



      const response = await axios.get(`http://localhost:1111/api/theater/by-movie/${movie.movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTheaters(response.data);
    } catch (error) {
      console.error("Error fetching filtered theaters:", error.response ? error.response.data : error.message);
    }
  };


  useEffect(() => {
    fetchTheaters();
  }, []);


  // Generate next 7 days for date selection
  const getNextDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  };

  // Helper function to check if two dates are the same day
  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
  };

  const handleDateSelect = (date) => {
    console.log("Date selected:", date); // Debug log
    setSelectedDate(date);
  };

  const handleTheaterSelect = (theater) => {
    setSelectedTheater(theater);
    setSelectedTime(null);
  };


  const handleClick = (event) => {
    navigate("/seatSelection", {
      state: {
        data: movie
      }
    })
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      {/* Hero Section with Movie Image */}
      <div className="relative w-full h-64 md:h-96">
        <img
          src={movie.backgroundImageUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
          <div className="flex items-center">
            <Film className="text-red-500 mr-2" size={20} />
            <span className="text-gray-300 text-sm">{movie.genre}</span>
          </div>
          <h1 className="text-white text-2xl md:text-4xl font-bold mt-1">{movie.title}</h1>
          <div className="flex flex-wrap gap-4 mt-2">
            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">{movie.rating}</span>
            <span className="text-gray-300 text-sm flex items-center">
              <Clock className="mr-1" size={16} />
              {movie.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Movie Info & Booking Options */}
      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Book Tickets</h2>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center text-red-500 text-sm font-medium"
            >
              <Info size={16} className="mr-1" />
              Movie Details
            </button>
          </div>

          {showDetails && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-3">{movie.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <div>
                  <span className="font-medium">Director:</span> {movie.director}
                </div>
                <div>
                  <span className="font-medium">Release Date:</span> {movie.releaseDate}
                </div>
              </div>
            </div>
          )}

          {/* Date Selector */}
          <div className="mt-6">
            <div className="flex items-center mb-2">
              <Calendar className="text-red-500 mr-2" size={18} />
              <h3 className="text-gray-700 font-medium">Select Date</h3>
              {/* Add a debug display of selected date */}
              <span className="ml-auto text-sm text-gray-500">
                Selected: {selectedDate?.toLocaleDateString()}
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
              {getNextDays().map((date, index) => (
                <button
                  key={index}
                  className={`py-3 px-2 rounded-lg text-center transition-all duration-200 ${isSameDay(selectedDate, date)
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => handleDateSelect(date)}
                >
                  <div className="text-xs">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <div className="font-bold text-lg">{date.getDate()}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Theaters List */}
        <div className="border-t border-gray-200 pt-4">
          <div className="px-6 mb-4">
            <div className="flex items-center">
              <MapPin className="text-red-500 mr-2" size={18} />
              <h3 className="text-gray-700 font-medium">Select Theater</h3>
            </div>
          </div>

          <div className="space-y-1">
            {Array.isArray(theaters) && theaters?.length > 0 && theaters.map((theater) => (
              <div
                key={theater.id}
                className={`border-l-4 px-6 py-4 transition-all cursor-pointer ${selectedTheater?.id === theater.id
                    ? "border-l-red-500 bg-red-50"
                    : "border-l-transparent hover:bg-gray-50"
                  }`}
                onClick={() => handleTheaterSelect(theater)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">{theater.name}</h3>
                    <div className="text-gray-500 text-sm flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      {theater.distance}
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`transition-transform ${selectedTheater?.id === theater.id ? "transform rotate-90 text-red-500" : "text-gray-400"}`}
                  />
                </div>

                {selectedTheater?.id === theater.id && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {theater.time.map((time) => (
                      <button
                        key={time}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center ${selectedTime === time
                            ? "bg-red-500 text-white"
                            : "border border-gray-300 text-gray-800 hover:bg-red-100"
                          }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTime(time);
                        }}
                      >
                        <Clock size={14} className="mr-1" />
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="flex justify-center my-8">
        <button
          className={`px-8 py-3 text-white font-semibold rounded-md transition-all duration-300 flex items-center ${selectedTheater && selectedTime
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-300 cursor-not-allowed"
            }`}
          disabled={!selectedTheater || !selectedTime}
          onClick={handleClick}
        >
          <span>Continue to Seats</span>
          <ChevronRight size={18} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default BookTickets;