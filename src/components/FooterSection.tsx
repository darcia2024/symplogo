import { useBrand } from "@/lib/brand";

const FooterSection = () => {
  const brand = useBrand();

  return (
    <section className="bg-brand-burgundy py-16 px-6 md:px-12 lg:px-20 border-t border-white/15 font-modernist">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <img 
            src={brand.assets.horizontalWhite} 
            alt={`Logo ${brand.name}.`} 
            className="w-52 sm:w-64 md:w-80 max-h-56 h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
          />
          
          <p className="text-white/80 font-modernist text-xs md:text-sm max-w-lg leading-relaxed font-light">
            {brand.description}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-brand-gold-light text-xs font-modernist font-bold tracking-widest uppercase">
            <span>{brand.handle}</span>
            <span className="text-white/30">â€¢</span>
            <span>Guideline Identitas Visual</span>
          </div>

          <div className="w-full border-t border-white/10 pt-8 mt-8">
            <p className="text-white/50 text-xs font-modernist font-bold">
              © 2026 {brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;

