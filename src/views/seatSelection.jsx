import React, { useState } from "react";
import { Check, X, Info, ChevronsRight } from "lucide-react";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [hoveredSeat, setHoveredSeat] = useState(null);

  // Creating a more realistic theater layout with rows labeled A-L
  const rowLabels = "ABCDEFGHIJKL".split("");
  
  // Seat layout with more realistic patterns (some clusters of taken seats)
  const seats = [
    ["available", "available", "available", "taken", "taken", "available", "aisle", "available", "available", "available", "taken", "available", "available"],
    ["available", "available", "taken", "taken", "available", "available", "aisle", "available", "taken", "available", "available", "available", "available"],
    ["available", "available", "available", "available", "available", "available", "aisle", "available", "available", "available", "available", "available", "available"],
    ["taken", "taken", "available", "available", "available", "available", "aisle", "taken", "taken", "taken", "available", "available", "available"],
    ["available", "available", "available", "available", "taken", "taken", "aisle", "available", "available", "taken", "taken", "available", "available"],
    ["available", "available", "available", "taken", "available", "available", "aisle", "available", "available", "available", "available", "available", "taken"],
    ["available", "taken", "available", "available", "available", "available", "aisle", "available", "available", "taken", "available", "available", "available"],
    ["available", "available", "available", "available", "available", "available", "aisle", "taken", "taken", "available", "available", "available", "available"],
    ["taken", "available", "available", "available", "available", "available", "aisle", "available", "available", "available", "taken", "taken", "taken"],
    ["available", "available", "taken", "taken", "available", "available", "aisle", "available", "available", "available", "available", "available", "available"],
    ["available", "available", "available", "available", "available", "taken", "aisle", "taken", "taken", "available", "available", "available", "available"],
    ["available", "available", "available", "taken", "available", "available", "aisle", "available", "available", "available", "taken", "available", "available"]
  ];

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

  // Get seat number (combine row letter with seat number)
  const getSeatLabel = (rowIndex, seatIndex) => {
    // Calculate real seat number accounting for aisle
    const realSeatIndex = seatIndex >= 6 ? seatIndex : seatIndex + 1;
    return `${rowLabels[rowIndex]}${realSeatIndex}`;
  };

  return (
    <div className="pt-20 bg-gray-50 text-gray-900 p-6 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Select Your Seats</h1>
        
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 w-full h-10 mb-1 text-center text-white flex items-center justify-center rounded-md shadow">
            SCREEN
          </div>
          <div className="h-16 w-full bg-gradient-to-b from-gray-200 opacity-50"></div>
        </div>

        {/* Seat Layout */}
        <div className="space-y-2 mb-8">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1 items-center">
              {/* Row label */}
              <div className="w-6 text-center font-bold text-blue-800">
                {rowLabels[rowIndex]}
              </div>
              
              {row.map((seat, seatIndex) => (
                seat === "aisle" ? (
                  <div key={seatIndex} className="w-6 flex justify-center text-xs text-gray-400">↔</div>
                ) : (
                  <button
                    key={`${rowIndex}-${seatIndex}`}
                    className={`w-8 h-8 flex items-center justify-center rounded-md transition duration-200 shadow-sm
                      ${
                        seat === "taken"
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed" // Taken seat
                          : selectedSeats.some(
                              (s) => s.row === rowIndex && s.index === seatIndex
                            )
                          ? "bg-blue-600 text-white hover:bg-blue-700" // Selected seat
                          : "bg-white border border-gray-300 hover:bg-blue-100 hover:border-blue-300" // Available seat
                      }
                    `}
                    disabled={seat === "taken"}
                    onClick={() => handleSeatClick(rowIndex, seatIndex)}
                    onMouseEnter={() => setHoveredSeat({ row: rowIndex, index: seatIndex })}
                    onMouseLeave={() => setHoveredSeat(null)}
                  >
                    {seat === "taken" ? (
                      <X size={16} />
                    ) : selectedSeats.some(
                        (s) => s.row === rowIndex && s.index === seatIndex
                      ) ? (
                      <Check size={16} />
                    ) : (
                      ""
                    )}
                  </button>
                )
              ))}
              
              {/* Row label (right side) */}
              <div className="w-6 text-center font-bold text-blue-800">
                {rowLabels[rowIndex]}
              </div>
            </div>
          ))}
        </div>

        {/* Hover info */}
        {hoveredSeat && (
          <div className="text-center mb-4 text-sm">
            <span className="font-medium">
              Seat {getSeatLabel(hoveredSeat.row, hoveredSeat.index)}
              {seats[hoveredSeat.row][hoveredSeat.index] === "taken" ? 
                " - Already taken" : 
                selectedSeats.some(s => s.row === hoveredSeat.row && s.index === hoveredSeat.index) ?
                " - Selected" : " - Available"}
            </span>
          </div>
        )}

        {/* Legend */}
        <div className="flex justify-center space-x-6 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white mr-2">
              <Check size={14} />
            </div>
            <p>Selected</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-white rounded-md border border-gray-300 mr-2"></div>
            <p>Available</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-md flex items-center justify-center text-gray-500 mr-2">
              <X size={14} />
            </div>
            <p>Taken</p>
          </div>
        </div>

        {/* Selected seats summary */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center mb-2">
            <Info size={16} className="text-blue-600 mr-2" />
            <h3 className="font-bold">Your Selection</h3>
          </div>
          
          {selectedSeats.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map((seat) => (
                <span key={`selected-${seat.row}-${seat.index}`} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {getSeatLabel(seat.row, seat.index)}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm">No seats selected yet</p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
            onClick={() => setSelectedSeats([])}
          >
            Clear
          </button>
          
          <button 
            className={`flex items-center gap-2 px-6 py-2 rounded shadow text-white transition-colors ${
              selectedSeats.length > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedSeats.length === 0}
          >
            Continue <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;