import Link from 'next/link';
import { FooterLogo } from './footer-logo';

export function Footer() {
  return (
    <footer className="bg-bg-steel px-[60px] pb-12 relative">
      <div className="footer-line h-[1px] bg-gradient-to-r from-transparent via-brand-sky to-transparent mb-12"></div>
      <div className="footer-inner grid grid-cols-1 md:grid-cols-3 items-start gap-10">
        <div>
          <div className="footer-logo flex items-center gap-3 text-[28px] font-bold tracking-[4px] text-bg-base mb-3">
            <FooterLogo />
            RADIX
          </div>
          <div className="footer-tagline text-[13px] italic text-secondary-text/60">Crafting spaces that carry meaning.</div>
        </div>
        <ul className="footer-links list-none flex flex-col gap-3 items-center">
          <li><Link href="#" className="text-[11px] font-medium tracking-[2px] uppercase text-bg-base/50 transition-colors duration-300 hover:text-brand-sky">Work</Link></li>
          <li><Link href="#" className="text-[11px] font-medium tracking-[2px] uppercase text-bg-base/50 transition-colors duration-300 hover:text-brand-sky">Studio</Link></li>
          <li><Link href="#" className="text-[11px] font-medium tracking-[2px] uppercase text-bg-base/50 transition-colors duration-300 hover:text-brand-sky">Services</Link></li>
          <li><Link href="#" className="text-[11px] font-medium tracking-[2px] uppercase text-bg-base/50 transition-colors duration-300 hover:text-brand-sky">Process</Link></li>
          <li><Link href="#" className="text-[11px] font-medium tracking-[2px] uppercase text-bg-base/50 transition-colors duration-300 hover:text-brand-sky">Contact</Link></li>
        </ul>
        <div className="footer-right text-right">
          <p className="footer-location text-[11px] tracking-[1.5px] text-brand-sky mb-2">KA-80 Joar Shahara, Bazar Road</p>
          <a href="mailto:radix_06@yahoo.com" className="footer-email block text-[15px] text-bg-base/60 transition-colors duration-300 hover:text-bg-base">radix_06@yahoo.com</a>
          <a href="mailto:radixintext@gmail.com" className="footer-email block text-[15px] text-bg-base/60 transition-colors duration-300 hover:text-bg-base">radixintext@gmail.com</a>
          <p className="footer-location text-[11px] tracking-[1.5px] text-brand-sky mt-2">01711626196 | 01728347431</p>
        </div>
      </div>
      <div className="footer-copy mt-12 pt-6 border-t border-secondary-text/10 flex justify-between items-center">
        <span className="text-[10px] tracking-[1.5px] text-secondary-text/35">© 2025 RADIX INTERIOR & CONSTRUCTIONS</span>
        <span className="text-[10px] tracking-[1.5px] text-secondary-text/35">radix.interior.construction</span>
      </div>
    </footer>
  );
}
