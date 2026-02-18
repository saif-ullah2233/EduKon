import React from "react";
import servicesimage from "../image/serviceswomenimage.png";
import skilledinstructors from "../image/skilledinstrecturer.png";
import getcertificate from "../image/certificateicon.png";

export const Aboutcourses = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center gap-16 font-sans">
      
      {/* Left Side: Image Section */}
      <div className="w-full lg:w-130 relative">
        <div className=" overflow-hidden  h-[530px] flex items-center justify-center">
          {/* Integrated your imported image here */}
          <img 
            src={servicesimage} 
            alt="Services" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side: Content Section */}
      <div className="w-full lg:w-1/2">
        <h4 className="uppercase tracking-[0.4em] text-orange-500 text-xl font-semibold">
          ABOUT OUR EDUKON
        </h4>
        <h2 className="text-4xl md:text-4xl font-semibold font-sans text-black leading-tight mt-5">
          Good Qualification Services  And Better Skills
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-2xl mt-3">
          Distinctively provide acces mutfuncto users whereas transparent 
          proceses somes ncentivize eficient functionalities rather than 
          extensible archtectur communicate leveraged services and cross-platform.
        </p>

        {/* Feature List */}
        <div className="flex flex-col gap-8">
          
          {/* Skilled Instructors */}
          <div className="flex items-start gap-5">
            <div className="bg-[#e9f5e9] p-5 rounded-full flex-shrink-0">
               <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Skilled Instructors</h3>
              <p className="text-gray-500 leading-snug">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
            </div>
          </div>

          {/* Get Certificate */}
          <div className="flex items-start gap-5">
            <div className="bg-[#e4f2f8] p-5 rounded-full flex-shrink-0">
               <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
               </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Get Certificate</h3>
              <p className="text-gray-500 leading-snug">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
            </div>
          </div>

          {/* Online Classes (New Addition) */}
          <div className="flex items-start gap-5">
            <div className="bg-[#fff7e1] p-5 rounded-full flex-shrink-0">
               <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Online Classes</h3>
              <p className="text-gray-500 leading-snug">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};