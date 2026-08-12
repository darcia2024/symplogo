import { Aperture, Camera, Compass, Home, MapPin, Sparkles, Utensils } from "lucide-react";
import { useBrand } from "@/lib/brand";

const BrandOverviewSection = () => {
  const brand = useBrand();
  const isHaramain = brand.slug === "haramaincapture";
  const isHamasah = brand.slug === "hamasahbakery";

  const pillars = isHaramain
    ? [
        {
          title: "Gerbang Haramain",
          sub: "Ruang Ibadah",
          description: "Lengkung kubah dan gerbang merepresentasikan perjalanan jamaah menuju tanah suci, umrah, ziarah, dan momen ibadah yang penuh penghormatan.",
          icon: <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red" />,
          colSpan: "col-span-1",
        },
        {
          title: "Lensa Capture",
          sub: "Fokus Dokumentasi",
          description: "Bentuk aperture kamera di pusat logo menegaskan layanan dokumentasi yang fokus menangkap momen jamaah secara rapi, jernih, dan bermakna.",
          icon: <Aperture className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red" />,
          colSpan: "col-span-1",
        },
        {
          title: "Adab Visual",
          sub: "Khidmat & Profesional",
          description: "Siluet masjid yang menaungi kamera menunjukkan bahwa dokumentasi tetap menjaga adab tempat, ketenangan ibadah, dan nilai spiritual perjalanan.",
          icon: <Camera className="w-4 h-4 sm:w-6 sm:h-6 text-brand-gold" />,
          colSpan: "col-span-2 lg:col-span-1",
        },
      ]
    : isHamasah
    ? [
        {
          title: "Rumah Toko Bakery",
          sub: "Wadah Kehangatan",
          description: "Siluet rumah toko melambangkan wadah hangat, ramah, dan terbuka tempat roti dan pastry segar dipanggang dengan penuh semangat setiap hari.",
          icon: <Home className="w-4 h-4 sm:w-6 sm:h-6 text-brand-gold" />,
          colSpan: "col-span-1",
        },
        {
          title: "Roti Senyum Bahagia",
          sub: "Keceriaan & Lezat",
          description: "Karakter roti slice dengan senyuman hangat merepresentasikan kelezatan lembut dan keceriaan yang dihadirkan di setiap produk.",
          icon: <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-brand-gold" />,
          colSpan: "col-span-1",
        },
        {
          title: "Sentuhan Bulir Gandum",
          sub: "Bahan Pilihan Olahan",
          description: "Aksen gandum dan warna keemasan mentega panggang menegaskan kualitas bahan alami segar pilihan yang diolah penuh keahlian.",
          icon: <Utensils className="w-4 h-4 sm:w-6 sm:h-6 text-brand-gold" />,
          colSpan: "col-span-2 lg:col-span-1",
        },
      ]
    : [
        {
          title: "Rumah Ilmu",
          sub: "Wadah Pembelajaran",
          description: "Melambangkan wadah yang aman, terstruktur, dan terbuka. Ruang intelektual & spiritual tempat ilmu dipelajari, dijaga, dan diamalkan.",
          icon: <Home className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red" />,
          colSpan: "col-span-1",
        },
        {
          title: "Buku Terbuka",
          sub: "Keluasan Ilmu",
          description: "Merepresentasikan keluasan ilmu yang terus berkembang. Pembelajaran adalah perjalanan panjang yang selalu membaca & memahami.",
          icon: <Compass className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red" />,
          colSpan: "col-span-1",
        },
        {
          title: "Pusat Emas",
          sub: "Takhassus Fiqih",
          description: "Elemen emas di pusat melambangkan fokus utama dan kekhususan keilmuan fiqih yang sistematis, mendalam, dan terstruktur.",
          icon: <Compass className="w-4 h-4 sm:w-6 sm:h-6 text-brand-gold" />,
          colSpan: "col-span-2 lg:col-span-1",
        },
      ];

  return (
    <section className="relative w-full bg-gradient-to-br from-brand-cream via-brand-sand to-brand-cream py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden font-modernist">
      
      {/* Ambient Background Elements */}
      <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 font-modernist">
        {/* Section label */}
        <div className="mb-2 sm:mb-4 flex justify-between items-center text-brand-red/80 text-[10px] sm:text-xs font-modernist font-bold uppercase tracking-[0.3em] border-b border-black/10 pb-3">
          <span>Identitas Visual</span>
          <span className="text-brand-burgundy font-extrabold">04 / 10</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 text-center md:text-left pt-4">
          <h2 className="font-modernist font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-burgundy tracking-tight">
            Pilar Utama Logo
          </h2>
          <p className="text-muted-foreground font-modernist text-xs md:text-sm max-w-md mt-2 md:mt-0 leading-relaxed px-2 sm:px-0">
            {isHaramain
              ? "Identitas visual Haramain Capture menyatukan simbol perjalanan ibadah, arsitektur tanah suci, dan bahasa kamera dalam satu tanda yang khidmat dan profesional."
              : isHamasah
              ? "Identitas visual Hamasah Bakery menyatukan siluet rumah hangat, karakter roti senyum, dan aksen gandum dalam satu kesatuan ramah, lezat, dan penuh semangat."
              : "Identitas visual Markaz Fiqih menyatukan tiga simbol utama menjadi satu kesatuan visual yang sederhana, modern, dan bermakna."}
          </p>
        </div>

        {/* Pillars 2-Column Mobile & 3-Column Desktop Compact Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`group relative backdrop-blur-lg bg-white/80 border border-black/5 rounded-2xl md:rounded-3xl p-3.5 sm:p-6 md:p-10 shadow-sm hover:shadow-[0_20px_40px_rgba(255,191,0,0.12)] hover:bg-white transition-all duration-500 ease-out flex flex-col justify-between ${pillar.colSpan}`}
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-cream border border-black/5 flex items-center justify-center mb-2.5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>

                <span className="text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-brand-red font-bold font-modernist block mb-0.5 sm:mb-1 truncate">
                  {pillar.sub}
                </span>

                <h3 className="font-modernist font-bold text-sm sm:text-2xl text-brand-burgundy mb-1 sm:mb-3 truncate">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-muted-foreground font-modernist text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandOverviewSection;
