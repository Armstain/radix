import { ScrollReveal } from './scroll-reveal';

const clients = [
  [
    "Dhaka Club",
    "Huawei, Gulshan",
    "East-Coast Group",
    "Incepta",
    "ACCA, Gulshan",
    "Sonia Garments",
    "Maheen Label Tex Limited"
  ],
  [
    "Urmi Garments",
    "BD Food",
    "MEL Group",
    "Inndhan Nagar Tea State",
    "Friends International School",
    "Good Heal Hospital & Residential"
  ]
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-[120px] px-[60px] bg-bg-base">
      <ScrollReveal>
        <p className="section-label text-[10px] tracking-[3px] uppercase text-secondary-text flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-brand-cobalt">Elite Clientele</p>
        <h2 className="section-title text-[clamp(38px,4vw,56px)] font-normal leading-[1.1]">Who We Work With</h2>
      </ScrollReveal>
      <div className="testi-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {clients.map((group, groupIdx) => (
          <ScrollReveal key={groupIdx} delay={groupIdx * 150}>
            <div className="testi-card bg-white p-12 relative transition-all duration-300 hover:shadow-[0_20px_60px_rgba(28,23,19,0.08)] h-full">
              <p className="testi-text text-[17px] italic leading-[1.8] text-primary-text mb-7 relative z-10 whitespace-pre-line">
                {group.join('\n')}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
