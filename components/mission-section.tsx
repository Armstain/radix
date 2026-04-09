'use client';

import Link from 'next/link';

export function MissionSection() {
  return (
    <section id="mission-contact" className="relative py-24 bg-[#fafafa] overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-20 relative z-20 group cursor-default">
        <div className="flex flex-col gap-1.5 items-start w-12">
          <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
          <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
        </div>
        <h2 className="text-3xl md:text-4xl tracking-widest font-light text-gray-900">
          <span className="text-[#F5B82A]">OUR</span> <span className="font-bold">MISSION</span>
        </h2>
        <div className="flex flex-col gap-1.5 items-end w-12">
          <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
          <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative max-w-6xl mx-auto px-6 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          
          {/* Left Column - Mission & Vision */}
          <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At RADIX Interior & Construction, our core values shape everything we do—guiding our decisions, defining our culture, and driving exceptional outcomes for every client. We are committed to Excellence in architectural consultancy and engineering excellence, known for transformative spaces that blend functionality with timeless design.
            </p>
            <div className="flex justify-end mb-12">
              <Link href="#" className="text-sm font-bold text-gray-900 hover:text-[#F5B82A] transition-colors flex items-center gap-1">
                Read More <span className="text-lg leading-none">›</span>
              </Link>
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Vision</h3>
            <div className="flex justify-end">
              <Link href="#" className="text-sm font-bold text-gray-900 hover:text-[#F5B82A] transition-colors flex items-center gap-1">
                Read More <span className="text-lg leading-none">›</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#151515] p-12 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-10">
              Get In <span className="font-bold">Touch</span>
            </h3>
            
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest text-gray-400 uppercase">Name</label>
                <input type="text" className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest text-gray-400 uppercase">Email</label>
                <input type="email" className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest text-gray-400 uppercase">Phone</label>
                <input type="tel" className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest text-gray-400 uppercase">Message</label>
                <textarea rows={1} className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" className="mt-4 bg-[#F5B82A] text-gray-900 font-medium py-4 px-8 hover:bg-[#e0a620] transition-colors">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 3D Bouncing MISSION Text */}
      <div className="absolute bottom-4 left-8 z-10 pointer-events-none">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#E8E8E8] uppercase tracking-tighter animate-bounce-slow text-3d">
          Mission
        </h2>
      </div>
    </section>
  );
}
