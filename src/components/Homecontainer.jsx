import React from "react";
import { ContactBare } from "./Contactbare";
import { Navbar } from "./Navbare";
import herobgimage from "../image/herobgimage.png";
import { HeroContent } from "../components/heorcontent";
export const HomeContainer =() =>{
    return(
      <>
        <div>
          <div className="w-screen h-160 bg-[#fff9f1] bg-cover bg-center bg-no-repeat"
           style={{
                      backgroundImage: `url(${herobgimage})`
                    }}
          >
      <ContactBare />
      <Navbar />
      <HeroContent />
        </div>
        
      </div>
      </>
    )
}