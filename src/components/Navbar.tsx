import { useState, useEffect, useRef } from "react";
import { Download, ExternalLink, ChevronDown, Layers, Check, Sparkles } from "lucide-react";
import { useBrand } from "@/lib/brand";
import { useNavigate, useLocation } from "react-router-dom";

interface BrandNavItem {
  slug: string;
  name: string;
  tag: string;
  icon: string;
  path: string;
}

const brandNavList: BrandNavItem[] = [
  {
    slug: "hamasahlaundry",
    name: "Hamasah Laundry",
    tag: "Laundry Care & Hygiene",
    icon: "🧼",
    path: "/hamasahlaundry",
  },
  {
    slug: "hamasahbakery",
    name: "Hamasah Bakery",
    tag: "Fresh Artisan Bakery",
    icon: "🍞",
    path: "/hamasahbakery",
  },
  {
    slug: "haramaincapture",
    name: "Haramain Capture",
    tag: "Sacred Journey Media",
    icon: "📷",
    path: "/haramaincapture",
  },
  {
    slug: "markazfiqih",
    name: "Markaz Fiqih",
    tag: "Islamic Law & Studies",
    icon: "📚",
    path: "/markazfiqih",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const brand = useBrand();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectBrand = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-modernist ${
        isScrolled 
          ? "bg-brand-burgundy/90 backdrop-blur-xl border-b border-white/15 shadow-2xl py-2.5 px-4 sm:px-8 md:px-12" 
          : "bg-gradient-to-b from-black/70 via-black/35 to-transparent py-3.5 px-4 sm:px-8 md:px-12"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* LEFT: BRAND LOGO (SCROLL TO TOP) */}
        <div 
          onClick={scrollToTop}
          className="flex items-center cursor-pointer group flex-shrink-0"
        >
          <img 
            src={brand.assets.horizontalWhite} 
            alt={`Logo ${brand.name} Header`} 
            className="w-24 sm:w-28 md:w-32 max-h-12 h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* CENTER: INTERACTIVE MULTI-BRAND SELECTOR DROPDOWN */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-brand-gold/50 backdrop-blur-md transition-all duration-300 text-white shadow-md group"
            title="Pilih & Beralih Brand"
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold-light group-hover:scale-110 transition-transform" />
            <span className="font-modernist font-bold text-[11px] sm:text-xs text-white tracking-wide flex items-center gap-1.5">
              <span className="hidden sm:inline text-white/70">Brand:</span>
              <span className="text-brand-gold-light">{brand.name}</span>
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-white/70 transition-transform duration-300 ${isMenuOpen ? "rotate-180 text-brand-gold-light" : ""}`} />
          </button>

          {/* DROPDOWN MENU */}
          {isMenuOpen && (
            <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 w-64 sm:w-72 bg-[#17060A]/95 border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-2 z-50 animate-fade-in text-white">
              <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">
                  Pilih Brand Showcase
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-brand-gold/20 text-brand-gold-light font-bold">
                  4 Brands
                </span>
              </div>

              <div className="space-y-1">
                {brandNavList.map((item) => {
                  const isActive = brand.slug === item.slug;
                  return (
                    <button
                      key={item.slug}
                      onClick={() => handleSelectBrand(item.path)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all duration-200 ${
                        isActive
                          ? "bg-white/15 border border-brand-gold/40 text-white shadow-inner"
                          : "hover:bg-white/10 text-white/80 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg flex-shrink-0">{item.icon}</span>
                        <div>
                          <span className={`text-xs font-bold block leading-tight ${isActive ? "text-brand-gold-light" : "text-white"}`}>
                            {item.name}
                          </span>
                          <span className="text-[10px] text-white/50 block">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      {isActive && (
                        <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-burgundy flex items-center justify-center flex-shrink-0 shadow">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: DOWNLOAD ASSET BRAND CTA BUTTON (LINKED TO GDRIVE) */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={brand.assetDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-gold hover:bg-white text-brand-burgundy font-modernist font-bold text-[11px] sm:text-xs md:text-sm px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform" />
            <span className="hidden xs:inline">Download Asset</span>
            <span className="xs:hidden">Asset</span>
            <ExternalLink className="w-3 h-3 text-brand-burgundy/60 group-hover:text-brand-burgundy hidden sm:inline-block" />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
