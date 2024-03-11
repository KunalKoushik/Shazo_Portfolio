import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import IconBtn from "../components/common/IconBtn";
import Intro from "../components/common/Intro";
import { motion } from "framer-motion";
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
        <div
          className="md:h-[40rem]  w-full h-full  text-justify  text-white flex flex-col  items-center justify-center gap-2  "
        >
          
          <motion.div className="sm:h-[300px] sm:w-[100%] rounded-lg md:h-[95%] md:min-w-[80%]"
            initial ={{ opacity: 0 ,x: ' 100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition = {{ delay: 0, duration: 2 }}
            >
            <iframe
              className={`rounded-lg h-full min-w-full`}
              src="https://www.youtube.com/embed/3sZnaoAF0Bw?si=FJWy30zkpOCN-l1H&amp;"
              title="Introduction"
              frameborder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture; "
              allowfullscreen="1"
              onLoad={() => setintroLoading(false)}
              preload="auto"
              // loading="lazy"
            ></iframe>
          </motion.div>

          <div className=" animate-zoom ">
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
