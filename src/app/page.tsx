import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StatsSection } from '@/components/StatsSection';
import { ServiceBenefitsSection } from '@/components/ServiceBenefitsSection';
import { InfrastructureSection } from '@/components/InfrastructureSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { AboutSection } from '@/components/AboutSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ClientSection } from '@/components/ClientSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ServiceBenefitsSection />
      <ClientSection/>
      <StatsSection />
      <InfrastructureSection />
      {/* <PrestigiousProjectsSection /> */}
      <WhyChooseUsSection />
      <AboutSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
