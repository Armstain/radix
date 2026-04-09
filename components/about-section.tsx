'use client';

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#111111] py-24 overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-20 relative z-20">
        <div className="flex flex-col gap-1.5 items-end">
          <div className="w-16 h-[1px] bg-[#F5B82A]"></div>
          <div className="w-8 h-[1px] bg-[#F5B82A]"></div>
        </div>
        <h2 className="text-3xl md:text-4xl tracking-widest font-light text-white">
          <span className="text-[#F5B82A]">ABOUT</span> <span className="font-bold">COMPANY</span>
        </h2>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="w-16 h-[1px] bg-[#F5B82A]"></div>
          <div className="w-8 h-[1px] bg-[#F5B82A]"></div>
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
          <div className="aspect-[16/9] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=1200&q=80" 
              alt="About Company" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Pagination */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#1a1a1a] flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-gray-600"></div>
            <div className="w-2 h-2 bg-[#F5B82A]"></div>
            <div className="w-2 h-2 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
