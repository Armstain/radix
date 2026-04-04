import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { MarqueeSection } from '@/components/marquee-section';
import { ProjectsSection } from '@/components/projects-section';
import { FeaturedProjectSection } from '@/components/featured-project-section';
import { PhilosophySection } from '@/components/philosophy-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { StatsSection } from '@/components/stats-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <HeroSection />
      <MarqueeSection />
      <ProjectsSection />
      {/* <FeaturedProjectSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection /> */}

      <Footer />
    </>
  );
}
