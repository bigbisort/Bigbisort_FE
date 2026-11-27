import { ProductDraft, generalFeatures } from './product-pages.types';

// Fruits. Production rankings differ between sources and years, so states are
// listed without ranks. Photos are generic, not variety-specific.
export const FRUIT_PAGES: ProductDraft[] = [
  {
    slug: 'mango', name: 'Mango', theme: { bg: '#fbdc59', card: '#fff4c5', plate: '#ffe27a' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Maharashtra, Karnataka, Andhra Pradesh, Gujarat, Uttar Pradesh, Tamil Nadu',
    topVarieties: 'Alphonso, Kesar, Dasheri, Banganapalli, Totapuri, Langra',
    shelfLife: '7–10 days once ripe; up to ~30 days under cold-chain sea shipment trials',
    exportReach: 'UAE, UK, USA, Kuwait, Qatar, Bangladesh & Nepal',
    states: ['maharashtra', 'karnataka', 'andhra-pradesh', 'gujarat', 'uttar-pradesh', 'tamil-nadu'],
    varieties: [
      { name: 'Alphonso', description: 'The “king of mangoes” from the Konkan coast and Karnataka. Rich saffron flesh, a fragrant aroma and a smooth, fibre-free texture.' },
      { name: 'Kesar', description: 'Grown mainly in Gujarat’s Gir region. Orange-saffron pulp with a sweet, aromatic taste; a favourite for fresh eating and pulp.' },
      { name: 'Dasheri', description: 'A northern classic from Uttar Pradesh. Long, greenish-yellow fruit with sweet, juicy flesh and a strong fragrance.' },
      { name: 'Banganapalli', description: 'A large, firm, golden fruit from Andhra Pradesh and Tamil Nadu with sweet, fibreless flesh that travels well.' },
      { name: 'Totapuri', description: 'Parrot-beak shaped fruit from Karnataka and Andhra Pradesh. Slightly tangy and firm, widely used for processing and pulp.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-eye', text: 'Rich in vitamin A for healthy eyesight' },
      { icon: 'fa-solid fa-shield-heart', text: 'High in vitamin C to support immunity' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre and enzymes aid digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium and magnesium support heart health' },
      { icon: 'fa-solid fa-bolt', text: 'Natural sugars give quick energy' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Antioxidants help skin look healthy' },
      { icon: 'fa-solid fa-droplet', text: 'Juicy flesh keeps you hydrated' },
      { icon: 'fa-solid fa-seedling', text: 'Plant polyphenols such as mangiferin' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Mangoes are picked at the mature-green stage with a short stalk to limit sap burn, then sorted by size, shape and maturity.', note: 'Only blemish-free fruit goes forward for export packing.' },
      { title: 'Washing & Treatment', icon: 'fa-solid fa-fan', description: 'Fruit is de-sapped, washed and given the hot-water or vapour-heat treatment that many importing markets require.', note: 'Treatment follows the destination country’s phytosanitary protocol.' },
      { title: 'Pre-Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Field heat is removed quickly and fruit is held at controlled temperature and humidity until loading.', note: 'Typical storage range: 12–13°C, 85–90% RH.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by weight and colour, then packed in ventilated cartons with cushioning to prevent bruising in transit.', note: 'Air freight for premium lots; sea freight for volume with cold chain.' }
    ],
    features: generalFeatures('Mango', 'Maharashtra, Karnataka, Gujarat, Andhra Pradesh and Uttar Pradesh')
  },
  {
    slug: 'orange', name: 'Orange', theme: { bg: '#ffc46b', card: '#ffe6bd', plate: '#ffd28c' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Maharashtra (Vidarbha), Madhya Pradesh, Punjab, Rajasthan, Haryana',
    topVarieties: 'Nagpur Mandarin, Kinnow, Mosambi, Coorg Mandarin, Khasi Mandarin',
    shelfLife: '2–4 weeks with cool storage or modified-atmosphere packing',
    exportReach: 'UAE, Bahrain, Bangladesh, Nepal & Bhutan',
    states: ['maharashtra', 'madhya-pradesh', 'punjab', 'rajasthan', 'haryana'],
    varieties: [
      { name: 'Nagpur Mandarin', description: 'India’s famous “Nagpur Santra” from the Vidarbha region. Loose skin, juicy segments and a sweet-tart balance.' },
      { name: 'Kinnow', description: 'A mandarin hybrid grown mainly in Punjab, especially Fazilka. Very juicy and rich in flavour, with a rich orange rind.' },
      { name: 'Mosambi', description: 'Sweet orange with a pale, mild juice and low acidity, popular as a fresh juicing fruit.' },
      { name: 'Coorg Mandarin', description: 'Grown in Karnataka’s Kodagu hills. Aromatic, thin-skinned and sweet with a gentle tang.' },
      { name: 'Khasi Mandarin', description: 'From the north-east hills. Small, fragrant and sweet, often grown in mixed-farming orchards.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'Excellent source of vitamin C' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports healthy digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium and flavonoids support the heart' },
      { icon: 'fa-solid fa-droplet', text: 'High water content for hydration' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Vitamin C supports collagen and skin' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low in calories, filling as a snack' },
      { icon: 'fa-solid fa-seedling', text: 'Folate supports normal cell function' },
      { icon: 'fa-solid fa-bolt', text: 'Natural sugars for light energy' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Fruit is clipped with the calyx attached when colour and sugar-acid ratio reach export standard, then sorted by size and skin quality.', note: 'Clipping, not pulling, protects the rind.' },
      { title: 'Washing & Waxing', icon: 'fa-solid fa-fan', description: 'Oranges are washed and brushed, then given a food-grade wax to add shine and reduce moisture loss.', note: 'Waxing improves appearance and storage life.' },
      { title: 'Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Fruit is cooled and held in cool, humid rooms; modified-atmosphere packing can extend freshness further.', note: 'Cool storage is typically 4–8°C for mandarins.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by diameter and packed in corrugated cartons with vents for airflow.', note: 'Packed by count or weight to the buyer’s specification.' }
    ],
    features: generalFeatures('Orange', 'Vidarbha, Punjab, Madhya Pradesh and Rajasthan')
  },
  {
    slug: 'pomegranate', name: 'Pomegranate', theme: { bg: '#f7b5c0', card: '#fde0e5', plate: '#f9c6ce' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Maharashtra (Solapur belt), Karnataka, Gujarat, Andhra Pradesh, Rajasthan',
    topVarieties: 'Bhagwa, Ganesh, Mridula, Arakta, Phule Arakta',
    shelfLife: '45–60 days under cold chain',
    exportReach: 'UAE, Netherlands, Saudi Arabia, Bangladesh; sea trials to USA & Australia',
    states: ['maharashtra', 'karnataka', 'gujarat', 'andhra-pradesh', 'rajasthan'],
    varieties: [
      { name: 'Bhagwa (Kesar)', description: 'The leading export variety. Deep saffron-red skin, dark red arils, sweet taste and a long storage life.' },
      { name: 'Ganesh', description: 'A popular soft-seeded variety with pink-red arils and a mildly sweet-sour taste.' },
      { name: 'Mridula', description: 'Medium fruit with dark red skin and arils, soft seeds and sweet juice.' },
      { name: 'Arakta', description: 'Attractive red-skinned fruit with deep red arils, sweet taste and good yield.' },
      { name: 'Phule Arakta', description: 'A Maharashtra-bred selection with bright red arils and soft seeds, suited to table use.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'Rich in antioxidants such as punicalagins' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Supports heart health as part of a balanced diet' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre-rich arils aid digestion' },
      { icon: 'fa-solid fa-droplet', text: 'Juicy arils help hydration' },
      { icon: 'fa-solid fa-seedling', text: 'Source of vitamin C and potassium' },
      { icon: 'fa-solid fa-bolt', text: 'Natural sugars for steady energy' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Polyphenols that support healthy skin' },
      { icon: 'fa-solid fa-weight-scale', text: 'Satisfying snack with moderate calories' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Fruits are picked when skin colour and aril ripeness are right, handled gently, and sorted for size and rind blemishes.', note: 'Cracked or sunburnt fruit is removed before packing.' },
      { title: 'Cleaning & Drying', icon: 'fa-solid fa-fan', description: 'Fruit is cleaned and dried so surface moisture does not encourage decay in storage.', note: 'Dry fruit stores longer and looks better on arrival.' },
      { title: 'Pre-Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Fruit is cooled quickly and stored at controlled temperature; static-storage trials have reached around 60 days.', note: 'Typical range: 5–8°C, 90–95% RH.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by weight and colour and packed in cushioned, ventilated boxes. Packhouses follow APEDA-recognised standards.', note: 'Sea freight is now being trialled for far markets.' }
    ],
    features: generalFeatures('Pomegranate', 'Solapur, Sangli, Karnataka and Gujarat')
  },
  {
    slug: 'guava', name: 'Guava', theme: { bg: '#cde8a5', card: '#e8f5cf', plate: '#d9efb8' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Uttar Pradesh, Madhya Pradesh, Bihar, Andhra Pradesh, West Bengal, Gujarat, Haryana',
    topVarieties: 'Allahabad Safeda, Lucknow-49, Lalit, Arka Kiran',
    shelfLife: '6–8 days ambient; 3–4 weeks with cold storage',
    exportReach: 'Emerging – Middle East and neighbouring markets',
    states: ['uttar-pradesh', 'madhya-pradesh', 'bihar', 'andhra-pradesh', 'west-bengal', 'gujarat', 'haryana'],
    varieties: [
      { name: 'Allahabad Safeda', description: 'The classic white-fleshed guava from Prayagraj. Sweet, aromatic and soft, with a rounded shape.' },
      { name: 'Lucknow-49 (Sardar)', description: 'India’s most widely grown commercial guava. Large, yellow-green fruit with sweet white flesh and good yield.' },
      { name: 'Lalit', description: 'A red-fleshed selection with an attractive saffron-yellow skin, a pleasant sweetness and good keeping quality.' },
      { name: 'Arka Kiran', description: 'IIHR-bred red-fleshed variety rich in colour and lycopene, with few seeds and a rich flavour.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'Very high in vitamin C' },
      { icon: 'fa-solid fa-bowl-food', text: 'High fibre supports digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium supports healthy blood pressure' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low calorie and filling' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Antioxidants support skin health' },
      { icon: 'fa-solid fa-eye', text: 'Provides vitamin A and carotenoids' },
      { icon: 'fa-solid fa-seedling', text: 'Folate and minerals for everyday nutrition' },
      { icon: 'fa-solid fa-bolt', text: 'Light natural energy' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Guavas are picked at mature-green to light-yellow stage, handled carefully and sorted for size and skin condition.', note: 'Guava bruises easily, so each fruit is hand picked.' },
      { title: 'Washing & Drying', icon: 'fa-solid fa-fan', description: 'Fruit is washed in clean water, air-dried and checked for pest or disease marks.', note: 'Only clean, unblemished fruit is selected.' },
      { title: 'Pre-Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Pre-cooling slows ripening and extends the short natural shelf life of the fruit.', note: 'Typical storage: 8–10°C, 85–90% RH.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by size and packed singly in foam nets or trays within ventilated cartons.', note: 'Cushioned packing keeps soft fruit intact.' }
    ],
    features: generalFeatures('Guava', 'Uttar Pradesh, Madhya Pradesh, Bihar and Andhra Pradesh')
  },
  {
    slug: 'papaya', name: 'Papaya', theme: { bg: '#ffc98f', card: '#ffe5c8', plate: '#ffd6a8' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Gujarat, Andhra Pradesh, Karnataka, Maharashtra, Madhya Pradesh, West Bengal',
    topVarieties: 'Red Lady (Taiwan 786), Pusa Delicious, Pusa Dwarf, Coorg Honey Dew',
    shelfLife: 'Up to ~30 days under cold chain; 5–7 days once ripe',
    exportReach: 'Middle East & Nepal',
    states: ['gujarat', 'andhra-pradesh', 'karnataka', 'maharashtra', 'madhya-pradesh', 'west-bengal'],
    varieties: [
      { name: 'Red Lady (Taiwan 786)', description: 'The most widely grown hybrid in India. Large, firm fruit with deep red-orange flesh, high sweetness and a long shelf life.' },
      { name: 'Pusa Delicious', description: 'A gynodioecious variety bred at IARI. Medium fruit with deep orange flesh and good aroma and flavour.' },
      { name: 'Pusa Dwarf', description: 'A compact plant with fruit set low on the trunk. Oval fruit, popular for smaller orchards.' },
      { name: 'Coorg Honey Dew', description: 'A Karnataka selection known for its sweet, honey-like flavour and soft, yellow-orange flesh.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bowl-food', text: 'Papain enzyme and fibre support digestion' },
      { icon: 'fa-solid fa-shield-heart', text: 'Vitamin C supports immunity' },
      { icon: 'fa-solid fa-eye', text: 'Beta-carotene and vitamin A for vision' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium and folate for heart health' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Antioxidants help keep skin healthy' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low in calories, rich in water' },
      { icon: 'fa-solid fa-droplet', text: 'Hydrating, soft flesh' },
      { icon: 'fa-solid fa-seedling', text: 'Lycopene and plant antioxidants' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Papayas are picked at colour-break, when the skin shows the first yellow streaks, and sorted by weight and blemishes.', note: 'Colour-break harvest gives time for transport.' },
      { title: 'Washing & Treatment', icon: 'fa-solid fa-fan', description: 'Fruit is washed and, where needed, given a hot-water treatment to control disease before packing.', note: 'Treatments follow the buyer’s market rules.' },
      { title: 'Pre-Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Fruit is cooled and held at controlled temperature; papaya is chilling-sensitive so it must not be stored too cold.', note: 'Typical storage: 10–13°C, 85–90% RH.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by size and packed in padded, ventilated cartons or foam sleeves.', note: 'Each fruit is cushioned to prevent skin marks.' }
    ],
    features: generalFeatures('Papaya', 'Gujarat, Andhra Pradesh, Karnataka and Maharashtra')
  },
  {
    slug: 'watermelon', name: 'Watermelon', theme: { bg: '#f8b4b0', card: '#fde0dd', plate: '#fbc6c2' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Uttar Pradesh, Andhra Pradesh, Karnataka, Maharashtra, Tamil Nadu, Odisha',
    topVarieties: 'Sugar Baby, Arka Manik, Crimson Sweet, Durgapur Meetha',
    shelfLife: '2–3 weeks at 10–15°C once pre-cooled',
    exportReach: 'Middle East; Europe emerging',
    states: ['uttar-pradesh', 'andhra-pradesh', 'karnataka', 'maharashtra', 'tamil-nadu', 'odisha'],
    varieties: [
      { name: 'Sugar Baby', description: 'A small, round, dark-green melon with deep red, very sweet flesh and small seeds. Easy to ship and store.' },
      { name: 'Arka Manik', description: 'An IIHR variety with oblong green-striped fruit, crisp deep-red flesh and strong disease tolerance.' },
      { name: 'Crimson Sweet', description: 'Large, striped fruit with bright red, juicy, sweet flesh and good transport quality.' },
      { name: 'Durgapur Meetha', description: 'An Indian variety with light-green skin and sweet, crimson flesh, grown across the plains.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-droplet', text: 'About 90% water, excellent for hydration' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Lycopene supports heart health' },
      { icon: 'fa-solid fa-shield-heart', text: 'Vitamins A and C support immunity' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low calorie, refreshing snack' },
      { icon: 'fa-solid fa-bowl-food', text: 'Water and fibre support digestion' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Antioxidants support skin health' },
      { icon: 'fa-solid fa-bolt', text: 'Natural sugars for light energy' },
      { icon: 'fa-solid fa-seedling', text: 'Citrulline and potassium' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Melons are cut when ripe, judged by the dry tendril, the yellow ground spot and the dull hollow sound, then sorted by weight.', note: 'Stalks are cut, not pulled, to avoid damage.' },
      { title: 'Cleaning & Inspection', icon: 'fa-solid fa-fan', description: 'Fruit is cleaned and checked for sunburn, cracks and soft spots.', note: 'Only firm, even-shaped fruit is selected.' },
      { title: 'Pre-Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Pre-cooling removes field heat and reduces rot during shipping.', note: 'Typical storage: 10–15°C, 85–90% RH.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by weight and packed in bulk bins or cartons with padding.', note: 'Bins or cartons are sized for container loading.' }
    ],
    features: generalFeatures('Watermelon', 'Uttar Pradesh, Andhra Pradesh, Karnataka and Maharashtra')
  },
  {
    slug: 'lemon', name: 'Lemon', theme: { bg: '#fff3a3', card: '#fffadb', plate: '#fff6bd' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Gujarat, Andhra Pradesh, Karnataka, Maharashtra, Tamil Nadu',
    topVarieties: 'Kagzi Lime, Eureka Lemon, Pramalini, Vikram, Assam Lemon',
    shelfLife: '1–2 weeks ambient; 4–6 weeks in cold storage',
    exportReach: 'Middle East, Europe & Southeast Asia',
    states: ['gujarat', 'andhra-pradesh', 'karnataka', 'maharashtra', 'tamil-nadu'],
    varieties: [
      { name: 'Kagzi Lime', description: 'India’s most important acid lime. Small, thin-skinned, highly juicy and aromatic, with a sharp, clean sourness.' },
      { name: 'Eureka Lemon', description: 'A true lemon with a thick, yellow rind, few seeds and a high juice yield with bright acidity.' },
      { name: 'Pramalini', description: 'A high-yielding acid lime selection with clustered fruiting and good juice content.' },
      { name: 'Vikram', description: 'A hybrid acid lime with heavy bearing, compact fruits and good juice content.' },
      { name: 'Assam Lemon', description: 'A large, elongated fruit from the north-east with thin skin, plentiful juice and a lively fragrance.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'High in vitamin C' },
      { icon: 'fa-solid fa-bowl-food', text: 'Citric acid supports digestion' },
      { icon: 'fa-solid fa-droplet', text: 'Adds flavour to water and meals' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Vitamin C supports skin and collagen' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Flavonoids support heart health' },
      { icon: 'fa-solid fa-seedling', text: 'Helps the body absorb plant iron' },
      { icon: 'fa-solid fa-weight-scale', text: 'Very low in calories' },
      { icon: 'fa-solid fa-bolt', text: 'Refreshing, light on the stomach' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Fruit is hand-clipped at the right size and colour and sorted for diameter, skin finish and juice content.', note: 'Clipping with the button keeps the rind intact.' },
      { title: 'Washing & Waxing', icon: 'fa-solid fa-fan', description: 'Limes are washed and brushed, then lightly waxed to slow moisture loss and keep the skin glossy.', note: 'Waxing and calcium treatments help extend freshness.' },
      { title: 'Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Fruit is cooled and held in humid, cool rooms to stay firm and green.', note: 'Typical storage: 9–10°C, 85–90% RH.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by size and packed in ventilated cartons or mesh bags for export.', note: 'Packed by count or weight to buyer needs.' }
    ],
    features: generalFeatures('Lemon', 'Gujarat, Andhra Pradesh, Karnataka and Maharashtra')
  },
  {
    slug: 'jackfruit', name: 'Jackfruit', theme: { bg: '#f6d56b', card: '#fdf0bd', plate: '#f9de86' },
    tagline: 'Directly sourced from Indian farmers, globally trusted.',
    origin: 'Kerala, Karnataka, Tamil Nadu, Maharashtra, Odisha, West Bengal',
    topVarieties: 'Muttom Varikka, Chembarathi Varikka, Singapore Jack, Tumkur, PPI-1',
    shelfLife: 'Whole fruit 3–6 days; ripe or raw pieces and processed products last longer',
    exportReach: 'Middle East (fresh trials); processed products worldwide',
    states: ['kerala', 'karnataka', 'tamil-nadu', 'maharashtra', 'odisha', 'west-bengal'],
    varieties: [
      { name: 'Muttom Varikka', description: 'A Kerala variety of the firm-fleshed “varikka” type. Crisp, sweet bulbs that hold their shape.' },
      { name: 'Chembarathi Varikka', description: 'A firm, reddish-orange-fleshed Kerala selection with sweet bulbs and a strong aroma.' },
      { name: 'Singapore Jack', description: 'An early-bearing, medium-sized fruit with crisp, sweet golden bulbs, widely planted in Karnataka and Tamil Nadu.' },
      { name: 'Tumkur', description: 'A Karnataka type with large, sweet bulbs, well suited to fresh and processed use.' },
      { name: 'PPI-1', description: 'A Tamil Nadu (TNAU) selection with regular bearing and sweet yellow bulbs.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports healthy digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium supports blood pressure' },
      { icon: 'fa-solid fa-shield-heart', text: 'Vitamin C and antioxidants for immunity' },
      { icon: 'fa-solid fa-bolt', text: 'Natural energy from ripe bulbs' },
      { icon: 'fa-solid fa-seedling', text: 'Raw jackfruit is a popular plant-based meat alternative' },
      { icon: 'fa-solid fa-eye', text: 'Provides carotenoids and vitamin A' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Plant compounds that support skin health' },
      { icon: 'fa-solid fa-weight-scale', text: 'Filling, with plant protein for a fruit' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Fruit is cut at the right maturity, judged by the dull rind, the flattened spines and the aroma, then sorted by size.', note: 'Whole fruit is bulky, so handling is done with care.' },
      { title: 'Cleaning & Preparation', icon: 'fa-solid fa-fan', description: 'The rind is cleaned; bulbs may be extracted and cleaned for fresh-cut, frozen or processed lines.', note: 'Fresh-cut bulbs travel better than whole fruit.' },
      { title: 'Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Fruit and bulbs are cooled quickly; short shelf life makes a tight cold chain essential.', note: 'Typical storage: 11–13°C for whole fruit.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by weight and bulb quality, then packed as whole fruit, trays of bulbs, or frozen and dried products.', note: 'Processed forms ship farther than fresh.' }
    ],
    features: generalFeatures('Jackfruit', 'Kerala, Karnataka, Tamil Nadu and Maharashtra')
  }
];
