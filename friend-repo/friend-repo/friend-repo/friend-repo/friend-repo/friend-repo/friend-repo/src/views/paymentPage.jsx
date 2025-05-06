import React, { useState } from "react";
import { CreditCard, Wallet, Smartphone, Calendar, Clock, Star, Building, Info, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get data from location state passed from SeatSelection page
  const { seats = [], movie = {}, totalPrice = 0, seatLabels = [] } = location.state || {};
  
  // Format price for display
  const formatPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  };
  
  // Calculate service fee (e.g., 10% of ticket price)
  const serviceFee = totalPrice * 0.1;
  const finalTotal = totalPrice + serviceFee;
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden">
        {/* Left Side - Payment Details */}
        <div className="md:w-3/4 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Payment Details</h2>
          
          {/* Ticket Info Summary */}
          <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors duration-300 shadow-sm">
            <div className="flex items-center">
              <div className="h-14 w-14 bg-blue-600 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
                </svg>
              </div>
              <div className="ml-5">
                <h3 className="font-bold text-xl text-gray-900">{movie.title || "Movie Title"}</h3>
                <p className="text-sm text-gray-600">
                  {movie.theater || "Theater"} • {movie.showtime || "Showtime"} • 
                  Seats: {seatLabels.join(', ')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Payment Method Selection */}
          <div className="mb-10">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Payment Method</h3>
            <div className="grid grid-cols-3 gap-4">
              <div 
                className={`border-2 rounded-lg p-5 text-center cursor-pointer transition-all duration-200 ${paymentMethod === "creditCard" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                onClick={() => handlePaymentMethodChange("creditCard")}
              >
                <div className="flex justify-center mb-3">
                  <CreditCard className={`h-8 w-8 ${paymentMethod === "creditCard" ? "text-blue-500" : "text-gray-500"}`} />
                </div>
                <span className={`text-sm font-medium ${paymentMethod === "creditCard" ? "text-blue-600" : "text-gray-600"}`}>Credit Card</span>
              </div>
              
              <div 
                className={`border-2 rounded-lg p-5 text-center cursor-pointer transition-all duration-200 ${paymentMethod === "paypal" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                onClick={() => handlePaymentMethodChange("paypal")}
              >
                <div className="flex justify-center mb-3">
                  <Wallet className={`h-8 w-8 ${paymentMethod === "paypal" ? "text-blue-500" : "text-gray-500"}`} />
                </div>
                <span className={`text-sm font-medium ${paymentMethod === "paypal" ? "text-blue-600" : "text-gray-600"}`}>PayPal</span>
              </div>
              
              <div 
                className={`border-2 rounded-lg p-5 text-center cursor-pointer transition-all duration-200 ${paymentMethod === "mobilePay" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                onClick={() => handlePaymentMethodChange("mobilePay")}
              >
                <div className="flex justify-center mb-3">
                  <Smartphone className={`h-8 w-8 ${paymentMethod === "mobilePay" ? "text-blue-500" : "text-gray-500"}`} />
                </div>
                <span className={`text-sm font-medium ${paymentMethod === "mobilePay" ? "text-blue-600" : "text-gray-600"}`}>Mobile Pay</span>
              </div>
            </div>
          </div>
          
          {/* Payment Form */}
          {paymentMethod === "creditCard" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-12 shadow-sm"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <CreditCard className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Info className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mt-2">
                <input 
                  type="checkbox" 
                  id="saveCard" 
                  className="h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label htmlFor="saveCard" className="ml-3 block text-sm text-gray-700">
                  Save card for future payments
                </label>
              </div>
            </div>
          )}
          
          {/* Security Note */}
          <div className="mt-8 flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your payment information is secure and encrypted
          </div>
          
          {/* Submit Button */}
          <button
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-lg"
            onClick={() => navigate('/ticketPage', { 
              state: { 
                movie, 
                seats, 
                seatLabels, 
                totalPrice: finalTotal 
              } 
            })}
          >
            Pay ${formatPrice(finalTotal)}
          </button>
          
          {/* Cancel Link */}
          <div className="text-center mt-6">
            <button 
              className="text-gray-500 hover:text-blue-500 text-sm underline"
              onClick={() => navigate(-1)}
            >
              Cancel and return to seat selection
            </button>
          </div>
        </div>
        
        {/* Right Side - Order Summary (Redesigned as a smaller card) */}
        <div className="md:w-1/4 p-4 flex flex-col justify-center">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white max-w-xs">
            <h2 className="text-xl font-bold mb-5 border-b border-white border-opacity-20 pb-3">Order Summary</h2>
            
            <div className="mb-5">
              <h3 className="font-bold text-lg">{movie.title || "Movie Title"}</h3>
              <span className="inline-block bg-white text-purple-700 font-bold py-1 px-2 rounded-full text-xs mt-2">
                {movie.rating || movie.format || "PG-13"}
              </span>
            </div>
            
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-2" />
                <span>{movie.theater || "Theater"}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{movie.date || "April 16, 2025"}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{movie.showtime || "Showtime"}</span>
              </div>
              
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                <span>Seats: {seatLabels.join(', ')}</span>
              </div>
            </div>
            
            {/* Price Breakdown */}
            <div className="border-t border-white border-opacity-20 pt-3 mt-3 text-sm">
              <div className="flex justify-between mb-2">
                <span className="opacity-80">Tickets ({seats.length})</span>
                <span>${formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="opacity-80">Service Fee</span>
                <span>${formatPrice(serviceFee)}</span>
              </div>
              <div className="flex justify-between pt-3 mt-3 border-t border-white border-opacity-20">
                <span className="font-bold">Total</span>
                <span className="font-bold text-lg">${formatPrice(finalTotal)}</span>
              </div>
            </div>
            
            {/* Ticket Info */}
            <div className="mt-6 bg-white bg-opacity-10 rounded-lg p-3 text-xs">
              <div className="flex items-center mb-1">
                <Info className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Tickets will be sent to your email</span>
              </div>
              <div className="flex items-center">
                <User className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Please bring ID for verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;