import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Testimonial({ setTestimonialstate, testimonial_video }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-richblack-500  bg-opacity-30  backdrop-blur-3xl ">
      <div className="relative mx-auto flex w-10/12 max-w-maxContent  items-center justify-center gap-2">
        <iframe
          className="md:rounded-xl sm:w-full sm:h-[10rem] sm+:h-[14rem] md:h-[26rem] "
          src={testimonial_video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Link to="/">
          <div className=" relative ">
            <button
              onClick={() => {
                setTestimonialstate(false);
              }}
              className="absolute -translate-y-40  -top-10 left-4   text-yellow-50 "
            >
              <GrClose className="bg-yellow-50 h-8 w-8  " />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
