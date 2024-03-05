import React from "react";
import { useNavigate } from "react-router-dom";



const Reels = ({ view, linkto}) => {
  const navigate = useNavigate();
  return (
    <div className="flex  items-center justify-center  w-full">
      <div className=" gap-4  rounded-md flex sm:items-center md:items-center flex-col-reverse    ">
            
        
        <div className="gap-2 flex flex-col items-center justify-center">
          <div className=" flex sm:gap-1 md:gap-4 items-center justify-center overflow-hidden relative  rounded-md  ">
            {/* <FaArrowCircleLeft onClick={handleprev} className="hover:scale-95 hover:cursor-pointer  rounded-full text-black bg-yellow-50 sm:h-10 sm:w-10 md:h-20 md:w-20"/> */}
            <iframe className="rounded-md md:h-[500px] md:w-[280px]  sm:h-[340px] sm:w-[190px] " src={linkto}  frameborder="0" allow="autoplay;" allowfullscreen  loading="lazy"></iframe>
            
            {/* <FaArrowCircleRight className="hover:scale-95 hover:cursor-pointer  rounded-full text-black bg-yellow-50 sm:h-10 sm:w-10 md:h-20 md:w-20" onClick={handlenext} /> */}
          </div>
        </div>
        

      </div>
        
    </div>
  );
};

export default Reels;
