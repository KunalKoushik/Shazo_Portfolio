import React from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

const Logo = () => {
  return (
    <div>
      <div className="logo sm:hidden lg:flex">
        <img src={logo1} alt="img"></img>
      </div>
      <div className="logo sm:flex lg:hidden">
        <img src={logo2} alt="img"></img>
      </div>
      
    </div>
  );
};

export default Logo;
