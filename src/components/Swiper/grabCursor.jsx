import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const GrabCursor = ({children})=> {
  return (
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pl-2 w-full h-[200px]"
      >
        {children}
      </Swiper>
  );
}

export default GrabCursor 