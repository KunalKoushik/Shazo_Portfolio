import React from "react";
import { Link } from "react-router-dom";
import {FaArrowRight } from "react-icons/fa";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={` font-mont flex items-baseline justify-center item-center gap-2 rounded-md text-center text-[13px] sm:text-[16px] px-6 py-4 font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}  
      </div>
    </Link>
  );
};

export default Button;
