import { useState } from "react";
import { Home, BookOpen, Compass, Target, Bookmark, Sparkles, CheckCircle2 } from "lucide-react";

const PhilosophyMeaningSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const pillars = [
    {
      id: 0,
      icon: <Home className="w-5 h-5 text-brand-gold-light" />,
      title: "Wadah Pembelajaran",
      concept: "Rumah (Aman & Terstruktur)",
      quote: "Rumah melambangkan Markaz Fiqih sebagai wadah yang aman, terstruktur, dan terbuka. Ruang intelektual dan spiritual tempat ilmu dipelajari, dijaga, dan diamalkan.",
      tag: "Dimensi Wadah"
    },
    {
      id: 1,
      icon: <BookOpen className="w-5 h-5 text-brand-gold-light" />,
      title: "Keluasan Ilmu",
      concept: "Buku Terbuka (Perjalanan Ilmu)",
      quote: "Bentuk buku terbuka merepresentasikan keluasan ilmu yang terus berkembang. Lengkungan halamannya menunjukkan pembelajaran bukan proses yang berhenti, melainkan perjalanan panjang.",
      tag: "Dimensi Khazanah"
    },
    {
      id: 2,
      icon: <Compass className="w-5 h-5 text-brand-gold-light" />,
      title: "Takhassus Fiqih",
      concept: "Pusat Emas (Fokus Keahlian)",
      quote: "Elemen emas di pusat melambangkan fokus utama keilmuan fiqih yang sistematis, mendalam, dan dapat dipertanggungjawabkan secara akademis maupun spiritual.",
      tag: "Dimensi Keahlian"
    },
    {
      id: 3,
      icon: <Target className="w-5 h-5 text-brand-gold-light" />,
      title: "Ketegasan Arah",
      concept: "Fokus & Pendirian Keilmuan",
      quote: "Identitas Markaz Fiqih mempertegas posisi lembaga yang memiliki fokus, ketegasan arah, dan pendirian yang jelas dalam pendidikan keilmuan Islam.",
      tag: "Dimensi Karakter"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#AB2130] flex flex-col justify-between py-12 px-6 md:py-20 md:px-12 lg:px-20 overflow-hidden font-modernist">
      
      {/* Background Subtle Red Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#AB2130] via-[#AB2130] to-[#8C1B27] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`,
        backgroundSize: '36px 36px'
      }} />

      {/* --- 1. HEADER --- */}
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center z-20 text-[10px] md:text-xs text-white/80 font-modernist uppercase tracking-widest border-b border-white/15 pb-5">
        <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-brand-gold-light animate-pulse"></span>
            <span className="font-bold tracking-widest text-brand-gold-light">@MARKAZFIQIH</span>
        </div>
        <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-light" />
            <span className="hidden md:block font-bold">PHILOSOPHY & MEANING SYSTEM</span>
        </div>
        <span className="font-bold text-brand-gold-light">06 / 10</span>
      </div>

      {/* --- 2. CENTER PIECE (TYPOGRAPHY HERO) --- */}
      <div className="flex-grow flex flex-col items-center justify-center relative w-full max-w-6xl mx-auto z-10 py-8 md:py-12">
        
        {/* Subtle Background Ghost Text */}
        <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-modernist font-bold text-[12vw] md:text-[9vw] leading-none tracking-tight select-none pointer-events-none text-white/[0.03] uppercase">
            TAKHASSUS
        </h1>

        {/* Title Stack */}
        <div className="text-center relative z-10 max-w-3xl px-4 mb-8 md:mb-10">
            <h2 className="font-modernist font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight drop-shadow-xl">
                Markaz <span className="text-brand-cream">Fiqih</span>
            </h2>
            <p className="text-white/80 font-modernist text-xs md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
                Rumah tempat bertumbuhnya ilmu yang terarah, mendalam, dan dekat dengan kehidupan.
            </p>
        </div>

        {/* Interactive Dimension Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-5xl px-1 sm:px-2">
            {pillars.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 backdrop-blur-md ${
                        activeTab === item.id 
                            ? "bg-white/20 border-brand-gold text-white shadow-xl scale-[1.02] sm:scale-[1.03] ring-2 ring-brand-gold/30" 
                            : "bg-black/20 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                >
                    <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl border flex-shrink-0 ${
                        activeTab === item.id 
                            ? "bg-brand-gold text-[#AB2130] border-white/20" 
                            : "bg-white/5 border-white/10 text-brand-gold-light"
                    }`}>
                        {item.icon}
                    </div>
                    <div className="min-w-0">
                        <span className="text-[8px] sm:text-[9px] uppercase tracking-wider sm:tracking-widest font-modernist font-bold text-brand-gold-light block truncate">
                            {item.tag}
                        </span>
                        <span className="text-[11px] sm:text-xs md:text-sm font-modernist font-bold block leading-tight truncate">
                            {item.title}
                        </span>
                    </div>
                </button>
            ))}
        </div>

      </div>

      {/* --- 3. FOOTER & ACTIVE ESSENCE DETAIL --- */}
      <div className="w-full max-w-5xl mx-auto relative z-20 font-modernist bg-black/25 border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
            
            {/* Left: Active Concept Info */}
            <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                        {pillars[activeTab].concept}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-widest font-bold">
                        Pilar {activeTab + 1} Dari 4
                    </span>
                </div>
                <p className="text-white font-modernist text-xs sm:text-sm leading-relaxed italic pt-1">
                    "{pillars[activeTab].quote}"
                </p>
            </div>

            {/* Right: Interactive Bookmark Action */}
            <div className="md:col-span-4 flex flex-col md:items-end justify-center border-t md:border-t-0 md:border-l border-white/15 pt-3 md:pt-0 md:pl-6">
                <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-modernist font-bold text-xs transition-all duration-300 w-full sm:w-auto ${
                        isBookmarked 
                            ? "bg-emerald-500 text-white shadow-lg border border-emerald-400" 
                            : "bg-brand-gold text-[#AB2130] hover:bg-white hover:text-[#AB2130] shadow-lg"
                    }`}
                >
                    {isBookmarked ? (
                        <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            <span>Tersimpan di Catatan</span>
                        </>
                    ) : (
                        <>
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>Simpan Filosofi</span>
                        </>
                    )}
                </button>
                <span className="text-[9px] sm:text-[10px] text-white/60 font-modernist mt-1.5 sm:mt-2 tracking-wider hidden sm:block">
                    Markaz Fiqih Identity Guidelines
                </span>
            </div>

        </div>
      </div>

    </section>
  );
};

export default PhilosophyMeaningSection;
