'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';

const projects = [
  { num: '01', name: 'Impress Newtex', loc: 'Mirzapur', img: '/assets/impress_newtex/impress_newtex.jpg' },
  { num: '02', name: 'Incepta Head Office', loc: 'Tejgaon, Dhaka', img: '/assets/head_office_tejgaon/6c69894a-2696-413f-bbac-758d0aaff071.jpg' },
  { num: '03', name: 'Sonia Garments', loc: 'Ashulia', img: '/assets/sonia_garments/d57f62f6-c8a4-401e-9876-b66e73ba7c2c.jpg' },
  { num: '04', name: 'Muktadir Residence', loc: 'Incepta Pharma', img: '/assets/muktadie_incepta/75ade89e-bd9f-4eea-9162-82b5bb3f6d8a.jpg' },
  { num: '05', name: 'Single Family House', loc: 'Noakhali', img: '/assets/family_house_noakhali/ebe86f1f-8ef2-4029-b531-4f1cf1f3dd3d.jpg' },
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
      <Image 
        id="projectThumb" 
        className={`project-thumb ${showThumb ? 'show' : ''}`} 
        ref={thumbRef} 
        src={thumbSrc || projects[0].img} 
        alt="" 
        width={320}
        height={220}
        unoptimized
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
