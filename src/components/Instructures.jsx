import React from 'react';
import { BookOpen, Users, Star } from 'lucide-react';

// Your image imports
import emililogon from '../image/Emililogon.png';
import donaldlogan from '../image/Donaldlogan.png';
import oliverporter from '../image/oliverproter.png';
import nahlajons from '../image/Nahlajons.png';

export const Instructors = () => {
  // Added the imported images to the data array
  const instructors = [
    { 
      name: "Emilee Logan", 
      degree: "Master of Education Degree", 
      courses: "08", 
      students: "30",
      image: emililogon 
    },
    { 
      name: "Donald Logan", 
      degree: "Master of Education Degree", 
      courses: "08", 
      students: "30",
      image: donaldlogan 
    },
    { 
      name: "Oliver Porter", 
      degree: "Master of Education Degree", 
      courses: "08", 
      students: "30",
      image: oliverporter 
    },
    { 
      name: "Nahla Jones", 
      degree: "Master of Education Degree", 
      courses: "08", 
      students: "30",
      image: nahlajons 
    },
  ];

  return (
    <section className="bg-[#FFF9F3] py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h4 className="text-[#D97706] uppercase tracking-[0.2em] text-sm font-bold mb-2">
            World-Class Instructors
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Classes Taught By Real Creators
          </h2>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {instructors.map((instructor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center overflow-hidden transition-transform hover:scale-[1.02]"
            >
              {/* Top Content */}
              <div className="p-8 pb-6 flex flex-col items-center w-full">
                {/* Image Container - Now using your imports */}
                <div className="w-40 h-40 rounded-full bg-gray-100 mb-6 overflow-hidden border-2 border-gray-50">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#111827] mb-1 text-center leading-tight">
                  {instructor.name}
                </h3>
                <p className="text-gray-500 text-xs mb-3 text-center">
                  {instructor.degree}
                </p>

                {/* Star Ratings */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F97316" color="#F97316" />
                  ))}
                </div>
              </div>

              {/* Stats Footer */}
              <div className="w-full border-t border-gray-100 px-6 py-4 flex justify-between items-center text-gray-600 text-sm bg-gray-50/30">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-gray-400" />
                  <span>{instructor.courses} courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-400" />
                  <span>{instructor.students} students</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="flex justify-end pr-4">
          <div className="text-right">
            <p className="text-gray-500 text-sm">Want to help to people</p>
            <a href="#" className="text-[#F97316] font-bold text-lg hover:underline transition-colors">
              Become an instructor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;