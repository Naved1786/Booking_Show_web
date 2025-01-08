import React, { useState } from 'react';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Full seat layout (2D array where 'available' and 'taken' define seat states)
  const seats = [
    ['available', 'available', 'taken', 'available', 'available', 'available', 'taken', 'available', 'available', 'available'],
    ['available', 'taken', 'available', 'available', 'available', 'available', 'taken', 'available', 'taken', 'available'],
    ['taken', 'available', 'available', 'available', 'taken', 'available', 'available', 'available', 'available', 'available'],
    ['available', 'available', 'taken', 'available', 'available', 'taken', 'available', 'available', 'available', 'taken'],
    ['available', 'available', 'available', 'available', 'taken', 'available', 'available', 'taken', 'available', 'available'],
    ['available', 'taken', 'available', 'available', 'available', 'available', 'taken', 'available', 'available', 'taken'],
    ['taken', 'available', 'available', 'taken', 'available', 'available', 'available', 'available', 'taken', 'available'],
    ['available', 'available', 'available', 'taken', 'available', 'available', 'available', 'available', 'available', 'available'],
    ['available', 'taken', 'available', 'available', 'available', 'available', 'available', 'taken', 'available', 'available'],
    ['available', 'available', 'taken', 'available', 'available', 'available', 'available', 'available', 'taken', 'available']
  ];

  // Handle seat selection
  const handleSeatClick = (rowIndex, seatIndex) => {
    const isSelected = selectedSeats.some(
      seat => seat.row === rowIndex && seat.index === seatIndex
    );

    setSelectedSeats(prevSeats =>
      isSelected
        ? prevSeats.filter(seat => seat.row !== rowIndex || seat.index !== seatIndex)
        : [...prevSeats, { row: rowIndex, index: seatIndex }]
    );
  };

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen flex flex-col items-center">
      {/* Movie Details Section */}
      <div className="flex items-start space-x-8 max-w-4xl">
        <img
          src="your-movie-poster-url.jpg"
          alt="Movie Poster"
          className="w-48 h-64 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">Ghost In The Shell</h1>
          <p className="mt-2">Director: Rupert Sanders</p>
          <p>Starring: Scarlett Johansson, Pilou Asbæk</p>
          <p>Genre: Action, Crime, Sci-Fi</p>
        </div>
      </div>

      {/* Date and Time Selection */}
      <div className="mt-8 max-w-4xl w-full">
        <h2 className="text-lg font-semibold">Choose Date & Time</h2>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col items-center">
            <p>Thu, 4 May</p>
            <button className="bg-green-600 px-4 py-2 rounded mt-2">20:00</button>
          </div>
          {/* Add more date and time buttons */}
        </div>
      </div>

      {/* Full Seat Layout */}
      <div className="mt-8 max-w-4xl w-full">
        <h2 className="text-lg font-semibold">Select Your Seats</h2>
        <div className="grid grid-cols-10 gap-2 mt-4">
          {seats.map((row, rowIndex) => (
            row.map((seat, seatIndex) => (
              <button
                key={`${rowIndex}-${seatIndex}`}
                className={`w-10 h-10 rounded ${
                  seat === 'taken' 
                    ? 'bg-red-600' 
                    : selectedSeats.some(s => s.row === rowIndex && s.index === seatIndex) 
                    ? 'bg-green-500' 
                    : 'bg-gray-700'
                }`}
                disabled={seat === 'taken'}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              />
            ))
          ))}
        </div>
      </div>

      {/* Legend and Proceed Button */}
      <div className="flex justify-between items-center mt-8 max-w-4xl w-full">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <p>Selected</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-700 rounded"></div>
            <p>Available</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-600 rounded"></div>
            <p>Taken</p>
          </div>
        </div>
        <button className="bg-green-500 px-6 py-2 rounded shadow-lg">proceed</button>
      </div>
    </div>
  );
};

export default SeatSelection;
