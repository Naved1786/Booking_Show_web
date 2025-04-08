import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventSlider = ({ items = [] }) => {
  const safeItems = items || [];

  if (safeItems.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        No items to display
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }}
        spaceBetween={16}
        slidesPerView="auto"
      >
        {safeItems.map((item, index) => (
          <SwiperSlide key={item.id || index} style={{ width: '300px' }}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.imageUrl || '/api/placeholder/300/150'}
                alt={item.title || 'Event'}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                {item.category && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {item.category}
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title || 'Event Title'}
                </h3>
                <div className="flex flex-col gap-1 text-gray-500 text-sm">
                  {item.date && <div>{item.date}</div>}
                  {item.location && <div>{item.location}</div>}
                </div>
                {item.price && (
                  <div className="mt-3 flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {item.price}
                    </span>
                    <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
                      Book Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
        <button className="prev-btn bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
          <ChevronLeft size={24} />
        </button>
        <button className="next-btn bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default EventSlider;
