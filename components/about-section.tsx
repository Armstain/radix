'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#111111] pt-20 pb-16 overflow-hidden">
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
      <div className="relative container mx-auto px-6 py-12 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div className="relative z-20 space-y-8">
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Established 2000</p>
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Founded by <span className="text-[#F5B82A] font-bold">Mr. Abdur Rahim</span>
          </h3>
          <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">
            <p>
              RADIX Interior & Constructions was founded by a professional with over <span className="text-white font-bold">26 years of experience</span> in project coordination and management consultancy across renowned architectural and construction firms.
            </p>
            <p>
              In <span className="text-[#F5B82A]">2000</span>, he established RADIX as a new venture and began managing projects for both local and multinational companies. This bold step marked the beginning of a legacy built on trust and technical excellence.
            </p>
            <p>
              Under his leadership, RADIX built a reputation for excellence by delivering innovative solutions, quality workmanship, and reliable service across residential, commercial, and industrial sectors.
            </p>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
             <div className="h-px w-12 bg-[#F5B82A]"></div>
             <p className="text-[#F5B82A] font-bold tracking-[3px] uppercase text-xs">Excellence & Reliability</p>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative">
          {/* Outline Box */}
          <div className="absolute -top-12 -bottom-12 -left-12 -right-12 border-[24px] border-[#1f1f1f] z-0 hidden lg:block"></div>
          
          <div className="relative z-20 w-full overflow-hidden">
            <div className="aspect-[4/5] w-full overflow-hidden relative shadow-2xl">
              <Image
                src="/assets/head_office_tejgaon/a77491c4-8269-4466-97ab-47140bdba71f.jpg"
                alt="About Company"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Background Text Overlay */}
          <h3 className="absolute -bottom-20 -right-10 text-[100px] md:text-[140px] font-black text-white/5 leading-none tracking-tighter uppercase z-10 pointer-events-none select-none">
            Legacy
          </h3>
        </div>
      </div>
    </section>
  );
}
