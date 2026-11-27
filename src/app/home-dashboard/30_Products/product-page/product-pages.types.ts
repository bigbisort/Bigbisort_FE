// Shapes and helpers for the shared product page (/product/:slug). Content comes from APEDA, ICAR,
// NHB and trade reports; production rankings differ between sources and years,
// so states are listed without ranks. Photos are generic (not variety-specific).

export interface ProductVariety { name: string; description: string; /** Photo of this exact variety, if we have one. */ image?: string; }
export interface ProductBenefit { icon: string; text: string; }
export interface ProductStep { title: string; icon: string; description: string; note: string; }
export interface ProductFeature { icon: string; title: string; description: string; }

export interface ProductPage {
  slug: string;
  /** CatalogCategory.slug this page belongs to. */
  category: string;
  /** Photos in assets/images/Prdpage/Catalog/<slug>/1..n.jpg */
  photos: number;
  /** Photo credit line, shown on the page when the photos need attribution. */
  credit?: string;
  name: string;
  /** CSS colours for this fruit: section tint, card tint, hero photo plate. */
  theme: { bg: string; card: string; plate: string };
  tagline: string;
  origin: string;
  topVarieties: string;
  shelfLife: string;
  exportReach: string;
  /** Key = state id from MAP_PINS. */
  states: string[];
  varieties: ProductVariety[];
  benefits: ProductBenefit[];
  steps: ProductStep[];
  features: ProductFeature[];
}

export interface MapPin {
  label: string;
  left: number;
  top: number;
  /** Which side of the dot the label sits on. */
  side: 't' | 'l' | 'r';
}

/** A page as written in the per-category files; the index adds `category` and `photos`. */
export type ProductDraft = Omit<ProductPage, 'category' | 'photos'>;

/** Pin positions as % of the India map image (left, top). */
export const MAP_PINS: Record<string, MapPin> = {
  'andhra-pradesh': { label: 'Andhra Pradesh', left: 38, top: 66, side: 'r' },
  'assam': { label: 'Assam', left: 86, top: 36, side: 't' },
  'bihar': { label: 'Bihar', left: 52, top: 41, side: 't' },
  'chhattisgarh': { label: 'Chhattisgarh', left: 42, top: 52, side: 'l' },
  'gujarat': { label: 'Gujarat', left: 14, top: 47, side: 't' },
  'haryana': { label: 'Haryana', left: 27, top: 28, side: 't' },
  'himachal-pradesh': { label: 'Himachal Pradesh', left: 30, top: 17, side: 't' },
  'karnataka': { label: 'Karnataka', left: 27, top: 68, side: 'l' },
  'kerala': { label: 'Kerala', left: 28, top: 80, side: 'l' },
  'madhya-pradesh': { label: 'Madhya Pradesh', left: 31, top: 46, side: 'r' },
  'maharashtra': { label: 'Maharashtra', left: 26, top: 58, side: 'l' },
  'odisha': { label: 'Odisha', left: 50, top: 56, side: 'r' },
  'punjab': { label: 'Punjab', left: 24, top: 22, side: 't' },
  'rajasthan': { label: 'Rajasthan', left: 19, top: 36, side: 't' },
  'tamil-nadu': { label: 'Tamil Nadu', left: 35, top: 85, side: 'r' },
  'telangana': { label: 'Telangana', left: 34, top: 60, side: 'r' },
  'uttar-pradesh': { label: 'Uttar Pradesh', left: 40, top: 36, side: 't' },
  'west-bengal': { label: 'West Bengal', left: 63, top: 47, side: 'r' }
};

export const generalFeatures = (
  name: string,
  regions: string,
  handling: { title: string; description: string } = {
    title: 'Cold-Chain Handling',
    description: 'Pre-cooling, temperature-controlled storage and ventilated packing keep the produce fresh through transit.'
  }
): ProductFeature[] => [
  { icon: 'fa-solid fa-tractor', title: `Sourced from Trusted ${name} Growers`,
    description: `Procured directly from growers in ${regions}, giving full traceability and steady quality.` },
  { icon: 'fa-solid fa-certificate', title: 'Export-Grade Quality',
    description: `${name} is graded for size, colour, freshness and quality, and packed to meet APEDA and importer specifications.` },
  { icon: 'fa-solid fa-temperature-low', title: handling.title, description: handling.description },
  { icon: 'fa-solid fa-globe', title: 'Managed Export Support',
    description: 'Documentation, packing, inspection and shipping handled end to end, from the farm gate to your port.' }
];

