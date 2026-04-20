'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Layout, HardHat, Palette, Sofa, Settings2, ChevronRight } from 'lucide-react';

const services = [
  {
    number: "1",
    title: "Architectural Consultancy",
    description: "Expert guidance for architecture, structure, electrical systems, and landscaping to bring your vision to life with technical precision.",
    icon: Building2,
  },
  {
    number: "2",
    title: "Space Planning & Design",
    description: "Intelligent layout and flow optimization that maximizes utility while maintaining aesthetic harmony in any environment.",
    icon: Layout,
  },
  {
    number: "3",
    title: "Large-Scale Civil Construction",
    description: "Professional management of high-impact construction projects with a focus on safety, durability, and quality execution.",
    icon: HardHat,
  },
  {
    number: "4",
    title: "Interior Design & Decoration",
    description: "Transformative interior solutions that blend functionality with premium aesthetics for residential and commercial spaces.",
    icon: Palette,
  },
  {
    number: "5",
    title: "Furniture & Product Design",
    description: "Customized and imported furniture solutions tailored to highlight the significance of your project and facility.",
    icon: Sofa,
  },
  {
    number: "6",
    title: "Supporting Services",
    description: "Comprehensive finishing solutions including walls, ceilings, flooring, and electrical works to complete your vision.",
    icon: Settings2,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#111111] py-24 overflow-hidden border-t border-[#222222]">
      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4 group cursor-default max-w-fit">
            <h2 className="text-xl md:text-2xl tracking-[0.2em] font-light flex items-center gap-2">
              <span className="text-[#F5B82A] font-medium">OUR</span>
              <span className="text-white">SERVICES</span>
            </h2>
            <div className="flex flex-col gap-1.5 items-start w-12">
              {/* big line  */}
              <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
              {/* small line */}
              <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            Our valuable services that we provide
          </h3>
        </div>

        {/* Services Grid with Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-20 justify-items-center">
          {services.map((service, index) => {
            // Define staggered offsets and min-heights
            const staggeredStyles = [
              { mt: 'mt-0', minH: 'min-h-[440px]' },     // 1
              { mt: 'mt-0 lg:mt-12', minH: 'min-h-[440px]' }, // 2
              { mt: 'mt-0 lg:mt-0', minH: 'min-h-[440px]' },  // 3
              { mt: 'mt-0', minH: 'min-h-[440px]' },          // 4
              { mt: 'mt-0 lg:mt-12', minH: 'min-h-[440px]' }, // 5
              { mt: 'mt-0 lg:mt-0', minH: 'min-h-[440px]' },  // 6
            ][index] || { mt: 'mt-0', minH: 'min-h-[440px]' };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group relative w-full max-w-[360px] flex flex-col ${staggeredStyles.mt}`}
              >
                {/* Yellow Bar */}
                <div className="absolute top-0 left-0 right-0 h-[8px] bg-[#F5B82A] z-40 transition-all duration-500 ease-in-out transform -translate-y-full scale-x-90 origin-center group-hover:translate-y-0 group-hover:scale-x-100 group-hover:shadow-[0_4px_10px_rgba(245,184,42,0.3)]"></div>

                {/* White Card Container */}
                <div className={`relative bg-white p-8 pt-12 flex flex-col h-full ${staggeredStyles.minH} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden z-10`}>
                  {/* Background Number */}
                  <div className="absolute top-4 right-6 text-[100px] font-black text-gray-400/5 leading-none select-none group-hover:text-[#F5B82A]/10 transition-all duration-700 translate-y-4 group-hover:translate-y-0 italic">
                    {service.number}
                  </div>

                  {/* Icon container */}
                  <div className="relative mb-8 z-10">
                    <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#F5B82A] group-hover:border-[#F5B82A] group-hover:shadow-[0_0_20px_rgba(245,184,42,0.4)] transition-all duration-500 transform group-hover:-translate-y-1">
                      <service.icon className="w-8 h-8 text-gray-800 group-hover:text-black transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col flex-grow z-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F5B82A] transition-colors duration-500 leading-tight uppercase tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#support-services"
                        className="inline-flex items-center gap-2 text-[10px] font-black text-gray-950 uppercase tracking-[2px] group/link"
                      >
                        <span className="relative overflow-hidden">
                          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">Learn More</span>
                        </span>
                        <ChevronRight className="w-3 h-3 text-[#F5B82A] transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3D Bouncing SERVICES Text - Styled like the Welcome text in Gallery section */}
      <div className="absolute bottom-4 left-8 z-10 pointer-events-none select-none">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#222222] uppercase tracking-tighter animate-bounce-slow text-3d">
          SERVICES
        </h2>
      </div>
    </section>
  );
}
