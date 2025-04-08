import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, IndianRupee, Heart, Share2, User } from "lucide-react";
import { useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const event = location.state?.data
  // const event = location.state?.event || location.state?.data || {
  //   title: "Comedy Night with Gaurav Kapoor",
  //   category: "Comedy",
  //   date: "Apr 15, 2025",
  //   time: "8:00 PM",
  //   location: "The Comedy Club, Delhi",
  //   price: "₹499 onwards",
  //   backgroundImageUrl: "/api/placeholder/1200/600",
  //   imageUrl: "/api/placeholder/200/200",
  //   description: "Come and enjoy the super relatable and super funny, Gaurav Kapoor in his live show. One of the funniest and most prolific stand-up acts in the country..."
  // };

  return (
    <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-3 gap-8 pt-20">
      {/* Left Section */}
      <div className="lg:col-span-2 space-y-8">
        {/* Banner */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={event.backgroundImageUrl}
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        
        {/* Title and Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition">
              <Heart className="w-5 h-5" />
              <span>Interested</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Tags & Category */}
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 text-sm bg-gray-100 text-gray-800 font-medium rounded-full">
            {event.category}
          </span>
          <span className="px-4 py-1.5 text-sm bg-gray-100 text-gray-800 font-medium rounded-full">
            Entertainment
          </span>
          <span className="px-4 py-1.5 text-sm bg-gray-100 text-gray-800 font-medium rounded-full">
            Live Show
          </span>
        </div>
        
        {/* About */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">About The Event</h2>
          <p className="text-gray-700 leading-relaxed">
            {event.description}
          </p>
        </div>
        
        {/* Artists */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Featured Artist</h3>
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={event.imageUrl}
                alt="Gaurav Kapoor"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full">
                <User className="w-3 h-3" />
              </div>
            </div>
            <div>
              <p className="font-medium text-lg">Gaurav Kapoor</p>
              <p className="text-gray-500">Comedian & Actor</p>
              <p className="text-sm text-gray-600 mt-1">
                Known for his hilarious takes on everyday life
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Booking Section */}
      <div className="lg:col-span-1">
        <div className="bg-white border rounded-xl p-6 space-y-6 shadow-md sticky top-24">
          <div className="pb-4 border-b">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-500 mt-1">Presented by Event Company</p>
          </div>
          
          {/* Date & Time */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="w-5 h-5 text-gray-500" />
              <span>{event.time}</span>
            </div>
            
            {/* Venue */}
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <span>{event.location}</span>
                <p className="text-sm text-gray-500 mt-0.5">View on map</p>
              </div>
            </div>
          </div>
          
          {/* Price */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <IndianRupee className="w-5 h-5" />
              <span className="text-xl">{event.price}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              *Including all taxes and fees
            </p>
          </div>
          
          {/* Book Now Button */}
          <Button className="w-full py-6 text-lg font-semibold bg-pink-600 hover:bg-pink-700">
            Book Now
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Only a few seats left! Book before they sell out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;