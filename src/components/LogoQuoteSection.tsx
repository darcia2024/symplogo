import { Quote, Sparkles } from "lucide-react";
import { useBrand } from "@/lib/brand";

const LogoQuoteSection = () => {
  const brand = useBrand();

  return (
    <section className="min-h-screen bg-brand-burgundy py-16 md:py-24 px-6 md:px-12 lg:px-20 flex flex-col justify-between relative overflow-hidden font-modernist">
      
      {/* --- SUBTLE BACKGROUND LIGHTING --- */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`,
        backgroundSize: '36px 36px'
      }} />

      {/* --- 1. TOP HEADER BAR --- */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex items-center justify-between border-b border-white/15 pb-5 text-xs tracking-[0.25em] text-white/70 font-modernist uppercase">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-widest text-xs md:text-sm">
              Manifesto Identitas Visual
            </span>
          </div>
          <span className="text-brand-gold-light font-bold text-sm md:text-base tracking-widest">02 / 10</span>
        </div>
      </div>

      {/* --- 2. OPEN EDITORIAL MANIFESTO (NO CARD, NO CIRCLE) --- */}
      <div className="max-w-6xl mx-auto w-full relative z-10 my-auto py-12 md:py-20">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: FREESTANDING FLOATING EMBLEM (NO CIRCLE FRAME) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group cursor-pointer">
              {/* Soft Ambient Backdrop Aura */}
              <div className="absolute -inset-6 sm:-inset-8 bg-brand-gold/25 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />
              
              {/* Freestanding Floating Emblem Image */}
              <img 
                src={brand.assets.dark} 
                alt={`Symbol ${brand.name} Emblem`} 
                className="relative z-10 w-36 sm:w-60 md:w-72 lg:w-80 max-h-[360px] h-auto object-contain animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT: OPEN EDITORIAL MANIFESTO QUOTE */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-4 sm:space-y-6">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-brand-gold-light/30" />
            
            <blockquote className="font-modernist font-bold text-lg sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white leading-[1.4] sm:leading-[1.35] tracking-tight drop-shadow-md">
              "{brand.manifesto}"
            </blockquote>

            <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/15 w-max">
              <span className="w-8 sm:w-10 h-0.5 bg-brand-gold-light rounded-full" />
              <span className="text-brand-gold-light text-[10px] sm:text-xs md:text-sm font-modernist font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                Guideline Logo {brand.name}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* --- 3. FOOTER METADATA --- */}
      <div className="max-w-6xl mx-auto w-full relative z-10 border-t border-white/15 pt-5 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/50 font-modernist">
        <span>{brand.name} Guidelines</span>
        <span className="text-brand-gold-light font-bold">Identity Manifesto</span>
      </div>

    </section>
  );
};

export default LogoQuoteSection;
