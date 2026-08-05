import logoSympWhite from "@/assets/logo-symp-white.png";
import { useBrand } from "@/lib/brand";

const HeroSection = () => {
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const scrollToNext = () => {
    const nextSection = document.getElementById("brand-identity");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-brand-burgundy overflow-hidden px-4 font-modernist pt-24 pb-12">
      {isHaramain ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#071007_0%,#182016_42%,#9AD12A_160%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(154,209,42,0.26),_transparent_46%),linear-gradient(180deg,_rgba(0,0,0,0.08)_0%,_rgba(0,0,0,0.64)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.13] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(30deg, rgba(255,255,255,0.16) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.16) 87.5%, rgba(255,255,255,0.16)), linear-gradient(150deg, rgba(255,255,255,0.16) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.16) 87.5%, rgba(255,255,255,0.16)), linear-gradient(30deg, rgba(255,255,255,0.16) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.16) 87.5%, rgba(255,255,255,0.16)), linear-gradient(150deg, rgba(255,255,255,0.16) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.16) 87.5%, rgba(255,255,255,0.16))",
              backgroundPosition: "0 0, 0 0, 32px 56px, 32px 56px",
              backgroundSize: "64px 112px",
            }}
          />
          <div className="absolute left-[-15vw] top-0 h-full w-[42vw] rotate-[-12deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
          <div className="absolute right-[-18vw] bottom-0 h-full w-[40vw] rotate-[14deg] bg-gradient-to-r from-transparent via-brand-gold/[0.08] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-burgundy to-brand-burgundy-light opacity-95" />
          
          {/* Soft Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[480px] h-[120px] sm:h-[180px] bg-brand-gold/15 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none animate-pulse-slow" />

          {/* Subtle geometric grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #E5C158 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
          </div>
        </>
      )}

      {/* TOP FLOATING OUTLINE CREDIT BADGE (HIGH POSITION ABOVE HERO LOGO) */}
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
        <a
          href="https://wa.me/6281311506025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-transparent border border-white/40 hover:border-brand-gold-light hover:bg-white/10 backdrop-blur-md transition-all duration-300 shadow-lg group hover:scale-105 active:scale-95 cursor-pointer"
          title="Hubungi SYMP Studio via WhatsApp"
        >
          <span className="text-white/85 font-modernist text-[10px] sm:text-xs tracking-wider uppercase">
            Logo by <strong className="text-white font-bold group-hover:text-brand-gold-light transition-colors">SYMP Studio</strong>
          </span>
          <img 
            src={logoSympWhite} 
            alt="SYMP Studio Logo White" 
            className="h-3.5 sm:h-4.5 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Main content with Animated Moving Logo */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 text-center max-w-4xl mx-auto my-auto pt-16 pb-10">
        <div className="animate-fade-up flex flex-col items-center">
          {/* Main Logo Image with Precision Drop-Shadow Following the Exact Outline of Logo Text & Emblem */}
          <div className="relative group cursor-pointer animate-float">
            <img 
              src={brand.assets.dark} 
              alt={`Logo ${brand.name}.`} 
              className={`relative z-10 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 ease-out ${
                isHaramain
                  ? "w-[205px] xs:w-[255px] sm:w-[350px] md:w-[430px] lg:w-[505px] max-h-[54vh]"
                  : "w-[240px] xs:w-[300px] sm:w-[420px] md:w-[520px] lg:w-[620px] max-h-[64vh]"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Animated Mouse Scroll Indicator */}
      <div 
        onClick={scrollToNext}
        className="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group animate-fade-in z-20"
      >
        <span className="text-primary-foreground/60 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-modernist font-bold group-hover:text-brand-gold-light transition-colors">
          Jelajahi Guideline
        </span>
        
        {/* Mouse Shape */}
        <div className="relative w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-foreground/40 rounded-full group-hover:border-brand-gold-light transition-colors">
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-1 h-2 bg-brand-gold-light rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
