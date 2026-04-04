import { ScrollReveal } from './scroll-reveal';

const processSteps = [
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
];

export function ProcessSection() {
  return (
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
        {processSteps.map((step, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className="group relative bg-white/5 border border-white/10 p-8 pt-10 h-full transition-all duration-500 hover:bg-white/10 hover:border-brand-sky/40 hover:-translate-y-2">
              <span className="absolute -top-4 -right-2 text-[80px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-brand-sky/[0.05] transition-colors duration-500">
                {step.num}
              </span>
              
              <div className="mb-8 text-brand-sky flex items-center justify-between">
                <div className="p-3 bg-brand-sky/10 rounded-lg group-hover:bg-brand-sky group-hover:text-bg-steel transition-all duration-500">
                  {step.icon}
                </div>
                <span className="text-[12px] font-bold tracking-[2px] opacity-40">{step.num}</span>
              </div>

              <h4 className="text-[18px] font-bold text-bg-base mb-4 tracking-tight group-hover:text-brand-sky transition-colors duration-300">{step.name}</h4>
              <p className="text-[14px] leading-[1.7] text-white/60 font-light group-hover:text-white/80 transition-colors duration-300">{step.desc}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-sky scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
