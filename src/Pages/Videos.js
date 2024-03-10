import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import {
  Gabebultvideos,
  Faaresqvideos,
  loststonervideos,
  sortedtalkvideos,
  mobrobvideos
} from "../Data/Video-links";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Navigation, FreeMode, Pagination } from "swiper/modules";
//images
const GB = "https://res.cloudinary.com/di9itdore/image/upload/v1707212059/Shazofyne/Logos/gabe_wtwfqu.jpg";
const FQ = "https://res.cloudinary.com/di9itdore/image/upload/v1707212059/Shazofyne/Logos/Faares_Q_fqch8o.jpg";
const LS = "https://res.cloudinary.com/di9itdore/image/upload/v1707212066/Shazofyne/Logos/loststoner_od7a21.png";
const ST = "https://res.cloudinary.com/di9itdore/image/upload/v1707212057/Shazofyne/Logos/Sorted_Talks_Logo_lwqpwv.png";
const MR = "https://res.cloudinary.com/di9itdore/image/upload/v1707212062/Shazofyne/Logos/mobrob_yecgyh.jpg";

const Videos = () => {
  const SlideRef1 = useRef();
  const SlideRef2 = useRef();
  const SlideRef3 = useRef();
  const SlideRef4 = useRef();
  const SlideRef5 = useRef();
  return (
    <div className="font-mont text-white relative w-11/12 flex items-center justify-center mx-auto flex-col gap-8 ">
      <div className="flex sm:flex-wrap h-[15rem] items-center sm:justify-center md:justify-around  md:w-[80%] mt-4 sm:gap-4">
        <Link className="rounded-full sm:h-[30%] md:h-[80%]" to={"#1"}>
          <img src={GB} className="rounded-full h-[100%]" alt="Gabe Bult" loading="lazy"/>
        <p className="text-center mt-1 md:text-xl ">Gabe Bult</p>
        </Link>
        <Link className="rounded-full sm:h-[30%] md:h-[80%]" to={"#2"}>
          <img src={FQ} className="rounded-full h-[100%] " alt="Farees Q"  loading="lazy" />
        <p className="text-center mt-1 md:text-xl ">Faares Q</p>
        </Link>
        <Link className="rounded-full sm:h-[30%] md:h-[80%]" to={"#3"}>
          <img src={LS} className="rounded-full h-[100%] " alt="Loststoner"  loading="lazy"/>
        <p className="text-center mt-1 md:text-xl ">Loststoner</p>
        </Link>
        <Link className="rounded-full sm:h-[30%] md:h-[80%]" to={"#4"}>
          <img
            src={ST}
            className="rounded-full h-[100%] bg-richblack-800 "
            alt=" Sorted Talk"
            loading="lazy"
          />
        <p className="text-center mt-1 md:text-xl ">Sorted Talk</p>
        </Link>
        <Link className="rounded-full sm:h-[30%] md:h-[80%]" to={"#5"}>
        <img src={MR} className="rounded-full h-[100%] " alt="MobRob"  loading="lazy"/>
        <p className="text-center mt-1 md:text-xl ">MobRob</p>
        </Link>
      </div>
      <section
        id="1"
        className="flex flex-col  w-[95%] mx-auto my-auto gap-4"
      >
        <h2 className="text-black  bg-yellow-50 sm:text-3xl md:text-6xl text-center font-bold m-2 ">GABE BULT</h2>
        <div className="  z-2 flex  gap-2 justify-center mx-auto items-center  w-[100%] ">
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
              900:{slidesPerView:3},
            }}
            slidesPerView={3}
            spaceBetween={2}
            loop={true}
            freeMode={true}
            //   navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className=" w-[100%] transition-all duration-75  bg-richblack-900  "
          >
            {Gabebultvideos.map((link, index) => (
              <SwiperSlide key={index}>
                <div className="text-xl flex flex-col items-center">
                  <iframe
                    className="px-1 sm:w-full sm:h-full md:h-[230px] md:w-[420px] rounded-xl"
                    src={link?.path}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
                  <p>{link?.views}</p>
                </div>
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
      </section>
      <section
        id="2"
        className=" flex flex-col w-[95%] mx-auto my-auto gap-4 "
      >
        <h2 className="text-black  bg-yellow-50 sm:text-3xl md:text-6xl text-center m-2 font-bold ">FAARES Q</h2>
        <div className="  z-2 flex gap-2 justify-center mx-auto items-center  w-[100%]  ">
          <FaArrowCircleLeft
            onClick={() => {
              SlideRef2.current.swiper.slidePrev();
            }}
            className="md:hidden sm:block hover:cursor-pointer  rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]  "
          />
          <Swiper
            ref={SlideRef2}
            slidesPerView={3}
            spaceBetween={2}
            breakpoints={{
              200:{slidesPerView:1,spaceBetween: 10},
              900:{slidesPerView:3},
            }}
            loop={true}
            freeMode={true}
            //   navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className=" w-[100%] transition-all duration-75   "
          >
            {Faaresqvideos.map((link, index) => (
              <SwiperSlide key={index}>
              <div className="text-xl flex flex-col items-center">
                  <iframe
                    className="px-1 sm:w-full sm:h-full md:h-[230px] md:w-[420px] rounded-xl "
                    src={link?.path}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
                  <p>{link?.views}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FaArrowCircleRight
            onClick={() => {
              SlideRef2.current.swiper.slideNext();
            }}
            className="md:hidden sm:block  hover:cursor-pointer rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]"
          />
        </div>
      </section>
      <section
        id="3"
        className="  flex flex-col w-[95%] mx-auto my-auto gap-4 "
      >
        <h2 className="text-black  bg-yellow-50 sm:text-3xl md:text-6xl text-center m-2 font-bold ">LOSTSTONER</h2>
        <div className="  z-2 flex gap-2 justify-center mx-auto items-center  w-[100%] ">
          <FaArrowCircleLeft
            onClick={() => {
              SlideRef3.current.swiper.slidePrev();
            }}
            className="hover:cursor-pointer  rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]  "
          />
          <Swiper
            ref={SlideRef3}
            breakpoints={{
              200:{slidesPerView:1,spaceBetween: 10},
              900:{slidesPerView:3},
            }}
            slidesPerView={3}
            spaceBetween={2}
            loop={true}
            freeMode={true}
            //   navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className=" w-[100%] transition-all duration-75   "
          >
            {loststonervideos.map((link, index) => (
              <SwiperSlide key={index}>
              <div className="text-xl flex flex-col items-center">
                  <iframe
                    className="px-1 sm:w-full sm:h-full md:h-[230px] md:w-[420px] rounded-2xl "
                    src={link?.path}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
                  <p>{link?.views}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FaArrowCircleRight
            onClick={() => {
              SlideRef3.current.swiper.slideNext();
            }}
            className="hover:cursor-pointer rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]"
          />
        </div>
      </section>
      
      <section
        id="5"
        className=" flex flex-col w-[95%] mx-auto my-auto gap-4 "
      >
        <h2 className="text-black  bg-yellow-50 sm:text-3xl md:text-6xl text-center m-2 font-bold">MOBROB</h2>
        <div className="  z-2 flex gap-2 justify-center mx-auto items-center  w-[100%] ">
          <FaArrowCircleLeft
            onClick={() => {
              SlideRef5.current.swiper.slidePrev();
            }}
            className="md:hidden sm:block hover:cursor-pointer  rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]  "
          />
          <Swiper
            ref={SlideRef5}
            breakpoints={{
              200:{slidesPerView:1,spaceBetween: 10},
              900:{slidesPerView:3},
            }}
            slidesPerView={3}
            spaceBetween={2}
            loop={true}
            freeMode={true}
            //   navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className=" w-[100%] transition-all duration-75   "
          >
            {mobrobvideos.map((link, index) => (
              <SwiperSlide key={index}>
              <div className="text-xl flex flex-col items-center">
                  <iframe
                    className="px-1 sm:w-full sm:h-full md:h-[230px] md:w-[420px] rounded-xl"
                    src={link?.path}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
                  <p>{link?.views}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FaArrowCircleRight
            onClick={() => {
              SlideRef5.current.swiper.slideNext();
            }}
            className="hover:cursor-pointer md:hidden sm:block rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]"
          />
        </div>
      </section>
      <section
        id="4"
        className="  flex flex-col w-[95%] mx-auto my-auto gap-4 "
      >
        <h2 className="text-black  bg-yellow-50 sm:text-3xl md:text-6xl text-center m-2 font-bold">PODCASTS</h2>
        <div className="  z-2 flex gap-2 justify-center mx-auto items-center  w-[100%] ">
          <FaArrowCircleLeft
            onClick={() => {
              SlideRef4.current.swiper.slidePrev();
            }}
            className="hover:cursor-pointer sm:flex md:hidden rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]  "
          />
          <Swiper
            ref={SlideRef4}
            breakpoints={{
              200:{slidesPerView:1,spaceBetween: 10},
              900:{slidesPerView:3},
            }}
            slidesPerView={3}
            spaceBetween={2}
            loop={true}
            freeMode={true}
            //   navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className=" w-[100%] transition-all duration-75   "
          >
            {sortedtalkvideos.map((link, index) => (
              <SwiperSlide key={index}>
              <div className="text-xl flex flex-col items-center">
                  <iframe
                    className="px-1 sm:w-full sm:h-full md:h-[230px] md:w-[420px] rounded-xl"
                    src={link?.path}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
                  {/* <p>{link?.views}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FaArrowCircleRight
            onClick={() => {
              SlideRef4.current.swiper.slideNext();
            }}
            className="hover:cursor-pointer sm:flex md:hidden rounded-full text-black bg-yellow-50 sm:h-[2.3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.5rem]"
          />
        </div>
      </section>
      
    </div>
  );
};

export default Videos;
