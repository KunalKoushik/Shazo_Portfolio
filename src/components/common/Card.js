import React from "react";
import {useNavigate} from "react-router-dom"
import IconBtn from "./IconBtn";
import { useState,useEffect } from "react";
import Testimonial from "../Projects/Testimonial";
const Card = ({ text1,text2,text3,client, linkto,testmonial_video,Testimonialstate,setTestimonialstate}) => {
  const navigate = useNavigate();
  // const [Testmonial, setTestmonial] = useState(false)

  return (
    <div id='projects ' className=" m-2 p-1 w-[100%] mx-auto ">
      <div className=" bg-richblack-700   rounded-md sm:flex-col md:flex-row flex items-center justify-around p-2  sm:gap-4 md:gap-0">
        <div className="  sm:w-full sm: md:w-[55%]">
          <iframe className="md:rounded-xl sm:w-full sm:h-[10rem] sm+:h-[14rem] md:h-[26rem] " src={linkto} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="sm:w-[100%] flex md:h-[26rem] gap-4 justify-between md:w-[43%]  flex-col  p-1 ">
          <div className=" flex text-justify sm:items-center  md:items-start space-x-3 md:flex-row sm:flex-col   ">
            <img className=" sm:rounded-full md:rounded-md sm:h-28  sm:w-28 md:h-56 md:w-52  bg-richblack-900 " src={client} alt="Client" />
            <div className="md:gap-2 md:flex md:flex-col sm:w-[110%] md:w-[22rem] pr-3 flex-wrap ">
            <p className=" text-yellow-50 sm:text-xl md:text-3xl font-bold sm:text-center md:text-justify">{text1}</p>
            <p className=" text-yellow-50 sm:text-center text-start md:text-justify ">{text2}</p>
            <p className="sm:hidden md:flex">{text3}</p>
            </div>
          </div>
          <div className="flex  items-start md:gap-x-4  justify-between md:w-full flex-row  ">
          <IconBtn
          active={false}
          text="Testimonial"
          onclick={() => 
          {
            setTestimonialstate(true);

          }}
        >
        </IconBtn>
        <IconBtn
          active={false}
          text="More Videos"
          onclick={() => 
          {
            navigate("/videos")
          }}
        >
        </IconBtn>
        <div className="sm:hidden md:block">
        <IconBtn
          active={false}
          text="Contact Us"
          onclick={() => 
          {
            navigate("#contact")
          }}
        >
        </IconBtn></div>
          
          </div>
        </div>
      </div>



      {/* component */}
      {
        Testimonialstate && <Testimonial setTestimonialstate={setTestimonialstate} testimonial_video={testmonial_video}  />
      }
      
    </div>
  );
};

export default Card;
