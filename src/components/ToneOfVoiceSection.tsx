import { BookOpenCheck, Target, Sparkles, Feather, CheckCircle } from "lucide-react";

interface VoicePillar {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  doText: string;
  dontText: string;
  icon: JSX.Element;
}

const ToneOfVoiceSection = () => {
  const pillars: VoicePillar[] = [
    {
      id: "01",
      title: "Ilmiah & Autentik",
      subtitle: "SCIENTIFIC & AUTHENTIC",
      desc: "Setiap gagasan dan narasi dibangun di atas rujukan keilmuan Islam (turats) yang mu'tabar, objektif, dan dapat dipertanggungjawabkan.",
      doText: "Gunakan istilah fiqih baku, cantumkan landasan rujukan yang akurat.",
      dontText: "Hindari klaim tanpa dasar ilmu atau spekulasi tanpa marja' shahih.",
      icon: <BookOpenCheck className="w-6 h-6 text-brand-gold-light" />
    },
    {
      id: "02",
      title: "Takhassus & Fokus",
      subtitle: "SPECIALIZED & PRECISE",
      desc: "Menekankan spesialisasi dan kedalaman pembahasan fiqih secara fokus, terarah, dan mendalam sesuai disiplin ilmu.",
      doText: "Fokus pada ruang lingkup fiqih, metodologi hukum Islam, dan kaidah syar'i.",
      dontText: "Hindari melebar ke isu sensasional non-keilmuan yang mengaburkan fokus.",
      icon: <Target className="w-6 h-6 text-brand-gold-light" />
    },
    {
      id: "03",
      title: "Terstruktur & Lugas",
      subtitle: "STRUCTURED & CLEAR",
      desc: "Penyampaian bahasa yang rapi, tertata sistematis, dan lugas sehingga mudah dipahami oleh civitas akademika maupun masyarakat umum.",
      doText: "Gunakan poin teratur, kalimat efektif, dan hirarki pembahasan yang jelas.",
      dontText: "Hindari kalimat berbelit-belit atau bahasa asing tanpa padanan yang pas.",
      icon: <Sparkles className="w-6 h-6 text-brand-gold-light" />
    },
    {
      id: "04",
      title: "Hikmah & Santun",
      subtitle: "WISDOM & RESPECTFUL",
      desc: "Menjaga etika keilmuan, kerendahan hati akademis, serta kerukunan dalam menyikapi keragaman pendapat ulama.",
      doText: "Gunakan bahasa yang sejuk, menghormati silang pendapat (khilafiyah) secara beradab.",
      dontText: "Hindari bahasa provokatif, vonis sepihak, atau nada menghakimi.",
      icon: <Feather className="w-6 h-6 text-brand-gold-light" />
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#FDFBF7] text-brand-burgundy py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-modernist">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      {/* --- 1. SECTION HEADER --- */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-16 font-modernist">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-1.5 rounded-full border border-brand-red/20 mb-4">
          <Feather className="w-4 h-4 text-brand-red" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-brand-red font-modernist font-bold">
            Communication Guidelines • Brand Voice
          </span>
        </div>

        <h2 className="font-modernist font-bold text-3xl sm:text-5xl md:text-6xl text-brand-burgundy mb-4 tracking-tight">
          Karakter Komunikasi & Tone of Voice
        </h2>

        <p className="text-muted-foreground font-modernist text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-4">
          Gaya penyampaian pesan Markaz Fiqih mencerminkan nilai kedalaman ilmu, ketegasan fokus, dan keadaban akademis dalam setiap publikasi.
        </p>
      </div>

      {/* --- 2. TONE OF VOICE CARDS GRID --- */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-modernist">
        {pillars.map((item) => (
          <div 
            key={item.id}
            className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-black/5 shadow-xl hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header Icon & Tag */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#AB2130] border border-brand-gold/40 flex items-center justify-center text-brand-gold-light shadow-md">
                  {item.icon}
                </div>
                <span className="text-[10px] font-modernist font-bold uppercase tracking-widest px-3 py-1 bg-brand-red/5 rounded-full border border-brand-red/10 text-brand-red">
                  PILAR #{item.id}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-modernist font-bold text-brand-burgundy tracking-tight">
                {item.title}
              </h3>
              <span className="text-[9px] font-modernist font-bold uppercase tracking-[0.25em] text-muted-foreground/70 block mb-3">
                {item.subtitle}
              </span>

              {/* Main Description */}
              <p className="text-muted-foreground text-xs md:text-sm font-modernist leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            {/* DO vs DON'T Rules Container */}
            <div className="space-y-2.5 pt-4 border-t border-black/5 font-modernist text-xs">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-900">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-700 block text-[10px] uppercase tracking-wider">DO (DIANJURKAN):</span>
                  <span>{item.doText}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-rose-50 border border-rose-200/60 text-rose-900">
                <span className="w-4 h-4 rounded-full bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                <div>
                  <span className="font-bold text-rose-700 block text-[10px] uppercase tracking-wider">DON'T (DILARANG):</span>
                  <span>{item.dontText}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* --- 3. FOOTER METADATA TAG --- */}
      <div className="mt-16 md:mt-20 max-w-7xl mx-auto pt-6 border-t border-black/10 flex justify-between items-center text-[10px] font-modernist uppercase tracking-widest text-muted-foreground/60">
        <span>Markaz Fiqih Voice & Philosophy</span>
        <span className="text-brand-red font-bold">09 / 10</span>
      </div>

    </section>
  );
};

export default ToneOfVoiceSection;
