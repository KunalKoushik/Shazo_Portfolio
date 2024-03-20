import React from "react";
import { useNavigate } from "react-router-dom";

const Shorts = ({ view, linkto }) => {
  const navigate = useNavigate();
  return (
    <div className="flex  items-center justify-center  w-full">
      <div className=" gap-4  border rounded-md flex sm:items-center md:items-center flex-col-reverse    ">
        <div className=" flex sm:gap-1 md:gap-4 items-center justify-center overflow-hidden relative  rounded-md  ">
          
          <iframe
            className="rounded-md md:h-[500px] md:w-[280px]  sm:h-[340px] sm:w-[190px] "
            src={linkto}
            frameborder="0"
            allow="autoplay;"
            allowfullscreen
            loading="lazy"
          ></iframe>

          </div>
      </div>
    </div>
  );
};

export default Shorts;
