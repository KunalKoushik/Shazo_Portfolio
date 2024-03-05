import React from "react";
import Button from "../components/common/Button";
import IconBtn from "../components/common/IconBtn";
import Intro from "../components/common/Intro";
import { useState, useEffect } from "react";


const About = () => {
  useEffect(() => {
    //Runs on every render
  });
  const [Introstate, setIntrostate] = useState(false);

  return (
    <div className="mt-4 md:h-[40rem] min-w-full flex w-full item-center justify-center font-mont">
      {Introstate ? (
        <Intro setIntrostate={setIntrostate} />
      ):(
        <div className=" w-full h-full  text-justify  text-white flex flex-col  items-center gap-4 ">
        
        <iframe
          className=" sm:h-[190px] sm:w-[340px] rounded-lg md:h-[95%] md:min-w-[80%]    "
          // height={400}
          // width={500}
          src="https://www.youtube.com/embed/3sZnaoAF0Bw?si=FJWy30zkpOCN-l1H&amp;start=2"
          title="Introduction"
          frameborder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture; "
          allowfullscreen="1"
          // loading="lazy"
          
          ></iframe>
       
        <IconBtn
                  active={false}
                  text="Know More"
                  onclick={() => {
                    setIntrostate(true);
                  }}
                ></IconBtn>
    </div>
      )
      }
    </div>
  );
};

export default About;
