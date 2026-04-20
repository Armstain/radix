import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { TeamSection } from '@/components/team-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { SupportServicesSection } from '@/components/support-services-section';
import { ProjectsSection } from '@/components/projects-section';
import { CategoriesSection } from '@/components/categories-section';
import { ValueSection } from '@/components/value-section';
import { ClientsSection } from '@/components/clients-section';
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
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <SupportServicesSection />
      <ProcessSection />
      <ValueSection />
      <ProjectsSection />
      <CategoriesSection />
      <ClientsSection />
      <MissionSection />

      <Footer />
    </>
  );
}
