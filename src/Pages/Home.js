import React from "react";
import Button from "../components/common/Button";
import ScaleLoader from "react-spinners/ScaleLoader";
import { lazy, Suspense, useEffect, useState } from "react";
import ContactUsForm from "./ContactUsForm";

const About = lazy(() => import("../Pages/About-Founder"));
const Projects = lazy(() => import("./Projects"));
const Clients = lazy(() => import("../components/common/Clients"));
function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[100vh] w-full items-center justify-center ">
          <ScaleLoader color="#FFD60A" size={30} />
        </div>
      }
    >
      <div
        className="  relative mx-auto flex sm:w-[85%]  md:w-11/12 max-w-maxContent flex-col 
    items-center justify-between md:gap-10 sm:gap-6  font-mont  text-white"
      >
        {/* About Founder */}

        <About />

        {/* Portfolio */}
        <Projects />

        {/* Bundles */}
        <div id="client"></div>
        <Clients />

        <Button active={true} linkto={"#Contact"}>
          <p id="contact" className="sm:text-sm md:text-xl ">
            Let’s connect to make it a reality!
          </p>
        </Button>

        {/* Contact Form*/}

        <ContactUsForm />
      </div>
    </Suspense>
  );
}
export default Home;
