// Public catalogue shown on the home page and the products landing page
// (/prdland). Static marketing data - not the live PRODUCT table used by
// /products. Products with a `link` have their own page under 30_Products;
// the rest send visitors to the contact page to enquire.

export interface CatalogCategory {
  slug: string;
  name: string;
  icon: string;
  /** Card photo; null renders a tinted placeholder tile. */
  image: string | null;
  blurb: string;
}

export interface CatalogProduct {
  name: string;
  category: string; // CatalogCategory.slug
  image: string;
  /** Route of the product's own page, if one exists. */
  link?: string;
}

const P = 'assets/images/Home/products/';
const C = 'assets/images/Home/catalog/';

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  { slug: 'fruits', name: 'Fruits', icon: 'fa-apple-whole', image: 'assets/images/Home/categories/fruits.jpg',
    blurb: 'Fresh orchard fruit, graded and packed for export.' },
  { slug: 'vegetables', name: 'Vegetables', icon: 'fa-leaf', image: 'assets/images/Home/categories/vegetables.jpg',
    blurb: 'Farm-fresh vegetables sourced directly from growers.' },
  { slug: 'spices', name: 'Spices', icon: 'fa-pepper-hot', image: 'assets/images/Home/categories/spices.jpg',
    blurb: 'Aromatic Indian spices from the Western Ghats and beyond.' },
  { slug: 'coconut', name: 'Coconut', icon: 'fa-seedling', image: C + 'coconut.jpg',
    blurb: 'Tender, mature and dry coconut from South India.' },
  { slug: 'pulses', name: 'Pulses & Grains', icon: 'fa-wheat-awn', image: 'assets/images/Prdpage/Catalog/toor-dal/1.jpg',
    blurb: 'Lentils, beans and staple grains.' },
  { slug: 'millets', name: 'Premium Millets', icon: 'fa-bowl-rice', image: 'assets/images/Prdpage/Catalog/ragi/1.jpg',
    blurb: 'Nutrient-rich millets for health-conscious markets.' }
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  // Fruits
  { name: 'Apple', category: 'fruits', image: P + 'apple.jpg', link: '/apple' },
  { name: 'Avocado', category: 'fruits', image: P + 'avocado.jpg', link: '/avocado' },
  { name: 'Banana', category: 'fruits', image: P + 'banana.jpg', link: '/banana' },
  { name: 'Pineapple', category: 'fruits', image: P + 'pineapple.jpg', link: '/pineapple' },
  { name: 'Mango', category: 'fruits', image: C + 'mango.jpg', link: '/product/mango' },
  { name: 'Orange', category: 'fruits', image: C + 'orange.jpg', link: '/product/orange' },
  { name: 'Pomegranate', category: 'fruits', image: C + 'pomegranate.jpg', link: '/product/pomegranate' },
  { name: 'Guava', category: 'fruits', image: C + 'guava.jpg', link: '/product/guava' },
  { name: 'Papaya', category: 'fruits', image: C + 'papaya.jpg', link: '/product/papaya' },
  { name: 'Watermelon', category: 'fruits', image: C + 'watermelon.jpg', link: '/product/watermelon' },
  { name: 'Lemon', category: 'fruits', image: C + 'lemon.jpg', link: '/product/lemon' },
  { name: 'Jackfruit', category: 'fruits', image: C + 'jackfruit.jpg', link: '/product/jackfruit' },
  // Vegetables
  { name: 'Carrot', category: 'vegetables', image: P + 'carrot.jpg', link: '/product/carrot' },
  { name: 'Tomato', category: 'vegetables', image: C + 'tomato.jpg', link: '/product/tomato' },
  { name: 'Potato', category: 'vegetables', image: C + 'potato.jpg', link: '/product/potato' },
  { name: 'Onion', category: 'vegetables', image: C + 'onion.jpg', link: '/product/onion' },
  { name: 'Brinjal', category: 'vegetables', image: C + 'brinjal.jpg', link: '/product/brinjal' },
  { name: 'Cauliflower', category: 'vegetables', image: C + 'cauliflower.jpg', link: '/product/cauliflower' },
  { name: 'Red Cabbage', category: 'vegetables', image: C + 'red-cabbage.jpg', link: '/product/red-cabbage' },
  { name: 'Green Chilli', category: 'vegetables', image: C + 'green-chilli.jpg', link: '/product/green-chilli' },
  { name: 'Cucumber', category: 'vegetables', image: C + 'cucumber.jpg', link: '/product/cucumber' },
  { name: 'Drumstick', category: 'vegetables', image: C + 'drumstick.jpg', link: '/product/drumstick' },
  { name: 'Green Peas', category: 'vegetables', image: C + 'green-peas.jpg', link: '/product/green-peas' },
  // Spices
  { name: 'Black Pepper', category: 'spices', image: P + 'pepper.jpg', link: '/pepper' },
  { name: 'White Pepper', category: 'spices', image: C + 'white-pepper.jpg', link: '/product/white-pepper' },
  // Coconut
  { name: 'Coconut', category: 'coconut', image: C + 'coconut.jpg', link: '/coconut' },
  { name: 'Tender Coconut', category: 'coconut', image: P + 'coconut.jpg', link: '/product/tender-coconut' },
  { name: 'Husked Coconut', category: 'coconut', image: C + 'coconut-husked.jpg', link: '/product/husked-coconut' },
  { name: 'Dry Coconut (Copra)', category: 'coconut', image: C + 'copra.jpg', link: '/product/copra' },
  // Pulses & Grains
  { name: 'Chickpea (Chana)', category: 'pulses', image: 'assets/images/Prdpage/Catalog/chickpea/1.jpg', link: '/product/chickpea' },
  { name: 'Toor Dal', category: 'pulses', image: 'assets/images/Prdpage/Catalog/toor-dal/1.jpg', link: '/product/toor-dal' },
  { name: 'Moong (Green Gram)', category: 'pulses', image: 'assets/images/Prdpage/Catalog/moong/1.jpg', link: '/product/moong' },
  { name: 'Basmati Rice', category: 'pulses', image: 'assets/images/Prdpage/Catalog/basmati-rice/1.jpg', link: '/product/basmati-rice' },
  // Premium Millets
  { name: 'Ragi (Finger Millet)', category: 'millets', image: 'assets/images/Prdpage/Catalog/ragi/1.jpg', link: '/product/ragi' },
  { name: 'Bajra (Pearl Millet)', category: 'millets', image: 'assets/images/Prdpage/Catalog/bajra/1.jpg', link: '/product/bajra' },
  { name: 'Jowar (Sorghum)', category: 'millets', image: 'assets/images/Prdpage/Catalog/jowar/1.jpg', link: '/product/jowar' }
];

export function productsIn(slug: string): CatalogProduct[] {
  return CATALOG_PRODUCTS.filter(p => p.category === slug);
}
