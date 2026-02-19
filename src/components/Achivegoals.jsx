import React from 'react';
import manimage from '../image/manimage.png';
import womanimage from '../image/womenimage.png';
export const GradientSection = () => {
  return (
    <section className="relative w-full px-4 overflow-hidden bg-white font-sans">
      {/* Background Gradient Layer - Recreating the soft "blob" feel */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 10% 80%, #22e9c1 0%, transparent 40%),
              radial-gradient(circle at 40% 90%, #d1ba0d 0%, transparent 40%),
              radial-gradient(circle at 70% 80%, #b82fdf 0%, transparent 40%),
              radial-gradient(circle at 100% 70%, #456be9 0%, transparent 40%)
            `,
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Subheading */}
        <p className="text-[18px] font-semibold tracking-[0.3em]  text-[#FF7043] uppercase mb-4">
          Start to Success
        </p>

        {/* Main Heading */}
        <h2 className="text-[40px] font-sans md:text-[40px]  font-bold text-[#0D1B2A] leading-tight mb-16">
          Achieve Your Goals With Edukon
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center">
            <span className="text-[48px] font-black text-[#0D1B2A] mb-2 leading-none">30+</span>
            <p className="text-[18px] text-[#4A5568] leading-snug max-w-[200px]">
              Years of Language Education Experience
            </p>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center">
            <span className="text-[48px] font-black text-[#0D1B2A] mb-2 leading-none">3084+</span>
            <p className="text-[18px] text-[#4A5568] leading-snug max-w-[180px]">
              Learners Enrolled in Edukon Courses
            </p>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center">
            <span className="text-[48px] font-black text-[#0D1B2A] mb-2 leading-none">330+</span>
            <p className="text-[18px] text-[#4A5568] leading-snug max-w-[200px]">
              Qualified Teachers And Language Experts
            </p>
          </div>

          {/* Stat Item 4 */}
          <div className="flex flex-col items-center">
            <span className="text-[48px] font-black text-[#0D1B2A] mb-2 leading-none">2300+</span>
            <p className="text-[18px] text-[#4A5568] leading-snug max-w-[180px]">
              Innovative Foreign Language Courses
            </p>
          </div>

        </div>
    <div className='bg-white w-full h-auto flex items-center justify-center gap-5'>
            <div className='bg-red-500 w-150 h-60'>
            <h2 className='mr-100'>Start Teaching Today</h2>
        </div>

         <div className='bg-blue-500 w-150 h-60'>
            content div
        </div>
    </div>
      </div>
    </section>
  );
};

