import React from 'react'
import Button from "../components/common/Button"
import Projects from './Projects';
import Clients from '../components/common/Clients';

import ContactUsForm from './ContactUsForm';

import About from '../Pages/About-Founder'
function Home() {
  return (
    <div  className="  relative mx-auto flex sm:w-[85%]  md:w-11/12 max-w-maxContent flex-col 
    items-center justify-between gap-10  text-white">
        {/* About Founder */}
          
      <About/>


      {/* Portfolio */}
      <Projects/>

      {/* Bundles */}
      <div id="client"></div>
      <Clients/>

      <Button  active={true} linkto={"#Contact"}>
        <p id="contact">Let’s connect to make it a reality!</p>
      </Button>
  
      


      {/*brand logos is needed  */}

      {/* Contact Form*/}

      <ContactUsForm  />

     
    </div>
  );
}
export default Home

