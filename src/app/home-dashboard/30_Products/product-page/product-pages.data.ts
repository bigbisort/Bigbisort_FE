// Index of every page served by the shared product page (/product/:slug).
// Content lives in the per-category files; this adds each page's category and
// photo count (assets/images/Prdpage/Catalog/<slug>/1..n.jpg).

import { FRUIT_PAGES } from './pages-fruits';
import { PULSE_MILLET_PAGES } from './pages-pulses-millets';
import { SPICE_COCONUT_PAGES } from './pages-spices-coconut';
import { VEGETABLE_PAGES } from './pages-vegetables';
import { ProductDraft, ProductPage } from './product-pages.types';

export * from './product-pages.types';

export const CATEGORY_LABELS: Record<string, { trade: string; plural: string }> = {
  fruits: { trade: 'Fruit', plural: 'fruits' },
  vegetables: { trade: 'Vegetable', plural: 'vegetables' },
  spices: { trade: 'Spice', plural: 'spices' },
  coconut: { trade: 'Coconut', plural: 'coconut products' },
  pulses: { trade: 'Pulses & Grain', plural: 'pulses & grains' },
  millets: { trade: 'Millet', plural: 'millets' }
};

/** Photos on disk per page; every other page has 3. */
const PHOTOS: Record<string, number> = {
  'onion': 2, 'brinjal': 1, 'red-cabbage': 1, 'green-chilli': 1, 'drumstick': 2,
  'white-pepper': 1, 'tender-coconut': 2, 'copra': 2
};

const tag = (category: string, list: ProductDraft[]): ProductPage[] =>
  list.map(p => ({ ...p, category, photos: PHOTOS[p.slug] ?? 3 }));

export const PRODUCT_PAGES: ProductPage[] = [
  ...tag('fruits', FRUIT_PAGES),
  ...tag('vegetables', VEGETABLE_PAGES),
  ...PULSE_MILLET_PAGES.map(p => ({
    ...p,
    category: ['ragi', 'bajra', 'jowar'].includes(p.slug) ? 'millets' : 'pulses',
    photos: 3
  })),
  ...SPICE_COCONUT_PAGES.map(p => ({
    ...p,
    category: p.slug === 'white-pepper' ? 'spices' : 'coconut',
    photos: PHOTOS[p.slug] ?? 3
  }))
];

export function productPage(slug: string | null): ProductPage | undefined {
  return PRODUCT_PAGES.find(p => p.slug === slug);
}
