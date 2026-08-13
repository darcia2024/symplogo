import { useBrand } from "@/lib/brand";

const LogoVariationsSection = () => {
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const isHamasahBakery = brand.slug === "hamasahbakery";
  const isHamasahLaundry = brand.slug === "hamasahlaundry";
  const isHamasah = isHamasahBakery;

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
              ? "Logo Hamasah Bakery hadir dalam 3 variasi warna latar belakang resmi (Sun Yellow, Light Cream, Coral Pink) untuk menjaga fleksibilitas komunikasi media cetak & digital."
              : "Logo utama ditampilkan dalam komposisi lengkap antara simbol dan logotype. Versi simbol dapat digunakan secara mandiri untuk kebutuhan visual berukuran kecil."}
          </p>
        </div>

        {/* 3-Column Grid for Hamasah Bakery / 4-Column for Other Brands */}
        {isHamasah ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
            
            {/* 1. Sun Yellow Card (#FFD21C) */}
            <div className="group relative flex flex-col">
              <div className="absolute -inset-1 bg-white/20 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
              <div className="relative flex-1 bg-[#FFD21C] backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-black/10 p-5 sm:p-8 flex flex-col items-center justify-between min-h-[240px] sm:min-h-[320px] overflow-hidden shadow-xl">
                <span className="text-[9px] sm:text-[11px] tracking-[0.2em] uppercase text-[#5B3715] font-body font-bold self-start w-full">
                  01. Sun Yellow (#FFD21C)
                </span>
                <img 
                  src={brand.assets.yellowBg} 
                  alt="Logo Variasi Sun Yellow" 
                  className="w-full max-w-[180px] sm:max-w-[230px] max-h-[200px] h-auto object-contain drop-shadow-md my-4 group-hover:scale-105 transition duration-300 rounded-xl"
                />
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold font-display text-[#5B3715] block truncate">
                    Sun Yellow #FFD21C
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#5B3715]/80 font-body block truncate">
                    Latar Kuning Keemasan
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Light Cream Card (#FFFDF9) using FIX Color Logo */}
            <div className="group relative flex flex-col">
              <div className="absolute -inset-1 bg-white/30 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
              <div className="relative flex-1 bg-[#FFFDF9] backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-black/10 p-5 sm:p-8 flex flex-col items-center justify-between min-h-[240px] sm:min-h-[320px] overflow-hidden shadow-xl">
                <span className="text-[9px] sm:text-[11px] tracking-[0.2em] uppercase text-[#5B3715] font-body font-bold self-start w-full">
                  02. Light Cream (#FFFDF9)
                </span>
                <img 
                  src={brand.assets.horizontalColor} 
                  alt="Logo Variasi Terang FIX Color" 
                  className="w-full max-w-[180px] sm:max-w-[230px] max-h-[200px] h-auto object-contain drop-shadow-md my-4 group-hover:scale-105 transition duration-300 rounded-xl"
                />
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold font-display text-[#5B3715] block truncate">
                    Light Cream #FFFDF9
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#5B3715]/80 font-body block truncate">
                    Latar Terang (FIX Color)
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Coral Pink Card (#FF6666) */}
            <div className="group relative flex flex-col">
              <div className="absolute -inset-1 bg-white/20 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
              <div className="relative flex-1 bg-[#FF6666] backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-black/10 p-5 sm:p-8 flex flex-col items-center justify-between min-h-[240px] sm:min-h-[320px] overflow-hidden shadow-xl">
                <span className="text-[9px] sm:text-[11px] tracking-[0.2em] uppercase text-white font-body font-bold self-start w-full">
                  03. Coral Pink (#FF6666)
                </span>
                <img 
                  src={brand.assets.coralBg} 
                  alt="Logo Variasi Coral Pink" 
                  className="w-full max-w-[180px] sm:max-w-[230px] max-h-[200px] h-auto object-contain drop-shadow-md my-4 group-hover:scale-105 transition duration-300 rounded-xl"
                />
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold font-display text-white block truncate">
                    Coral Pink #FF6666
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/90 font-body block truncate">
                    Latar Strawberry Pink
                  </span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* 4-Column Cards Grid for Markaz & Haramain */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-7xl">
              
              {/* 1. Horizontal Logo Card (Dark BG) */}
              <div className="group relative flex flex-col">
                  <div className="absolute -inset-1 bg-brand-gold/10 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                  <div className="relative flex-1 bg-black/25 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 p-3.5 sm:p-8 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px]">
                      <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold-light font-body font-medium self-start truncate w-full">01. Utama (Gelap)</span>
                      <img 
                          src={brand.assets.horizontalWhite} 
                          alt="Logo Utama Latar Gelap" 
                          className="w-full max-w-[120px] sm:max-w-[210px] max-h-[180px] h-auto object-contain drop-shadow-md my-3 sm:my-6 group-hover:scale-105 transition duration-300"
                      />
                      <div className="text-center">
                          <span className="text-xs sm:text-sm font-display text-primary-foreground block truncate">Horizontal White</span>
                          <span className="text-[9px] sm:text-[11px] text-primary-foreground/60 font-body block truncate">{isHaramain ? "Latar Hijau / Gelap" : "Latar Merah / Gelap"}</span>
                      </div>
                  </div>
              </div>

              {/* 2. Horizontal Logo Card (Light BG) */}
              <div className="group relative flex flex-col">
                  <div className="absolute -inset-1 bg-white/20 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                  <div className="relative flex-1 bg-[#FDFBF7] backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-black/5 p-3.5 sm:p-8 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px]">
                      <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-red font-body font-medium self-start truncate w-full">02. Utama (Terang)</span>
                      <img 
                          src={brand.assets.horizontalColor} 
                          alt="Logo Utama Latar Terang" 
                          className="w-full max-w-[120px] sm:max-w-[210px] max-h-[180px] h-auto object-contain drop-shadow-md my-3 sm:my-6 group-hover:scale-105 transition duration-300"
                      />
                      <div className="text-center">
                          <span className="text-xs sm:text-sm font-display text-brand-burgundy block truncate">{isHaramain ? "Horizontal Color" : "Horizontal Red"}</span>
                          <span className="text-[9px] sm:text-[11px] text-muted-foreground font-body block truncate">Latar Putih / Terang</span>
                      </div>
                  </div>
              </div>

              {/* 3. Vertical Logo Card */}
              <div className="group relative flex flex-col">
                  <div className="absolute -inset-1 bg-brand-gold/10 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                  <div className="relative flex-1 bg-black/25 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 p-3.5 sm:p-8 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px]">
                      <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold-light font-body font-medium self-start truncate w-full">03. Vertikal</span>
                      <img 
                          src={brand.assets.vertical} 
                          alt="Logo Vertikal" 
                          className="w-14 sm:w-28 max-h-[180px] h-auto object-contain drop-shadow-md my-2 sm:my-4 group-hover:scale-105 transition duration-300"
                      />
                      <div className="text-center">
                          <span className="text-xs sm:text-sm font-display text-primary-foreground block truncate">Stacked Layout</span>
                          <span className="text-[9px] sm:text-[11px] text-primary-foreground/60 font-body block truncate">Media Cetak & Banner</span>
                      </div>
                  </div>
              </div>

              {/* 4. Simbol Mandiri / Icon Only */}
              <div className="group relative flex flex-col">
                  <div className="absolute -inset-1 bg-brand-gold/10 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                  <div className="relative flex-1 bg-black/25 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 p-3.5 sm:p-8 flex flex-col items-center justify-between min-h-[200px] sm:min-h-[320px]">
                      <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold-light font-body font-medium self-start truncate w-full">04. Simbol Mandiri</span>
                      <div className="flex gap-2 sm:gap-4 items-center justify-center my-2 sm:my-4">
                        <img 
                            src={brand.assets.iconWhite} 
                            alt="Icon Only White" 
                            className="w-10 sm:w-16 h-auto object-contain drop-shadow-md group-hover:scale-110 transition duration-300"
                        />
                        <img 
                            src={brand.assets.iconMono} 
                            alt="Icon Mono" 
                            className="w-7 sm:w-12 h-auto object-contain opacity-50"
                        />
                      </div>
                      <div className="text-center">
                          <span className="text-xs sm:text-sm font-display text-primary-foreground block truncate">Icon / Favicon</span>
                          <span className="text-[9px] sm:text-[11px] text-primary-foreground/60 font-body block truncate">Profil & Watermark</span>
                      </div>
                  </div>
              </div>

          </div>
        )}

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
