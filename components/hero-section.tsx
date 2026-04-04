import Link from 'next/link';
import { HeroImage } from './hero-image';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 bg-bg-base text-primary-text">
      <div className="hero-left flex flex-col justify-center px-[60px] py-20">
        <p className="hero-eyebrow text-[11px] tracking-[3px] uppercase text-secondary-text mb-8 flex items-center gap-[14px] before:content-[''] before:block before:w-10 before:h-[1px] before:bg-secondary-text">Interior & Construction · Dhaka</p>
        <h1 className="hero-h1 text-[clamp(64px,7vw,100px)] font-normal leading-[1.05] tracking-[-1px] mb-7 italic">We Shape<br /><em className="not-italic text-brand-cobalt">Living Space.</em></h1>
        <p className="hero-body text-[17px] leading-[1.75] text-secondary-text max-w-[380px] mb-12">
          Founded in 2000 by Mr. Abdur Rahim, RADIX is a reputed interior design and construction company in Bangladesh, delivering innovative solutions and exceptional service.
        </p>
        <Link href="#projects" className="hero-cta inline-flex items-center gap-3 text-[13px] font-semibold tracking-[1.5px] uppercase text-brand-cobalt no-underline pb-1 border-b-[1.5px] border-brand-cobalt w-fit transition-all duration-300 hover:gap-5">Explore Our Work →</Link>
      </div>
      <div className="hero-right relative overflow-hidden">
        <HeroImage />
        <div className="hero-frame absolute inset-5 border border-brand-sky/30 pointer-events-none z-2 before:content-[''] before:absolute before:top-[-1px] before:left-[-1px] before:w-6 before:h-6 before:border-t-[1.5px] before:border-l-[1.5px] before:border-brand-sky after:content-[''] after:absolute after:bottom-[-1px] after:right-[-1px] after:w-6 after:h-6 after:border-b-[1.5px] after:border-r-[1.5px] after:border-brand-sky"></div>
      </div>
      <div className="hero-scroll-hint absolute bottom-10 left-[60px] flex items-center gap-3 text-[10px] tracking-[2px] text-secondary-text">
        <div className="hero-scroll-line w-[1px] h-12 bg-gradient-to-b from-transparent to-secondary-text animate-[scrollPulse_2s_ease_infinite]"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
