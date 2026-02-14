import React from 'react';
import computerimage from "../image/computerimage.png";
import civilenginerimage from "../image/civilengnering.png";
import busnissimage from "../image/Busniss.png";
import datascienceimage from "../image/datascience.png";
import csenginerimage from "../image/csengring.png";
// Placeholder for the 5th icon if needed
import learningImage from "../image/computerimage.png"; 

const categories = [
  {
    title: "Computer Science",
    count: "24 Course",
    iconImg: computerimage,
    color: "#28a745",
  },
  {
    title: "Civil Engineering",
    count: "04 Course",
    iconImg: civilenginerimage,
    color: "#17a2b8",
  },
  {
    title: "Business Analysis",
    count: "27 Course",
    iconImg: busnissimage,
    color: "#ffc107",
    
  },
  {
    title: "Data Science Analytics",
    count: "28 Course",
    iconImg: datascienceimage,
    color: "#a370f7",
  },
  {
    title: "Learning Management",
    count: "78 Course",
    iconImg: learningImage, 
    color: "#ff6b6b",
  },
  {
    title: "Computer Engineering",
    count: "38 Course",
    iconImg: csenginerimage,
    color: "#fd7e14",
  }
];

const CategoryCard = ({ title, count, iconImg, color }) => (
  <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 shadow-sm cursor-pointer min-h-[280px]">
    {/* Icon Container - Background Removed, Size Increased */}
    <div className="w-24 h-24 flex items-center justify-center mb-4">
      <img 
        src={iconImg} 
        alt={title} 
        className="w-20 h-20 object-contain" 
      />
    </div>
    
    {/* Text Content */}
    <h3 className="text-[#1a1a1a] font-bold text-xl text-center leading-tight mb-3">
      {title}
    </h3>
    <p 
      className="font-bold text-sm tracking-wide"
      style={{ color: color }}
    >
      {count}
    </p>
  </div>
);

export const Categories = () => {
  return (
    <section className="py-20 px-4 bg-transparent font-sans mt-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Sub-header */}
        <p className="text-[#ff6b35] uppercase tracking-[0.3em] font-semibold text-xl mb-4">
          Popular Category
        </p>
        
        {/* Main Header */}
        <h2 className="text-4xl md:text-4xl font-bold text-[#1a1a1a] mb-16">
          Popular Category For Learn
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-[#ff6b35] text-white py-5 px-14 rounded-md shadow-lg hover:bg-[#e85a28] hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wider">
          Browse All Categories
        </button>
      </div>
    </section>
  );
};