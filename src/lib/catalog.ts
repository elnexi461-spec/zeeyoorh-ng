import blackFabricAsset from "@/assets/IMG-20260223-WA0155.JPG.asset.json";
import whiteFabricAsset from "@/assets/IMG-20260223-WA0160.JPG.asset.json";
import taupeFabricAsset from "@/assets/IMG-20260223-WA0153.JPG.asset.json";
import shoeBlackAsset from "@/assets/IMG_0513.PNG.asset.json";
import shoeBlueAsset from "@/assets/IMG_0514.PNG.asset.json";
import shoeGreyAsset from "@/assets/IMG_0515.PNG.asset.json";
import capBlueAsset from "@/assets/18C79ADB-985B-4D54-A78E-0218233F5BB8.JPG.asset.json";
import capWhiteAsset from "@/assets/8DFE5BE1-E1CB-45A0-8346-6433990605BB.JPG.asset.json";
import capSizeAsset from "@/assets/D7598292-141C-40CF-9134-E4E9969509E8.JPG.asset.json";
import shirtWhiteAsset from "@/assets/IMG_0401.PNG.asset.json";
import shirtGreyAsset from "@/assets/IMG_0402.PNG.asset.json";
import shirtStripeAsset from "@/assets/IMG_0399.PNG.asset.json";
import shirtPlumAsset from "@/assets/IMG_0404.PNG.asset.json";
import watchPairAsset from "@/assets/3205712d-242e-41d8-af2a-a50de65eb389.jpg.asset.json";
import watchSquareAsset from "@/assets/6a129338-ddda-4adb-bffc-ec41c723d1e3.jpg.asset.json";
import watchGreenAsset from "@/assets/9fd628a5-6a70-410f-9e9b-98fffb3a0213.jpg.asset.json";
import shaddaGoldAsset from "@/assets/IMG-20260223-WA0101.JPG.asset.json";
import shaddaGreyAsset from "@/assets/IMG-20260223-WA0097.JPG.asset.json";
import shaddaWhiteAsset from "@/assets/IMG-20260223-WA0102.JPG.asset.json";

export type CategoryKey = "Clothing" | "Shoes" | "Watches" | "Native Caps" | "Shadda";
export type CatalogImage = { src: string; alt: string };

export const categories: Record<
  CategoryKey,
  { eyebrow: string; description: string; images: CatalogImage[] }
> = {
  Clothing: {
    eyebrow: "Clothing",
    description: "Quality shirts and fabrics that help you look sharp and feel comfortable.",
    images: [
      { src: shirtWhiteAsset.url, alt: "White pinstripe mandarin-collar shirt" },
      { src: shirtGreyAsset.url, alt: "Grey pinstripe mandarin-collar shirt" },
      { src: shirtStripeAsset.url, alt: "Striped mandarin-collar shirt" },
      { src: shirtPlumAsset.url, alt: "Plum ribbed mandarin-collar shirt" },
      { src: whiteFabricAsset.url, alt: "Premium white fabric" },
      { src: taupeFabricAsset.url, alt: "Premium taupe fabric" },
      { src: blackFabricAsset.url, alt: "Premium black fabric" },
    ],
  },
  Shoes: {
    eyebrow: "Shoes",
    description: "Comfortable shoes and slides that complete your look.",
    images: [
      { src: shoeBlueAsset.url, alt: "Blue luxury slide" },
      { src: shoeGreyAsset.url, alt: "Grey luxury slide" },
      { src: shoeBlackAsset.url, alt: "Black premium slides" },
    ],
  },
  Watches: {
    eyebrow: "Watches",
    description: "Clean, stylish watches for daily wear and special occasions.",
    images: [
      { src: watchPairAsset.url, alt: "Blue and black dial steel watches" },
      { src: watchGreenAsset.url, alt: "Green dial steel watch" },
      { src: watchSquareAsset.url, alt: "Square-case steel watch with white roman dial" },
    ],
  },
  "Native Caps": {
    eyebrow: "Native caps",
    description: "Well-made caps in strong colours to finish your traditional look.",
    images: [
      { src: capWhiteAsset.url, alt: "White native caps on gold head forms" },
      { src: capBlueAsset.url, alt: "Blue native caps on gold head forms" },
      { src: capSizeAsset.url, alt: "Native cap size selection" },
    ],
  },
  Shadda: {
    eyebrow: "Shadda",
    description: "Beautiful Shadda fabrics chosen to give you a rich, confident look.",
    images: [
      { src: shaddaGoldAsset.url, alt: "Gold patterned Shadda fabric" },
      { src: shaddaWhiteAsset.url, alt: "White patterned Shadda fabric" },
      { src: shaddaGreyAsset.url, alt: "Soft grey patterned Shadda fabric" },
    ],
  },
};

export const categoryKeys = Object.keys(categories) as CategoryKey[];
export const allCatalogImages = categoryKeys.flatMap((category) => categories[category].images);