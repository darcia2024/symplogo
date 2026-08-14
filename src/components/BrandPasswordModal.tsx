import React, { useState } from "react";
import { Lock, KeyRound, ArrowRight, Eye, EyeOff, ShieldCheck, AlertCircle, MessageSquare } from "lucide-react";
import { BrandConfig } from "@/lib/brand";
import { verifyBrandPassword, unlockBrand } from "@/lib/auth";

interface BrandPasswordModalProps {
  brand: BrandConfig;
  onUnlocked: () => void;
}

const BrandPasswordModal: React.FC<BrandPasswordModalProps> = ({ brand, onUnlocked }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError(true);
      setErrorMessage("Silakan masukkan password akses brand.");
      return;
    }

    const isValid = verifyBrandPassword(brand.slug, password);
    if (isValid) {
      setError(false);
      setIsSuccess(true);
      unlockBrand(brand.slug);
      setTimeout(() => {
        onUnlocked();
      }, 600);
    } else {
      setError(true);
      setErrorMessage("Password tidak valid. Silakan coba lagi atau hubungi admin.");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-burgundy font-modernist text-white overflow-hidden ${brand.themeClass}`}>
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-gold/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy via-brand-burgundy/95 to-brand-black pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }} 
      />

      {/* Main Glassmorphism Gate Card */}
      <div 
        className={`relative w-full max-w-md bg-[#160609]/90 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 ${
          isShaking ? "animate-shake" : ""
        } ${isSuccess ? "scale-95 opacity-90" : "scale-100"}`}
      >
        
        {/* Top Floating Security Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
            <Lock className="w-3.5 h-3.5 text-brand-gold-light" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-light">
              Protected Brand Area
            </span>
          </div>
        </div>

        {/* Brand Logo & Name */}
        <div className="text-center flex flex-col items-center mb-6">
          <div className="w-24 sm:w-28 h-16 flex items-center justify-center mb-3">
            <img 
              src={brand.assets.horizontalWhite} 
              alt={`Logo ${brand.name}`} 
              className="max-h-full max-w-full object-contain drop-shadow-md"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans">
            {brand.name}
          </h2>
          <p className="text-white/70 text-xs mt-1.5 max-w-xs leading-relaxed font-sans">
            Halaman Brand Identity Guidelines ini dilindungi. Masukkan password untuk melanjutkan.
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
              <KeyRound className="w-4 h-4 text-brand-gold-light" />
            </div>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              placeholder={`Password akses ${brand.name}...`}
              autoFocus
              className={`w-full pl-10 pr-12 py-3 rounded-2xl bg-white/5 border text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all ${
                error 
                  ? "border-rose-500/80 focus:ring-rose-500/50 bg-rose-500/5" 
                  : isSuccess 
                  ? "border-emerald-500/80 focus:ring-emerald-500/50 bg-emerald-500/5"
                  : "border-white/20 focus:border-brand-gold focus:ring-brand-gold/30"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 text-rose-400 text-xs px-1 animate-fade-in">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success Message */}
          {isSuccess && (
            <div className="flex items-center gap-2 text-emerald-400 text-xs px-1 animate-fade-in">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Password benar! Membuka panduan brand...</span>
            </div>
          )}

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isSuccess}
            className="w-full py-3 px-4 rounded-2xl bg-brand-gold hover:bg-white text-brand-burgundy font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group disabled:opacity-80"
          >
            <span>{isSuccess ? "Akses Diberikan" : "Buka Akses Brand"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer Contact Help */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <a
            href="https://wa.me/6281311506025?text=Halo%20SYMP%20Studio,%20saya%20meminta%20password%20akses%20Brand%20Guideline."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-white/60 hover:text-brand-gold-light transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Belum memiliki password? Hubungi Admin</span>
          </a>
        </div>

      </div>

    </div>
  );
};

export default BrandPasswordModal;
