import { createContext, useContext, type ReactNode } from "react";
import logoMarkaz from "@/assets/logo-markaz-fiqih-fix-2-1.png";
import logoMarkazWhite from "@/assets/logo-markaz-fiqih-fix-2-1-white.png";
import logoMarkazHorizontalWhite from "@/assets/logo-horizontal-white.png";
import logoMarkazHorizontalRed from "@/assets/logo-horizontal-red.png";
import logoMarkazIconWhite from "@/assets/logo-icon-white.png";
import logoMarkazIconMono from "@/assets/logo-icon-mono.png";
import logoMarkazVertical from "@/assets/LogoVertikal.png";
import logoHaramainHorizontalBlack from "@/assets/haramain-logo-horizontal-black.png";
import logoHaramainHorizontalColor from "@/assets/haramain-logo-horizontal-color.png";
import logoHaramainHorizontalWhite from "@/assets/haramain-logo-horizontal-white.png";
import logoHaramainVerticalBlack from "@/assets/haramain-logo-vertical-black.png";
import logoHaramainVerticalColor from "@/assets/haramain-logo-vertical-color.png";
import logoHaramainVerticalWhite from "@/assets/haramain-logo-vertical-white.png";

import logoHamasahHeroCustom from "@/assets/hamasah-logo-hero-custom.png";
import logoHamasahLightBgCustom from "@/assets/hamasah-logo-light-bg-custom.png";
import logoHamasahPrimary from "@/assets/hamasah-logo-primary.png";
import logoHamasahDark from "@/assets/hamasah-logo-dark.png";
import logoHamasahYellowBg from "@/assets/hamasah-logo-yellow-bg.png";
import logoHamasahCreamBg from "@/assets/hamasah-logo-cream-bg.png";
import logoHamasahCoralBg from "@/assets/hamasah-logo-coral-bg.png";
import logoHamasahIcon from "@/assets/hamasah-logo-icon.png";
import logoHamasahBoard from "@/assets/hamasah-board.png";

export type BrandSlug = "markazfiqih" | "haramaincapture" | "hamasahbakery";

export type BrandAssets = {
  primary: string;
  dark: string;
  horizontalWhite: string;
  horizontalColor: string;
  vertical: string;
  iconWhite: string;
  iconMono: string;
  board?: string;
  yellowBg?: string;
  creamBg?: string;
  coralBg?: string;
};

export type BrandConfig = {
  slug: BrandSlug;
  name: string;
  shortName: string;
  handle: string;
  themeClass: string;
  identityLabel: string;
  tagline: string;
  description: string;
  manifesto: ReactNode;
  assetDownloadUrl: string;
  assets: BrandAssets;
};

const markazAssets: BrandAssets = {
  primary: logoMarkaz,
  dark: logoMarkazWhite,
  horizontalWhite: logoMarkazHorizontalWhite,
  horizontalColor: logoMarkazHorizontalRed,
  vertical: logoMarkazVertical,
  iconWhite: logoMarkazIconWhite,
  iconMono: logoMarkazIconMono,
};

const haramainAssets: BrandAssets = {
  primary: logoHaramainVerticalColor,
  dark: logoHaramainVerticalWhite,
  horizontalWhite: logoHaramainHorizontalWhite,
  horizontalColor: logoHaramainHorizontalColor,
  vertical: logoHaramainVerticalWhite,
  iconWhite: logoHaramainVerticalWhite,
  iconMono: logoHaramainVerticalBlack,
};

const hamasahAssets: BrandAssets = {
  primary: logoHamasahHeroCustom,
  dark: logoHamasahHeroCustom,
  horizontalWhite: logoHamasahHeroCustom,
  horizontalColor: logoHamasahLightBgCustom,
  vertical: logoHamasahHeroCustom,
  iconWhite: logoHamasahIcon,
  iconMono: logoHamasahIcon,
  board: logoHamasahBoard,
  yellowBg: logoHamasahYellowBg,
  creamBg: logoHamasahLightBgCustom,
  coralBg: logoHamasahCoralBg,
};

