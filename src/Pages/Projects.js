import React from "react";
import { useRef, useState } from "react";
import IconBtn from "../components/common/IconBtn";
import { CardLinks, ShortLinks } from "../Data/card-links";
import Card from "../components/common/Card";
import Reels from "../components/common/Reels";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
const Projects = () => {
  const [Testimonialstate, setTestimonialstate] = useState(false);
  const SlideRef = useRef();
  const SlideRef1 = useRef();
  const navigate = useNavigate();
  return (
    <div
      id="projects"
      className=" text-center w-[100%] font-mont text-lg flex flex-col items-center justify-center  gap-4 "
    >
      {/* Youtube Project Section */}

      <h1 className="w-full md:w-auto font-bold  text-black  bg-yellow-50 rounded-md sm:p-2 md:p-3 md:full  sm:text-3xl md:text-6xl  ">
        YouTube Projects
      </h1>

      <div className=" sm:w-[115%] md:w-[110%] flex items-center justify-center ">
        <FaArrowCircleLeft
          onClick={() => {
            SlideRef1.current.swiper.slidePrev();
            setTestimonialstate(false);
          }}
          className="hover:scale-90 hover:cursor-pointer  rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]  "
        />
        <Swiper
          ref={SlideRef1}
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          
          // autoplay={{
          //   delay: 9000,
          //   disableOnInteraction: false,
          // }}

          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className=" w-[100%]   "
        >
          {CardLinks.map((link, index) => (
            <SwiperSlide key={index}>
              <Card
                linkto={link.path}
                text1={link.title[0].p1}
                text2={link.title[0].p2}
                text3={link.title[0].p3}
                text4={link.title[0].p4}
                text5={link.title[0].p5}
                client={link.image}
                testmonial_video={link.testimonial_video}
                setTestimonialstate={setTestimonialstate}
                Testimonialstate={Testimonialstate}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <FaArrowCircleRight
          onClick={() => {
            SlideRef1.current.swiper.slideNext();
            setTestimonialstate(false);
          }}
          className="hover:scale-90 hover:cursor-pointer rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]"
        />
      </div>

      {/* Shorts project Section */}

      <h1 className="  mt-4 font-bold  text-black  bg-yellow-50 mb-2 rounded-md sm:px-6 sm:p-3 md:p-3 sm:w-full md:w-fit sm:text-3xl md:text-6xl  ">
        Shorts Projects
      </h1>
      <div className="w-full flex items-center ">
        <FaArrowCircleLeft
          onClick={() => {
            SlideRef.current.swiper.slidePrev();
          }}
          className="hover:scale-95 hover:cursor-pointer  rounded-full text-black md:translate-x-14  bg-yellow-50 sm:h-10 sm:w-10 md:h-[4rem]  md:w-[4rem]"
        />
        <Swiper
          ref={SlideRef}
          slidesPerView={3}
          spaceBetween={25}
          breakpoints={{
            200: { slidesPerView: 1, spaceBetween: 10 },
            500: { slidesPerView: 2, spaceBetween: 10 },
            900: { slidesPerView: 3 },
          }}
          loop={true}
          freeMode={true}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="mt-0 w-[75%] "
        >
          {ShortLinks.map((link, index) => (
            <SwiperSlide key={index}>
              <Reels linkto={link.path} view={link.views} />
            </SwiperSlide>
          ))}
        </Swiper>
        <FaArrowCircleRight
          onClick={() => {
            SlideRef.current.swiper.slideNext();
          }}
          className="hover:scale-95 hover:cursor-pointer  rounded-full text-black bg-yellow-50 md:-translate-x-14 sm:h-10 sm:w-10 md:h-[4rem]  md:w-[4rem]"
        />
      </div>
      <IconBtn
        active={false}
        text="More Engaging Projects"
        onclick={() => {
          navigate("/videos");
        }}
      ></IconBtn>
    </div>
  );
};

export default Projects;
