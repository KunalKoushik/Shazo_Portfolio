import React from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Navigation, FreeMode, Pagination, Scrollbar } from "swiper/modules";
import "../index.css";
import Shorts from "../components/common/Shorts";

import { Moreshorts} from "../Data/Video-links";
const Reels = () => {
  const SlideRef1 = useRef();
  const navigate = useNavigate();
  return (
    <div className="mt-0  font-mont mb-2 text-white relative w-11/12 flex  mx-auto flex-col md:gap-8 ">
        
        <div className="flex items-center justify-center  gap-1 md:mt-4  w-[100%] ">
          <FaArrowCircleLeft
            onClick={() => {
              SlideRef1.current.swiper.slidePrev();
            }}
            className="hover:cursor-pointer  rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]  "
          />
          <Swiper
          ref={SlideRef1}
          breakpoints={{
            200:{slidesPerView:1,spaceBetween: 10},
            500: { slidesPerView: 3 , spaceBetween: 10 },
            900:{slidesPerView:4},
          }}
          slidesPerView={4}
          spaceBetween={4}
          loop={true}
          freeMode={true}
          scrollbar={{ draggable: true }}
          // navigation
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: true,
          // }}
          modules={[FreeMode, Pagination, Navigation,Scrollbar, Autoplay]}
          className=" w-[100%] transition-all duration-75  bg-richblack-900  "
        >
            {Moreshorts.map((link, index) => (
              <SwiperSlide key={index}>
                <Shorts linkto={link?.path} />
              </SwiperSlide>
            ))}
          </Swiper>
          <FaArrowCircleRight
            onClick={() => {
              SlideRef1.current.swiper.slideNext();
            }}
            className="hover:cursor-pointer rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]"
          />
        </div>
     
    </div>
  );
};
export default Reels;
