import React from 'react';

const PaymentDetails = ({ selectedSeats }) => {
  // Calculate total based on seat count and ticket price
  const ticketPrice = 10; // Price per ticket (adjust as needed)
  const total = selectedSeats.length * ticketPrice;

  const handlePayment = () => {
    // Payment logic here
    alert('Proceeding to payment...');
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>

      {/* Selected Seats Summary */}
      <div className="mb-4">
        <p className="text-lg">Selected Seats:</p>
        <div className="flex space-x-2 mt-2">
          {selectedSeats.map((seat, index) => (
            <span
              key={index}
              className="bg-green-500 text-black rounded px-3 py-1"
            >
              Row {String.fromCharCode(65 + seat.row)}, Seat {seat.index + 1}
            </span>
          ))}
        </div>
      </div>

      {/* Price Summary */}
      <div className="flex justify-between items-center border-t border-gray-600 pt-4 mt-4">
        <p className="text-lg">Ticket Price:</p>
        <p>${ticketPrice} per seat</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-lg font-semibold">Total:</p>
        <p className="text-xl font-bold">${total}</p>
      </div>

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        className="bg-green-500 w-full py-3 mt-6 rounded text-white font-semibold hover:bg-green-600"
      >
        
      </button>
    </div>
  );
};
proceed
export default PaymentDetails;
