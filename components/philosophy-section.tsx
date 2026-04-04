import { ScrollReveal } from './scroll-reveal';

export function PhilosophySection() {
  return (
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
  );
}
