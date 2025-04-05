import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MeetMyTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Project Manager",
      imageSrc: "/images/teamslider-img1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      imageSrc: "/images/teamslider-img2.jpg"
    },
    {
      name: "Alice Johnson",
      role: "UI/UX Designer",
      imageSrc: "/images/teamslider-img3.jpg" 
    },
    {
      name: "Michael Brown",
      role: "Backend Developer",
      imageSrc: "/images/teamslider-img4.jpg"
    },
    {
      name: "David Wilson",
      role: "Marketing Specialist",
      imageSrc: "/images/teamslider-img5.jpg"
    },
    {
      name: "Emily Davis",
      role: "Content Strategist",
      imageSrc: "/images/teamslider-img6.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={member.imageSrc} 
                        alt={member.name} 
                        className="w-full h-64 object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex justify-center space-x-3">
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.4-1.83.67-2.828.795 1.017-.608 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}