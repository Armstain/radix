'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Paintbrush, TreePine, ClipboardCheck, Hammer, ChevronRight } from 'lucide-react';

const services = [
  {
    number: "1",
    title: "Interior Design",
    description: "Definition and Scope: The art and science of enhancing indoor spaces for health, aesthetics, and functionality, covering everything from initial concept to final installation, including residential, c...",
    icon: Paintbrush,
  },
  {
    number: "2",
    title: "Exterior Design",
    description: "Definition and Scope: Focuses on building exteriors, landscapes, and outdoor areas for harmony, durability, curb appeal, and functionality, including facades, gardens, and hardscapes in Bangladesh's t...",
    icon: TreePine,
  },
  {
    number: "3",
    title: "Project Analysis",
    description: "Definition and Scope: Comprehensive evaluation of proposed or existing design projects to assess feasibility, risks, optimizations, and alignment with goals in Bangladesh's construction sector. Data Co...",
    icon: ClipboardCheck,
  },
  {
    number: "5",
    title: "Renovation",
    description: "Structural Renovation: Upgrading the existing structural components of the building to enhance durability, safety, and load-bearing capacity. This process includes repairing cracked or damaged walls, st...",
    icon: Hammer,
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
        <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-12 pb-20">
          {services.map((service, index) => {
            // Define staggered offsets and min-heights to match the image
            const staggeredStyles = [
              { mt: 'mt-0', minH: 'min-h-[480px]' },     // Card 1
              { mt: 'mt-16', minH: 'min-h-[520px]' },    // Card 2 (Big/Tall)
              { mt: 'mt-0', minH: 'min-h-[400px]' },     // Card 3 (Short)
              { mt: 'mt-8', minH: 'min-h-[500px]' },     // Card 5/4
            ][index] || { mt: 'mt-0', minH: 'min-h-[460px]' };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group relative w-[268.5px] flex flex-col ${staggeredStyles.mt}`}
              >
                {/* Yellow Bar */}
                <div className="absolute top-0 left-0 right-0 h-[8px] bg-[#F5B82A] z-40 transition-all duration-500 ease-in-out transform -translate-y-full scale-x-90 origin-center group-hover:translate-y-0 group-hover:scale-x-100 group-hover:shadow-[0_4px_10px_rgba(245,184,42,0.3)]"></div>

                {/* White Card Container */}
                <div className={`relative bg-white p-8 pt-12 flex flex-col h-full ${staggeredStyles.minH} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden z-10`}>
                  {/* Background Number */}
                  <div className="absolute top-4 right-6 text-[110px] font-black text-gray-400/10 leading-none select-none group-hover:text-[#F5B82A]/20 transition-all duration-700 translate-y-4 group-hover:translate-y-0 italic">
                    {service.number}
                  </div>

                  {/* Icon container */}
                  <div className="relative mb-10 z-10">
                    <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#F5B82A] group-hover:border-[#F5B82A] group-hover:shadow-[0_0_20px_rgba(245,184,42,0.4)] transition-all duration-500 transform group-hover:-translate-y-1">
                      <service.icon className="w-10 h-10 text-gray-800 group-hover:text-black transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col flex-grow z-10">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#F5B82A] transition-colors duration-500 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-gray-950 uppercase tracking-widest group/link"
                      >
                        <span className="relative overflow-hidden">
                          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">Read More</span>
                        </span>
                        <ChevronRight className="w-4 h-4 text-[#F5B82A] transition-transform duration-300 group-hover/link:translate-x-1" />
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
