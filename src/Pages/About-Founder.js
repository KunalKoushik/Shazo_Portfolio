import React from "react";
import IconBtn from "../components/common/IconBtn";
import Intro from "../components/common/Intro";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  useEffect(() => {
    //Runs on every render
  });
  const [Introvideo, setIntrovideo] = useState(false);

  return (
    <div className="">
      {Introvideo ? (
        <Intro setIntrovideo={setIntrovideo} />
      ) : (
        <div
          id="about"
          className="mt-8  text-justify  text-white relative  flex flex-col  items-center gap-4 "
        >
          <div className=" flex gap-x-0 mt-2 md:flex-row sm:flex-col">
            <div className="w-[35%] mt-5 mx-auto flex  flex-col">
              <img src="https://res.cloudinary.com/di9itdore/image/upload/v1707207666/Shazofyne/IMG_20230521_165448_503_f9zz7s.jpg"
              className=" rounded-lg border-2 "
              height={500}
              width={500}
              alt="Shashwat"
              />
            </div>
            <div className="w-[60%]  leading-snug  flex gap-2 flex-col text-lg mt-4 ">
              <strong className=" text-yellow-25  ">
                Hey! Thank you for visiting the website.
              </strong>
              <p className="font-bold mb-2 ">
                Hi I'm <span className=" text-2xl  ">Shashwat </span>,a Smart
                and an Innovative Video Editor based in Ghaziabad, INDIA.
              </p>
              <p>
                I have been editing videos since 2016 , and my passion for
                Creating Videos for brands, agencies, and creators has never
                gone down!
              </p>
              <p>
                I truly believe in the Quality Outputs of the edits that I
                deliver to my clients, and I help them to stand out from the
                crowd!
              </p>
              <p className="mb-2 font-bold ">
                Having a great sense of Design, Color Theory & choosing the the
                Right Music, SFX, Fonts, & Transions, I combine all these
                strengths to pull off a Fantastic Edit, that is always
                appreciated.
              </p>
              <p>
                Apart from Editing videos for clients, I also like to shoot &
                Direct videos for or brands, agencies, and creators, and you
                know what? I manage to ACE in that as well. Have a scroll down
                to checkout my recent work If it appeals you!
              </p>
              <p className="font-bold">
                Feel free to drop me a call / mail, drop down below.
              </p>
              <p className=" flex items-start justify-items-start flex-col">
                <strong className=" text-yellow-25  "> Have a Nice Day! </strong>
                <IconBtn
                  active={false}
                  text="Complete portfolio under 60 seconds"
                  onclick={() => {
                    setIntrovideo(true);
                  }}
                ></IconBtn>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
