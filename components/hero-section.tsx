'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    image: '/assets/head_office_tejgaon/494ae9d1-7d9f-4d7b-ae71-1c81208b5f9c.jpg',
    title: 'We Shape<br/><em>Living Space.</em>',
    subtitle: 'Business Portfolio · Interior & Construction',
  },
  {
    id: 2,
    image: '/assets/family_house_noakhali/58ffee97-c6d0-4d80-89c1-dd30935a5303.jpg',
    title: 'Architectural<br/><em>Excellence.</em>',
    subtitle: 'Planning & Designing',
  },
  {
    id: 3,
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-20-17-591.jpg',
    title: 'Corporate Office<br/><em>Interiors.</em>',
    subtitle: 'Crafting Environments · Maheen Label',
  },
  {
    id: 4,
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-21-38-568.jpg',
    title: 'Modern Executive<br/><em>Workspace.</em>',
    subtitle: 'Office Design · Radix Elite',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=85&fit=crop',
    title: 'Interior Design<br/><em>& Decoration.</em>',
    subtitle: 'Crafting Environments',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85&fit=crop',
    title: 'Large-Scale<br/><em>Construction.</em>',
    subtitle: 'Civil Engineering',
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 6000; // Increased slightly for animation visibility

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, slideDuration);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden bg-[var(--dark)] transition-[height] duration-500 ease-in-out"
      style={{ height: 'calc(100vh - var(--banner-height, 0px) - var(--nav-height, 0px))' }}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, idx) => (
          idx === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt="Hero background"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-[60px] z-20 text-white">
                {/* Subtitle with Block per Word */}
                <div className="mb-6 flex items-center gap-[14px]">
                  <span className="w-[30px] md:w-[40px] h-px bg-[var(--taupe)]"></span>
                  <p className="text-[12px] md:text-[14px] tracking-[4px] uppercase text-[var(--taupe)] flex flex-wrap gap-x-[12px]" style={{ fontFamily: 'var(--ff-mono)' }}>
                    {slide.subtitle.split(' ').map((word, wIdx) => (
                      <span key={wIdx} className="relative overflow-hidden inline-block px-1 -mx-1">
                        <motion.span
                          initial={{ left: 0, width: "0%" }}
                          animate={{ 
                            width: ["0%", "100%", "100%", "0%"],
                            left: ["0%", "0%", "0%", "100%"]
                          }}
                          transition={{ 
                            times: [0, 0.4, 0.6, 1],
                            duration: 1, 
                            ease: [0.77, 0, 0.175, 1],
                            delay: 0.2 + (wIdx * 0.1)
                          }}
                          className="absolute inset-y-0 bg-white z-20"
                        />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 + (wIdx * 0.1) + 0.6 }}
                          className="relative z-10"
                        >
                          {word}
                        </motion.span>
                      </span>
                    ))}
                  </p>
                </div>

                {/* Title with Block per Word */}
                <h1 
                  className="text-[clamp(44px,8vw,120px)] font-normal leading-[1.1] tracking-[-1px] max-w-[1000px] flex flex-wrap gap-x-[0.25em]" 
                  style={{ fontFamily: 'var(--ff-display)' }}
                >
                  {slide.title.split(/<br\/>| /).map((part, pIdx) => {
                    // Check if it's an <em> tag
                    const isEm = part.startsWith('<em>') || part.endsWith('</em>');
                    const cleanPart = part.replace(/<\/?em>/g, '');
                    
                    return (
                      <span key={pIdx} className="relative overflow-hidden inline-block py-1">
                        <motion.span
                          initial={{ left: 0, width: "0%" }}
                          animate={{ 
                            width: ["0%", "100%", "100%", "0%"],
                            left: ["0%", "0%", "0%", "100%"]
                          }}
                          transition={{ 
                            times: [0, 0.4, 0.6, 1],
                            duration: 1.2, 
                            ease: [0.77, 0, 0.175, 1],
                            delay: 0.5 + (pIdx * 0.15)
                          }}
                          className="absolute inset-y-0 bg-white z-20"
                        />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + (pIdx * 0.15) + 0.8 }}
                          className={`relative z-10 inline-block ${isEm ? 'italic text-[var(--terra)]' : ''}`}
                        >
                          {cleanPart}
                        </motion.span>
                        {/* Add line break if the original title had <br/> here */}
                        {slide.title.includes(`${part}<br/>`) && <span className="block w-full h-0" />}
                      </span>
                    );
                  })}
                </h1>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Thumbnails */}
      <div className="absolute bottom-0 right-0 z-40 bg-white p-4 md:p-8 flex items-center gap-4 md:gap-6">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className="relative cursor-pointer flex items-center justify-center group"
          >
            {idx === currentSlide && (
              <motion.div 
                layoutId="activeThumb"
                className="absolute inset-[-6px] border-[3px] border-[#F5B82A]"
              />
            )}
            <div className={`w-12 h-12 md:w-20 md:h-20 relative transition-opacity duration-300 ${idx === currentSlide ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              <Image 
                src={slide.image} 
                alt={`Thumbnail ${idx + 1}`} 
                fill 
                sizes="(max-width: 768px) 48px, 80px"
                className="object-cover" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <motion.div 
          key={currentSlide} 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: slideDuration / 1000, ease: "linear" }}
          className="h-full bg-[#F5B82A]"
        />
      </div>
    </section>
  );
}
