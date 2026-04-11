import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { MarqueeSection } from '@/components/marquee-section';
import { CategoriesSection } from '@/components/categories-section';
import { ProjectsSection } from '@/components/projects-section';
import { AboutSection } from '@/components/about-section';
import { ValueSection } from '@/components/value-section';
import { ServicesSection } from '@/components/services-section';
import { FeaturedProjectSection } from '@/components/featured-project-section';
import { ProcessSection } from '@/components/process-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { MissionSection } from '@/components/mission-section';
import { HiringBanner } from '@/components/hiring-banner';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <HiringBanner />
      <Navbar />

      <HeroSection />
      <CategoriesSection />
      {/* <MarqueeSection /> */}
      <AboutSection />
      <ValueSection />
      <ServicesSection />

      {/* <ProcessSection /> */}
      <ProjectsSection />
      {/* <FeaturedProjectSection /> */}
      <TestimonialsSection />
      <MissionSection />

      <Footer />
    </>
  );
}
