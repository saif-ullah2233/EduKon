import React, { useState } from 'react'; // Added useState
import { User, UserPlus, Menu, X } from 'lucide-react'; // Added Menu and X icons
import navlogoimage from '../image/navlogo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: 'Home', submenu: ['Home Style 1', 'Home Style 2', 'Home Style 3'] },
    { name: 'Courses', submenu: ['All Courses', 'Course Details', 'Course Filter'] },
    { name: 'Blog', submenu: ['Blog Grid', 'Blog Classic', 'Blog Details'] },
    { name: 'Pages', submenu: ['About Us', 'Team', 'FAQ', '404 Page'] },
  ];

  return (
  
     <nav className="fixed sticky top-0 flex items-center justify-between px-4 md:px-8 py-0  shadow-sm
     backdrop-blur-md bg-white/30  font-sans h-[80px] relative">
      
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer">
        <div
          className="w-12 h-12 md:w-21 md:h-21 mt-2 ml-0 md:ml-4 rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${navlogoimage})`
          }}
        ></div>

        <span className="text-[28px] md:text-[37px] font-bold text-[#000E32] tracking-tight">
          Edukon
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8 h-full">
        {navLinks.map((item) => (
          <li key={item.name} className="relative group flex items-center h-full cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-[#000E32] group-hover:text-[#FF6725] transition-colors">
                {item.name}
              </span>

              <div className="relative w-3 h-3 flex items-center justify-center">
                <span className="absolute w-3 h-[2px] bg-[#000E32] group-hover:bg-[#FF6725] transition-colors duration-300"></span>
                <span className="absolute w-[2px] h-3 bg-[#000E32] group-hover:bg-[#FF6725] transition-all duration-300 transform group-hover:rotate-90 group-hover:opacity-0"></span>
              </div>
            </div>

            <div className="absolute top-[80px] left-0 w-48 bg-white border-t-2 border-[#FF6725] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <ul className="py-2">
                {item.submenu.map((sub) => (
                  <li
                    key={sub}
                    className="px-4 py-2 text-[14px] font-semibold text-[#000E32] hover:bg-gray-50 hover:text-[#FF6725] transition-colors"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="text-[16px] font-bold text-[#000E32] cursor-pointer hover:text-[#FF6725] transition-colors">
          Contact
        </li>
      </ul>

      {/* Auth Buttons & Mobile Toggle */}
      <div className="flex items-center h-full gap-2">
        {/* Desktop Auth */}
        <div className='hidden sm:flex item-center justify-center w-fit h-13 bg-white'>
          <button className="flex items-center gap-2 px-6 h-full text-[#FF6725] text-[15px] transition-all font-bold">
            <User size={18} strokeWidth={3} />
            LOG IN
          </button>
          <button className="flex items-center gap-2 px-2 h-full bg-[#FF6725] text-white text-[17px] hover:bg-[#e55a1f] transition-all">
            <UserPlus size={18} strokeWidth={3} />
            SIGN UP
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-[#000E32] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg z-[100] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[100vh] border-t' : 'max-h-0'}`}>
        <ul className="flex flex-col p-4 gap-4">
          {navLinks.map((item) => (
            <li key={item.name} className="border-b border-gray-100 pb-2">
              <span className="text-[18px] font-bold text-[#000E32]">{item.name}</span>
              <ul className="pl-4 mt-2">
                {item.submenu.map((sub) => (
                  <li key={sub} className="py-1 text-[14px] text-gray-600">{sub}</li>
                ))}
              </ul>
            </li>
          ))}
          <li className="text-[18px] font-bold text-[#000E32]">Contact</li>
          <div className="flex flex-col gap-2 mt-4 sm:hidden">
            <button className="flex items-center justify-center gap-2 p-3 border border-[#FF6725] text-[#FF6725] font-bold">
              <User size={18} /> LOG IN
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-[#FF6725] text-white font-bold">
              <UserPlus size={18} /> SIGN UP
            </button>
          </div>
        </ul>
      </div>
    </nav>
  
  );
};