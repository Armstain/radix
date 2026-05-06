"use client";

import Link from 'next/link';
import { FooterLogo } from './footer-logo';
import { Send, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 px-4 md:px-[60px] relative overflow-hidden">
      {/* Newsletter Banner */}
      <div className="container mx-auto px-6 mb-20">
        {/* <div className="bg-brand-yellow px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
          <div className="text-black text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 uppercase">Subscribe to our Newsletter!</h3>
            <p className="text-sm md:text-base opacity-85">Never Miss Anything From Radix By Signing Up To Our Newsletter.</p>
          </div>
          <div className="flex w-full md:w-auto items-center">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-black text-white px-6 py-4 w-full md:w-[300px] text-xs font-semibold tracking-widest outline-none border-none focus:ring-0"
            />
            <button className="bg-white text-black p-4 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <Send size={18} />
            </button>
          </div>
        </div> */}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* About Company */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">About Company</h4>
          <div className="flex items-center gap-3">
            {/* <FooterLogo /> */}
            <span className="text-2xl font-black tracking-tighter">RADIX</span>
          </div>
          <p className="text-secondary-text text-sm leading-relaxed max-w-xs mt-4">
            Radix Constructions & Interiors delivers modern construction and premium interior solutions with a focus on quality, durability, and smart design. We handle residential, commercial, and industrial projects from planning to finishing with reliable execution and timely delivery.
          </p>
          <div className="flex gap-2 mt-6">
            <Link href="https://www.facebook.com/radix.interior.construction" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              <svg role="img" viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">Contact Us</h4>
          <div className="space-y-6 text-secondary-text text-sm">
            <address className="not-italic leading-relaxed">
              KA-80 Joar Shahara, Bazar Road,<br />
              Dhaka 1229, Bangladesh
            </address>
            <div className="flex flex-col gap-2">
              <a href="mailto:radixintext@gmail.com" className="hover:text-brand-yellow transition-colors leading-relaxed">radixintext@gmail.com</a>
              <a href="mailto:radixinterior20@gmail.com" className="hover:text-brand-yellow transition-colors leading-relaxed">radixinterior20@gmail.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:+8801728347431" className="hover:text-brand-yellow transition-colors leading-relaxed">+880 1728-347431</a>
            </div>
          </div>
        </div>

        {/* Services / Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">Our Services</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Architectural Consultancy</Link></li>
            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Interior Design</Link></li>
            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Civil Construction</Link></li>
            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Furniture Design</Link></li>
            <li><Link href="#support-services" className="hover:text-brand-yellow transition-colors">Supporting Services</Link></li>
          </ul>
        </div>

        {/* Branding & Social */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">Connect</h4>
          <p className="text-secondary-text text-sm leading-relaxed max-w-xs">
            Follow us on social media to see our latest projects and design inspirations.
          </p>
          <div className="flex gap-2 mt-6">
            <Link href="#" aria-label="Facebook" className="w-10 h-10 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              FB
            </Link>
            <Link href="#" aria-label="Instagram" className="w-10 h-10 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              IG
            </Link>
            <Link href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              IN
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center relative">
        <p className="text-[11px] tracking-wider text-secondary-text text-center">
          © 2025 RADIX INTERIOR & CONSTRUCTIONS. Designed By Nazmul Hossain Adnan
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="absolute right-0 bottom-0 bg-brand-yellow text-black p-3 hover:bg-white transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} strokeWidth={3} />
        </button>
      </div>
    </footer>
  );
}

