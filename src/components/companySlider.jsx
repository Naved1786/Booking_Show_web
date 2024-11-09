import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const companies = [
    {
        companyImg: "./images/company1.png"
    },
    {
        companyImg: "./images/company2.png"
    },
    {
        companyImg: "./images/company3.png"
    },
    {
        companyImg: "./images/company4.png"
    },
    {
        companyImg: "./images/company5.png"
    },
    {
        companyImg: "./images/company6.png"
    },
    {
        companyImg: "./images/company1.png"
    },
    {
        companyImg: "./images/company4.png"
    },
    {
        companyImg: "./images/company2.png"
    },
    {
        companyImg: "./images/company4.png"
    },
]
// import required modules


export default function CompanySlider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mb-10 flex flex-row justify-center items-center"
            >
                
                {companies.map((company)=>
                <SwiperSlide className='w-18 h-40 flex justify-center items-center  hover:bg-stone-300'>
                   <img src={company.companyImg} alt="Company Logo" />

                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
