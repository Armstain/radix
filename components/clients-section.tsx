'use client';

import { motion } from 'motion/react';

const clients = [
  'Dhaka Club', 'Huawei', 'East Coast Group', 'Incepta', 
  'ACCA Bangladesh', 'Sonia Garments', 'Maheen Label Tex Ltd', 
  'Urmi Garments', 'BD Food', 'MEL Group', 
  'Friends International School', 'Good Heal Hospital'
];

export function ClientsSection() {
  const reversedClients = [...clients].reverse();
  return (
    <section id="clients" className="py-16 bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-4 group cursor-default">
          <h2 className="text-xl md:text-2xl tracking-[0.2em] font-light flex items-center gap-2">
            <span className="text-[#F5B82A] font-medium">ELITE</span>
            <span className="text-white">CLIENTS</span>
          </h2>
          <div className="flex flex-col gap-1.5 items-start w-12">
            <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
            <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
          </div>
        </div>
      </div>

      {/* Marquee 1 */}
      <div className="flex overflow-hidden gap-12 select-none py-4 border-y border-white/5">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-24 items-center min-w-full"
        >
          {clients.map((client, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-transparent stroke-text tracking-tighter uppercase whitespace-nowrap opacity-30 hover:opacity-100 hover:text-white hover:stroke-none transition-all duration-500 cursor-default">
              {client}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, i) => (
            <span key={`dup-${i}`} className="text-4xl md:text-6xl font-black text-transparent stroke-text tracking-tighter uppercase whitespace-nowrap opacity-30 hover:opacity-100 hover:text-white hover:stroke-none transition-all duration-500 cursor-default">
              {client}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Marquee 2 (Reverse) */}
      <div className="flex overflow-hidden gap-12 select-none py-8">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-24 items-center min-w-full"
        >
          {reversedClients.map((client, i) => (
            <span key={`rev-${i}`} className="text-4xl md:text-6xl font-black text-white/5 hover:text-[#F5B82A]/80 tracking-tighter uppercase whitespace-nowrap transition-all duration-500 cursor-default">
              {client}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {reversedClients.map((client, i) => (
            <span key={`rev-dup-${i}`} className="text-4xl md:text-6xl font-black text-white/5 hover:text-[#F5B82A]/80 tracking-tighter uppercase whitespace-nowrap transition-all duration-500 cursor-default">
              {client}
            </span>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}
