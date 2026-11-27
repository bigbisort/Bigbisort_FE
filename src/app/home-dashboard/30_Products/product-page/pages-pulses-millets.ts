import { ProductDraft, generalFeatures } from './product-pages.types';

// Pulses, rice and millets. Photos are from Wikimedia Commons (credited on each
// page) and are generic, not variety-specific.

const TAGLINE = 'Directly sourced from Indian farmers, globally trusted.';

const grain = (name: string, regions: string) =>
  generalFeatures(name, regions, {
    title: 'Clean, Dry Storage',
    description: 'Moisture-controlled drying, pest-safe storage and sealed packing protect quality through long transit.'
  });

const pulseSteps = (crop: string, extra: string) => [
  { title: 'Harvesting & Threshing', icon: 'fa-solid fa-seedling', description: `${crop} is harvested once pods dry on the plant, then threshed to separate the grain from the straw and pods.`, note: 'Harvest at the right dryness limits cracking.' },
  { title: 'Cleaning & Sorting', icon: 'fa-solid fa-fan', description: 'Grain is screened and de-stoned to remove dust, stones and broken seeds, and colour-sorted for uniformity.', note: 'Clean, uniform grain gets the best price.' },
  { title: 'Drying & Processing', icon: 'fa-solid fa-temperature-low', description: extra, note: 'Moisture is brought down to a safe storage level.' },
  { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by size, colour and purity and packed in food-grade bags, with fumigation where the destination requires it.', note: 'Packed to the buyer’s weight and specification.' }
];

export const PULSE_MILLET_PAGES: ProductDraft[] = [
  {
    slug: 'chickpea', name: 'Chickpea (Chana)', theme: { bg: '#e9d4a1', card: '#f5ead0', plate: '#eedbb0' }, tagline: TAGLINE,
    origin: 'Madhya Pradesh, Rajasthan, Maharashtra, Karnataka, Andhra Pradesh, Uttar Pradesh',
    topVarieties: 'Desi (Bengal gram), Kabuli, JG 11, Pusa 256',
    shelfLife: 'About 12 months in cool, dry, pest-free storage',
    exportReach: 'UAE, Nepal & Bangladesh',
    states: ['madhya-pradesh', 'rajasthan', 'maharashtra', 'karnataka', 'andhra-pradesh', 'uttar-pradesh'],
    varieties: [
      { name: 'Desi Chickpea', description: 'Small, dark-yellow to brown seeds with a thick coat. The basis of chana dal and besan (gram flour) in Indian kitchens.' },
      { name: 'Kabuli Chickpea', description: 'Larger, cream-coloured, round seeds with a thin coat and a mild, buttery taste, popular in salads and hummus.' },
      { name: 'JG 11', description: 'A widely grown desi variety with good yield and tolerance to wilt, suited to central and southern India.' },
      { name: 'Pusa 256', description: 'A high-yielding IARI variety with medium-sized seeds, suited to northern India.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-seedling', text: 'Plant protein for vegetarian diets' },
      { icon: 'fa-solid fa-bowl-food', text: 'High in dietary fibre' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Folate, iron and magnesium' },
      { icon: 'fa-solid fa-bolt', text: 'Slow-release energy; low glycaemic index' },
      { icon: 'fa-solid fa-weight-scale', text: 'Filling, helps manage appetite' },
      { icon: 'fa-solid fa-shield-heart', text: 'Zinc and B-vitamins for everyday health' }
    ],
    steps: pulseSteps('Chickpea', 'Whole chickpeas are sun- or machine-dried; for chana dal the grain is de-husked and split, then polished and graded.'),
    features: grain('Chickpea', 'Madhya Pradesh, Rajasthan, Maharashtra and Karnataka'),
    credit: 'Bff (CC BY-SA 3.0), Tiia Monto (CC BY-SA 4.0), Harsha K R (CC BY-SA 2.0)'
  },
  {
    slug: 'toor-dal', name: 'Toor Dal (Pigeon Pea)', theme: { bg: '#f5d76e', card: '#fbecb0', plate: '#f8e085' }, tagline: TAGLINE,
    origin: 'Maharashtra, Karnataka, Madhya Pradesh, Uttar Pradesh, Gujarat, Telangana, Andhra Pradesh',
    topVarieties: 'Kalaburagi Tur (GI), Asha (ICPL 87119), Maruti (ICPL 8863), Pusa 992',
    shelfLife: 'About 12 months in dry, pest-free storage',
    exportReach: 'UAE, USA, UK & Canada',
    states: ['maharashtra', 'karnataka', 'madhya-pradesh', 'uttar-pradesh', 'gujarat', 'telangana', 'andhra-pradesh'],
    varieties: [
      { name: 'Kalaburagi Tur', description: 'A GI-tagged pigeon pea from Karnataka’s Kalaburagi (Gulbarga) region, known for good cooking quality and taste.' },
      { name: 'Asha (ICPL 87119)', description: 'A widely grown, medium-duration variety with good yield and tolerance to wilt.' },
      { name: 'Maruti (ICPL 8863)', description: 'A medium-duration variety popular in central and southern India, with bold seeds.' },
      { name: 'Pusa 992', description: 'An IARI variety suited to the northern plains, with good yield and bold, uniform seeds.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-seedling', text: 'A staple source of plant protein' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Folate, potassium and magnesium' },
      { icon: 'fa-solid fa-bolt', text: 'Steady energy from complex carbohydrates' },
      { icon: 'fa-solid fa-shield-heart', text: 'Iron and B-vitamins' },
      { icon: 'fa-solid fa-weight-scale', text: 'Filling, low in fat' }
    ],
    steps: pulseSteps('Pigeon pea', 'The whole grain is dried and milled: the husk is loosened, removed and the grain split into dal, then polished.'),
    features: grain('Toor Dal', 'Maharashtra, Karnataka, Madhya Pradesh and Uttar Pradesh'),
    credit: 'Miansari66 (public domain), Dahivada (public domain), David E Mead (CC0)'
  },
  {
    slug: 'moong', name: 'Moong (Green Gram)', theme: { bg: '#b5d89a', card: '#dcefc9', plate: '#c4e2ab' }, tagline: TAGLINE,
    origin: 'Rajasthan, Maharashtra, Karnataka, Odisha, Andhra Pradesh, Bihar, Gujarat, Madhya Pradesh',
    topVarieties: 'Pusa Vishal, IPM 02-3, Samrat, SML 668',
    shelfLife: 'About 12 months in dry, pest-free storage',
    exportReach: 'UAE, Nepal & Singapore',
    states: ['rajasthan', 'maharashtra', 'karnataka', 'odisha', 'andhra-pradesh', 'bihar', 'gujarat', 'madhya-pradesh'],
    varieties: [
      { name: 'Whole Green Moong', description: 'Small green seeds with the husk on, used whole, sprouted, or ground into flour.' },
      { name: 'Pusa Vishal', description: 'An IARI summer variety with bold, shiny green seeds and good yield.' },
      { name: 'IPM 02-3', description: 'A short-duration variety with resistance to yellow mosaic virus and uniform ripening.' },
      { name: 'SML 668', description: 'A short-duration Punjab variety with bold green seeds and good yield.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-seedling', text: 'Plant protein, easy to digest' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre and resistant starch for gut health' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Folate, potassium and magnesium' },
      { icon: 'fa-solid fa-droplet', text: 'Sprouts add vitamin C' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low in fat, filling' },
      { icon: 'fa-solid fa-bolt', text: 'Slow-release energy' }
    ],
    steps: pulseSteps('Green gram', 'The grain is dried and graded; for moong dal the husk is removed and the grain split and polished.'),
    features: grain('Moong', 'Rajasthan, Maharashtra, Karnataka and Odisha'),
    credit: 'Gausanchennai (CC BY-SA 4.0), Yercaud-elango (CC BY-SA 4.0)'
  },
  {
    slug: 'basmati-rice', name: 'Basmati Rice', theme: { bg: '#efe6d0', card: '#f7f1e3', plate: '#f2eada' }, tagline: TAGLINE,
    origin: 'Punjab, Haryana, Uttar Pradesh (west), Himachal Pradesh and the Indo-Gangetic plains',
    topVarieties: 'Pusa Basmati 1121, Pusa Basmati 1509, Taraori (HBC-19), Pusa Basmati 1718',
    shelfLife: '12–24 months; ageing improves aroma and cooking quality',
    exportReach: 'Saudi Arabia, Iran, UAE, Iraq, USA & UK',
    states: ['punjab', 'haryana', 'uttar-pradesh', 'himachal-pradesh'],
    varieties: [
      { name: 'Pusa Basmati 1121', description: 'Famed for extra-long grain that more than doubles in length when cooked, with a strong aroma and fluffy texture.' },
      { name: 'Pusa Basmati 1509', description: 'An early-maturing basmati with long, slender grain and good aroma, saving time and water.' },
      { name: 'Taraori (HBC-19)', description: 'A traditional Haryana basmati prized for aroma and flavour, with a soft, non-sticky bite.' },
      { name: 'Pusa Basmati 1718', description: 'A disease-resistant improved version of 1121, with the same extra-long grain and aroma.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bolt', text: 'Carbohydrates for sustained energy' },
      { icon: 'fa-solid fa-bowl-food', text: 'Light, easy to digest' },
      { icon: 'fa-solid fa-weight-scale', text: 'Generally lower glycaemic index than many rices' },
      { icon: 'fa-solid fa-seedling', text: 'Naturally gluten-free' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Low in fat and cholesterol-free' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'The aroma and texture chefs look for' }
    ],
    steps: [
      { title: 'Harvesting & Threshing', icon: 'fa-solid fa-seedling', description: 'Paddy is harvested when the grain is mature and threshed gently to avoid breakage.', note: 'Careful handling protects grain length.' },
      { title: 'Drying & Ageing', icon: 'fa-solid fa-sun', description: 'Paddy is dried to a safe moisture and stored; ageing for 12 months or more firms the grain and builds the aroma.', note: 'Aged rice cooks fluffier and longer.' },
      { title: 'Milling & Polishing', icon: 'fa-solid fa-fan', description: 'The husk is removed and the grain milled and polished, then passed through colour sorters to remove broken or discoloured kernels.', note: 'Whole, unbroken grains command the best price.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by grain length and packed in woven or food-grade bags, with phytosanitary and residue checks for export.', note: 'Packed to the buyer’s weight and label.' }
    ],
    features: grain('Basmati Rice', 'Punjab, Haryana and western Uttar Pradesh'),
    credit: 'cookbookman17 (CC BY 2.0), Gaurav Dhwaj Khadka (CC BY-SA 4.0), Quinn Dombrowski (CC BY-SA 2.0)'
  },
  {
    slug: 'ragi', name: 'Ragi (Finger Millet)', theme: { bg: '#d9b9a0', card: '#efdccd', plate: '#e4c8b3' }, tagline: TAGLINE,
    origin: 'Karnataka, Tamil Nadu, Andhra Pradesh, Odisha, Uttarakhand, Maharashtra',
    topVarieties: 'GPU 28, GPU 67, ML 365, MR 1',
    shelfLife: '6–12 months as whole grain; flour 3–6 months',
    exportReach: 'USA, UAE, Europe & Singapore',
    states: ['karnataka', 'tamil-nadu', 'andhra-pradesh', 'odisha', 'maharashtra'],
    varieties: [
      { name: 'GPU 28', description: 'A Karnataka (UAS Bengaluru) variety with good yield and blast tolerance, widely grown on rain-fed land.' },
      { name: 'GPU 67', description: 'A Karnataka variety with compact ear heads and dependable yield.' },
      { name: 'ML 365', description: 'A hill-adapted variety suited to the Uttarakhand foothills.' },
      { name: 'MR 1', description: 'A Karnataka variety with long ear heads and good yield under rain-fed conditions.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-seedling', text: 'One of the richest plant sources of calcium' },
      { icon: 'fa-solid fa-bowl-food', text: 'High in dietary fibre' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Iron and magnesium' },
      { icon: 'fa-solid fa-weight-scale', text: 'Slow-digesting; helps keep you full' },
      { icon: 'fa-solid fa-bolt', text: 'Sustained energy' },
      { icon: 'fa-solid fa-shield-heart', text: 'Naturally gluten-free' }
    ],
    steps: [
      { title: 'Harvesting & Threshing', icon: 'fa-solid fa-seedling', description: 'Earheads are harvested when the grain is hard and dry, then threshed and winnowed.', note: 'Clean threshing keeps stones out of the grain.' },
      { title: 'Cleaning & Sorting', icon: 'fa-solid fa-fan', description: 'Grain is cleaned, de-stoned and graded for size and colour.', note: 'Uniform, clean grain suits flour mills and food makers.' },
      { title: 'Drying & Storage', icon: 'fa-solid fa-temperature-low', description: 'Grain is dried to a safe moisture level and stored in dry, ventilated rooms.', note: 'Whole ragi keeps far longer than milled flour.' },
      { title: 'Milling, Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Sold as whole grain or milled to flour, then packed in food-grade bags.', note: 'Packed to the buyer’s weight and specification.' }
    ],
    features: grain('Ragi', 'Karnataka, Tamil Nadu, Andhra Pradesh and Odisha'),
    credit: 'Sengai Podhuvan (CC BY-SA 3.0), Yercaud-elango (CC BY-SA 4.0), Roger Culos (CC BY-SA 4.0)'
  },
  {
    slug: 'bajra', name: 'Bajra (Pearl Millet)', theme: { bg: '#d9d2a8', card: '#ece8cf', plate: '#e2dcb9' }, tagline: TAGLINE,
    origin: 'Rajasthan, Uttar Pradesh, Haryana, Gujarat, Maharashtra, Madhya Pradesh',
    topVarieties: 'HHB 67 Improved, Pusa 322, Pusa 1201, ICMH 356',
    shelfLife: '8–12 months as grain; flour turns rancid within weeks',
    exportReach: 'UAE & the wider Middle East',
    states: ['rajasthan', 'uttar-pradesh', 'haryana', 'gujarat', 'maharashtra', 'madhya-pradesh'],
    varieties: [
      { name: 'HHB 67 Improved', description: 'A Haryana hybrid with early maturity and downy mildew resistance, widely grown in dry regions.' },
      { name: 'Pusa 322', description: 'An IARI hybrid suited to dry, rain-fed conditions with dependable yield.' },
      { name: 'Pusa 1201', description: 'An improved IARI hybrid with good yield and resistance to common diseases.' },
      { name: 'ICMH 356', description: 'An ICRISAT-bred hybrid with good yield and tolerance to drought and downy mildew.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-seedling', text: 'Iron and zinc for everyday nutrition' },
      { icon: 'fa-solid fa-bowl-food', text: 'High in fibre' },
      { icon: 'fa-solid fa-bolt', text: 'Slow-release energy' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Magnesium and phosphorus' },
      { icon: 'fa-solid fa-shield-heart', text: 'Naturally gluten-free' },
      { icon: 'fa-solid fa-weight-scale', text: 'Filling; suits warming winter dishes' }
    ],
    steps: [
      { title: 'Harvesting & Threshing', icon: 'fa-solid fa-seedling', description: 'Ear heads are cut when the grain is hard and dry, then threshed and winnowed.', note: 'Dry grain resists mould.' },
      { title: 'Cleaning & Sorting', icon: 'fa-solid fa-fan', description: 'Grain is cleaned and graded to remove husk, stones and broken grain.', note: 'Clean grain suits both milling and whole-grain use.' },
      { title: 'Drying & Storage', icon: 'fa-solid fa-temperature-low', description: 'Grain is dried to a safe moisture level and stored in clean, dry rooms.', note: 'Store as grain; mill close to the time of sale.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by size and purity and packed in food-grade bags.', note: 'Packed to the buyer’s weight and specification.' }
    ],
    features: grain('Bajra', 'Rajasthan, Uttar Pradesh, Haryana and Gujarat'),
    credit: 'Roger Culos (CC BY-SA 3.0), Yercaud-elango (CC BY-SA 4.0), USDA Agricultural Research Service (public domain)'
  },
  {
    slug: 'jowar', name: 'Jowar (Sorghum)', theme: { bg: '#e3c5a1', card: '#f2e2ce', plate: '#ead3b5' }, tagline: TAGLINE,
    origin: 'Maharashtra, Karnataka, Rajasthan, Madhya Pradesh, Telangana, Tamil Nadu',
    topVarieties: 'M 35-1 (Maldandi), CSV 15, CSH 16, Phule Revati',
    shelfLife: '8–12 months as grain; flour 1–3 months',
    exportReach: 'Middle East, USA & Europe',
    states: ['maharashtra', 'karnataka', 'rajasthan', 'madhya-pradesh', 'telangana', 'tamil-nadu'],
    varieties: [
      { name: 'M 35-1 (Maldandi)', description: 'A well-known rabi sorghum from Maharashtra, prized for large, lustrous, pearly-white grain and good roti quality.' },
      { name: 'CSV 15', description: 'A high-yielding, medium-duration variety adapted to the rainy season.' },
      { name: 'CSH 16', description: 'A high-yielding hybrid with good grain quality, suited to rain-fed regions.' },
      { name: 'Phule Revati', description: 'A rabi variety from Maharashtra with bold, pearly grain and good roti quality.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-seedling', text: 'Naturally gluten-free whole grain' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Iron, magnesium and B-vitamins' },
      { icon: 'fa-solid fa-bolt', text: 'Slow-release energy' },
      { icon: 'fa-solid fa-shield-heart', text: 'Plant antioxidants such as tannins' },
      { icon: 'fa-solid fa-weight-scale', text: 'Filling; traditional rotla and bhakri flour' }
    ],
    steps: [
      { title: 'Harvesting & Threshing', icon: 'fa-solid fa-seedling', description: 'Panicles are cut when the grain is hard, then threshed and winnowed.', note: 'Dry grain stores without spoilage.' },
      { title: 'Cleaning & Sorting', icon: 'fa-solid fa-fan', description: 'Grain is cleaned, de-stoned and graded by size and colour.', note: 'Pearly, uniform grain gives the best flour.' },
      { title: 'Drying & Storage', icon: 'fa-solid fa-temperature-low', description: 'Grain is dried to a safe moisture level and stored in clean, dry, ventilated rooms.', note: 'Whole grain keeps longer than flour.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded and packed as whole grain or milled flour in food-grade bags.', note: 'Packed to the buyer’s weight and specification.' }
    ],
    features: grain('Jowar', 'Maharashtra, Karnataka, Rajasthan and Madhya Pradesh'),
    credit: 'Daniel Georg Döhne (CC BY-SA 3.0), Pethan (CC BY-SA 3.0), USDA-NRCS PLANTS Database (public domain)'
  }
];
