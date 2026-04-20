'use client';

import Image from 'next/image';

export function ValueSection() {
  return (
    <section id="value" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* Column 1: Text & Image */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group cursor-default">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                <span className="text-[#F5B82A]">OUR</span> <span className="font-bold">VALUE</span>
              </h2>
              <div className="flex flex-col gap-1.5 items-end w-12">
                <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
                <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Our Core Values</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We are a trusted and reputable construction & interior company in Bangladesh with a strong track record of delivering projects professionally using quality materials and dependable support. Our creative and skilled team focuses on detail, functionality, and transforming client ideas into reality.
            </p>
            <div className="relative mt-4 aspect-video w-full overflow-hidden bg-gray-900 group">
              <Image 
                src="/assets/incepta_factory/93e98b69-ad5e-48ea-b927-8fde0565db19.jpg" 
                alt="Our Value" 
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white"></div>
            </div>
          </div>
 
          {/* Column 2: Stats Boxes */}
          <div className="flex flex-col gap-4">
            {[
              { number: '70+', label: 'Clients' },
              { number: '100+', label: 'Projects' },
              { number: '26+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#111111] py-10 flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1">
                <span className="text-4xl font-black text-[#F5B82A]">{stat.number}</span>
                <span className="text-white font-medium text-lg">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Column 3: Progress Bars */}
          <div className="bg-white p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-xl">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 leading-tight">
              We have <span className="text-[#F5B82A] font-bold">26+</span> years of experience in construction
            </h3>
            <div className="flex flex-col gap-6">
              {[
                { label: 'Interior Design', percent: 95 },
                { label: 'Exterior Design', percent: 90 },
                { label: 'Custom Furniture', percent: 85 },
                { label: 'Project Analysis', percent: 90 },
                { label: 'Renovations', percent: 95 },
              ].map((skill, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-bold text-gray-900">
                    <span>{skill.label}</span>
                    <span className="text-gray-400 font-normal">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00A3FF] rounded-full"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
