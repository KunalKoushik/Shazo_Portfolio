import React from "react";


const Intro = ({ setIntrostate }) => {
  return (
    <div
      id="about"
      className=" text-justify  text-white relative  flex flex-col  items-center gap-4 "
    >
      <div className=" flex gap-x-0 md:flex-row sm:flex-col">
        <div className="md:w-[35%] mx-auto flex ">
          <img
            src="https://res.cloudinary.com/di9itdore/image/upload/v1707207666/Shazofyne/IMG_20230521_165448_503_f9zz7s.jpg"
            className=" rounded-lg border-2 "
            height={500}
            width={500}
            loading="lazy"
            alt="Shashwat"
          />
        </div>
        <div className="md:w-[60%]  leading-snug  flex gap-2 flex-col text-lg ">
          <strong className=" text-yellow-25  ">
            Hey! Thank you for visiting the website.
          </strong>
          <p>
            Hi I'm Shashwat, a Smart and an Innovative Video Editor based in
            Ghaziabad, INDIA.
          </p>
          <p>
            I have been editing videos since 2016 , and my passion for Creating
            Videos for brands, agencies, and creators has never gone down! I
            truly believe in the Quality Outputs of the edits that I deliver to
            my clients, and I help them to stand out from the crowd!
            <br></br>
            <strong>
              Having a great sense of Design, Color Theory & choosing the the
              Right Music, SFX, Fonts, & Transions, I combine all these
              strengths to pull off a Fantastic Edit, that is always
              appreciated.
            </strong>
          </p>
          <p>
            Apart from Editing videos for clients, I also like to shoot & Direct
            videos for or brands, agencies, and creators, and you know what? I
            manage to ACE in that as well. Have a scroll down to checkout my
            recent work If it appeals you!
          </p>
          <p className="font-bold">
            Feel free to drop me a call / mail, drop down below.
          </p>
          <p className=" flex items-start justify-items-start flex-col">
            <strong className=" text-yellow-25 mb-2  ">
              {" "}
              Have a Nice Day!{" "}
            </strong>
            <button
              className="hover:shadow-none hover:scale-95 transition-all duration-200 bg-richblack-700  font-mont flex items-baseline justify-center item-center md:gap-2 sm:gap-0 rounded-md text-center md:text-[20px] sm:text-[15px] sm:px-2 sm:py-2 md:px-6 md:py-3 font-bold md:w-[21%] "
              onClick={() => {
                setIntrostate(false);
              }}
            >
              Back
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
