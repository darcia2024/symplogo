import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useBrand } from "@/lib/brand";

const ColorSystemSection = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const brand = useBrand();

  const colors = brand.slug === "haramaincapture"
    ? [
        {
          number: "01",
          type: "PRIMARY COLOR",
          hex: "#9AD12A",
          name: "Hijau Haramain",
          desc: "Warna utama logo, aksen brand, dan penanda visual yang segar.",
          swatchClass: "bg-[#9AD12A]",
        },
        {
          number: "02",
          type: "DARK CONTRAST",
          hex: "#1F1F1F",
          name: "Hitam Ikonik",
          desc: "Kontras utama untuk logotype, elemen kamera, dan latar gelap.",
          swatchClass: "bg-[#1F1F1F]",
        },
        {
          number: "03",
          type: "NEUTRAL / BACKGROUND",
          hex: "#F9FCF4",
          name: "Putih Bersih",
          desc: "Ruang visual bersih untuk menjaga logo tetap tajam dan terbaca.",
          swatchClass: "bg-[#F9FCF4] border border-black/10",
        },
        {
          number: "04",
          type: "SOFT ACCENT",
          hex: "#EAF5D8",
          name: "Hijau Lembut",
          desc: "Aksen pendukung untuk panel, highlight, dan latar informatif.",
          swatchClass: "bg-[#EAF5D8] border border-black/10",
        },
      ]
    : brand.slug === "hamasahlaundry"
    ? [
        {
          number: "01",
          type: "PRIMARY COLOR",
          hex: "#FFD21C",
          name: "Laundry Sun Yellow",
          desc: "Warna keemasan hangat khas Hamasah yang memancarkan energi keceriaan dan semangat.",
          swatchClass: "bg-[#FFD21C]",
        },
        {
          number: "02",
          type: "DARK CONTRAST",
          hex: "#5B3715",
          name: "Dark Roast Chocolate",
          desc: "Kontras cokelat hangat khas keluarga Hamasah untuk daya keterbacaan yang kokoh.",
          swatchClass: "bg-[#5B3715]",
        },
        {
          number: "03",
          type: "FRESH ACCENT",
          hex: "#2B7FFF",
          name: "Fresh Laundry Blue",
          desc: "Aksen biru segar melambangkan kesegaran air, kebersihan busa, dan higienitas laundry.",
          swatchClass: "bg-[#2B7FFF]",
        },
        {
          number: "04",
          type: "PURE NEUTRAL",
          hex: "#FFFDF9",
          name: "Soft Cream Cotton",
          desc: "Warna putih krim bersih melambangkan kelembutan kain katun dan perawatan higienis.",
          swatchClass: "bg-[#FFFDF9] border border-black/10",
        },
      ]
    : brand.slug === "hamasahbakery"
    ? [
        {
          number: "01",
          type: "PRIMARY COLOR",
          hex: "#FFD21C",
          name: "Bakery Sun Yellow",
          desc: "Warna utama hangat keemasan yang melambangkan kehangatan roti fresh dari oven.",
          swatchClass: "bg-[#FFD21C]",
        },
        {
          number: "02",
          type: "SECONDARY COLOR",
          hex: "#FFBF00",
          name: "Honey Golden Amber",
          desc: "Warna aksen roti panggang matang sempurna dan lelehan mentega manis.",
          swatchClass: "bg-[#FFBF00]",
        },
        {
          number: "03",
          type: "DARK ACCENTS",
          hex: "#5B3715",
          name: "Dark Roast Chocolate",
          desc: "Warna kontras utama logotype, teks informasi, dan aksen crust roti.",
          swatchClass: "bg-[#5B3715]",
        },
        {
          number: "04",
          type: "OPTIONS / VARIATION",
          hex: "#FF6666",
          name: "Strawberry Cream Coral",
          desc: "Aksen manis untuk varian produk spesial, kemasan festival, dan highlights.",
          swatchClass: "bg-[#FF6666]",
        },
      ]
    : [
        {
          number: "01",
          type: "PRIMARY COLOR",
          hex: "#AB2130",
          name: "Merah Utama",
          desc: "Warna utama wibawa keilmuan, logo utama, dan latar belakang visual.",
          swatchClass: "bg-[#AB2130]",
        },
        {
          number: "02",
          type: "ACCENT & CENTER",
          hex: "#CC9933",
          name: "Emas Takhassus Fiqih",
          desc: "Aksen pusat takhassus fiqih, kemuliaan ilmu, dan highlight keilmuan.",
          swatchClass: "bg-[#CC9933]",
        },
        {
          number: "03",
          type: "NEUTRAL / BACKGROUND",
          hex: "#FDFBF7",
          name: "Putih Jernih",
          desc: "Ruang visual bersih, jernih, dan keterbacaan yang nyaman.",
          swatchClass: "bg-[#FDFBF7] border border-black/10",
        },
        {
          number: "04",
          type: "DARK ACCENT",
          hex: "#4A0E17",
          name: "Merah Gelap",
          desc: "Latar kontras tinggi, bayangan visual, dan aksen kedalaman.",
          swatchClass: "bg-[#4A0E17]",
        },
      ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  return (
    <section className="w-full bg-brand-sand py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 font-modernist">
      
      {/* Top Header Tag */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] sm:text-xs font-modernist font-bold uppercase tracking-[0.25em] text-brand-burgundy/70 border-b border-black/10 pb-4 mb-10">
        <span>Sistem Warna Resmi</span>
        <span className="text-brand-red font-extrabold">07 / 10</span>
      </div>

      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="font-modernist font-bold text-3xl md:text-5xl lg:text-6xl text-brand-burgundy mb-3">
          Sistem Warna
        </h2>
        <p className="text-muted-foreground font-modernist text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Klik pada kode warna untuk menyalin (copy) kode HEX secara langsung.
        </p>
      </div>

      {/* 2-Column Mobile & 4-Column Desktop Compact Color Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-3.5 sm:p-6 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Color Swatch Preview */}
            <div className="relative mb-3 sm:mb-5">
              <div className={`w-full h-16 sm:h-28 rounded-xl ${color.swatchClass} shadow-inner transition-transform duration-300 group-hover:scale-[1.02] flex items-end justify-end p-2 sm:p-3`}>
                <span className="text-[8px] sm:text-[10px] font-modernist font-bold tracking-widest uppercase opacity-70 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded bg-black/20 text-white backdrop-blur-xs">
                  {color.number}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-modernist font-bold text-brand-red block mb-0.5 sm:mb-1 truncate">
                  {color.type}
                </span>
                <h3 className="font-modernist font-bold text-xs sm:text-lg text-brand-burgundy mb-1 truncate">
                  {color.name}
                </h3>
                <p className="text-muted-foreground font-modernist text-[10px] sm:text-xs leading-relaxed line-clamp-2 mb-2 sm:mb-4">
                  {color.desc}
                </p>
              </div>

              {/* Interactive Copyable HEX Code Box */}
              <div className="border-t border-black/5 pt-2 sm:pt-3 mt-1 sm:mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-0">
                <div>
                  <span className="text-[8px] sm:text-[9px] font-modernist text-muted-foreground uppercase block">HEX</span>
                  <span className="font-modernist font-bold text-xs sm:text-base text-brand-burgundy tracking-tight">
                    {color.hex}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(color.hex)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[9px] sm:text-xs font-modernist font-bold transition-all duration-200 w-full sm:w-auto justify-center ${
                    copiedHex === color.hex
                      ? "bg-emerald-500 text-white shadow-md scale-105"
                      : "bg-brand-red/5 hover:bg-brand-red text-brand-red hover:text-white border border-brand-red/20"
                  }`}
                  title="Klik untuk menyalin kode HEX"
                >
                  {copiedHex === color.hex ? (
                    <>
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorSystemSection;
