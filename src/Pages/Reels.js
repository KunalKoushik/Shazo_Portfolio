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
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Navigation, FreeMode, Pagination } from "swiper/modules";
import "../index.css";
import Shorts from "../components/common/Shorts";

import { Moreshorts} from "../Data/Video-links";
const Reels = () => {
  const SlideRef1 = useRef();
  const navigate = useNavigate();
  return (
    <div className="mt-0  font-mont mb-2 text-white relative w-11/12 flex  mx-auto flex-col md:gap-8 ">
        
        <div className="flex  gap-2 md:mt-4  w-[100%] ">
          <Swiper
          ref={SlideRef1}
          breakpoints={{
            200:{slidesPerView:1,spaceBetween: 10},
            500: { slidesPerView: 3 , spaceBetween: 10 },
            900:{slidesPerView:5},
          }}
          slidesPerView={5}
          spaceBetween={4}
          loop={true}
          freeMode={true}
          //   navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className=" w-[100%] transition-all duration-75  bg-richblack-900  "
        >
            {Moreshorts.map((link, index) => (
              <SwiperSlide key={index}>
                <Shorts linkto={link?.path} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
     
    </div>
  );
};
export default Reels;
