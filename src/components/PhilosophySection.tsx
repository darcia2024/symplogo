import { Aperture, Camera, Compass, Home, Sparkles, Utensils } from "lucide-react";
import { useBrand } from "@/lib/brand";

const PhilosophySection = () => {
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const isHamasah = brand.slug === "hamasahbakery";

  const pillars = isHaramain
    ? [
        {
          title: "Kubah & Gerbang Suci",
          desc: "Lengkung hijau membentuk siluet kubah sekaligus gerbang masuk, menandai perjalanan jamaah menuju ruang ibadah dalam rangkaian umrah, ziarah, dan ibadah lain.",
          icon: <Home className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Aperture Kamera",
          desc: "Bidang hitam di tengah membentuk karakter shutter kamera, menegaskan peran Haramain Capture dalam menangkap momen ibadah jamaah secara fokus, rapi, dan presisi.",
          icon: <Aperture className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Dua Menara Penjaga",
          desc: "Dua menara di sisi atas memberi kesan simetri, arah, dan suasana tanah suci yang menjadi latar emosional perjalanan umrah dan ziarah.",
          icon: <Camera className="w-5 h-5 md:w-6 md:h-6" />,
        },
      ]
    : isHamasah
    ? [
        {
          title: "Rumah Bakery & Kehangatan",
          desc: "Siluet rumah toko melambangkan tempat yang hangat, ramah, dan dipanggangnya roti-roti hangat berkualitas setiap hari.",
          icon: <Home className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Roti Senyum & Keceriaan",
          desc: "Karakter roti slice dengan senyuman lembut merepresentasikan kelezatan manis dan kebahagiaan bagi setiap pelanggan.",
          icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Bulir Gandum & Keemasan",
          desc: "Sentuhan gandum alami dan aksen warna keemasan menegaskan kualitas bahan pilihan terbaik yang diolah penuh keahlian.",
          icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
        },
      ]
    : [
        {
          title: "Rumah Wadah Ilmu",
          desc: "Wadah aman, terstruktur, dan terbuka. Ruang intelektual dan spiritual tempat ilmu dipelajari, dijaga, dan diamalkan.",
          icon: <Home className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Buku & Perjalanan Pembelajaran",
          desc: "Lengkungan halaman melambangkan bahwa pembelajaran adalah perjalanan panjang yang terus membaca, memahami, dan memperdalam.",
          icon: <Compass className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Takhassus Fiqih (Fokus Utama)",
          desc: "Elemen emas di titik pusat menegaskan fiqih sebagai inti kegiatan keilmuan yang sistematis dan dapat dipertanggungjawabkan.",
          icon: <Compass className="w-5 h-5 md:w-6 md:h-6" />,
        },
      ];

  return (
    <section className="w-full bg-brand-cream flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden font-modernist">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent pointer-events-none" />

      {/* --- 1. CENTERED HEADER --- */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 z-10 font-modernist">
        {/* Main Title */}
        <h2 className="font-modernist font-bold text-3xl md:text-5xl lg:text-6xl text-brand-burgundy mb-4 tracking-tight">
          Filosofi Simbol & Bentuk
        </h2>
        
        {/* Subtitle */}
        <p className="text-muted-foreground font-modernist font-normal text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
          {isHamasah
            ? "Memadukan karakter rumah toko, roti senyum tersenyum (Toast Smile), dan bulir gandum dalam satu kesatuan visual yang hangat, manis, dan ramah."
            : isHaramain
            ? "Memadukan kubah, gerbang masjid, menara, dan aperture kamera sebagai simbol layanan dokumentasi umrah, ziarah, dan perjalanan ibadah."
            : "Memadukan simbol utama dan logotype dalam satu kesatuan visual yang utuh dengan warna primer sebagai pusat perhatian."}
        </p>
      </div>

      {/* --- 2. MAIN SPLIT CONTENT --- */}
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 md:gap-16 items-center z-10">
        
        {/* LEFT COLUMN: HERO LOGO ICON WITH DASHED GUIDELINE GRID */}
        <div className="flex flex-col items-center justify-center">
            <div className="relative group p-6 sm:p-8 bg-white/80 rounded-3xl border border-dashed border-brand-red/30 shadow-xl backdrop-blur-sm">
                
                {/* Guideline Corner Crosshair Ticks */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-brand-red text-brand-red font-mono text-[9px] font-bold flex items-center justify-center bg-white rounded-tl-sm shadow-sm">+</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-brand-red text-brand-red font-mono text-[9px] font-bold flex items-center justify-center bg-white rounded-tr-sm shadow-sm">+</div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-brand-red text-brand-red font-mono text-[9px] font-bold flex items-center justify-center bg-white rounded-bl-sm shadow-sm">+</div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-brand-red text-brand-red font-mono text-[9px] font-bold flex items-center justify-center bg-white rounded-br-sm shadow-sm">+</div>

                {/* Center Horizontal & Vertical Dashed Guideline Axis */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-b border-dashed border-brand-red/20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-r border-dashed border-brand-red/20 pointer-events-none" />

                <div className="absolute inset-0 bg-brand-gold/15 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img 
                    src={isHamasah ? brand.assets.horizontalColor : brand.assets.primary} 
                    alt={`Simbol ${brand.name}`} 
                    className="relative w-48 md:w-72 lg:w-80 max-h-[420px] h-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 z-10"
                />
            </div>
        </div>

        {/* RIGHT COLUMN: CONTENT & LIST */}
        <div className="space-y-6 md:space-y-8 font-modernist">
            <div>
                <h3 className="font-modernist font-bold text-2xl md:text-3xl text-brand-burgundy mb-2">
                    {isHamasah ? "Harmoni Rasa & Kehangatan" : isHaramain ? "Harmoni Ibadah & Dokumentasi" : "Harmoni Wadah & Ilmu"}
                </h3>
                <p className="text-muted-foreground font-modernist leading-relaxed text-xs md:text-sm">
                    {isHamasah
                      ? "Logo Hamasah Bakery memadukan siluet rumah toko yang hangat dan karakter roti tawar tersenyum (Toast Smile) dengan warna keemasan yang manis. Komposisi ini menyampaikan bahwa kelezatan roti fresh dari oven membawa keceriaan dan kehangatan bagi setiap keluarga."
                      : isHaramain
                      ? "Logo Haramain Capture dibangun dari pertemuan dua dunia: perjalanan ibadah sebagai sumber makna, dan kamera sebagai alat merawat kenangan jamaah. Lengkung hijau menghadirkan kesan kubah dan gerbang, sementara bentuk shutter di tengah menegaskan layanan dokumentasi yang fokus namun tetap menjaga adab."
                      : "Pertemuan garis buku pada bagian atas membentuk kesan dua halaman yang terbuka sekaligus menyerupai atap rumah. Komposisi ini menunjukkan bahwa ilmu dan tempat belajar tidak berdiri sendiri: ilmu membutuhkan wadah yang baik, dan lembaga bermakna bila diisi ilmu yang bermanfaat."}
                </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 md:space-y-5">
                {pillars.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                        {/* Icon Box */}
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-red/5 border border-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                             {item.icon}
                        </div>
                        
                        {/* Text Content */}
                        <div>
                            <h4 className="text-brand-burgundy font-modernist font-bold text-base md:text-lg mb-0.5 group-hover:text-brand-red transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-muted-foreground text-xs md:text-sm font-modernist leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* --- 3. FOOTER CAPTION --- */}
      <div className="mt-16 md:mt-20 text-center z-10 font-modernist flex justify-between items-center max-w-6xl mx-auto w-full border-t border-black/10 pt-4 text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
        <span>{brand.name} — Visual Identity System</span>
        <span className="text-brand-red">05 / 10</span>
      </div>

    </section>
  );
};

export default PhilosophySection;
