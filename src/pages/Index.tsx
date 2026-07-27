import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIdentitySection from "@/components/BrandIdentitySection";
import LogoQuoteSection from "@/components/LogoQuoteSection";
import LogoVariationsSection from "@/components/LogoVariationsSection";
import BrandOverviewSection from "@/components/BrandOverviewSection";
import PhilosophySection from "@/components/PhilosophySection";
import PhilosophyMeaningSection from "@/components/PhilosophyMeaningSection";
import ColorSystemSection from "@/components/ColorSystemSection";
import TypographySection from "@/components/TypographySection";
import IncorrectUsageSection from "@/components/IncorrectUsageSection";
import LogoPhilosophyDetailSection from "@/components/LogoPhilosophyDetailSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      <Navbar />
      <HeroSection />
      <BrandIdentitySection />
      <LogoQuoteSection />
      <LogoVariationsSection />
      <BrandOverviewSection />
      <PhilosophySection />
      <PhilosophyMeaningSection />
      <ColorSystemSection />
      <TypographySection />
      <IncorrectUsageSection />
      <LogoPhilosophyDetailSection />
      <FooterSection />
    </main>
  );
};

export default Index;
