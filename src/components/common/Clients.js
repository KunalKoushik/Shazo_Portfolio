import React from "react";
import { ClientDetails } from "../../Data/clientdetails";

const Clients = () => {
  return (
    <div className=" flex flex-col items-center justify-center relative z-2 ">
      <h1 className=" md:w-auto font-bold mb-2 text-black  bg-yellow-50 rounded-md p-3 text-6xl  ">
        Clients
      </h1>
      <div className="flex sm:flex-wrap md:items-center sm:justify-center md:justify-around  md:w-[100%] mt-2 sm:gap-4">

      {ClientDetails.map((link, index)=>(
        <div key={index} className=" rounded-full sm:w-[40%]  sm:h-[20%] md:h-[80%] md:w-[16%] space-y-2 ">
          <img src={link?.image} className=" h-[100%] bg-richblack-800  rounded-full " alt={link?.title} />
          <p className="text-center mt-1 text-yellow-50  font-bold md:text-2xl  ">{link?.title}</p>
          <p className="text-center mt-1 md:text-xl  ">{link?.Sub}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Clients;
