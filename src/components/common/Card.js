import React from "react";
import { useNavigate } from "react-router-dom";
import IconBtn from "./IconBtn";
import Testimonial from "../Projects/Testimonial";

const Card = ({
  text1,
  text2,
  text3,
  client,
  linkto,
  testmonial_video,
  Testimonialstate,
  setTestimonialstate,
}) => {
  const navigate = useNavigate();
  // const [Testmonial, setTestmonial] = useState(false)

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
        <div className="sm:w-[100%] flex md:h-[26rem] sm+:mt-16 md:mt-0  gap-4 items-start justify-evenly md:w-[44%] text-justify flex-col p-1 ">
          <div className="w-full flex text-justify sm:items-center sm:justify-center md:justify-between md:space-x-3  md:flex-row sm:flex-col ">
            <div className="sm:h-1/2 sm:w-1/2 sm+:h-[30%] sm+:w-[30%] md:h-full md:w-[40%] flex items-center justify-center">
            <img
              className=" rounded-full  bg-richblack-900 "
              src={client}
              alt="Client"
              loading="lazy"
            />
            </div>
            <div className="md:gap-2 md:flex md:flex-col sm:w-[100%]  md:w-[60%] flex-wrap ">
              <p className=" text-yellow-50 sm:text-xl md:text-5xl font-bold sm:text-center md:text-justify">
                {text1}
              </p>
              <p className=" text-yellow-50 sm:text-center text-start mb-2 md:text-justify ">
                {text2}
              </p>

              <div className="flex items-start gap-x-4  justify-between md:w-full flex-row  sm:gapx-2 ">
                <IconBtn
                  active={false}
                  text="Testimonial"
                  onclick={() => {
                    setTestimonialstate(true);
                  }}
                ></IconBtn>
                <IconBtn
                  active={false}
                  text="More Videos"
                  onclick={() => {
                    navigate("/videos");
                  }}
                ></IconBtn>
              </div>
              {/* <div className="sm:hidden md:block">
              <IconBtn
              active={false}
                text="Contact Us"
                onclick={() => {
                  navigate("#contact");
                }}
              ></IconBtn>
            </div> */}
            </div>
          </div>
          <p className="sm:hidden md:flex ">{text3}</p>
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
