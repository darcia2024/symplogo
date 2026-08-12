import { useState } from "react";
import { Sparkles, Layers, Compass, Quote } from "lucide-react";
import { useBrand } from "@/lib/brand";

const BrandIdentitySection = () => {
  const [activeTab, setActiveTab] = useState<"dark" | "light">("light");
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const isHamasah = brand.slug === "hamasahbakery";

  const essenceTitle = isHamasah ? "Rumah & Roti Senyum" : "Inti Simbol";
  const essenceDesc = isHamasah
    ? "Penyatuan kehangatan rumah bakery dan karakter roti tawar tersenyum (Toast Smile) dengan warna keemasan yang manis & lezat."
    : "Penyatuan simbol utama & logotype dengan aksen warna primer yang kuat.";

  const visionTitle = isHamasah ? "Kehangatan & Ceria" : isHaramain ? "Visi Dokumentasi" : "Visi Keilmuan";
  const visionDesc = isHamasah
    ? "Identitas visual yang ramah, manis, dan ceria, menghadirkan kehangatan roti fresh dari oven bagi setiap pelanggan."
    : "Identitas visual yang kokoh, profesional, mudah dikenali, dan relevan di berbagai media.";

  return (
    <section id="brand-identity" className="relative min-h-screen w-full bg-brand-burgundy text-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-modernist">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/30 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Pattern Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`,
        backgroundSize: '36px 36px'
      }} />

      {/* --- 1. CENTERED SECTION HEADER --- */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 md:mb-16 font-modernist">
        <h2 className="font-modernist font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 tracking-tight">
          Identitas Utama & Visi
        </h2>

        <p className="text-white/80 font-modernist text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-4">
          Penegasan identitas visual {brand.name} pada berbagai variasi latar sebagai sistem visual yang konsisten, kuat, dan mudah dikenali.
        </p>
      </div>

      {/* --- 2. MAIN SPLIT CONTENT GRID --- */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center font-modernist">

        {/* LEFT COLUMN: LOGO SHOWCASE PEDESTAL (7 COLS) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Mode Switcher Pills */}
          <div className="flex w-full sm:w-auto justify-center gap-1.5 sm:gap-2 p-1.5 bg-black/40 rounded-full border border-white/15 backdrop-blur-xl mb-6 shadow-xl font-modernist">
            <button
              onClick={() => setActiveTab("light")}
              className={`flex-1 sm:flex-none px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold font-modernist transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === "light"
                  ? "bg-brand-cream text-brand-red shadow-lg border border-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-red flex-shrink-0"></span>
              <span className="whitespace-nowrap">Latar Terang</span>
            </button>

            <button
              onClick={() => setActiveTab("dark")}
              className={`flex-1 sm:flex-none px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold font-modernist transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === "dark"
                  ? "bg-brand-black text-white shadow-lg border border-brand-gold/40"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-gold-light flex-shrink-0"></span>
              <span className="whitespace-nowrap">Latar Gelap</span>
            </button>
          </div>

          {/* Logo Showcase Display Card */}
          <div className="w-full relative group">
            {/* Glowing Backdrop Aura */}
            <div className={`absolute -inset-2 rounded-[2rem] sm:rounded-[2.5rem] blur-2xl transition-all duration-700 pointer-events-none ${
              activeTab === "dark" ? "bg-brand-gold/25 opacity-70" : "bg-white/40 opacity-80"
            }`} />

            {/* Main Showcase Container */}
            <div className={`relative w-full min-h-[280px] sm:min-h-[400px] md:min-h-[420px] rounded-[2rem] sm:rounded-[2.5rem] border shadow-2xl p-6 sm:p-12 md:p-14 flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              activeTab === "dark"
                ? "bg-brand-black border-brand-gold/40 shadow-black/70"
                : "bg-brand-cream border-white shadow-2xl"
            }`}>
              
              {/* Top Watermark Badge */}
              <div className="flex justify-between items-center w-full relative z-10 font-modernist">
                <span className={`text-[9px] sm:text-[10px] font-modernist font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] ${
                  activeTab === "dark" ? "text-brand-gold-light/80" : "text-brand-red/70"
                }`}>
                  Master Logo {brand.name}
                </span>
                <span className={`text-[9px] sm:text-[10px] font-modernist font-bold uppercase tracking-widest px-2 sm:px-2.5 py-0.5 rounded-full border ${
                  activeTab === "dark" ? "border-brand-gold/30 text-brand-gold-light bg-black/30" : "border-brand-red/20 text-brand-red bg-brand-red/5"
                }`}>
                  {activeTab === "dark" ? "Primary Dark" : "Primary Light"}
                </span>
              </div>

              {/* Center Logo Asset Display with Technical Guideline Dashed Grid */}
              <div className="my-auto py-6 sm:py-8 flex items-center justify-center relative z-10 w-full">
                <div className="relative flex items-center justify-center p-6 sm:p-10 border border-dashed border-brand-gold/40 rounded-2xl group/grid w-full max-w-[440px]">
                  
                  {/* Corner Crosshair Ticks (+ / L shapes on 4 corners) */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-brand-gold text-brand-gold font-mono text-[9px] font-bold flex items-center justify-center bg-black/40 rounded-tl-sm">+</div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-brand-gold text-brand-gold font-mono text-[9px] font-bold flex items-center justify-center bg-black/40 rounded-tr-sm">+</div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-brand-gold text-brand-gold font-mono text-[9px] font-bold flex items-center justify-center bg-black/40 rounded-bl-sm">+</div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-brand-gold text-brand-gold font-mono text-[9px] font-bold flex items-center justify-center bg-black/40 rounded-br-sm">+</div>

                  {/* Center Horizontal Dashed Axis Line */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-b border-dashed border-brand-gold/30 pointer-events-none" />
                  
                  {/* Center Vertical Dashed Axis Line */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-r border-dashed border-brand-gold/30 pointer-events-none" />

                  {/* Technical Spacing Measurement Badges */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black/70 text-brand-gold-light border border-brand-gold/40 text-[8px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest backdrop-blur-md shadow-md">
                    1.0X Clear Space
                  </div>

                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-brand-gold-light border border-brand-gold/40 text-[8px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest backdrop-blur-md shadow-md">
                    Safe Guideline Grid
                  </div>

                  {/* Logo Image */}
                  <img 
                    src={
                      activeTab === "dark"
                        ? brand.assets.dark
                        : isHamasah
                        ? brand.assets.horizontalColor
                        : brand.assets.primary
                    } 
                    alt={`Logo ${brand.name} Master Showcase`} 
                    className="w-full max-w-[240px] sm:max-w-[340px] max-h-[360px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover/grid:scale-105 relative z-10"
                  />
                </div>
              </div>

              {/* Bottom Specs Info Bar */}
              <div className={`flex justify-between items-center w-full pt-3 sm:pt-4 border-t relative z-10 text-[9px] sm:text-[10px] font-modernist font-bold uppercase tracking-wider ${
                activeTab === "dark" ? "border-white/15 text-white/60" : "border-black/10 text-black/50"
              }`}>
                <span>Vector High-Res Master</span>
                <span className={activeTab === "dark" ? "text-brand-gold-light" : "text-brand-red"}>
                  {brand.shortName} Identity
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ESSENCE & VISION TEXT CARDS (5 COLS - 2 COLUMNS ON MOBILE FOR ULTRA-COMPACT FIT) */}
        <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-4 text-left font-modernist">
          
          {/* Card 1: Essence (Inti Simbol) */}
          <div className="p-3 sm:p-6 rounded-xl sm:rounded-3xl bg-black/30 border border-white/15 backdrop-blur-md shadow-xl hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-2xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold-light flex-shrink-0">
                  <Layers className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-modernist font-bold text-brand-gold-light uppercase tracking-wider block">Essence</span>
                  <h3 className="text-xs sm:text-xl font-modernist font-bold text-white tracking-tight leading-tight">{essenceTitle}</h3>
                </div>
              </div>
              <p className="text-white/80 text-[10px] sm:text-sm font-modernist leading-relaxed line-clamp-4 sm:line-clamp-none">
                {essenceDesc}
              </p>
            </div>
          </div>

          {/* Card 2: Vision (Visi Brand / Visi Keilmuan) */}
          <div className="p-3 sm:p-6 rounded-xl sm:rounded-3xl bg-black/30 border border-white/15 backdrop-blur-md shadow-xl hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-2xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold-light flex-shrink-0">
                  <Compass className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-modernist font-bold text-brand-gold-light uppercase tracking-wider block">Vision</span>
                  <h3 className="text-xs sm:text-xl font-modernist font-bold text-white tracking-tight leading-tight">{visionTitle}</h3>
                </div>
              </div>
              <p className="text-white/80 text-[10px] sm:text-sm font-modernist leading-relaxed line-clamp-4 sm:line-clamp-none">
                {visionDesc}
              </p>
            </div>
          </div>

          {/* Featured Quote Box (Spans 2 columns on mobile) */}
          <div className="col-span-2 lg:col-span-1 p-3.5 sm:p-6 rounded-xl sm:rounded-3xl bg-gradient-to-r from-brand-gold/20 to-black/40 border border-brand-gold/40 backdrop-blur-md relative overflow-hidden">
            <Quote className="absolute top-2 right-2 w-6 h-6 sm:w-12 sm:h-12 text-brand-gold-light/15 pointer-events-none" />
            <p className="text-white/90 italic text-[11px] sm:text-sm font-modernist font-light leading-relaxed relative z-10">
              {brand.tagline}
            </p>
            <span className="text-[8px] sm:text-[9px] font-modernist font-bold uppercase tracking-widest text-brand-gold-light mt-1.5 sm:mt-3 block relative z-10">
              — {brand.name} Identity Message
            </span>
          </div>

        </div>

      </div>

      {/* --- FOOTER METADATA TAG --- */}
      <div className="mt-16 md:mt-20 max-w-7xl mx-auto pt-6 border-t border-white/15 flex justify-between items-center text-[10px] font-modernist uppercase tracking-widest text-white/50">
        <span>{brand.name} Guidelines</span>
        <span className="text-brand-gold-light font-bold">01 / 10</span>
      </div>

      {/* --- SECTION DIVIDER / LOGO QUOTE SEAMLESS INTEGRATION --- */}
      <div className="mt-20 max-w-5xl mx-auto pt-16 border-t border-white/10 text-center font-modernist">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold-light mb-6">
          <Quote className="w-6 h-6" />
        </div>
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-modernist font-extrabold text-white leading-relaxed max-w-3xl mx-auto">
          "{brand.tagline}"
        </blockquote>
        <div className="mt-6 text-xs sm:text-sm font-modernist text-white/70 max-w-2xl mx-auto leading-relaxed">
          {brand.manifesto}
        </div>
      </div>

    </section>
  );
};

export default BrandIdentitySection;
