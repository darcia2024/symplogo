import logoFix21White from "@/assets/logo-markaz-fiqih-fix-2-1-white.png";
import logoSympWhite from "@/assets/logo-symp-white.png";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("brand-identity");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-brand-burgundy overflow-hidden px-4 font-modernist pt-24 pb-12">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B1825] via-[#AB2130] to-[#991D2A] opacity-95" />
      
      {/* Soft Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[480px] h-[120px] sm:h-[180px] bg-brand-gold/15 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none animate-pulse-slow" />

      {/* Subtle geometric grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #E5C158 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

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
              src={logoFix21White} 
              alt="Logo Markaz Fiqih." 
              className="relative z-10 w-[260px] xs:w-[320px] sm:w-[440px] md:w-[560px] lg:w-[660px] h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 ease-out"
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
