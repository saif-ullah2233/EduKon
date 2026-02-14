import React from "react";
import { CourseSearchBar } from "../components/Coursesearch";

export const HeroContent = () => {
    return (
        /* Adjusted margin and padding to be fluid; max-width adapts to screen */
 <>
         <div className="max-w-[600px] p-6 md:p-10 font-sans ml-5 md:ml-10 mt-5">
            <span className="block text-[#e67e22] font-montserrat font-semibold tracking-[0.3em] uppercase text-orange-500 text-lg md:text-xl mb-5">
                ONLINE EDUCATION
            </span>
            
            
            <h1 className="text-[#1a1a1a] text-4xl sm:text-5xl md:text-[70px] font-bold leading-[1.1] tracking-tight">
                Learn The <br/>
                Skills You Need <br/>
                To Succeed
            </h1>
            
            <p className="text-[#757575] text-lg md:text-xl leading-relaxed font-normal mt-4">
                Free online courses from the world's Leading experts. join 18+ million Learners today.
            </p>
           <div>
            <CourseSearchBar />
           </div>
        </div>
 </>
    );
}