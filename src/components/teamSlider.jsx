import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function MeetMyTeam() {
  return (
    <section className="meet-my-team py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet My Team</h2>
        <p className="text-lg text-gray-600 mb-8">A team of dedicated professionals working together to achieve our goals.</p>
        
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='w-32 h-80 bg-white flex justify-center items-center'>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Team Member 1" className="rounded-full w-24 h-24 mb-4"/>
              <h3 className="font-semibold text-xl">John Doe</h3>
              <p className="text-sm text-gray-600">Project Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-32 h-80 bg-white flex justify-center items-center'>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Team Member 2" className="rounded-full w-24 h-24 mb-4"/>
              <h3 className="font-semibold text-xl">Jane Smith</h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-32 h-80 bg-white flex justify-center items-center'>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Team Member 3" className="rounded-full w-24 h-24 mb-4"/>
              <h3 className="font-semibold text-xl">Alice Johnson</h3>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-32 h-80 bg-white flex justify-center items-center'>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Team Member 4" className="rounded-full w-24 h-24 mb-4"/>
              <h3 className="font-semibold text-xl">Michael Brown</h3>
              <p className="text-sm text-gray-600">Backend Developer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-32 h-80 bg-white flex justify-center items-center'>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Team Member 5" className="rounded-full w-24 h-24 mb-4"/>
              <h3 className="font-semibold text-xl">David Wilson</h3>
              <p className="text-sm text-gray-600">Marketing Specialist</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-32 h-80 bg-white flex justify-center items-center'>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Team Member 6" className="rounded-full w-24 h-24 mb-4"/>
              <h3 className="font-semibold text-xl">Emily Davis</h3>
              <p className="text-sm text-gray-600">Content Strategist</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
