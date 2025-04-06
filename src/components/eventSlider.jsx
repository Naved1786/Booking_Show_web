import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventSlider = ({ items = [] }) => {
  // Provide a default empty array if items is undefined
  const safeItems = items || [];
  
  // Don't try to render the slider if there are no items
  if (safeItems.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        No items to display
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Slider controls */}
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
        <button className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
          <ChevronLeft size={24} />
        </button>
        <button className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Card slider */}
      <div className="overflow-x-auto pb-4 flex gap-4 snap-x">
        {safeItems.map((item, index) => (
          <div 
            key={item.id || index} 
            className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 snap-start"
          >
            <img 
              src={item.imageUrl || "/api/placeholder/300/150"} 
              alt={item.title || "Event"} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              {item.category && (
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                  {item.category}
                </span>
              )}
              <h3 className="text-lg font-semibold mb-2">{item.title || "Event Title"}</h3>
              <div className="flex flex-col gap-1 text-gray-500 text-sm">
                {item.date && <div>{item.date}</div>}
                {item.location && <div>{item.location}</div>}
              </div>
              {item.price && (
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-medium text-gray-900">{item.price}</span>
                  <button className="px-4 py-1 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700">
                    Book
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSlider;