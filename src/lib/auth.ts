import { BrandSlug } from "./brand";

// Password configured for each brand + Master Admin Bypass
export const BRAND_PASSWORDS: Record<BrandSlug, string[]> = {
  hamasahlaundry: ["laundry2026", "hamasahlaundry", "laundry"],
  hamasahbakery: ["bakery2026", "hamasahbakery", "bakery"],
  haramaincapture: ["haramain2026", "haramaincapture", "haramain"],
  markazfiqih: ["fiqih2026", "markazfiqih", "fiqih"],
};

export const MASTER_PASSWORDS = ["symp2026", "sympstudio", "admin2026"];

export const isBrandUnlocked = (slug: BrandSlug): boolean => {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(`brand_unlocked_${slug}`) === "true";
};

export const unlockBrand = (slug: BrandSlug): void => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(`brand_unlocked_${slug}`, "true");
};

export const lockBrand = (slug: BrandSlug): void => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(`brand_unlocked_${slug}`);
};

export const verifyBrandPassword = (slug: BrandSlug, input: string): boolean => {
  const cleanInput = input.trim().toLowerCase();
  if (MASTER_PASSWORDS.includes(cleanInput)) return true;
  const validPasswords = BRAND_PASSWORDS[slug] || [];
  return validPasswords.some((p) => p.toLowerCase() === cleanInput);
};
