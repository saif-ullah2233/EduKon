import React from "react";
import { ContactBare } from "./Contactbare";
import { Navbar } from "./Navbare";
import herobgimage from "../image/herobgimage.png";
import { HeroContent } from "../components/heorcontent";
import { Heroimagesection } from "./heroimagesection";

export const HomeContainer = () => {
  return (
    <>
      <div>
       
        <div
          className="w-screen min-h-full bg-[#fff9f1] bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${herobgimage})`,
          }}
        >
          <ContactBare />
          <Navbar />
       
          <div className="flex flex-row px-4 md:mr-10 mt-10 md:mt-10 gap-8 md:gap-0">    
            <HeroContent />
            <Heroimagesection />
          </div>
        </div>
      </div>
    </>
  );
};