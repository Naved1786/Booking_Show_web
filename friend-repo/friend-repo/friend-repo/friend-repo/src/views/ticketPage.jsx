import React from "react";
import { useLocation } from "react-router-dom";

export default function TicketPage() {

  const location=useLocation();
  const {
    movie = {},
    seats = [],
    seatLabels = [],
    totalPrice = 0,
  } = location.state || {};
  return (
    <div className="max-w-sm mx-auto font-sans pt-20">
      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
        {/* Ticket Header */}
        <div className="bg-blue-600 px-4 py-3 text-white">
          <h2 className="text-xl font-bold">Movie Ticket</h2>
        </div>
        
        {/* Movie Information */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">{movie.title}</h3>
          <p className="text-sm text-gray-600">Cineplex Grand Theater</p>
          <div className="flex justify-between mt-2 text-sm">
            <div>
              <p className="font-medium">April 18, 2025</p>
              <p>7:30 PM • Hall 3</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Seat</p>
              <p>J12</p>
            </div>
          </div>
        </div>
        
        {/* QR Code */}
        <div className="p-4 flex justify-center">
          <div className="bg-white p-2 border border-gray-200 rounded">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* QR Code outer positioning squares */}
              <rect x="10" y="10" width="20" height="20" fill="black" />
              <rect x="13" y="13" width="14" height="14" fill="white" />
              <rect x="16" y="16" width="8" height="8" fill="black" />
              
              <rect x="90" y="10" width="20" height="20" fill="black" />
              <rect x="93" y="13" width="14" height="14" fill="white" />
              <rect x="96" y="16" width="8" height="8" fill="black" />
              
              <rect x="10" y="90" width="20" height="20" fill="black" />
              <rect x="13" y="93" width="14" height="14" fill="white" />
              <rect x="16" y="96" width="8" height="8" fill="black" />
              
              {/* QR Code data pattern - would be generated from actual data */}
              <rect x="40" y="10" width="5" height="5" fill="black" />
              <rect x="55" y="10" width="5" height="5" fill="black" />
              <rect x="65" y="10" width="5" height="5" fill="black" />
              <rect x="75" y="10" width="5" height="5" fill="black" />
              
              <rect x="10" y="40" width="5" height="5" fill="black" />
              <rect x="25" y="40" width="5" height="5" fill="black" />
              <rect x="40" y="40" width="5" height="5" fill="black" />
              <rect x="60" y="40" width="5" height="5" fill="black" />
              <rect x="70" y="40" width="5" height="5" fill="black" />
              <rect x="85" y="40" width="5" height="5" fill="black" />
              <rect x="105" y="40" width="5" height="5" fill="black" />
              
              <rect x="10" y="50" width="5" height="5" fill="black" />
              <rect x="20" y="50" width="5" height="5" fill="black" />
              <rect x="30" y="50" width="5" height="5" fill="black" />
              <rect x="45" y="50" width="5" height="5" fill="black" />
              <rect x="70" y="50" width="5" height="5" fill="black" />
              <rect x="95" y="50" width="5" height="5" fill="black" />
              <rect x="105" y="50" width="5" height="5" fill="black" />
              
              <rect x="10" y="60" width="5" height="5" fill="black" />
              <rect x="25" y="60" width="5" height="5" fill="black" />
              <rect x="40" y="60" width="5" height="5" fill="black" />
              <rect x="50" y="60" width="5" height="5" fill="black" />
              <rect x="65" y="60" width="5" height="5" fill="black" />
              <rect x="80" y="60" width="5" height="5" fill="black" />
              <rect x="90" y="60" width="5" height="5" fill="black" />
              <rect x="105" y="60" width="5" height="5" fill="black" />
              
              <rect x="45" y="70" width="5" height="5" fill="black" />
              <rect x="60" y="70" width="5" height="5" fill="black" />
              <rect x="75" y="70" width="5" height="5" fill="black" />
              <rect x="85" y="70" width="5" height="5" fill="black" />
              <rect x="95" y="70" width="5" height="5" fill="black" />
              
              <rect x="10" y="75" width="5" height="5" fill="black" />
              <rect x="25" y="75" width="5" height="5" fill="black" />
              <rect x="35" y="75" width="5" height="5" fill="black" />
              <rect x="45" y="75" width="5" height="5" fill="black" />
              <rect x="55" y="75" width="5" height="5" fill="black" />
              <rect x="75" y="75" width="5" height="5" fill="black" />
              <rect x="85" y="75" width="5" height="5" fill="black" />
              
              <rect x="40" y="85" width="5" height="5" fill="black" />
              <rect x="50" y="85" width="5" height="5" fill="black" />
              <rect x="60" y="85" width="5" height="5" fill="black" />
              <rect x="70" y="85" width="5" height="5" fill="black" />
              <rect x="95" y="85" width="5" height="5" fill="black" />
              <rect x="105" y="85" width="5" height="5" fill="black" />
              
              <rect x="40" y="95" width="5" height="5" fill="black" />
              <rect x="50" y="95" width="5" height="5" fill="black" />
              <rect x="60" y="95" width="5" height="5" fill="black" />
              <rect x="85" y="95" width="5" height="5" fill="black" />
              <rect x="105" y="95" width="5" height="5" fill="black" />
              
              <rect x="40" y="105" width="5" height="5" fill="black" />
              <rect x="60" y="105" width="5" height="5" fill="black" />
              <rect x="80" y="105" width="5" height="5" fill="black" />
              <rect x="90" y="105" width="5" height="5" fill="black" />
            </svg>
          </div>
        </div>
        
        {/* Ticket Footer */}
        <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-200">
          <p className="text-xs text-gray-500">Order #: TKT-8349261</p>
          <p className="text-xs text-gray-500 mt-1">Enjoy the show!</p>
        </div>
      </div>
    </div>
  );
}