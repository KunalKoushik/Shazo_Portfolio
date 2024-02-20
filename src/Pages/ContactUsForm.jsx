import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../Data/countrycode.json";
import { FaArrowRight } from "react-icons/fa";

import { apiConnector } from "../services/apiConnector";
import { mailpoint } from "../services/operation/Auth";
import { useNavigate } from "react-router-dom";

const ContactUsForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true);
      const res = await apiConnector("POST", mailpoint.SENDMAIL_API, data);
      // console.log("Email Res - ", res)
      setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
        instaid: "",
      });
      navigate("/mail");
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className=" relative md:mb-5 md:mt-5 font-mont text-lg mx-auto flex md:flex-row sm:flex-col-reverse w-11/12 max-w-maxContent   justify-evenly md:gap-6 text-white">
      <div>
        {loading ? (
          <div>
            <div className="spinner"></div>
            <p>Please Wait</p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(submitContactForm)}
          >
            <div className="flex flex-col gap-7 xl:flex-row lg:flex-row">
              <div className="flex flex-col gap-2 xl:w-[48%] lg:w-[48%]">
                <label htmlFor="firstname" className="lable-style">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter first name"
                  className="form-style"
                  {...register("firstname", { required: true })}
                />
                {errors.firstname && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your name.
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 xl:w-[48%] lg:w-[48%]">
                <label htmlFor="lastname" className="lable-style">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter last name"
                  className="form-style"
                  {...register("lastname")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="lable-style">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="form-style  text-richblue-900"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Email address.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="lable-style">
                Instagram ID
              </label>
              <input
                type="text"
                name="instaid"
                id="instaid"
                placeholder="Enter Instagram ID"
                className="form-style  text-richblue-900"
                {...register("instaid", { required: true })}
              />
              {errors.instaid && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Instagram ID.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phonenumber" className="lable-style">
                Phone Number
              </label>

              <div className="flex md:gap-5 sm:gap-2">
                <div className=" flex sm:w-[80px] md:w-[120px] flex-col gap-2">
                  <select
                    type="text"
                    // name="firstname"
                    // id="firstname"
                    // placeholder="Enter first name"
                    className="form-style  "
                    {...register("countrycode", { required: true })}
                  >
                    {CountryCode.map((ele, i) => {
                      return (
                        <option key={i} value={ele.code}>
                          {ele.code} -{ele.country}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                  <input
                    type="number"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="12345 67890"
                    className="form-style "
                    {...register("phoneNo", {
                      required: {
                        value: true,
                        message: "Please enter your Phone Number.",
                      },
                      maxLength: { value: 12, message: "Invalid Phone Number" },
                      minLength: { value: 10, message: "Invalid Phone Number" },
                    })}
                  />
                </div>
              </div>
              {errors.phoneNo && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.phoneNo.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="lable-style">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="Enter your message here"
                className="form-style  text-richblue-900"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Message.
                </span>
              )}
            </div>

            <button
              disabled={loading}
              type="submit"
              className={` mx-auto rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
            >
              <div className="flex items-center gap-2">
                SCHEDULE CALL <FaArrowRight />
              </div>
            </button>
          </form>
        )}
      </div>
    
      <div className=" gap-4 md:border-l-2 sm:pb-4 md:p-10 border-richblack-700 md:h-96  mb-2 flex flex-col  ">
        <h2 className="font-bold text-xl text-yellow-50">CONTACT ME</h2>
        <div className="flex flex-col  flex-wrap  gap-1  ">
        <h2>DROP A MAIL AT:</h2>
        <a href="mailto: shashwat.massmedia@gmail.com" className="underline">shashwat.massmedia@gmail.com</a>
        <h2>PHONE NUMBERS:</h2>
        <a href="tel:+91 9131571484">+91 9131571484</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
