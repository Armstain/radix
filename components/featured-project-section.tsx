import Link from 'next/link';
import { ScrollReveal } from './scroll-reveal';
import { FeaturedImage } from './featured-image';

export function FeaturedProjectSection() {
  return (
    <ScrollReveal>
      <section id="featured" className="px-[60px] pb-[120px] bg-bg-base">
        <div className="featured-inner grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-0 min-h-[600px] relative">
          <div className="featured-img-wrap relative overflow-hidden group">
            <FeaturedImage />
          </div>
          <div className="featured-card bg-white p-[52px_48px] flex flex-col justify-center shadow-[-20px_20px_60px_rgba(28,23,19,0.08)] relative z-10 md:-ml-[60px] my-[60px]">
            <span className="tag text-[10px] tracking-[3px] uppercase text-brand-cobalt bg-brand-cobalt/10 px-3.5 py-1.5 w-fit mb-6">Featured Project</span>
            <h3 className="featured-name text-[42px] font-normal leading-[1.15] mb-5">Impress<br />Newtex</h3>
            <p className="featured-desc text-[16px] leading-[1.75] text-secondary-text mb-9">
              The ex-President had a vision for a facility that catered to all members, focusing on youth, clarity, and functionality. We finished the entire interior, including providing furniture to highlight its significance.
            </p>
            <Link href="#" className="featured-link text-[12px] font-semibold tracking-[2px] uppercase text-brand-cobalt no-underline inline-flex items-center gap-[10px] border-b-[1.5px] border-brand-cobalt pb-1 w-fit transition-all duration-300 hover:gap-[18px]">View Case Study →</Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
