import React from "react";

import { GrClose } from "react-icons/gr";

const Intro = ({ setIntrovideo }) => {
  return (
    <div className="mt-8   text-justify w-full  text-white relative  flex flex-col  items-center gap-4 ">
      <div className=" flex h-[30rem] w-[53rem] relative justify-center item-center ">
        <iframe
          className=" rounded-lg h-[100%] w-[120%] "
          // height={400}
          // width={500}
          src="https://www.youtube-nocookie.com/embed/3sZnaoAF0Bw?si=WtrSkaEMfqtnddkL"
          title="Introduction"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="1"
        ></iframe>
         
        
       </div>
      <button
        onClick={() => {
          setIntrovideo(false);
        }}
        className="absolute right-1 top-1  text-yellow-50 "
      >
        <GrClose className="bg-richblack-5 h-6 w-6  " />
      </button>
    </div>
  );
};

export default Intro;
