import Link from 'next/link';
import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { ProjectsSection } from '@/components/projects-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { StatsSection } from '@/components/stats-section';
import { HeroImage } from '@/components/hero-image';
import { FeaturedImage } from '@/components/featured-image';
import { FooterLogo } from '@/components/footer-logo';
import { ContactForm } from '@/components/contact-form';


export default function Home() {
  return (
    <>
      <CustomCursor />

      <Navbar />

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

      <div className="marquee-wrap bg-brand-cobalt py-3.5 overflow-hidden whitespace-nowrap">
        <div className="marquee-inner flex animate-[marquee_22s_linear_infinite]">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/90 mr-[60px]">Architectural Consultancy</span><span className="dot text-brand-sky mr-[60px]">·</span>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/90 mr-[60px]">Planning & Designing</span><span className="dot text-brand-sky mr-[60px]">·</span>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/90 mr-[60px]">Interior Design & Decoration</span><span className="dot text-brand-sky mr-[60px]">·</span>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/90 mr-[60px]">Large-Scale Civil Construction</span><span className="dot text-brand-sky mr-[60px]">·</span>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/90 mr-[60px]">Furniture & Product Designing</span><span className="dot text-brand-sky mr-[60px]">·</span>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/90 mr-[60px]">Supporting Services</span><span className="dot text-brand-sky mr-[60px]">·</span>
        </div>
      </div>

      <ProjectsSection />

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

      <section id="philosophy" className="bg-bg-steel py-[140px] px-[60px] relative overflow-hidden">
        <div className="kantha-bg absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,var(--color-brand-sky)_0,var(--color-brand-sky)_1px,transparent_0,transparent_50%),repeating-linear-gradient(-45deg,var(--color-brand-sky)_0,var(--color-brand-sky)_1px,transparent_0,transparent_50%)] bg-[length:48px_48px]"></div>
        <svg className="kantha-motif absolute right-20 top-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10" viewBox="0 0 200 200" fill="none">
          <rect x="10" y="10" width="180" height="180" stroke="#87CEEB" strokeWidth="1" />
          <rect x="30" y="30" width="140" height="140" stroke="#87CEEB" strokeWidth="0.7" />
          <circle cx="100" cy="100" r="50" stroke="#87CEEB" strokeWidth="0.7" />
          <circle cx="100" cy="100" r="30" stroke="#87CEEB" strokeWidth="0.5" />
          <line x1="10" y1="10" x2="100" y2="100" stroke="#87CEEB" strokeWidth="0.5" />
          <line x1="190" y1="10" x2="100" y2="100" stroke="#87CEEB" strokeWidth="0.5" />
          <line x1="10" y1="190" x2="100" y2="100" stroke="#87CEEB" strokeWidth="0.5" />
          <line x1="190" y1="190" x2="100" y2="100" stroke="#87CEEB" strokeWidth="0.5" />
          <polygon points="100,50 150,100 100,150 50,100" stroke="#87CEEB" strokeWidth="0.5" fill="none" />
        </svg>
        <ScrollReveal>
          <div className="philosophy-inner max-w-[760px] mx-auto text-center relative z-10">
            <blockquote className="philosophy-quote text-[clamp(38px,4.5vw,58px)] font-normal italic text-bg-base leading-[1.2] mb-12">
              &quot;Persistence and resilience are essential qualities to conquer obstacles. Approach each challenge with a positive attitude to achieve success.&quot;<br /><em className="not-italic text-brand-sky">- Abdur Rahim, CEO</em>
            </blockquote>
            <div className="philosophy-divider w-12 h-[1px] bg-brand-cobalt mx-auto mb-10"></div>
            <p className="philosophy-body text-[16px] leading-[1.85] text-bg-base/60 max-w-[580px] mx-auto">
              Under his leadership, RADIX quickly gained a reputation for excellence, delivering innovative solutions and exceptional service to clients across the industry. Mr. Rahim&apos;s deep understanding of project dynamics and ability to foresee and navigate challenges have been pivotal in the growth and success of the company.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section id="services" className="py-[120px] px-[60px] bg-bg-base">
        <ScrollReveal>
          <p className="section-label text-[10px] tracking-[3px] uppercase text-secondary-text flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-brand-cobalt">What We Do</p>
          <h2 className="section-title text-[clamp(38px,4vw,56px)] font-normal leading-[1.1]">Our Services</h2>
        </ScrollReveal>
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-16">
          <ScrollReveal>
            <div className="service-card bg-white p-12 relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-brand-cobalt before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-400">
              <svg className="service-icon w-12 h-12 mb-7 text-brand-cobalt" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="6" y="6" width="36" height="36" rx="1" />
                <line x1="6" y1="20" x2="42" y2="20" />
                <line x1="20" y1="20" x2="20" y2="42" />
                <circle cx="13" cy="13" r="2" fill="currentColor" stroke="none" />
              </svg>
              <h3 className="service-name text-[20px] font-bold mb-4 tracking-[-0.3px]">Architectural Consultancy</h3>
              <p className="service-desc text-[15px] leading-[1.75] text-secondary-text">
                We discuss your architectural, structural, electrical, plumbing, landscaping, or interior design goals.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="service-card bg-white p-12 relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-brand-cobalt before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-400">
              <svg className="service-icon w-12 h-12 mb-7 text-brand-cobalt" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polygon points="24,4 44,40 4,40" />
                <line x1="24" y1="20" x2="24" y2="40" />
                <line x1="16" y1="32" x2="32" y2="32" />
              </svg>
              <h3 className="service-name text-[20px] font-bold mb-4 tracking-[-0.3px]">Planning & Designing</h3>
              <p className="service-desc text-[15px] leading-[1.75] text-secondary-text">
                Offering a tailored strategy with project presentation, analysis, feasibility study, land-use plan, cost estimates, and development approach.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="service-card bg-white p-12 relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-brand-cobalt before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-400">
              <svg className="service-icon w-12 h-12 mb-7 text-brand-cobalt" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="8" y="14" width="32" height="26" rx="1" />
                <polyline points="4,18 24,6 44,18" />
                <rect x="18" y="28" width="12" height="12" />
              </svg>
              <h3 className="service-name text-[20px] font-bold mb-4 tracking-[-0.3px]">Interior Design & Decoration</h3>
              <p className="service-desc text-[15px] leading-[1.75] text-secondary-text">
                Wall options, ceiling choices, flooring selections, glass partitions, aluminum designs, trendy furniture, and more.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="process" className="bg-bg-steel py-[140px] px-[60px]">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
            <div>
              <p className="section-label text-brand-sky flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-brand-sky no-underline">How We Work</p>
              <h2 className="section-title text-bg-base text-[42px] md:text-[56px]">Our Process</h2>
            </div>
            <p className="max-w-[420px] text-white/50 text-[15px] mt-6 md:mt-0 leading-relaxed">
              We translate your vision into architectural reality through a disciplined, 4-step framework designed for precision.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="process-steps grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              name: 'Let The Adventure Begin!',
              desc: 'We discuss your architectural, structural, electrical, plumbing, landscaping, or interior design goals.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              )
            },
            {
              num: '02',
              name: 'Tailored Plans',
              desc: 'Offering a tailored strategy with project presentation, analysis, feasibility study, and development approach.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              )
            },
            {
              num: '03',
              name: 'Implementation',
              desc: 'It\'s time to hit the road! Associate soil engineers and surveyors provide soil test and land survey services.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20" />
                  <path d="M5 20V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12" />
                  <path d="M9 20v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
                  <path d="M10 10h.01" /><path d="M14 10h.01" /><path d="M10 14h.01" /><path d="M14 14h.01" />
                </svg>
              )
            },
            {
              num: '04',
              name: 'Progress Tracking',
              desc: 'Preparation of scheduled items, BoQ, evaluation of tenders, construction management, and administration.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              )
            }
          ].map((step, idx) => (
            <ScrollReveal key={idx}>
              <div className="group relative bg-white/5 border border-white/10 p-8 pt-10 h-full transition-all duration-500 hover:bg-white/10 hover:border-brand-sky/40 hover:-translate-y-2">
                {/* Large Background Number */}
                <span className="absolute -top-4 -right-2 text-[80px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-brand-sky/[0.05] transition-colors duration-500">
                  {step.num}
                </span>
                
                {/* Icon & Meta */}
                <div className="mb-8 text-brand-sky flex items-center justify-between">
                  <div className="p-3 bg-brand-sky/10 rounded-lg group-hover:bg-brand-sky group-hover:text-bg-steel transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-[12px] font-bold tracking-[2px] opacity-40">{step.num}</span>
                </div>

                {/* Content */}
                <h4 className="text-[18px] font-bold text-bg-base mb-4 tracking-tight group-hover:text-brand-sky transition-colors duration-300">{step.name}</h4>
                <p className="text-[14px] leading-[1.7] text-white/60 font-light group-hover:text-white/80 transition-colors duration-300">{step.desc}</p>
                
                {/* Bottom Architectural Detail */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-sky scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <StatsSection />

      <section id="testimonials" className="py-[120px] px-[60px] bg-bg-base">
        <ScrollReveal>
          <p className="section-label text-[10px] tracking-[3px] uppercase text-secondary-text flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-brand-cobalt">Elite Clientele</p>
          <h2 className="section-title text-[clamp(38px,4vw,56px)] font-normal leading-[1.1]">Who We Work With</h2>
        </ScrollReveal>
        <div className="testi-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <ScrollReveal>
            <div className="testi-card bg-white p-12 relative transition-all duration-300 hover:shadow-[0_20px_60px_rgba(28,23,19,0.08)]">
              <p className="testi-text text-[17px] italic leading-[1.8] text-primary-text mb-7 relative z-10">
                Dhaka Club<br/>
                Huawei, Gulshan<br/>
                East-Coast Group<br/>
                Incepta<br/>
                ACCA, Gulshan<br/>
                Sonia Garments<br/>
                Maheen Label Tex Limited
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="testi-card bg-white p-12 relative transition-all duration-300 hover:shadow-[0_20px_60px_rgba(28,23,19,0.08)]">
              <p className="testi-text text-[17px] italic leading-[1.8] text-primary-text mb-7 relative z-10">
                Urmi Garments<br/>
                BD Food<br/>
                MEL Group<br/>
                Inndhan Nagar Tea State<br/>
                Friends International School<br/>
                Good Heal Hospital & Residential
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="cta" className="bg-bg-steel py-[140px] px-[60px] text-center relative overflow-hidden">
        <div className="kantha-bg opacity-3 absolute inset-0 bg-[repeating-linear-gradient(45deg,var(--color-brand-sky)_0,var(--color-brand-sky)_1px,transparent_0,transparent_50%),repeating-linear-gradient(-45deg,var(--color-brand-sky)_0,var(--color-brand-sky)_1px,transparent_0,transparent_50%)] bg-[length:48px_48px]"></div>
        <ScrollReveal>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="cta-eyebrow text-[10px] tracking-[3px] uppercase text-brand-sky mb-7">Begin a Conversation</p>
            <h2 className="cta-headline text-[clamp(44px,6vw,80px)] font-normal italic text-bg-base leading-[1.1] max-w-[760px] mx-auto mb-5">
              Let&apos;s build something<br /><em className="not-italic text-brand-sky">remarkable.</em>
            </h2>
            <p className="cta-sub text-[16px] text-bg-base/45 mb-14">Share your email and we&apos;ll reach out within 24 hours.</p>
            <ContactForm />
          </div>
        </ScrollReveal>
      </section>

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
            <a href="mailto:radix_06@yahoo.com" className="footer-email text-[15px] text-bg-base/60 transition-colors duration-300 hover:text-bg-base">radix_06@yahoo.com</a>
            <a href="mailto:radixintext@gmail.com" className="footer-email text-[15px] text-bg-base/60 transition-colors duration-300 hover:text-bg-base">radixintext@gmail.com</a>
            <p className="footer-location text-[11px] tracking-[1.5px] text-brand-sky mt-2">01711626196 | 01728347431</p>
          </div>
        </div>
        <div className="footer-copy mt-12 pt-6 border-t border-secondary-text/10 flex justify-between items-center">
          <span className="text-[10px] tracking-[1.5px] text-secondary-text/35">© 2025 RADIX INTERIOR & CONSTRUCTIONS</span>
          <span className="text-[10px] tracking-[1.5px] text-secondary-text/35">radix.interior.construction</span>
        </div>
      </footer>
    </>
  );
}
