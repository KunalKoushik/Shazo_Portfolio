import React, { useState , } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../Data/navbar-links";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  
  const [Open, setOpen] = useState(false);
  const handlemenu = () => {
    setOpen((prev) => !prev);
    console.log(Open);
  };
  
  // window.addEventListener('scroll',changeBackground);
  const location = useLocation();
  const matchRoute = (route) => {
    if (route === location.hash) {
      return true; 
    }
    else{
      return false;
    }
  };
  const navbarStyles = {
    // position: 'fixed',
    height: '8%',
    width: '100%',
    backgroundColor: 'richblack-700',
    textAlign: 'center',
    // new:
    transition: 'top 0.6s',
    zIndex : '10'
  }

  return (
    <div
      style={{...navbarStyles }}
      className=" bg-richblack-600 "
    
    >
      <div className=" mb-0  mx-auto px-4   sm:px-6 lg:px-8 ">
        <div className=" flex items-center mx-auto justify-evenly  h-14  ">
          <div className=" md:translate-x-32 sm:translate-x-4   text-yellow-50 rounded-md font-bold sm:text-xl md:text-3xl items-baseline">
            {/* logo */}
            <Link to={"/"}>
              <p> Shashwat Prajapati</p>
            </Link>
          </div>
          <Link to={"/"}>
          <div className={`p-2  translate-x-4 md:text-2xl text-richblack-25 hover:bg-richblack-900 hover:text-yellow-50  rounded-md items-baseline
                                                transition-all duration-500 
          ${matchPath({ path: "/videos" }, location.pathname)
                            ? "block"
                            : "hidden"
                        }`}>
            Home
          </div>
          </Link>

          <div className={`${
            matchPath({ path: "/videos" }, location.pathname)
                            ? "hidden"
                            : "flex"
                        }`}>
            <nav className="hidden md:block">
              <ul
                className={` flex gap-x-11   text-richblack-25 items-baseline `}
              >
                {NavbarLinks.map((link, index) => (
                  <li
                    key={index}
                    className="p-2 text-2xl hover:bg-richblack-900 hover:text-yellow-25  rounded-md 
                                                transition-all duration-500 "
                  >
                    <Link to={link?.path}>
                      <p
                      >
                        {link.title}
                      </p>
                    </Link>
                    
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={`${matchPath({ path: "/videos" }, location.pathname)
                            ? "hidden"
                            : "block"
                        } absolute right-2 top-3 -mr-2 flex md:hidden `}>
            <button
              type="button"
              onClick={handlemenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-caribbeangreen-5
                          hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 
                          focus:ring-offset-black focus:ring-white"
            >
              {Open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile */}
      {Open ? (
        <div className=" block md:hidden p-0 m-0 bg-richblack-600 transition-all duration-500 ease ">
          <nav className="flex flex-col pt-2 ox-2 pb-3 space-y-4 sm:px-3 gap-x-4 ">
            {NavbarLinks.map((link, index) => (
              <a
                key={index}
                className="hover:bg-richblack-700 hover:text-yellow-50 rounded-md 
                                                transition-all duration-500 "
              >
                <Link to={link?.path}>
                  <p
                  >
                    {link.title}
                  </p>
                </Link>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default Nav;
