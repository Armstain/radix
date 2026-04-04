import { ScrollReveal } from './scroll-reveal';

const services = [
  {
    title: "Architectural Consultancy",
    description: "We discuss your architectural, structural, electrical, plumbing, landscaping, or interior design goals.",
    icon: (
      <svg className="service-icon w-12 h-12 mb-7 text-brand-cobalt" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="6" width="36" height="36" rx="1" />
        <line x1="6" y1="20" x2="42" y2="20" />
        <line x1="20" y1="20" x2="20" y2="42" />
        <circle cx="13" cy="13" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    title: "Planning & Designing",
    description: "Offering a tailored strategy with project presentation, analysis, feasibility study, land-use plan, cost estimates, and development approach.",
    icon: (
      <svg className="service-icon w-12 h-12 mb-7 text-brand-cobalt" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="24,4 44,40 4,40" />
        <line x1="24" y1="20" x2="24" y2="40" />
        <line x1="16" y1="32" x2="32" y2="32" />
      </svg>
    )
  },
  {
    title: "Interior Design & Decoration",
    description: "Wall options, ceiling choices, flooring selections, glass partitions, aluminum designs, trendy furniture, and more.",
    icon: (
      <svg className="service-icon w-12 h-12 mb-7 text-brand-cobalt" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="8" y="14" width="32" height="26" rx="1" />
        <polyline points="4,18 24,6 44,18" />
        <rect x="18" y="28" width="12" height="12" />
      </svg>
    )
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-[120px] px-[60px] bg-bg-base">
      <ScrollReveal>
        <p className="section-label text-[10px] tracking-[3px] uppercase text-secondary-text flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-brand-cobalt">What We Do</p>
        <h2 className="section-title text-[clamp(38px,4vw,56px)] font-normal leading-[1.1]">Our Services</h2>
      </ScrollReveal>
      <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-16">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="service-card bg-white h-full p-12 relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-brand-cobalt before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-400">
              {service.icon}
              <h3 className="service-name text-[20px] font-bold mb-4 tracking-[-0.3px]">{service.title}</h3>
              <p className="service-desc text-[15px] leading-[1.75] text-secondary-text">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
