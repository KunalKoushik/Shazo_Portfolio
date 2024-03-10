import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import IconBtn from "../components/common/IconBtn";
import Intro from "../components/common/Intro";
import { useState, useEffect } from "react";

const About = () => {
  useEffect(() => {
    //Runs on every render
  });
  const [introLoading, setintroLoading] = useState(true);
  const [Introstate, setIntrostate] = useState(false);

  return (
    <div className="mt-1 min-w-full flex w-full item-center justify-center font-mont">
       
      {Introstate ? (
        <Intro setIntrostate={setIntrostate} />
        ) : (
          <div className="md:h-[40rem]  w-full h-full  text-justify  text-white flex flex-col  items-center justify-center gap-2  ">
          {/* {introLoading ? (
            <div className="z-50 flex w-full h-full items-center justify-center gap-1 ">
              <ScaleLoader color="#FFD60A" size={150} speedMultiplier={2} />
            </div>
          ) : null} */}
          <iframe
            className={`anim sm:h-[190px] sm:w-[340px] rounded-lg md:h-[95%] md:min-w-[80%]`}
            // height={400}
            // width={500}
            src="https://www.youtube.com/embed/3sZnaoAF0Bw?si=FJWy30zkpOCN-l1H&amp;"
            title="Introduction"
            frameborder="0"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; "
            allowfullscreen="1"
            onLoad={() => setintroLoading(false)}
            preload="auto"
            // loading="lazy"
          ></iframe>


          <div className=" animate-ping ">
          <IconBtn
            active={false}
            text="Know More"
            onclick={() => {
              setIntrostate(true);
            }}
          ></IconBtn>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default About;