export const brands: Record<BrandSlug, BrandConfig> = {
  markazfiqih: {
    slug: "markazfiqih",
    name: "Markaz Fiqih",
    shortName: "Markaz Fiqih",
    handle: "@markazfiqih",
    themeClass: "theme-markaz",
    identityLabel: "Markaz Fiqih Identity",
    tagline: "Rumah bagi keluasan ilmu dengan fiqih sebagai pusat keahliannya.",
    description:
      "Rumah bagi keluasan ilmu dengan fiqih sebagai pusat keahliannya. Menghadirkan pembelajaran fiqih yang sistematis, mendalam, dan relevan bagi kehidupan.",
    assetDownloadUrl: "https://drive.google.com/drive/folders/1dANLt2tRcRkbuzqva2ojJey56fGnEqH-?usp=sharing",
    manifesto: (
      <>
        Secara keseluruhan, identitas visual Markaz Fiqih membawa <span className="text-brand-gold-light font-extrabold underline decoration-brand-gold/40 underline-offset-4 sm:underline-offset-8">tiga pesan utama</span>: <span className="text-brand-gold-light">rumah</span> sebagai wadah pembelajaran, <span className="text-brand-gold-light">buku</span> sebagai simbol keluasan ilmu, dan <span className="text-brand-gold-light">titik pusat</span> sebagai lambang takhassus fiqih.
      </>
    ),
    assets: markazAssets,
  },
  haramaincapture: {
    slug: "haramaincapture",
    name: "Haramain Capture",
    shortName: "Haramain",
    handle: "@haramaincapture",
    themeClass: "theme-haramain",
    identityLabel: "Haramain Capture Identity",
    tagline: "Dokumentasi perjalanan umrah, ziarah, dan ibadah lain dengan pendekatan visual yang khidmat, rapi, dan penuh makna.",
    description:
      "Haramain Capture adalah layanan dokumentasi perjalanan umrah, ziarah, dan ibadah lain yang menangkap momen jamaah secara profesional tanpa menghilangkan adab, ketenangan, dan kekhidmatan ibadah.",
    assetDownloadUrl: "https://drive.google.com/drive/folders/1U0vnuKLEgOBXVyA_y3sgE8Csbyoo0wJR?usp=sharing",
    manifesto: (
      <>
        Secara keseluruhan, identitas visual Haramain Capture membawa <span className="text-brand-gold-light font-extrabold underline decoration-brand-gold/40 underline-offset-4 sm:underline-offset-8">tiga pesan utama</span>: <span className="text-brand-gold-light">Haramain</span> sebagai ruang ibadah, <span className="text-brand-gold-light">kamera</span> sebagai bahasa dokumentasi, dan <span className="text-brand-gold-light">hijau</span> sebagai aksen ketenangan perjalanan umrah dan ziarah.
      </>
    ),
    assets: haramainAssets,
  },
  hamasahbakery: {
    slug: "hamasahbakery",
    name: "Hamasah Bakery",
    shortName: "Hamasah",
    handle: "@hamasahbakery",
    themeClass: "theme-hamasah",
    identityLabel: "Hamasah Bakery Identity",
    tagline: "Kehangatan Roti Fresh dari Oven dengan Cita Rasa Lembut & Penuh Semangat",
    description:
      "Hamasah Bakery menghadirkan aneka roti dan pastry hangat berkualitas tinggi, dipanggang dengan penuh semangat dan bahan pilihan untuk menghadirkan senyuman di setiap gigitan.",
    assetDownloadUrl: "https://drive.google.com/drive/folders/1dANLt2tRcRkbuzqva2ojJey56fGnEqH-?usp=sharing",
    manifesto: (
      <>
        Secara keseluruhan, identitas visual Hamasah Bakery membawa <span className="text-brand-gold-light font-extrabold underline decoration-brand-gold/40 underline-offset-4 sm:underline-offset-8">tiga pesan utama</span>: <span className="text-brand-gold-light">rumah hangat</span> sebagai tempat dipanggangnya keceriaan, <span className="text-brand-gold-light">roti senyum</span> sebagai simbol kenikmatan lembut, dan <span className="text-brand-gold-light">warna keemasan</span> sebagai ekspresi kelezatan roti fresh oven.
      </>
    ),
    assets: hamasahAssets,
  },
};

const BrandContext = createContext<BrandConfig>(brands.markazfiqih);

export const BrandProvider = ({ brand, children }: { brand: BrandConfig; children: ReactNode }) => (
  <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>
);

export const useBrand = () => useContext(BrandContext);
