import { useState, useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";
import { useBrand } from "@/lib/brand";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const brand = useBrand();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-modernist ${
        isScrolled 
          ? "bg-brand-burgundy/90 backdrop-blur-xl border-b border-white/15 shadow-2xl py-3 px-4 sm:px-8 md:px-12" 
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 px-4 sm:px-8 md:px-12"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: BRAND LOGO (SCROLL TO TOP) */}
        <div 
          onClick={scrollToTop}
          className="flex items-center cursor-pointer group"
        >
          <img 
            src={brand.assets.horizontalWhite} 
            alt={`Logo ${brand.name} Header`} 
            className="w-24 sm:w-28 md:w-32 max-h-14 h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* RIGHT: DOWNLOAD ASSET BRAND CTA BUTTON (LINKED TO GDRIVE) */}
        <div className="flex items-center gap-3">
          <a
            href={brand.assetDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-white text-brand-burgundy font-modernist font-bold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Asset</span>
            <ExternalLink className="w-3 h-3 text-brand-burgundy/60 group-hover:text-brand-burgundy hidden sm:inline-block" />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
