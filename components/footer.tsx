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
      <div className="max-w-7xl mx-auto mb-20">
        <div className="bg-brand-yellow px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
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
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* About Company */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">About Company</h4>
          <div className="flex items-center gap-3">
            <FooterLogo />
            <span className="text-2xl font-black tracking-tighter">RADIX</span>
          </div>
          <p className="text-secondary-text text-sm leading-relaxed max-w-xs mt-4">
            Radix Constructions & Interiors delivers modern construction and premium interior solutions with a focus on quality, durability, and smart design. We handle residential, commercial, and industrial projects from planning to finishing with reliable execution and timely delivery.
          </p>
          <div className="flex gap-2 mt-6">
            <Link href="#" aria-label="Facebook" className="w-8 h-8 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              {/* <Facebook size={14} /> */}
            </Link>
            <Link href="#" aria-label="Twitter" className="w-8 h-8 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              {/* <Twitter size={14} /> */}
            </Link>
            <Link href="#" aria-label="Youtube" className="w-8 h-8 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              {/* <Youtube size={14} /> */}
            </Link>
            <Link href="#" aria-label="Instagram" className="w-8 h-8 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              {/* <Instagram size={14} /> */}
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">Contact Us</h4>
          <div className="space-y-6 text-secondary-text text-sm">
            <address className="not-italic leading-relaxed">
              KA-80 Joar Shahara, Bazar Road,<br />
              Dhaka 1229
            </address>
            <div className="flex flex-col gap-2">
              <a href="mailto:radix_06@yahoo.com" className="hover:text-brand-yellow transition-colors leading-relaxed">radix_06@yahoo.com</a>
              <a href="mailto:radixintext@gmail.com" className="hover:text-brand-yellow transition-colors leading-relaxed">radixintext@gmail.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:01711626196" className="hover:text-brand-yellow transition-colors leading-relaxed">01711626196</a>
              <a href="tel:01728347431" className="hover:text-brand-yellow transition-colors leading-relaxed">01728347431</a>
            </div>
          </div>
        </div>

        {/* Services / Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">Interior Design</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
            <li><Link href="#" className="hover:text-brand-yellow transition-colors">Exterior Design</Link></li>
            <li><Link href="#" className="hover:text-brand-yellow transition-colors">Custom Furniture</Link></li>
            <li><Link href="#" className="hover:text-brand-yellow transition-colors">Project Analysis</Link></li>
            <li><Link href="#" className="hover:text-brand-yellow transition-colors">Renovation</Link></li>
            <li className="pt-2"><Link href="#" className="text-secondary-text font-normal normal-case tracking-normal hover:text-brand-yellow transition-colors">Home Interior Design</Link></li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-6">Recent Post</h4>
          <div className="space-y-8">
            <div className="group">
              <span className="text-xs text-brand-yellow block mb-2">2025-12-04</span>
              <Link href="#" className="text-[13px] leading-snug group-hover:text-brand-yellow transition-colors line-clamp-2 uppercase font-bold tracking-tight">
                A to Z Home Construction Timeline — Step-by-step
              </Link>
            </div>
            <div className="group">
              <span className="text-xs text-brand-yellow block mb-2">2025-12-12</span>
              <Link href="#" className="text-[13px] leading-snug group-hover:text-brand-yellow transition-colors line-clamp-2 uppercase font-bold tracking-tight">
                Top Modern Interior Design Trends for 2025
              </Link>
            </div>
            <div className="group">
              <span className="text-xs text-brand-yellow block mb-2">2025-12-12</span>
              <Link href="#" className="text-[13px] leading-snug group-hover:text-brand-yellow transition-colors line-clamp-2 uppercase font-bold tracking-tight">
                Why Professional Interior Design Matters More Than Ever
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center relative">
        <p className="text-[11px] tracking-wider text-secondary-text text-center">
          © 2025 RADIX INTERIOR & CONSTRUCTIONS. Designed By Radix It Solutions.
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

