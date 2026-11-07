import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";

export default function HomePage() {
  return (
    <main>
      <PortfolioHero />
      <SelectedWork />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
