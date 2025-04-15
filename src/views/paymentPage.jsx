import React, { useState } from "react";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  
  return (
    <div className="bg-gray-100 min-h-screen pt-16 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Complete Your Payment</h1>
        
        {/* Main Card - Horizontal Layout */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Payment Details */}
          <div className="md:w-2/3 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Details</h2>
            
            {/* Ticket Info Summary */}
            <div className="mb-6 p-3 bg-gray-50 rounded-md border border-gray-200">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-red-500 rounded-md flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-md text-gray-900">Avengers: Endgame</h3>
                  <p className="text-sm text-gray-600">PVR Cinemas • Apr 15, 7:00 PM • Seats: A4, A5</p>
                </div>
              </div>
            </div>
            
            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Payment Method</h3>
              <div className="grid grid-cols-3 gap-3">
                <div 
                  className={`border-2 rounded-md p-3 text-center cursor-pointer transition-all duration-200 ${paymentMethod === "creditCard" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-300"}`}
                  onClick={() => handlePaymentMethodChange("creditCard")}
                >
                  <div className="flex justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${paymentMethod === "creditCard" ? "text-red-500" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className={`text-xs font-medium ${paymentMethod === "creditCard" ? "text-red-600" : "text-gray-600"}`}>Credit Card</span>
                </div>
                
                <div 
                  className={`border-2 rounded-md p-3 text-center cursor-pointer transition-all duration-200 ${paymentMethod === "paypal" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-300"}`}
                  onClick={() => handlePaymentMethodChange("paypal")}
                >
                  <div className="flex justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${paymentMethod === "paypal" ? "text-red-500" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className={`text-xs font-medium ${paymentMethod === "paypal" ? "text-red-600" : "text-gray-600"}`}>PayPal</span>
                </div>
                
                <div 
                  className={`border-2 rounded-md p-3 text-center cursor-pointer transition-all duration-200 ${paymentMethod === "mobilePay" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-300"}`}
                  onClick={() => handlePaymentMethodChange("mobilePay")}
                >
                  <div className="flex justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${paymentMethod === "mobilePay" ? "text-red-500" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className={`text-xs font-medium ${paymentMethod === "mobilePay" ? "text-red-600" : "text-gray-600"}`}>Mobile Pay</span>
                </div>
              </div>
            </div>
            
            {/* Payment Form */}
            {paymentMethod === "creditCard" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 pl-10"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mt-2">
                  <input 
                    type="checkbox" 
                    id="saveCard" 
                    className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
                  />
                  <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
                    Save card for future payments
                  </label>
                </div>
              </div>
            )}
            
            {/* Security Note */}
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your payment information is secure and encrypted
            </div>
            
            {/* Submit Button */}
            <button
              className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
            >
              Pay $32.00
            </button>
            
            {/* Cancel Link */}
            <div className="text-center mt-4">
              <a href="#" className="text-gray-500 hover:text-red-500 text-sm">
                Cancel and return to movie selection
              </a>
            </div>
          </div>
          
          {/* Right Side - Order Summary */}
          <div className="md:w-1/3 bg-gradient-to-b from-red-500 to-red-600 p-6 text-white">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="mb-6">
              <h3 className="font-bold text-lg">Avengers: Endgame</h3>
              <span className="inline-block bg-white text-red-500 font-bold py-1 px-2 rounded text-xs mt-1">PG-13</span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="opacity-90">PVR Cinemas</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="opacity-90">April 15, 2025</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="opacity-90">7:00 PM</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="opacity-90">Seats: A4, A5</span>
              </div>
            </div>
            
            {/* Price Breakdown */}
            <div className="border-t border-white border-opacity-20 pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="opacity-80">Tickets (2)</span>
                <span>$28.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="opacity-80">Convenience Fee</span>
                <span>$4.00</span>
              </div>
              <div className="flex justify-between pt-2 mt-2 border-t border-white border-opacity-20">
                <span className="font-bold">Total Amount</span>
                <span className="font-bold text-lg">$32.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;