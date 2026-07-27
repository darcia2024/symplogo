import logoWhite from "@/assets/logo-horizontal-white.png";
import logoRed from "@/assets/logo-horizontal-red.png";
import { AlertTriangle, XCircle } from "lucide-react";

interface DontRule {
  id: string;
  title: string;
  desc: string;
  imageStyle?: string;
  customLogoSrc?: string;
  bgStyle?: string;
  badgeText: string;
}

const IncorrectUsageSection = () => {
  const dontRules: DontRule[] = [
    {
      id: "01",
      title: "Distorsi Rasio & Skala",
      desc: "Dilarang menarik atau memipihkan proporsi rasio logo.",
      imageStyle: "scale-x-[1.4] scale-y-[0.7]",
      badgeText: "Distorsi Bentuk"
    },
    {
      id: "02",
      title: "Warna Non-Standar",
      desc: "Dilarang memakai warna di luar palet resmi.",
      imageStyle: "hue-rotate-90 saturate-200",
      badgeText: "Warna Salah"
    },
    {
      id: "03",
      title: "Kontras Latar Buruk",
      desc: "Dilarang meletakkan logo pada latar tanpa kontras.",
      bgStyle: "bg-[#5E121B]",
      customLogoSrc: logoRed,
      badgeText: "Kontras Rendah"
    },
    {
      id: "04",
      title: "Rotasi & Kemiringan",
      desc: "Dilarang memutar atau memiringkan posisi logo.",
      imageStyle: "rotate-12 scale-90",
      badgeText: "Posisi Miring"
    },
    {
      id: "05",
      title: "Bayangan & Glow Liar",
      desc: "Dilarang memberi efek bayangan & glow berlebih.",
      imageStyle: "drop-shadow-[0_0_20px_rgba(255,255,0,0.9)] blur-[1px]",
      badgeText: "Efek Berlebih"
    },
    {
      id: "06",
      title: "Menghilangkan Titik Emas",
      desc: "Dilarang menghapus elemen titik emas pusat.",
      imageStyle: "brightness-0 invert",
      badgeText: "Hilang Elemen"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#8C1B27] text-white py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden font-modernist">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-black/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Pattern Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`,
        backgroundSize: '36px 36px'
      }} />

      {/* --- 1. SECTION HEADER --- */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 md:mb-16 font-modernist">
        <h2 className="font-modernist font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 tracking-tight">
          Aturan Larangan Penggunaan Logo
        </h2>

        <p className="text-white/80 font-modernist text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-4">
          Untuk menjaga integritas dan profesionalisme identitas visual Markaz Fiqih, berikut adalah contoh penerapan logo yang <span className="text-rose-300 font-bold underline underline-offset-4 decoration-rose-400">SALAH / DILARANG</span> untuk digunakan.
        </p>
      </div>

      {/* --- 2. 2-COLUMN MOBILE & 3-COLUMN DESKTOP COMPACT CARDS GRID --- */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 font-modernist">
        {dontRules.map((rule) => (
          <div 
            key={rule.id}
            className="group relative rounded-2xl sm:rounded-3xl bg-black/35 border border-rose-500/30 overflow-hidden shadow-2xl backdrop-blur-md hover:border-rose-400 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Badge: DILARANG */}
            <div className="p-2.5 sm:p-4 border-b border-white/10 flex justify-between items-center bg-black/40 relative z-10">
              <div className="flex items-center gap-1 sm:gap-2">
                <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 fill-rose-500/20 flex-shrink-0" />
                <span className="text-[8px] sm:text-[10px] font-modernist font-bold uppercase tracking-widest text-rose-300 truncate">
                  {rule.badgeText}
                </span>
              </div>
              <span className="text-[8px] sm:text-[10px] font-modernist font-bold text-white/50 tracking-widest hidden sm:inline">
                #{rule.id}
              </span>
            </div>

            {/* Middle Preview Box with Improper Logo Treatment */}
            <div className={`p-4 sm:p-8 min-h-[120px] sm:min-h-[190px] flex items-center justify-center relative overflow-hidden ${rule.bgStyle || "bg-black/50"}`}>
              {/* Crossed Out Red X Watermark Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none text-rose-500 font-mono font-extrabold text-6xl sm:text-9xl">
                ✕
              </div>

              {/* Improper Treated Logo */}
              <img 
                src={rule.customLogoSrc || logoWhite} 
                alt={`Incorrect Usage Example ${rule.id}`}
                className={`w-full max-w-[120px] sm:max-w-[200px] h-auto object-contain transition-all duration-500 ${rule.imageStyle || ""}`}
              />
            </div>

            {/* Bottom Rationale Explanation */}
            <div className="p-3 sm:p-5 bg-black/30 border-t border-white/10 space-y-1 sm:space-y-1.5 relative z-10 text-left">
              <h3 className="text-xs sm:text-base font-modernist font-bold text-white flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 flex-shrink-0" />
                <span className="truncate">{rule.title}</span>
              </h3>
              <p className="text-white/75 text-[10px] sm:text-xs font-modernist leading-relaxed">
                {rule.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- 3. FOOTER METADATA TAG --- */}
      <div className="mt-16 md:mt-20 max-w-7xl mx-auto pt-6 border-t border-white/15 flex justify-between items-center text-[10px] font-modernist uppercase tracking-widest text-white/50">
        <span>Markaz Fiqih Brand Integrity System</span>
        <span className="text-brand-gold-light font-bold">09 / 10</span>
      </div>

    </section>
  );
};

export default IncorrectUsageSection;
