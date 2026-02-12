import React, { useState } from 'react'; // Added useState
import { Phone, MapPin, MessageCircle, Twitter, Video, Rss, Info, X } from 'lucide-react'; // Added Info and X

export const ContactBare = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile view

  // Brand Colors based on the image
  const iconOrange = "text-[#E65100]";
  const textDark = "text-[#555555] text-sm";
  const borderColor = "border-[#D1D1D1]";

  return (
    <div className={`w-full border-y ${borderColor} font-sans text-sm bg-white relative`}>
      
      {/* MOBILE VIEW: The (i) Icon Trigger */}
      <div className="lg:hidden flex justify-end items-center px-6 py-3">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 rounded-md bg-[#FF6725] flex items-center justify-center text-white shadow-sm active:scale-95 transition-transform"
        >
          {isOpen ? <X size={18} /> : <span className="font-serif font-bold text-xl italic">i</span>}
        </button>
      </div>

      {/* MOBILE DROPDOWN CONTENT */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col bg-gray-50">
          <div className={`flex items-center px-6 py-4 border-b ${borderColor}`}>
            <Phone size={14} className={`${textDark} mr-3 fill-current`} />
            <span className={textDark}>+800-123-4567 6587</span>
          </div>
          <div className={`flex items-center px-6 py-4 border-b ${borderColor}`}>
            <MapPin size={14} className={`${textDark} mr-3`} />
            <span className={textDark}>Beverley, New York 224 USA</span>
          </div>
          <div className="flex flex-row items-center justify-around py-4 border-b ${borderColor}">
            <MessageCircle size={18} className={`${iconOrange} fill-current`} />
            <Twitter size={18} className={`${iconOrange} fill-current`} />
            <Video size={18} className={`${iconOrange} fill-current`} />
            <span className={`font-bold text-lg leading-none ${iconOrange}`}>S</span>
            <Rss size={18} className={iconOrange} />
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW: Original Code Unchanged */}
      <div className={`hidden lg:flex flex-row items-center align-middle gap-10`}>
        {/* Phone Section */}
        <div className={`flex flex-row items-center px-10 py-4 border-b lg:border-b-0 lg:border-r ${borderColor} lg:ml-auto`}>
          <Phone size={14} className={`${textDark} mr-3 fill-current`} />
          <span className={textDark}>+800-123-4567 6587</span>
        </div>

        {/* Address Section */}
        <div className={`flex items-center px-10 py-4 border-b lg:border-b-0 lg:border-r ${borderColor}`}>
          <MapPin size={14} className={`${textDark} mr-3`} />
          <span className={textDark}>Beverley, New York 224 USA</span>
        </div>

        {/* "Find us on" Label Section */}
        <div className={`flex items-center px-10 py-4 border-b lg:border-b-0 lg:border-r ${borderColor}`}>
          <span className={textDark}>Find us on :</span>
        </div>

        {/* Social Media Container */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap">
          <div className={`flex items-center px-6 py-4 border-r ${borderColor}`}>
            <MessageCircle size={18} className={`${iconOrange} fill-current`} />
          </div>

          <div className={`flex items-center px-6 py-4 border-r ${borderColor}`}>
            <Twitter size={18} className={`${iconOrange} fill-current`} />
          </div>

          <div className={`flex items-center px-6 py-4 border-r ${borderColor}`}>
            <Video size={18} className={`${iconOrange} fill-current`} />
          </div>

          <div className={`flex items-center px-6 py-4 border-r ${borderColor}`}>
            <span className={`font-bold text-lg leading-none ${iconOrange}`}>S</span>
          </div>

          <div className={`flex items-center px-6 py-4  lg:mr-40`}>
            <Rss size={18} className={iconOrange} />
          </div>
        </div>
      </div>

    </div>
  );
};