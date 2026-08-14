import { useState, useEffect } from "react";
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
import BrandPasswordModal from "@/components/BrandPasswordModal";
import { BrandProvider, type BrandConfig } from "@/lib/brand";
import { isBrandUnlocked, lockBrand } from "@/lib/auth";

type IndexProps = {
  brand: BrandConfig;
};

const Index = ({ brand }: IndexProps) => {
  const [unlocked, setUnlocked] = useState<boolean>(() => isBrandUnlocked(brand.slug));

  useEffect(() => {
    setUnlocked(isBrandUnlocked(brand.slug));
  }, [brand.slug]);

  const handleLock = () => {
    lockBrand(brand.slug);
    setUnlocked(false);
  };

  if (!unlocked) {
    return (
      <BrandProvider brand={brand}>
        <BrandPasswordModal 
          brand={brand} 
          onUnlocked={() => setUnlocked(true)} 
        />
      </BrandProvider>
    );
  }

  return (
    <BrandProvider brand={brand}>
      <main className={`overflow-x-hidden relative ${brand.themeClass}`}>
        <Navbar onLockBrand={handleLock} />
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
    </BrandProvider>
  );
};

export default Index;
