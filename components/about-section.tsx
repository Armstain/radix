'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#111111] py-24 overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-20 relative z-20 group cursor-default">
        {/* left side lines */}
        <div className="flex flex-col gap-1.5 items-start w-12">
          {/* big line  */}
          <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
          {/* small line */}
          <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
        </div>
        <h2 className="text-3xl md:text-4xl tracking-widest font-light text-white">
          <span className="text-[#F5B82A]">ABOUT</span> <span className="font-bold">COMPANY</span>
        </h2>
        {/* right side lines */}
        <div className="flex flex-col gap-1.5 items-end w-12">
          {/* big line  */}
          <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
          {/* small line */}
          <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-12 mb-12">
        {/* Outline Box */}
        <div className="absolute top-12 bottom-12 left-6 right-[15%] border-[24px] border-[#1f1f1f] z-0"></div>

        {/* Background Text */}
        <h3 className="absolute -bottom-8 left-6 text-[100px] md:text-[160px] font-black text-[#222222] leading-none tracking-tighter uppercase z-10">
          About
        </h3>

        {/* Image Wrapper */}
        <div className="relative z-20 w-[90%] md:w-[80%] ml-auto">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=1200&q=80"
              alt="About Company"
              fill
              className="object-cover"
            />
          </div>
          {/* Pagination */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-gray-600"></div>
            <div className="w-2 h-2 bg-[#F5B82A]"></div>
            <div className="w-2 h-2 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
