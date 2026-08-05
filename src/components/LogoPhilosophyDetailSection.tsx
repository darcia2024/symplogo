import { useState, useEffect } from "react";
import { Maximize2, X, Sparkles, Tag, ChevronLeft, ChevronRight, Heart, Bookmark, Share2, MessageCircle, MoreHorizontal, Check } from "lucide-react";
import logoIconRed from "@/assets/logo-icon-red.png";
import profileAvatar from "@/assets/icon-kelas-markaz-fiqih.png";
import mockupKaos from "@/assets/mockup-kaos.png";
import mockupTotebag from "@/assets/mockup-totebag.png";
import mockupPembatas from "@/assets/mockup-pembatas-buku.png";
import mockupNotebook from "@/assets/mockup-notebook.png";
import mockupBanner from "@/assets/mockup-banner.png";
import haramainFull from "@/assets/haramain-full.png";
import haramainCapture1 from "@/assets/haramain-capture-1.png";
import haramainLanyard from "@/assets/haramain-lanyard.png";
import haramainTopi from "@/assets/haramain-topi.png";
import haramainVest from "@/assets/haramain-vest.png";
import { useBrand } from "@/lib/brand";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  sub: string;
  desc: string;
  specs: string;
  hashtags: string;
  likes: number;
}

const BrandGallerySection = () => {
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const kaosItem: GalleryItem = {
    id: "01",
    image: mockupKaos,
    title: "Kaos Official & Apparel Markaz Fiqih",
    sub: "MERCHANDISE & APPAREL",
    desc: "Penerapan logo Markaz Fiqih pada kaos katun combed premium dengan cetak sablon presisi warna emas & putih pada bagian dada. Didesain untuk kenyamanan civitas akademika dan alumni.",
    specs: "Cotton Combed 30s â€¢ Plastisol HD Gold Ink â€¢ Unisex Fit",
    hashtags: "#MarkazFiqih #ApparelResmi #IdentitasKeilmuan #MerchandiseOfficial",
    likes: 1482
  };

  const otherItems: GalleryItem[] = [
    {
      id: "02",
      image: mockupBanner,
      title: "Banner & Signage Branding Visual",
      sub: "OUTDOOR & DIGITAL VISUAL",
      desc: "Desain banner dan papan identitas resmi untuk kebutuhan publikasi kegiatan, backdrop seminar keilmuan, dan media visual outdoor Markaz Fiqih.",
      specs: "Flexi High-Res Print â€¢ Weatherproof â€¢ Official Proportion",
      hashtags: "#MarkazFiqih #BannerResmi #MediaVisual #IdentitasLembaga",
      likes: 1240
    },
    {
      id: "03",
      image: mockupTotebag,
      title: "Totebag & Seminar Kit Keilmuan",
      sub: "MEDIA EVENT & PELATIHAN",
      desc: "Desain tas kanvas ramah lingkungan untuk kebutuhan merchandise kegiatan, souvenir pelatihan, dan tempat perlengkapan peserta majlis keilmuan.",
      specs: "Heavy Canvas 12oz â€¢ Precision Screen Print â€¢ Reinforced Strap",
      hashtags: "#MarkazFiqih #TotebagKeilmuan #SeminarKit #MajlisIlmu",
      likes: 1395
    },
    {
      id: "04",
      image: mockupNotebook,
      title: "Notebook Journal Takhassus Fiqih",
      sub: "STATIONERY & CATATAN",
      desc: "Buku catatan hardcover eksklusif dengan pita pembatas dan finishing embos emas untuk penulisan faedah keilmuan dan catatan pembelajaran.",
      specs: "Hardcover Bookbinding â€¢ Foil Gold Emboss â€¢ Book Paper 80gsm",
      hashtags: "#MarkazFiqih #JournalTakhassus #CatatanIlmu #FiqihJournal",
      likes: 1650
    },
    {
      id: "05",
      image: mockupPembatas,
      title: "Pembatas Buku Keilmuan Eksklusif",
      sub: "PUBLIKASI & LITERASI",
      desc: "Pembatas buku eksklusif bertema keilmuan dengan aksen warna merah & emas khas Markaz Fiqih serta rumbai sutra penyemat mushaf/kitab.",
      specs: "Art Card 310gsm â€¢ Matte Lamination â€¢ Gold Foil Accent",
      hashtags: "#MarkazFiqih #PembatasBuku #LiterasiIslam #KitabFiqih",
      likes: 1820
    },
  ];

  const haramainKaosItem: GalleryItem = {
    id: "01",
    image: haramainFull,
    title: "Full Identity Mockup Haramain Capture",
    sub: "BRAND IMPLEMENTATION",
    desc: "Penerapan identitas Haramain Capture secara menyeluruh untuk menunjukkan konsistensi logo, warna, dan karakter visual pada kebutuhan dokumentasi perjalanan ibadah.",
    specs: "Full Mockup • Brand System • Umrah Documentation",
    hashtags: "#HaramainCapture #DokumentasiUmrah #JamaahJourney #VisualIbadah",
    likes: 1482,
  };

  const haramainOtherItems: GalleryItem[] = [
    {
      id: "02",
      image: haramainVest,
      title: "Vest Tim Dokumentasi",
      sub: "FIELD CREW UNIFORM",
      desc: "Vest operasional untuk tim dokumentasi agar mudah dikenali jamaah saat bertugas di titik kumpul, perjalanan, dan area layanan travel.",
      specs: "Crew Vest • Field Ready • Clear Identity",
      hashtags: "#HaramainCapture #UmrahDocumentation #TravelPartner #ServiceMedia",
      likes: 1240,
    },
    {
      id: "03",
      image: haramainLanyard,
      title: "Lanyard Haramain Capture",
      sub: "CREW ACCESSORIES",
      desc: "Lanyard sebagai identitas petugas dokumentasi, memudahkan koordinasi dengan jamaah dan travel partner selama rangkaian ibadah.",
      specs: "Lanyard • Crew Badge • Service Identity",
      hashtags: "#HaramainCapture #PilgrimKit #UmrahJourney #TravelKit",
      likes: 1395,
    },
    {
      id: "04",
      image: haramainTopi,
      title: "Topi Haramain Capture",
      sub: "OUTDOOR CREW ITEM",
      desc: "Topi brand untuk kebutuhan lapangan, menjaga tampilan tim tetap seragam, rapi, dan profesional saat mendampingi jamaah.",
      specs: "Cap • Outdoor Crew • Brand Visibility",
      hashtags: "#HaramainCapture #JourneyNotes #UmrahStory #SacredMemory",
      likes: 1650,
    },
    {
      id: "05",
      image: haramainCapture1,
      title: "Primary Logo Application",
      sub: "VISUAL MASTER",
      desc: "Aplikasi logo utama Haramain Capture sebagai acuan visual untuk kebutuhan digital, cetak, dan materi promosi layanan dokumentasi ibadah.",
      specs: "Logo Application • Visual Master • Brand Asset",
      hashtags: "#HaramainCapture #DoaZiarah #UmrahGuide #IbadahTravel",
      likes: 1820,
    },
  ];

  const featuredItem = isHaramain ? haramainKaosItem : kaosItem;
  const galleryItems = isHaramain ? haramainOtherItems : otherItems;
  const allGalleryItems: GalleryItem[] = [featuredItem, ...galleryItems];

  // Preload all images for zero-delay instant modal loading
  useEffect(() => {
    allGalleryItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const currentModalItem = activeModalIndex !== null ? allGalleryItems[activeModalIndex] : null;

  const handleNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % allGalleryItems.length);
      setIsLiked(false);
      setIsSaved(false);
    }
  };

  const handlePrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + allGalleryItems.length) % allGalleryItems.length);
      setIsLiked(false);
      setIsSaved(false);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") setActiveModalIndex(null);
      if (e.key === "ArrowRight") setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % allGalleryItems.length : 0));
      if (e.key === "ArrowLeft") setActiveModalIndex((prev) => (prev !== null ? (prev - 1 + allGalleryItems.length) % allGalleryItems.length : 0));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex]);

  return (
    <section className="relative min-h-screen w-full bg-brand-burgundy text-primary-foreground py-16 px-6 md:py-24 md:px-12 lg:px-20 overflow-hidden font-modernist">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-gold/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy via-brand-burgundy to-brand-black pointer-events-none" />
      
      {/* Pattern Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`,
        backgroundSize: '36px 36px'
      }} />

      {/* --- HEADER (CENTERED) --- */}
      <div className="relative z-10 flex flex-col items-center text-center mb-12 md:mb-16 gap-4 md:gap-6 font-modernist">
        <h2 className="font-modernist font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-white">
            Implementasi
        </h2>
        
        <p className="text-white/80 font-modernist text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            {isHaramain
              ? "Eksplorasi penerapan identitas visual Haramain Capture pada media dokumentasi perjalanan umrah, ziarah, publikasi digital, dan materi layanan jamaah."
              : "Eksplorasi penerapan identitas visual Markaz Fiqih pada berbagai media merch apparel, totebag, jurnal keilmuan, pembatas buku, dan banner branding."}
        </p>
      </div>

      {/* --- EDITORIAL SPLIT GALLERY LAYOUT --- */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 max-w-7xl mx-auto font-modernist">

        {/* LEFT COLUMN: HERO FEATURED KAOS MOCKUP (BIG LEFT CARD) */}
        <div
          onClick={() => setActiveModalIndex(0)}
          className="lg:col-span-5 group relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 hover:border-brand-gold transition-all duration-300 shadow-2xl cursor-pointer flex flex-col justify-end min-h-[440px] lg:min-h-[580px]"
        >
          {/* FULL-FIT KAOS IMAGE */}
          <img 
            src={featuredItem.image} 
            alt={featuredItem.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

          {/* Number Badge Top Left */}
          <div className="absolute top-4 left-4 bg-black/60 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full z-10 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-brand-gold-light" />
            <span className="text-[10px] font-modernist font-bold text-brand-gold-light tracking-widest">
              HERO APPAREL
            </span>
          </div>

          {/* Zoom Icon Top Right */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Maximize2 className="w-4 h-4 text-brand-gold-light" />
          </div>

          {/* Content Label Floating at Bottom */}
          <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-3.5 h-3.5 text-brand-gold-light" />
              <span className="text-[10px] uppercase tracking-widest text-brand-gold-light font-modernist font-bold">
                {featuredItem.sub}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-modernist font-bold text-white group-hover:text-brand-gold-light transition-colors drop-shadow-md">
              {featuredItem.title}
            </h3>
            <p className="text-white/80 text-xs md:text-sm font-modernist leading-relaxed mt-2.5 drop-shadow">
              {featuredItem.desc}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: 2x2 GRID OF REMAINING 4 ITEMS */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveModalIndex(idx + 1)}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 hover:border-brand-gold transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-end min-h-[260px] lg:min-h-[280px]"
            >
              {/* FULL-FIT IMAGE */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Number Badge Top Left */}
              <div className="absolute top-3 left-3 bg-black/60 border border-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full z-10">
                <span className="text-[9px] font-modernist font-bold text-brand-gold-light tracking-widest">
                  {item.id}
                </span>
              </div>

              {/* Zoom Icon Top Right */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Maximize2 className="w-3.5 h-3.5 text-brand-gold-light" />
              </div>

              {/* Content Label Footer */}
              <div className="relative z-10 p-5 flex flex-col justify-end">
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag className="w-3 h-3 text-brand-gold-light" />
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-brand-gold-light font-modernist font-bold">
                    {item.sub}
                  </span>
                </div>
                <h4 className="text-base md:text-lg font-modernist font-bold text-white group-hover:text-brand-gold-light transition-colors drop-shadow-md">
                  {item.title}
                </h4>
                <p className="text-white/80 text-[11px] font-modernist leading-relaxed mt-1 line-clamp-2 drop-shadow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- FOOTER METADATA TAG --- */}
      <div className="mt-16 md:mt-20 flex justify-between items-center text-[9px] md:text-[10px] uppercase tracking-widest text-white/60 border-t border-white/15 pt-6 md:pt-8 max-w-7xl mx-auto font-modernist">
        <span className="font-bold">{brand.name} Brand Application System</span>
        <span className="font-bold text-brand-gold-light">10 / 10</span>
      </div>

      {/* --- INSTAGRAM-STYLE LIGHTBOX MODAL --- */}
      {currentModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fade-in transition-opacity duration-200"
          onClick={() => setActiveModalIndex(null)}
        >
          {/* Main Dual-Column Instagram Lightbox Box */}
          <div 
            className="relative w-full max-w-5xl bg-brand-black rounded-3xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden font-modernist text-white grid grid-cols-1 lg:grid-cols-12 min-h-[500px] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Top Right for Mobile */}
            <button 
              onClick={() => setActiveModalIndex(null)}
              className="lg:hidden absolute top-3 right-3 z-40 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT COLUMN: INSTAGRAM PHOTO CONTAINER */}
            <div className="lg:col-span-7 relative bg-black flex items-center justify-center overflow-hidden min-h-[240px] xs:min-h-[280px] sm:min-h-[320px] lg:min-h-full">
              
              {/* Previous Photo Button */}
              <button
                onClick={handlePrevModal}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 text-white hover:bg-brand-gold hover:text-brand-burgundy flex items-center justify-center transition-all backdrop-blur-md z-30 shadow-xl"
                title="Mockup Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Photo Button */}
              <button
                onClick={handleNextModal}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 text-white hover:bg-brand-gold hover:text-brand-burgundy flex items-center justify-center transition-all backdrop-blur-md z-30 shadow-xl"
                title="Mockup Selanjutnya"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Main Photo */}
              <img 
                src={currentModalItem.image} 
                alt={currentModalItem.title}
                className="w-full h-full max-h-[45vh] sm:max-h-[60vh] lg:max-h-[75vh] object-contain transition-all duration-300 p-2 sm:p-4"
              />

              {/* Instagram Dots Indicator */}
              <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/70 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md z-20">
                {allGalleryItems.map((_, idx) => (
                  <span 
                    key={idx}
                    onClick={() => setActiveModalIndex(idx)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full cursor-pointer transition-all ${
                      idx === activeModalIndex ? "bg-brand-gold-light scale-125" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: INSTAGRAM SIDEBAR */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#140407] border-l border-white/10 overflow-hidden">
              
              {/* 1. Header Bar */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold/40 flex-shrink-0 bg-brand-burgundy p-0.5 shadow-md">
                    <img src={isHaramain ? brand.assets.iconWhite : profileAvatar} alt={`${brand.name} profile`} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-modernist font-bold text-sm text-white">{brand.handle.replace("@", "")}</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-brand-gold-light text-brand-burgundy text-[9px] font-bold flex items-center justify-center">âœ“</span>
                    </div>
                    <span className="text-[10px] text-white/50 font-modernist uppercase tracking-wider block">
                      {currentModalItem.sub}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveModalIndex(null)}
                  className="hidden lg:flex w-8 h-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 2. Scrollable Caption Body */}
              <div className="p-5 overflow-y-auto flex-1 space-y-4 font-modernist text-left text-xs md:text-sm leading-relaxed">
                <div>
                  <h3 className="font-modernist font-bold text-base md:text-lg text-white mb-2">
                    {currentModalItem.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed font-modernist">
                    {currentModalItem.desc}
                  </p>
                </div>

                {/* Specs Box */}
                {currentModalItem.specs && (
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-brand-gold/25 space-y-1">
                    <span className="text-[9px] font-modernist font-bold text-brand-gold-light uppercase tracking-wider block">
                      SPESIFIKASI & MATERIAL
                    </span>
                    <p className="text-xs text-white/90">
                      {currentModalItem.specs}
                    </p>
                  </div>
                )}

                {/* Color Chips */}
                <div className="flex gap-2 items-center flex-wrap">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest mr-1">WARNA:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/15 text-[11px] font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span> {isHaramain ? "Hijau #9AD12A" : "Merah #AB2130"}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/15 text-[11px] font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CC9933]"></span> Emas #CC9933
                  </span>
                </div>

                {/* Hashtags */}
                <p className="text-brand-gold-light text-xs font-bold leading-relaxed">
                  {currentModalItem.hashtags}
                </p>
              </div>

              {/* 3. Instagram Action Bar & Engagement Footer */}
              <div className="p-4 border-t border-white/10 bg-black/30 space-y-3 font-modernist">
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsLiked(!isLiked)}
                      className="transition-transform active:scale-125"
                    >
                      <Heart className={`w-6 h-6 transition-colors ${isLiked ? "fill-brand-red text-brand-red" : "text-white hover:text-white/70"}`} />
                    </button>
                    <button className="text-white hover:text-white/70 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleShare}
                      className="text-white hover:text-white/70 transition-colors relative"
                      title="Salin Tautan"
                    >
                      {copiedLink ? <Check className="w-6 h-6 text-emerald-400" /> : <Share2 className="w-6 h-6" />}
                    </button>
                  </div>

                  <button 
                    onClick={() => setIsSaved(!isSaved)}
                    className="transition-transform active:scale-125"
                  >
                    <Bookmark className={`w-6 h-6 transition-colors ${isSaved ? "fill-brand-gold-light text-brand-gold-light" : "text-white hover:text-white/70"}`} />
                  </button>
                </div>

                {/* Likes Counter & Date */}
                <div>
                  <span className="font-modernist font-bold text-xs text-white block">
                    {(currentModalItem.likes + (isLiked ? 1 : 0)).toLocaleString("id-ID")} menyukai ini
                  </span>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest block mt-0.5 font-bold">
                    MARKAZ FIQIH â€¢ OFFICIAL BRAND GUIDELINE 2026
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default BrandGallerySection;
