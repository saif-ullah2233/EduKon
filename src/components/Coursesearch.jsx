import React from 'react';
import { Search } from 'lucide-react'; // Using lucide-react for the magnifying glass icon

export const CourseSearchBar = () => {
  return (
    <div className="w-full max-w-4xl p-8 bg-transparent">
      {/* Search Input Container */}
      <div className="flex items-stretch h-[60px] shadow-sm overflow-hidden rounded-sm">
        {/* Input Area */}
        <div className="flex-grow flex items-center bg-white px-5 border-r border-gray-100">
          <Search className="text-gray-400 w-5 h-5 mr-3" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Keywords of your course"
            className="w-full bg-transparent outline-none text-[16px] text-gray-500 placeholder-gray-400 font-light"
          />
        </div>

        {/* Search Button */}
        <button className="bg-[#F15A24] hover:bg-[#d84e1d] transition-colors text-white px-8 text-[16px] font-medium whitespace-nowrap">
          Search Course
        </button>
      </div>

      {/* Popular Tags Section */}
      <div className="mt-5 flex items-baseline gap-2 font-sans">
        <span className="text-[#333333] text-[20px] font-medium">
          Most Popular :
        </span>
        
        <div className="flex gap-4">
          <a href="#" className="text-[#333333] text-[15px] underline decoration-1 underline-offset-4 hover:text-black">
            Figma
          </a>
          <a href="#" className="text-[#333333] text-[15px] underline decoration-1 underline-offset-4 hover:text-black">
            AdobeXD
          </a>
          <a href="#" className="text-[#333333] text-[15px] underline decoration-1 underline-offset-4 hover:text-black">
            illustration
          </a>
          <a href="#" className="text-[#333333] text-[15px] underline decoration-1 underline-offset-4 hover:text-black">
            Photoshop
          </a>
        </div>
      </div>
    </div>
  );
};

