import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StatsSection } from '@/components/StatsSection';
import { ServiceBenefitsSection } from '@/components/ServiceBenefitsSection';
import { InfrastructureSection } from '@/components/InfrastructureSection';
import { PrestigiousProjectsSection } from '@/components/PrestigiousProjectsSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { AboutSection } from '@/components/AboutSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ServiceBenefitsSection />
      <StatsSection />
      <InfrastructureSection />
      <PrestigiousProjectsSection />
      <WhyChooseUsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
