import React from "react";
import heroimage from "../image/heroimage.png";

export const Heroimagesection = () => {
    return (
      <>
        <div>
          
            <div className="w-full md:w-[600px] h-[400px] md:h-[680px] bg-cover bg-center bg-no-repeat mx-auto"
                 style={{backgroundImage:`url(${heroimage})`}}
            >
            </div>
        </div>
      </>    
         
    )
}