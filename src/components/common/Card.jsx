import React from "react";
import { useNavigate  } from "react-router-dom";
// import { useDispatch } from "react-redux";
import IconBtn from "./IconBtn";
import Testimonial from "../Projects/Testimonial";

const Card = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  client,
  linkto,
  testmonial_video,
  Testimonialstate,
  setTestimonialstate,
}) => {
  const navigate = useNavigate();

  return (
    <div id="projects " className=" font-mont m-2 p-1 w-[100%] mx-auto ">
      <div className=" bg-richblack-700  rounded-md sm:flex-col md:flex-row flex items-center justify-between p-2 ">
        <div className=" sm:w-full sm+:h-[10rem] md:h-full md:w-[55%]">
          <iframe
            title={text1}
            className="md:rounded-xl sm:w-full sm:h-[10rem] sm+:h-[14rem] md:h-[26rem] "
            src={linkto}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="sm:w-[90%] flex md:h-[26rem] sm+:mt-16 md:mt-0  gap-4 items-start justify-between md:w-[44%] flex-col text-left p-1 ">
          <div className="w-full flex text-justify sm:items-center sm:justify-center md:justify-between md:space-x-3 flex-row sm:mt-2 md:mt-0 sm:gap-8 md:gap-0 ">
            <div className="sm:hidden md:flex sm:h-1/2 sm:w-1/2 sm+:h-[30%] sm+:w-[30%] md:h-full md:w-[40%] flex items-center justify-center">
              <img
                className=" rounded-full  bg-richblack-900 "
                src={client}
                alt="Client"
                loading="lazy"
              />
            </div>
            <div className="md:gap-2 md:flex md:flex-col sm:w-[100%] md:w-[60%] flex-wrap w-full  ">
              <p className=" text-yellow-50 md:text-left sm:text-xl md:text-4xl font-bold sm:text-center ">
                {text1}
              </p>
              <p className=" text-yellow-50 sm:text-center px-1  md:text-left mb-2  ">
                {text2}
              </p>

              <div className="flex sm:w-[110%] sm:-translate-x-3 md:translate-x-0 items-start gap-x-4  justify-between md:w-full flex-row  sm:gapx-2 ">
                <IconBtn
                  active={false}
                  text="Testimonial"
                  onclick={() => {
                    setTestimonialstate(true);
                  }}
                ></IconBtn>
                <IconBtn
                  active={false}
                  text="More Projects"
                  onclick={() => {
                    navigate("/videos");
                  }}
                ></IconBtn>
              </div>
            </div>
          </div>
          <div className=" w-[95%] translate-x-2 flex items-center justify-center ">
            <ul
              style={{ listStyleType: "disc" }}
              className="translate-x-4 text-left sm:hidden md:block "
            >
              <li>{text3}</li>
              <li>{text4}</li>
              <li>{text5}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* component */}
      {Testimonialstate && (
        <Testimonial
          setTestimonialstate={setTestimonialstate}
          testimonial_video={testmonial_video}
        />
      )}
    </div>
  );
};

export default Card;
