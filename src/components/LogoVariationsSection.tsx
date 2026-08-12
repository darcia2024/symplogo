import { useBrand } from "@/lib/brand";

const LogoVariationsSection = () => {
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const isHamasah = brand.slug === "hamasahbakery";

  return (
    <section className="relative min-h-screen w-full bg-brand-burgundy flex flex-col justify-between py-12 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden font-modernist">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40 pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="w-full z-10">
        <div className="flex justify-between items-end text-[10px] md:text-xs tracking-[0.2em] text-primary-foreground/60 font-body uppercase mb-6">
          <span>{brand.name} Identity Guidelines</span>
          <span className="hidden md:block">Logo Variations & Rules</span>
          <span>03</span>
        </div>
        <div className="w-full h-px bg-primary-foreground/20" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10 my-12">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="font-modernist font-bold text-3xl md:text-5xl text-primary-foreground mb-3">
            Variasi Resmi Logo
          </h2>
          <p className="text-primary-foreground/70 font-body text-xs md:text-sm leading-relaxed">
            {isHamasah
              ? "Logo Hamasah Bakery hadir dalam variasi warna latar belakang resmi (Dark Roast, Sun Yellow, Light Cream, Coral Pink) untuk menjaga fleksibilitas komunikasi media cetak & digital."
              : "Logo utama ditampilkan dalam komposisi lengkap antara simbol dan logotype. Versi simbol dapat digunakan secara mandiri untuk kebutuhan visual berukuran kecil."}
          </p>
        </div>

        {/* 2-Column Mobile & 4-Column Desktop Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-7xl">
            
            {/* 1. Master Logo Card */}
            <div className="group relative flex flex-col">
                <div className="absolute -inset-1 bg-brand-gold/10 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative flex-1 bg-black/25 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 p-3.5 sm:p-6 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px] overflow-hidden">
                    <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold-light font-body font-medium self-start truncate w-full">01. Utama (Dark Roast)</span>
                    <img 
                        src={isHamasah ? (brand.assets.dark || brand.assets.primary) : brand.assets.horizontalWhite} 
                        alt="Logo Utama Latar Gelap" 
                        className="w-full max-w-[140px] sm:max-w-[210px] max-h-[180px] h-auto object-contain drop-shadow-md my-3 sm:my-6 group-hover:scale-105 transition duration-300 rounded-xl"
                    />
                    <div className="text-center">
                        <span className="text-xs sm:text-sm font-display text-primary-foreground block truncate">{isHamasah ? "Chocolate #5B3715" : "Horizontal White"}</span>
                        <span className="text-[9px] sm:text-[11px] text-primary-foreground/60 font-body block truncate">{isHamasah ? "Latar Cokelat Utama" : isHaramain ? "Latar Hijau / Gelap" : "Latar Merah / Gelap"}</span>
                    </div>
                </div>
            </div>

            {/* 2. Variation 2 (Yellow BG) */}
            <div className="group relative flex flex-col">
                <div className="absolute -inset-1 bg-white/20 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative flex-1 bg-[#FDFBF7] backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-black/5 p-3.5 sm:p-6 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px] overflow-hidden">
                    <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-red font-body font-medium self-start truncate w-full">02. Sun Yellow</span>
                    <img 
                        src={isHamasah ? (brand.assets.yellowBg || brand.assets.horizontalColor) : brand.assets.horizontalColor} 
                        alt="Logo Variasi Yellow" 
                        className="w-full max-w-[140px] sm:max-w-[210px] max-h-[180px] h-auto object-contain drop-shadow-md my-3 sm:my-6 group-hover:scale-105 transition duration-300 rounded-xl"
                    />
                    <div className="text-center">
                        <span className="text-xs sm:text-sm font-display text-brand-burgundy block truncate">{isHamasah ? "Yellow #FFD21C" : isHaramain ? "Horizontal Color" : "Horizontal Red"}</span>
                        <span className="text-[9px] sm:text-[11px] text-muted-foreground font-body block truncate">{isHamasah ? "Latar Kuning Bakat" : "Latar Putih / Terang"}</span>
                    </div>
                </div>
            </div>

            {/* 3. Variation 3 (Cream BG) */}
            <div className="group relative flex flex-col">
                <div className="absolute -inset-1 bg-brand-gold/10 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative flex-1 bg-black/25 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 p-3.5 sm:p-6 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px] overflow-hidden">
                    <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold-light font-body font-medium self-start truncate w-full">03. Light Cream</span>
                    <img 
                        src={isHamasah ? (brand.assets.creamBg || brand.assets.vertical) : brand.assets.vertical} 
                        alt="Logo Variasi Cream" 
                        className="w-full max-w-[140px] sm:max-w-[210px] max-h-[180px] h-auto object-contain drop-shadow-md my-2 sm:my-4 group-hover:scale-105 transition duration-300 rounded-xl"
                    />
                    <div className="text-center">
                        <span className="text-xs sm:text-sm font-display text-primary-foreground block truncate">{isHamasah ? "Cream #FFFDF9" : "Stacked Layout"}</span>
                        <span className="text-[9px] sm:text-[11px] text-primary-foreground/60 font-body block truncate">{isHamasah ? "Latar Krim Terang" : "Media Cetak & Banner"}</span>
                    </div>
                </div>
            </div>

            {/* 4. Variation 4 (Coral Pink BG / Icon Only) */}
            <div className="group relative flex flex-col">
                <div className="absolute -inset-1 bg-brand-gold/10 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative flex-1 bg-black/25 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 p-3.5 sm:p-6 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px] overflow-hidden">
                    <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold-light font-body font-medium self-start truncate w-full">04. Coral Pink</span>
                    <img 
                        src={isHamasah ? (brand.assets.coralBg || brand.assets.iconWhite) : brand.assets.iconWhite} 
                        alt="Logo Variasi Coral" 
                        className="w-full max-w-[140px] sm:max-w-[210px] max-h-[180px] h-auto object-contain drop-shadow-md my-2 sm:my-4 group-hover:scale-105 transition duration-300 rounded-xl"
                    />
                    <div className="text-center">
                        <span className="text-xs sm:text-sm font-display text-primary-foreground block truncate">{isHamasah ? "Coral #FF6666" : "Icon / Favicon"}</span>
                        <span className="text-[9px] sm:text-[11px] text-primary-foreground/60 font-body block truncate">{isHamasah ? "Latar Strawberry Pink" : "Profil & Watermark"}</span>
                    </div>
                </div>
            </div>

        </div>

        {/* Clear space & Usage Rules Banner */}
        <div className="mt-8 sm:mt-12 w-full max-w-7xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold-light font-display text-base sm:text-xl font-bold flex-shrink-0">
                X
              </div>
              <div>
                <h4 className="text-primary-foreground font-display text-xs sm:text-base md:text-lg">Aturan Ruang Aman (Clear Space)</h4>
                <p className="text-primary-foreground/70 font-body text-[10px] sm:text-xs md:text-sm">
                  Ruang aman minimal di sekeliling logo berpatokan pada ukuran <span className="text-brand-gold-light font-semibold">{isHamasah ? "karakter roti senyum" : isHaramain ? "elemen utama" : "elemen emas"}</span> di pusat logo.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] font-body justify-center md:justify-end">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ Kontras Kuat</span>
              <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">✕ Jangan Distorsi</span>
              <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">✕ Jangan Ubah Warna</span>
            </div>
        </div>

      </div>

      {/* --- FOOTER --- */}
      <div className="w-full z-10 pt-4">
        <div className="w-full h-px bg-primary-foreground/20" />
      </div>

    </section>
  );
};

export default LogoVariationsSection;
