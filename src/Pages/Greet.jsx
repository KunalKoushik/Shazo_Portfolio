import React from "react";
import Button from "../components/common/Button";
const Greet = () => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">

      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">

        <div className=" p-4 flex gap-y-4 flex-col text-white font-mont flex-1 justify-center items-center text-3xl">
          Thank You For Showing your Intrest.{" "}
          <span className="font-medium text-caribbeangreen-50">
            We will get back to you soon
          </span>
          <p>Check your Mail</p>
          <Button active={true} linkto={"/"}>
            <p className=" text-xl font-semibold ">Continue</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Greet;
