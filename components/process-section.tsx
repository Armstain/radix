'use client';

import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    name: 'Discovery & Consultation',
    desc: 'We discuss your goals for architecture, structure, electrical systems, plumbing, landscaping, and interior design to establish a clear project vision.',
  },
  {
    num: '02',
    name: 'Tailored Planning',
    desc: 'Preparation of customized strategies including project presentation, feasibility study, land use planning, cost estimation, and development strategy.',
  },
  {
    num: '03',
    name: 'Implementation',
    desc: 'Our team coordinates with soil engineers and surveyors for soil testing, land surveys, and detailed construction preparation and budget planning.',
  },
  {
    num: '04',
    name: 'Project Management',
    desc: 'Comprehensive handling of tender evaluation, construction supervision, site administration, and progress monitoring to ensure timely delivery.',
  },
  {
    num: '05',
    name: 'Ongoing Support',
    desc: 'Even after project delivery, we provide continuous support for future needs and improvements, ensuring long-term client satisfaction.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4 group cursor-default max-w-fit">
            <h2 className="text-xl md:text-2xl tracking-[0.2em] font-light flex items-center gap-2">
              <span className="text-[#F5B82A] font-medium">HOW</span>
              <span className="text-gray-900 font-bold">WE WORK</span>
            </h2>
            <div className="flex flex-col gap-1.5 items-start w-12">
              <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
              <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Structured Process
          </h3>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group bg-[#fafafa] p-6 rounded-xl border border-gray-100 hover:border-[#F5B82A]/30 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              {/* Step Number */}
              <span className="block font-mono text-4xl font-black text-[#F5B82A]/30 group-hover:text-[#F5B82A] transition-colors duration-500 mb-4">
                {step.num}
              </span>

              {/* Connecting Dot Indicator */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#F5B82A] group-hover:scale-125 transition-transform duration-500"></div>
                <div className="h-[1px] bg-gray-200 flex-grow group-hover:bg-[#F5B82A]/40 transition-colors duration-500"></div>
              </div>

              {/* Step Content */}
              <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#F5B82A] transition-colors duration-500 uppercase tracking-tight leading-snug">
                {step.name}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
