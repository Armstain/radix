'use client';

import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';

const projects = [
  { num: '01', name: 'Impress Newtex', loc: 'Mirzapur', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=640&q=80&fit=crop' },
  { num: '02', name: 'Incepta Head Office', loc: 'Tejgaon, Dhaka', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80&fit=crop' },
  { num: '03', name: 'Sonia Garments', loc: 'Ashulia', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=640&q=80&fit=crop' },
  { num: '04', name: 'Muktadir Residence', loc: 'Incepta Pharma', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=640&q=80&fit=crop' },
  { num: '05', name: 'Single Family House', loc: 'Noakhali', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=640&q=80&fit=crop' },
];

export function ProjectsSection() {
  const thumbRef = useRef<HTMLImageElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [thumbPos, setThumbPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setThumbPos({ x: e.clientX + 28, y: e.clientY - 100 });
  }, []);

  const handleMouseEnter = useCallback((imgSrc: string) => {
    setActiveImage(imgSrc);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveImage(null);
  }, []);

  return (
    <section id="projects" className="py-[120px] px-0 bg-bg-base">
      <div className="projects-header reveal flex justify-between items-end px-[60px] pb-[60px]">
        <div>
          <p className="section-label text-[10px] tracking-[3px] uppercase text-secondary-text flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-brand-cobalt">Selected Work</p>
          <h2 className="section-title text-[clamp(38px,4vw,56px)] font-normal leading-[1.1]">Our Projects</h2>
        </div>
        <Link href="#" className="view-all text-[11px] font-semibold tracking-[2px] uppercase text-brand-cobalt border-b border-brand-cobalt pb-0.5 no-underline">View All Work →</Link>
      </div>
      <div className="project-list relative" onMouseMove={handleMouseMove}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group project-row grid grid-cols-[80px_1fr_auto] items-center px-[60px] py-7 border-t border-secondary-text/25 cursor-none relative overflow-hidden transition-colors duration-300 last:border-b last:border-secondary-text/25 before:content-[''] before:absolute before:inset-0 before:bg-brand-cobalt before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.77,0,0.175,1)] hover:before:scale-x-100"
            onMouseEnter={() => handleMouseEnter(project.img)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="project-num text-[12px] text-secondary-text relative z-10 transition-colors duration-300 group-hover:text-white">{project.num}</span>
            <span className="project-name text-[clamp(24px,3vw,40px)] font-normal italic relative z-10 transition-colors duration-300 group-hover:text-white">{project.name}</span>
            <span className="project-loc text-[11px] tracking-[1.5px] text-secondary-text relative z-10 transition-colors duration-300 group-hover:text-white uppercase">{project.loc}</span>
          </div>
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="projectThumb"
        className={`project-thumb fixed w-[320px] h-[220px] object-cover pointer-events-none z-[200] border-[3px] border-white shadow-[0_20px_60px_rgba(28,23,19,0.2)] transition-all duration-350 ${activeImage ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-[-2deg]'}`}
        ref={thumbRef}
        src={activeImage ?? 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
        alt=""
        style={{ left: thumbPos.x, top: thumbPos.y }}
      />
    </section>
  );
}
