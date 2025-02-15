import React, { useState } from "react";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Seat layout with more seats and an aisle in the middle
  const seats = Array(12).fill(
    ["available", "available", "taken", "available", "available", "available", "aisle", "available", "available", "taken", "available", "available", "available"]
  );

  // Handle seat selection
  const handleSeatClick = (rowIndex, seatIndex) => {
    const isSelected = selectedSeats.some(
      (seat) => seat.row === rowIndex && seat.index === seatIndex
    );

    setSelectedSeats((prevSeats) =>
      isSelected
        ? prevSeats.filter(
            (seat) => seat.row !== rowIndex || seat.index !== seatIndex
          )
        : [...prevSeats, { row: rowIndex, index: seatIndex }]
    );
  };

  return (
    <div className="bg-white text-gray-900 p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Select Your Seats</h1>

      <div className="bg-gray-300 w-3/4 h-8 mb-4 text-center text-black flex items-center justify-center rounded-md shadow">
        SCREEN
      </div>

      {/* Seat Layout */}
      <div className="space-y-1">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.map((seat, seatIndex) => (
              seat === "aisle" ? (
                <div key={seatIndex} className="w-4"></div>
              ) : (
                <button
                  key={`${rowIndex}-${seatIndex}`}
                  className={`w-6 h-6 flex items-center justify-center rounded border transition duration-200 shadow-sm
                    ${
                      seat === "taken"
                        ? "bg-gray-400 border-gray-500 opacity-50 cursor-not-allowed" // Taken seat
                        : selectedSeats.some(
                            (s) => s.row === rowIndex && s.index === seatIndex
                          )
                        ? "bg-green-500 border-green-700 text-white" // Selected seat
                        : "bg-gray-200 border-gray-300 hover:bg-gray-300" // Available seat
                    }
                  `}
                  disabled={seat === "taken"}
                  onClick={() => handleSeatClick(rowIndex, seatIndex)}
                ></button>
              )
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex space-x-4 mt-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded border border-green-700 mr-2"></div>
          <p>Selected</p>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-200 rounded border border-gray-300 mr-2"></div>
          <p>Available</p>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-400 opacity-50 rounded border border-gray-500 mr-2"></div>
          <p>Taken</p>
        </div>
      </div>

      <button className="mt-4 bg-blue-500 px-4 py-1 rounded shadow text-white hover:bg-blue-600">
        Proceed
      </button>
    </div>
  );
};

export default SeatSelection;
