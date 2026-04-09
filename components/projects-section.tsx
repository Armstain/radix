'use client';

import { useState, useRef } from 'react';
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
  const [thumbSrc, setThumbSrc] = useState('');
  const [showThumb, setShowThumb] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (thumbRef.current) {
      thumbRef.current.style.left = (e.clientX + 28) + 'px';
      thumbRef.current.style.top = (e.clientY - 100) + 'px';
    }
  };

  const handleMouseEnter = (img: string) => {
    setThumbSrc(img);
    setShowThumb(true);
  };

  const handleMouseLeave = () => {
    setShowThumb(false);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        id="projectThumb" 
        className={`project-thumb ${showThumb ? 'show' : ''}`} 
        ref={thumbRef} 
        src={thumbSrc} 
        alt="" 
      />

      <div className="projects-header reveal max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Our Projects</h2>
        </div>
        <Link href="#" className="view-all">View All Work →</Link>
      </div>

      <div className="project-list border-t border-gray-100" onMouseMove={handleMouseMove}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-row border-b border-gray-100 px-6 py-10 transition-colors hover:bg-gray-50/50"
            onMouseEnter={() => handleMouseEnter(project.img)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
              <span className="project-num text-sm text-gray-400 font-mono">{project.num}</span>
              <span className="project-name text-4xl md:text-5xl font-light italic text-gray-900">{project.name}</span>
              <span className="project-loc text-[11px] tracking-widest text-gray-400 uppercase font-semibold">{project.loc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
