'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const team = [
  {
    name: 'Abdur Rahim',
    role: 'Chief Executive Officer',
    quote: 'Persistence and resilience are essential qualities to overcome obstacles. Every challenge should be approached with a positive mindset to achieve success.',
    image: '/assets/CEO.jpg',
  },
  {
    name: 'Mahbub A Islam',
    role: 'Director',
    quote: 'Experienced in team leadership, project resource management, and execution alignment. Dedicated to turning vision into successful reality through efficient planning and coordination.',
    image: '/assets/director.png',
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20 group cursor-default">
          <h2 className="text-3xl md:text-4xl tracking-widest font-light text-gray-900">
            <span className="text-[#F5B82A]">LEADERSHIP</span> <span className="font-bold">TEAM</span>
          </h2>
          <div className="flex flex-col gap-1.5 items-end w-12">
            <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
            <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col md:flex-row gap-8 items-center md:items-start group"
            >
              {/* Image */}
              <div className="relative w-48 h-60 md:w-64 md:h-80 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-[10px] border-white/20 group-hover:border-white/10 transition-colors"></div>
              </div>

              {/* Text */}
              <div className="flex flex-col pt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#F5B82A] font-mono text-sm tracking-widest uppercase mb-6">{member.role}</p>
                
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-gray-100 font-serif leading-none select-none italic">"</span>
                  <p className="relative z-10 text-gray-600 leading-relaxed italic text-lg">
                    {member.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
