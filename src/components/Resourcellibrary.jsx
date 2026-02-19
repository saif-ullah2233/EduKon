import React from 'react';
import { User, Calendar, ExternalLink, MessageSquare } from 'lucide-react';

// Your local image imports
import div1image from '../image/div2.png';
import seconddivimage from '../image/div22ndimage.png';
import thirdimage from '../image/div23rdimage.png';
import mainimage from '../image/menimage.png';
import donaldlogan from '../image/Donaldlogan.png';
export const ResourceLibrary = () => {
  // Centralized data updated with your imported images
  const articles = [
    {
      id: 1,
      image: div1image,
      title: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23, 2022",
      description: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
      comments: 3
    },
    {
      id: 2,
      image: seconddivimage,
      title: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23, 2022",
      description: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
      comments: 4
    },
    {
      id: 3,
      image: thirdimage,
      title: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23, 2022",
      description: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
      comments: 6
    }
  ];

  return (
    <section className="bg-[#FFF9F5] py-20 px-6 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#E67E22] uppercase tracking-[0.2em] text-xs font-bold mb-3">
            Form Our Blog Posts
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            More Articles From Resource Library
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="group bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Image with Zoom Effect on Hover */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              {/* Content Wrapper */}
              <div className="p-8 flex-grow flex flex-col">
                
                {/* Title - Turns Orange on Card Hover */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug transition-colors duration-300 group-hover:text-orange-500">
                  {article.title}
                </h3>

                {/* Metadata Row */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-5">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-orange-500" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-orange-500" />
                    <span className="font-medium">{article.date}</span>
                  </div>
                </div>

                {/* Description Body */}
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {article.description}
                </p>

                {/* Footer Divider & Actions */}
                <div className="pt-5 border-t border-gray-100 flex justify-between items-center">
                  <button className="flex items-center gap-2 font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    Read More 
                    <ExternalLink size={18} className="text-orange-500" />
                  </button>
                  
                  {/* Comment Badge */}
                  <div className="relative p-1">
                    <MessageSquare size={26} className="text-gray-800" />
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                      {article.comments}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};