'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.documentElement.style.setProperty('--nav-height', '72px');
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      id="navbar"
      className="sticky top-0 left-0 right-0 z-[100] flex items-center justify-between bg-bg-base border-b border-border-silver/20 py-[12px] px-[60px] transition-all duration-300 shadow-sm"
    >
      <Link href="#" className="nav-logo text-[22px] font-bold tracking-[3px] text-primary-text uppercase">
        <div className="relative w-28 h-12">
          <Image
            src="/radix_logo.png"
            alt="RADIX Logo"
            fill
            className="object-contain"
            sizes="112px"
            priority
          />
        </div>
      </Link>
      <ul className="flex items-center gap-[44px] list-none">
        <li className="nav-links"><Link href="#projects" className="text-[11px] font-semibold tracking-[2px] uppercase text-primary-text hover:text-brand-cobalt transition-colors duration-300">Work</Link></li>
        <li className="nav-links"><Link href="#about" className="text-[11px] font-semibold tracking-[2px] uppercase text-primary-text hover:text-brand-cobalt transition-colors duration-300">Studio</Link></li>
        <li className="nav-links"><Link href="#services" className="text-[11px] font-semibold tracking-[2px] uppercase text-primary-text hover:text-brand-cobalt transition-colors duration-300">Services</Link></li>
        <li className="nav-links"><Link href="#testimonials" className="text-[11px] font-semibold tracking-[2px] uppercase text-primary-text hover:text-brand-cobalt transition-colors duration-300">Clients</Link></li>
      </ul>
      <Link
        href="#cta"
        className="text-[11px] font-bold tracking-[2px] uppercase text-brand-cobalt border-[1.5px] border-brand-cobalt px-[22px] py-[10px] transition-all duration-300 hover:bg-brand-cobalt hover:text-white"
      >
        Start a Project
      </Link>
    </nav>
  );
}
