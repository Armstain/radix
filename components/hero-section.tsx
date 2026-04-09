'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop',
    title: 'We Shape<br/><em>Living Space.</em>',
    subtitle: 'Interior & Construction · Dhaka',
    description: 'Founded in 2000 by Mr. Abdur Rahim, RADIX is a reputed interior design and construction company in Bangladesh, delivering innovative solutions and exceptional service.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85&fit=crop',
    title: 'Architectural<br/><em>Excellence.</em>',
    subtitle: 'Planning & Designing',
    description: 'Offering a tailored strategy with project presentation, analysis, feasibility study, land-use plan, cost estimates, and development approach.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=85&fit=crop',
    title: 'Interior Design<br/><em>& Decoration.</em>',
    subtitle: 'Crafting Environments',
    description: 'Wall options, ceiling choices, flooring selections, glass partitions, aluminum designs, trendy furniture, and more.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85&fit=crop',
    title: 'Large-Scale<br/><em>Construction.</em>',
    subtitle: 'Civil Engineering',
    description: 'Structural construction from foundation to finish. We manage contractors, timelines, and quality control.'
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, slideDuration);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[var(--dark)]">
      {/* Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-[60px] z-20 text-white">
            <p className="text-[11px] tracking-[3px] uppercase text-[var(--taupe)] mb-8 flex items-center gap-[14px]" style={{ fontFamily: 'var(--ff-mono)' }}>
              <span className="w-[40px] h-px bg-[var(--taupe)]"></span>
              {slide.subtitle}
            </p>
            <h1 
              className="text-[clamp(64px,7vw,100px)] font-normal leading-[1.05] tracking-[-1px] mb-7 [&>em]:italic [&>em]:text-[var(--terra)]" 
              style={{ fontFamily: 'var(--ff-display)' }}
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <p className="text-[17px] text-[var(--taupe)] max-w-[380px] mb-12 leading-[1.75]" style={{ fontFamily: 'var(--ff-body)' }}>
              {slide.description}
            </p>
            <Link href="#projects" className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[1.5px] uppercase text-[var(--terra)] pb-1 border-b-[1.5px] border-[var(--terra)] w-fit transition-all hover:gap-5" style={{ fontFamily: 'var(--ff-sub)' }}>
              Explore Our Work →
            </Link>
          </div>
        </div>
      ))}

      {/* Thumbnails */}
      <div className="absolute bottom-0 right-0 z-40 bg-white p-6 md:p-8 flex items-center gap-5 md:gap-6">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className="relative cursor-pointer flex items-center justify-center group"
          >
            {idx === currentSlide && (
              <div className="absolute inset-[-6px] border-[3px] border-[#F5B82A]"></div>
            )}
            <div className={`w-16 h-16 md:w-20 md:h-20 relative transition-opacity duration-300 ${idx === currentSlide ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.image} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <div 
          key={currentSlide} 
          className="h-full bg-[var(--amber)] animate-progress"
          style={{ animationDuration: `${slideDuration}ms` }}
        ></div>
      </div>
    </section>
  );
}
