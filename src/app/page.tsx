import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { ServicesSection } from "@/components/portfolio/ServicesSection";

export default function HomePage() {
  return (
    <main>
      <PortfolioHero />
      <SelectedWork />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
