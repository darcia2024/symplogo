import { Bookmark } from "lucide-react";

const TypographySection = () => {
  return (
    <section className="relative min-h-[100dvh] w-full bg-[#F5F1E8] overflow-hidden flex flex-col justify-between py-8 px-6 md:py-12 md:px-12 lg:px-20 text-[#3D2426] font-modernist">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
      
      {/* GHOST TEXT (Background Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0 select-none pointer-events-none flex justify-center items-center">
        <h1 
            className="font-modernist font-bold text-[20vw] md:text-[16vw] text-[#AB2130]/5 leading-none tracking-tighter uppercase"
            style={{ WebkitTextStroke: '2px rgba(171, 33, 48, 0.04)' }}
        >
            TIPOGRAFI
        </h1>
      </div>

      {/* --- 1. HEADER --- */}
      <div className="relative z-10 flex justify-between items-start text-[10px] md:text-xs uppercase tracking-widest font-modernist text-[#3D2426]/70">
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#AB2130]"></span>
            <span className="font-bold">@MARKAZFIQIH</span>
        </div>
        <span className="hidden md:block font-bold">Typography & Logotype System</span>
        <span>08 / 10</span>
      </div>

      {/* --- 2. CENTER HERO (The Logotype Stack) --- */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center my-8 md:my-12">
        
        {/* Floating Tag */}
        <div className="mb-6 border border-[#AB2130]/20 bg-white/40 rounded-full px-4 py-1 backdrop-blur-sm">
            <span className="text-[9px] md:text-[10px] text-[#AB2130] font-modernist font-bold uppercase tracking-widest">Brand Typeface — Sk-Modernist</span>
        </div>

        {/* --- MAIN TYPOGRAPHY STACK --- */}
        <div className="relative text-center max-w-4xl font-modernist flex flex-col items-center justify-center">
            
            {/* 1. MARKAZ (Atas) */}
            <div className="relative">
                <h2 className="font-modernist font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.8] text-[#3D2426] tracking-tight">
                    Markaz
                </h2>
            </div>

            {/* 2. FIQIH (Bawah - rapat) */}
            <div className="relative -mt-3 sm:-mt-6 md:-mt-8 lg:-mt-10">
                 <h2 className="font-modernist font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.8] text-[#AB2130] tracking-tight">
                    Fiqih
                </h2>
            </div>

            {/* Bottom Tag */}
            <div className="mt-8 md:mt-12 flex justify-center">
                <div className="border border-[#3D2426]/20 bg-white/30 rounded-full px-5 py-1.5 backdrop-blur-sm">
                    <span className="text-[9px] md:text-[10px] text-[#3D2426] uppercase tracking-[0.2em] font-modernist font-bold">Sk-Modernist • Tegas • Modern • Geometris</span>
                </div>
            </div>

        </div>
      </div>

      {/* --- 3. FOOTER CONTENT --- */}
      <div className="relative z-10 w-full border-t border-[#3D2426]/15 pt-6 md:pt-8 font-modernist">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end">
            
            {/* Description Text */}
            <div className="space-y-2 max-w-xl">
                <h3 className="text-sm md:text-base font-modernist font-bold text-[#AB2130] uppercase tracking-wide">Typeface — Sk Modernist:</h3>
                <div className="space-y-1.5 text-xs md:text-sm text-[#3D2426]/80 font-modernist leading-relaxed">
                    <p>
                        <span className="text-[#3D2426] font-bold">Bentuk Huruf Bersih & Modern:</span> Menggunakan font <span className="text-[#AB2130] font-bold">Sk-Modernist</span> (Bold & Regular) yang tegas dan geometris untuk menjaga profesionalitas identitas lembaga.
                    </p>
                    <p>
                        <span className="text-[#3D2426] font-bold">Hierarki Logotype:</span> Susunan kata "Markaz Fiqih" yang seimbang memudahkan keterbacaan di seluruh media cetak maupun digital.
                    </p>
                </div>
            </div>

            {/* Brand Info & Bookmark */}
            <div className="flex justify-between md:justify-end items-center gap-6">
                <div className="text-left md:text-right">
                    <h4 className="font-modernist font-bold text-xs md:text-sm text-[#3D2426]">Markaz Fiqih Identity</h4>
                    <p className="text-[10px] md:text-xs text-[#3D2426]/60 font-modernist">Font: Sk-Modernist (Bold / Regular)</p>
                </div>
                <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#AB2130]/10 hover:bg-[#AB2130]/20 flex items-center justify-center transition-colors border border-[#AB2130]/20">
                    <Bookmark className="w-4 h-4 text-[#AB2130]" />
                </button>
            </div>

        </div>
      </div>

    </section>
  );
};

export default TypographySection;
