import { ScrollReveal } from './scroll-reveal';
import { ContactForm } from './contact-form';

export function CTASection() {
  return (
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
  );
}
