import { Bookmark } from "lucide-react";
import { useBrand } from "@/lib/brand";

const TypographySection = () => {
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const isHamasah = brand.slug === "hamasahbakery";

  const fontClass = isHaramain ? "font-trajan" : "font-modernist";
  const typefaceName = isHamasah ? "Hamasah Handcrafted Display" : isHaramain ? "Trajan Pro 3" : "Sk-Modernist";
  const firstWord = isHamasah ? "Hamasah" : isHaramain ? "Haramain" : "Markaz";
  const secondWord = isHamasah ? "Bakery" : isHaramain ? "Capture" : "Fiqih";
  const typefaceTraits = isHamasah ? "Ramah • Ceria • Organik & Manis" : isHaramain ? "Klasik • Elegan • Monumental" : "Tegas • Modern • Geometris";

  return (
    <section className={`relative min-h-[100dvh] w-full bg-brand-sand overflow-hidden flex flex-col justify-between py-8 px-6 md:py-12 md:px-12 lg:px-20 text-brand-burgundy ${fontClass}`}>
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
      
      {/* GHOST TEXT (Background Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0 select-none pointer-events-none flex justify-center items-center">
        <h1 
            className={`${fontClass} font-bold text-[20vw] md:text-[16vw] text-brand-red/5 leading-none tracking-normal uppercase`}
            style={{ WebkitTextStroke: '2px rgba(171, 33, 48, 0.04)' }}
        >
            TIPOGRAFI
        </h1>
      </div>

      {/* --- 1. HEADER --- */}
      <div className={`relative z-10 flex justify-between items-start text-[10px] md:text-xs uppercase tracking-widest ${fontClass} text-brand-burgundy/70`}>
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            <span className="font-bold">{brand.handle}</span>
        </div>
        <span className="hidden md:block font-bold">Typography & Logotype System</span>
        <span>08 / 10</span>
      </div>

      {/* --- 2. CENTER HERO (The Logotype Stack) --- */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center my-8 md:my-12">
        
        {/* Floating Tag */}
        <div className="mb-6 border border-brand-red/20 bg-white/40 rounded-full px-4 py-1 backdrop-blur-sm">
            <span className={`text-[9px] md:text-[10px] text-brand-red ${fontClass} font-bold uppercase tracking-widest`}>Brand Typeface — {typefaceName}</span>
        </div>

        {/* --- MAIN TYPOGRAPHY STACK --- */}
        <div className={`relative text-center max-w-4xl ${fontClass} flex flex-col items-center justify-center`}>
            
            {/* 1. HAMASAH / MARKAZ (Atas) */}
            <div className="relative">
                <h2 className={`${fontClass} font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] text-brand-burgundy tracking-normal`}>
                    {firstWord}
                </h2>
            </div>

            {/* 2. BAKERY / FIQIH (Bawah - rapat) */}
            <div className="relative -mt-3 sm:-mt-6 md:-mt-8 lg:-mt-10">
                 <h2 className={`${fontClass} font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] text-brand-gold tracking-normal`}>
                    {secondWord}
                </h2>
            </div>

            {/* Bottom Tag */}
            <div className="mt-8 md:mt-12 flex justify-center">
                <div className="border border-brand-burgundy/20 bg-white/30 rounded-full px-5 py-1.5 backdrop-blur-sm">
                    <span className={`text-[9px] md:text-[10px] text-brand-burgundy uppercase tracking-[0.2em] ${fontClass} font-bold`}>{typefaceName} • {typefaceTraits}</span>
                </div>
            </div>

        </div>
      </div>

      {/* --- 3. FOOTER CONTENT --- */}
      <div className={`relative z-10 w-full border-t border-brand-burgundy/15 pt-6 md:pt-8 ${fontClass}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end">
            
            {/* Description Text */}
            <div className="space-y-2 max-w-xl">
                <h3 className={`text-sm md:text-base ${fontClass} font-bold text-brand-red uppercase tracking-wide`}>Typeface — {typefaceName}:</h3>
                <div className={`space-y-1.5 text-xs md:text-sm text-brand-burgundy/80 ${fontClass} leading-relaxed`}>
                    <p>
                        <span className="text-brand-burgundy font-bold">Bentuk Huruf Organik & Ceria:</span> Menggunakan tipografi <span className="text-brand-red font-bold">{typefaceName}</span> yang {isHamasah ? "memiliki sudut membulat, ramah, dan menyampaikan kehangatan roti fresh dari oven." : isHaramain ? "klasik, berwibawa, dan selaras dengan nuansa perjalanan ibadah serta dokumentasi tanah suci." : "tegas dan geometris untuk menjaga profesionalitas identitas lembaga."}
                    </p>
                    <p>
                        <span className="text-brand-burgundy font-bold">Hierarki Logotype:</span> Susunan kata "{brand.name}" yang seimbang memudahkan keterbacaan di seluruh kemasan, media cetak, maupun digital.
                    </p>
                </div>
            </div>

            {/* Brand Info & Bookmark */}
            <div className="flex justify-between md:justify-end items-center gap-6">
                <div className="text-left md:text-right">
                    <h4 className={`${fontClass} font-bold text-xs md:text-sm text-brand-burgundy`}>{brand.name} Identity</h4>
                    <p className={`text-[10px] md:text-xs text-brand-burgundy/60 ${fontClass}`}>Font: {typefaceName} (Custom Display)</p>
                </div>
                <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-brand-red/10 hover:bg-brand-red/20 flex items-center justify-center transition-colors border border-brand-red/20">
                    <Bookmark className="w-4 h-4 text-brand-red" />
                </button>
            </div>

        </div>
      </div>

    </section>
  );
};

export default TypographySection;
