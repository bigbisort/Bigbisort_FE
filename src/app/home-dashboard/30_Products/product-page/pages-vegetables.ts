import { ProductDraft, generalFeatures } from './product-pages.types';

// Vegetables. State lists follow NHB/ICAR production data and are unranked;
// photos are generic, not variety-specific.

const veg = (name: string, regions: string) =>
  generalFeatures(name, regions, {
    title: 'Fresh, Cold-Chain Handling',
    description: 'Quick pre-cooling, controlled storage and ventilated packing keep vegetables crisp and fresh through transit.'
  });

const harvestStep = (description: string, note: string) =>
  ({ title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description, note });
const washStep = (description: string, note: string) =>
  ({ title: 'Cleaning & Preparation', icon: 'fa-solid fa-fan', description, note });
const coolStep = (description: string, note: string) =>
  ({ title: 'Pre-Cooling & Storage', icon: 'fa-solid fa-temperature-low', description, note });
const packStep = (description: string, note: string) =>
  ({ title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description, note });

const TAGLINE = 'Directly sourced from Indian farmers, globally trusted.';

export const VEGETABLE_PAGES: ProductDraft[] = [
  {
    slug: 'carrot', name: 'Carrot', theme: { bg: '#ffc78a', card: '#ffe3c4', plate: '#ffd3a1' }, tagline: TAGLINE,
    origin: 'Punjab, Haryana, Karnataka, Uttar Pradesh, Tamil Nadu (Nilgiris)',
    topVarieties: 'Pusa Rudhira, Pusa Kesar, Nantes, Early Nantes, Ooty-1',
    shelfLife: '2–3 weeks at 0–2°C, 90–95% RH',
    exportReach: 'UAE, Malaysia, Singapore, Sri Lanka & Qatar',
    states: ['punjab', 'haryana', 'karnataka', 'uttar-pradesh', 'tamil-nadu'],
    varieties: [
      { name: 'Pusa Rudhira', description: 'A red Asiatic carrot from IARI, deep red from skin to core, sweet and juicy, and a rich source of lycopene.', image: 'assets/images/Prdpage/Catalog/carrot/v-rudhira.jpg' },
      { name: 'Pusa Kesar', description: 'An Asiatic variety with scarlet roots and a red core, grown in the cool season and valued for its sweet taste and colour.', image: 'assets/images/Prdpage/Catalog/carrot/v-kesar.jpg' },
      { name: 'Nantes', description: 'A classic European-type carrot with smooth, cylindrical, blunt-ended orange roots, crisp texture and a sweet flavour.', image: 'assets/images/Prdpage/Catalog/carrot/v-nantes.jpg' },
      { name: 'Early Nantes', description: 'An early-maturing Nantes type with uniform, bright orange roots that is ready sooner and suits fresh-market sale.', image: 'assets/images/Prdpage/Catalog/carrot/v-early-nantes.jpg' },
      { name: 'Ooty-1', description: 'A TNAU variety from the Nilgiris, with orange, cylindrical roots that suit hill-grown, year-round supply.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-eye', text: 'Beta-carotene is converted to vitamin A for vision' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium and fibre support heart health' },
      { icon: 'fa-solid fa-shield-heart', text: 'Antioxidants support immunity' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports healthy digestion' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low in calories, naturally sweet' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Carotenoids help keep skin healthy' }
    ],
    steps: [
      harvestStep('Carrots are pulled by hand or lifted by machine once the roots reach marketable size and colour, then the tops are trimmed.', 'Careful lifting avoids cracked or forked roots.'),
      washStep('Roots are washed in clean water to remove soil, then sorted for colour, shape and size.', 'Straight, smooth, unblemished roots go forward.'),
      coolStep('Roots are hydro-cooled quickly and held cold and humid, which keeps them crisp and sweet.', 'Typical storage: 0–2°C, 90–95% RH.'),
      packStep('Graded by length and diameter and packed in ventilated cartons or mesh bags.', 'Packed by weight to the buyer’s specification.')
    ],
    features: veg('Carrot', 'Punjab, Haryana, Karnataka and Uttar Pradesh')
  },
  {
    slug: 'tomato', name: 'Tomato', theme: { bg: '#ffb3a7', card: '#ffd9d2', plate: '#ffc4ba' }, tagline: TAGLINE,
    origin: 'Andhra Pradesh, Karnataka, Madhya Pradesh, Gujarat, West Bengal, Odisha',
    topVarieties: 'Arka Rakshak, Arka Vikas, Pusa Ruby, Pusa Early Dwarf',
    shelfLife: '1–2 weeks at 12–13°C when picked mature-green; 5–7 days once ripe',
    exportReach: 'UAE, Oman, Nepal & Bangladesh',
    states: ['andhra-pradesh', 'karnataka', 'madhya-pradesh', 'gujarat', 'west-bengal', 'odisha'],
    varieties: [
      { name: 'Arka Rakshak', description: 'An IIHR hybrid with large, firm, deep-red fruit and good tolerance to common tomato diseases.' },
      { name: 'Arka Vikas', description: 'A high-yielding, round, firm tomato that travels well and suits both fresh market and processing.' },
      { name: 'Pusa Ruby', description: 'A widely grown IARI variety with medium, round, bright-red fruit and a good sweet-sour balance.' },
      { name: 'Pusa Early Dwarf', description: 'A compact early variety with medium fruit that ripens evenly, suited to small farms.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-heart-pulse', text: 'Lycopene and potassium support heart health' },
      { icon: 'fa-solid fa-shield-heart', text: 'Good source of vitamin C' },
      { icon: 'fa-solid fa-eye', text: 'Carotenoids and vitamin A for eyesight' },
      { icon: 'fa-solid fa-droplet', text: 'High water content for hydration' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low in calories, rich in flavour' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Antioxidants help keep skin healthy' }
    ],
    steps: [
      harvestStep('Tomatoes are picked at the breaker or mature-green stage so they ripen on the way to market, then sorted by colour, size and firmness.', 'Firm, unblemished fruit only.'),
      washStep('Fruit is wiped or washed, dried and checked for cracks and soft spots.', 'Damaged fruit is removed before packing.'),
      coolStep('Pre-cooling removes field heat and slows ripening; fruit is held in humid, cool rooms.', 'Typical storage: 12–13°C, 90–95% RH. Avoid chilling below 10°C.'),
      packStep('Graded by size and ripeness and packed in ventilated crates or cartons with cushioning.', 'Shallow layers prevent crushing in transit.')
    ],
    features: veg('Tomato', 'Andhra Pradesh, Karnataka, Madhya Pradesh and Gujarat')
  },
  {
    slug: 'potato', name: 'Potato', theme: { bg: '#e6cfa3', card: '#f3e6c9', plate: '#ecd9b3' }, tagline: TAGLINE,
    origin: 'Uttar Pradesh, West Bengal, Bihar, Gujarat, Punjab, Madhya Pradesh',
    topVarieties: 'Kufri Jyoti, Kufri Pukhraj, Kufri Chipsona, Kufri Bahar',
    shelfLife: 'Up to 5–6 months in cold storage',
    exportReach: 'Nepal, Sri Lanka, UAE, Bangladesh & Maldives',
    states: ['uttar-pradesh', 'west-bengal', 'bihar', 'gujarat', 'punjab', 'madhya-pradesh'],
    varieties: [
      { name: 'Kufri Jyoti', description: 'A widely grown white-skinned table potato with oval tubers and good keeping quality.' },
      { name: 'Kufri Pukhraj', description: 'An early, high-yielding variety with smooth, light-yellow skin and cream flesh.' },
      { name: 'Kufri Chipsona', description: 'Bred for processing, with low sugar and a high dry-matter content for chips and fries.' },
      { name: 'Kufri Bahar', description: 'A white, oval, uniform tuber suited to the plains and popular for table use.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bolt', text: 'Complex carbohydrates for lasting energy' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium supports healthy blood pressure' },
      { icon: 'fa-solid fa-shield-heart', text: 'Vitamin C and vitamin B6' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre in the skin supports digestion' },
      { icon: 'fa-solid fa-weight-scale', text: 'Filling and naturally fat-free' },
      { icon: 'fa-solid fa-seedling', text: 'Versatile staple for every cuisine' }
    ],
    steps: [
      harvestStep('Tubers are dug once the skin has set, sorted by size and checked for cuts, greening and rot.', 'Skin-set tubers handle and store better.'),
      washStep('Tubers are brushed or washed, dried and cured so small wounds heal before storage.', 'Curing reduces rot in storage.'),
      coolStep('Potatoes are stored in cold stores or ventilated rooms in the dark to prevent greening and sprouting.', 'Table potatoes are typically held at 4–10°C, 90–95% RH.'),
      packStep('Graded by size and packed in mesh or jute bags, or cartons for retail buyers.', 'Packed by weight to the buyer’s specification.')
    ],
    features: veg('Potato', 'Uttar Pradesh, West Bengal, Bihar and Gujarat')
  },
  {
    slug: 'onion', name: 'Onion', theme: { bg: '#e0bcd8', card: '#f1dcec', plate: '#e8c9e1' }, tagline: TAGLINE,
    origin: 'Maharashtra (Nashik), Karnataka, Madhya Pradesh, Gujarat, Rajasthan, Bihar',
    topVarieties: 'Nashik Red (N-53), Agrifound Dark Red, Bhima Super, Bangalore Rose',
    shelfLife: '4–6 months in ventilated storage',
    exportReach: 'Bangladesh, Malaysia, UAE, Sri Lanka & Nepal',
    states: ['maharashtra', 'karnataka', 'madhya-pradesh', 'gujarat', 'rajasthan', 'bihar'],
    varieties: [
      { name: 'Nashik Red (N-53)', description: 'A classic red onion from Maharashtra with a pungent flavour, firm bulbs and good storage life.' },
      { name: 'Agrifound Dark Red', description: 'A dark red, globe-shaped onion with strong pungency and good keeping quality.' },
      { name: 'Bhima Super', description: 'A high-yielding red variety from ICAR-DOGR that suits the kharif and late-kharif seasons.' },
      { name: 'Bangalore Rose', description: 'A small, pinkish-red onion from Karnataka, popular in export markets of South-East Asia.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'Quercetin and sulphur compounds' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Supports heart health as part of a balanced diet' },
      { icon: 'fa-solid fa-bowl-food', text: 'Prebiotic fibre feeds good gut bacteria' },
      { icon: 'fa-solid fa-seedling', text: 'Vitamin C, B6 and folate' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low calorie way to add flavour' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Antioxidants support overall wellbeing' }
    ],
    steps: [
      harvestStep('Onions are lifted when the tops fall over and begin to dry, then sorted by size and colour.', 'Mature, firm bulbs only.'),
      washStep('Bulbs are field-cured for several days, then topped and cleaned so the neck is tight and dry.', 'Proper curing prevents rot and sprouting.'),
      coolStep('Cured onions are stored in well-ventilated sheds or controlled rooms away from moisture.', 'Ventilated storage; cold storage at 0–2°C suits long holding.'),
      packStep('Graded by diameter and packed in mesh bags for export.', 'Typical packs: 10–25 kg mesh bags.')
    ],
    features: veg('Onion', 'Nashik, Karnataka, Madhya Pradesh and Gujarat')
  },
  {
    slug: 'brinjal', name: 'Brinjal', theme: { bg: '#cbb2e0', card: '#e6dbf1', plate: '#d6c3e8' }, tagline: TAGLINE,
    origin: 'West Bengal, Odisha, Gujarat, Bihar, Madhya Pradesh',
    topVarieties: 'Pusa Purple Long, Pusa Kranti, Arka Nidhi, Pusa Hybrid',
    shelfLife: '1–2 weeks at 10–12°C',
    exportReach: 'UAE, Qatar, Oman, UK & Southeast Asia',
    states: ['west-bengal', 'odisha', 'gujarat', 'bihar', 'madhya-pradesh'],
    varieties: [
      { name: 'Pusa Purple Long', description: 'A long, slender, glossy purple brinjal with tender flesh and few seeds.' },
      { name: 'Pusa Kranti', description: 'A medium-long, deep purple variety with a firm texture and good market appeal.' },
      { name: 'Arka Nidhi', description: 'An IIHR variety with long, dark purple fruit that is high-yielding and tolerant to bacterial wilt.' },
      { name: 'Pusa Hybrid', description: 'A vigorous hybrid with uniform, glossy fruit and strong yield.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Anthocyanins in the skin support heart health' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low calorie and filling' },
      { icon: 'fa-solid fa-seedling', text: 'Source of potassium and manganese' },
      { icon: 'fa-solid fa-shield-heart', text: 'Antioxidant-rich purple skin' },
      { icon: 'fa-solid fa-droplet', text: 'High water content' }
    ],
    steps: [
      harvestStep('Brinjals are cut with the calyx and a short stalk while the skin is glossy and the seeds are still soft.', 'Over-mature fruit turns dull and bitter.'),
      washStep('Fruit is wiped clean and checked for pest marks, scars and soft spots.', 'Glossy, blemish-free fruit is selected.'),
      coolStep('Brinjal is chilling-sensitive, so it is cooled gently and held above 10°C.', 'Typical storage: 10–12°C, 90–95% RH.'),
      packStep('Graded by length and colour and packed in ventilated cartons with paper cushioning.', 'Careful packing prevents skin scratches.')
    ],
    features: veg('Brinjal', 'West Bengal, Odisha, Gujarat and Bihar')
  },
  {
    slug: 'cauliflower', name: 'Cauliflower', theme: { bg: '#e4ecd2', card: '#f2f6e8', plate: '#eaf1da' }, tagline: TAGLINE,
    origin: 'West Bengal, Bihar, Odisha, Uttar Pradesh, Haryana, Assam',
    topVarieties: 'Pusa Snowball, Pusa Shubhra, Pusa Meghna, Pusa Deepali',
    shelfLife: '2–4 weeks at 0°C; about 1 week at ambient temperature',
    exportReach: 'UAE, Oman, Nepal & Bangladesh',
    states: ['west-bengal', 'bihar', 'odisha', 'uttar-pradesh', 'haryana', 'assam'],
    varieties: [
      { name: 'Pusa Snowball', description: 'A late-season variety with compact, pure-white, dense curds that hold well after harvest.' },
      { name: 'Pusa Shubhra', description: 'An early-mid variety with firm, creamy-white curds, bred at IARI.' },
      { name: 'Pusa Meghna', description: 'A mid-season selection suited to the plains, with uniform, white, medium-sized curds.' },
      { name: 'Pusa Deepali', description: 'An early variety with compact white curds for markets that want cauliflower early.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'High in vitamin C and vitamin K' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports digestion' },
      { icon: 'fa-solid fa-weight-scale', text: 'Very low in calories' },
      { icon: 'fa-solid fa-seedling', text: 'Contains choline and folate' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Glucosinolates and antioxidants' },
      { icon: 'fa-solid fa-droplet', text: 'Mostly water; light and filling' }
    ],
    steps: [
      harvestStep('Heads are cut when the curds are compact and white, leaving a few wrapper leaves for protection.', 'Over-mature heads loosen and lose colour.'),
      washStep('Excess leaves are trimmed and the heads are cleaned and checked for browning or insect damage.', 'Only tight, white curds go forward.'),
      coolStep('Heads are pre-cooled quickly because cauliflower loses quality fast at ambient temperature.', 'Typical storage: 0–2°C, 95% RH.'),
      packStep('Graded by diameter and packed in cartons or crates, often wrapped to protect the curd.', 'Packed with leaf cover or film for protection.')
    ],
    features: veg('Cauliflower', 'West Bengal, Bihar, Odisha and Uttar Pradesh')
  },
  {
    slug: 'red-cabbage', name: 'Red Cabbage', theme: { bg: '#d9a6d0', card: '#efd3ea', plate: '#e2b9db' }, tagline: TAGLINE,
    origin: 'Tamil Nadu (Nilgiris), Karnataka, Himachal Pradesh, Maharashtra',
    topVarieties: 'Red Acre, Ruby Ball, Mammoth Red Rock',
    shelfLife: '4–6 weeks at 0–1°C',
    exportReach: 'Middle East & Southeast Asia',
    states: ['tamil-nadu', 'karnataka', 'himachal-pradesh', 'maharashtra'],
    varieties: [
      { name: 'Red Acre', description: 'A reliable, compact variety with firm, round, deep-purple heads and a long storage life.' },
      { name: 'Ruby Ball', description: 'A round, medium-sized head with rich red-purple leaves and a mild, slightly peppery taste.' },
      { name: 'Mammoth Red Rock', description: 'A large, dense, dark red head that stores very well and suits both fresh use and pickling.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'Anthocyanins give its colour and antioxidant power' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports digestion' },
      { icon: 'fa-solid fa-seedling', text: 'High in vitamins C and K' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Supports heart health as part of a balanced diet' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low calorie, crunchy salad vegetable' },
      { icon: 'fa-solid fa-droplet', text: 'Crisp, juicy leaves' }
    ],
    steps: [
      harvestStep('Heads are cut when they are firm and full-sized, with a few wrapper leaves left on.', 'Dense, tight heads store the longest.'),
      washStep('Loose outer leaves are removed and heads are cleaned and inspected.', 'Heads with splits or insect damage are rejected.'),
      coolStep('Red cabbage is pre-cooled and stored cold; it holds its quality for several weeks.', 'Typical storage: 0–1°C, 95% RH.'),
      packStep('Graded by weight and packed in cartons or mesh bags with ventilation.', 'Packed to the buyer’s weight range.')
    ],
    features: veg('Red Cabbage', 'the Nilgiris, Karnataka and Himachal Pradesh')
  },
  {
    slug: 'green-chilli', name: 'Green Chilli', theme: { bg: '#b7e08a', card: '#dff2c6', plate: '#c6e8a0' }, tagline: TAGLINE,
    origin: 'Andhra Pradesh, Telangana, Karnataka, Maharashtra, Gujarat, West Bengal',
    topVarieties: 'Pusa Jwala, Pusa Sadabahar, Arka Suphal, Kashi Anmol',
    shelfLife: '1–2 weeks at 7–10°C',
    exportReach: 'UAE, UK, Bangladesh, Sri Lanka & Nepal',
    states: ['andhra-pradesh', 'telangana', 'karnataka', 'maharashtra', 'gujarat', 'west-bengal'],
    varieties: [
      { name: 'Pusa Jwala', description: 'A widely grown, pungent, slender green chilli with high yield and a strong heat.' },
      { name: 'Pusa Sadabahar', description: 'A perennial-type, prolific variety bearing clusters of thin, pungent green fruit.' },
      { name: 'Arka Suphal', description: 'An IIHR variety with long, medium-pungent green fruit and good yield.' },
      { name: 'Kashi Anmol', description: 'A high-yielding variety with straight, dark-green fruit and good heat.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'Very high in vitamin C' },
      { icon: 'fa-solid fa-bolt', text: 'Capsaicin gives heat and may boost metabolism' },
      { icon: 'fa-solid fa-eye', text: 'Vitamin A and carotenoids' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Antioxidants support heart health' },
      { icon: 'fa-solid fa-weight-scale', text: 'Almost no calories; a little goes a long way' },
      { icon: 'fa-solid fa-seedling', text: 'Adds flavour with little salt' }
    ],
    steps: [
      harvestStep('Chillies are hand-picked at the green stage when firm, glossy and full-sized, then sorted by length and colour.', 'Stalks are left on to keep the fruit fresh.'),
      washStep('Fruit is sorted again to remove soft, shrivelled or discoloured pods and cleaned.', 'Only bright, firm pods are packed.'),
      coolStep('Pre-cooling and cool storage keep chillies firm; they are chilling-sensitive below about 7°C.', 'Typical storage: 7–10°C, 90–95% RH.'),
      packStep('Graded by length and packed in ventilated cartons or perforated pouches.', 'Typical packs: 1–5 kg cartons.')
    ],
    features: veg('Green Chilli', 'Andhra Pradesh, Telangana, Karnataka and Maharashtra')
  },
  {
    slug: 'cucumber', name: 'Cucumber', theme: { bg: '#bfe8b0', card: '#e0f4d8', plate: '#cdeec0' }, tagline: TAGLINE,
    origin: 'West Bengal, Andhra Pradesh, Karnataka, Gujarat, Maharashtra',
    topVarieties: 'Poinsette, Pusa Uday, Japanese Long Green, Kalyanpur Green',
    shelfLife: '10–14 days at 10–13°C',
    exportReach: 'UAE, Oman, Qatar & Nepal',
    states: ['west-bengal', 'andhra-pradesh', 'karnataka', 'gujarat', 'maharashtra'],
    varieties: [
      { name: 'Poinsette', description: 'A dark-green slicing cucumber with crisp, firm flesh and good disease tolerance.' },
      { name: 'Pusa Uday', description: 'An IARI variety with medium, tender, light-green fruit suited to the plains.' },
      { name: 'Japanese Long Green', description: 'A long, slender, tender cucumber with thin skin and mild flavour.' },
      { name: 'Kalyanpur Green', description: 'A popular Indian variety with medium-length, uniformly green fruit.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-droplet', text: 'About 95% water for hydration' },
      { icon: 'fa-solid fa-weight-scale', text: 'Very low calorie' },
      { icon: 'fa-solid fa-seedling', text: 'Vitamin K and potassium' },
      { icon: 'fa-solid fa-bowl-food', text: 'Water and fibre aid digestion' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Cooling and refreshing' },
      { icon: 'fa-solid fa-shield-heart', text: 'Cucurbitacins and antioxidants' }
    ],
    steps: [
      harvestStep('Cucumbers are picked while still tender and dark green, before the seeds harden.', 'Over-mature fruit turns yellow and bitter.'),
      washStep('Fruit is washed gently, dried and graded by length and straightness.', 'Straight, even, unmarked fruit is preferred.'),
      coolStep('Pre-cooling slows moisture loss; cucumbers are chilling-sensitive below about 10°C.', 'Typical storage: 10–13°C, 90–95% RH.'),
      packStep('Packed in ventilated cartons, sometimes shrink-wrapped to hold moisture.', 'Film wrapping extends shelf life.')
    ],
    features: veg('Cucumber', 'West Bengal, Andhra Pradesh, Karnataka and Gujarat')
  },
  {
    slug: 'drumstick', name: 'Drumstick', theme: { bg: '#c8e6a0', card: '#e4f3cc', plate: '#d3ecb1' }, tagline: TAGLINE,
    origin: 'Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, Maharashtra, Odisha',
    topVarieties: 'PKM-1, PKM-2, Bhagya (KDM-01), Konkan Ruchira',
    shelfLife: '5–7 days at 10–12°C',
    exportReach: 'UAE, UK, USA, Singapore & Malaysia',
    states: ['tamil-nadu', 'andhra-pradesh', 'karnataka', 'kerala', 'maharashtra', 'odisha'],
    varieties: [
      { name: 'PKM-1', description: 'A TNAU variety bearing long, fleshy, tender pods with good yield; widely grown in Tamil Nadu.' },
      { name: 'PKM-2', description: 'A high-yielding selection with long, fleshy pods and excellent cooking quality.' },
      { name: 'Bhagya (KDM-01)', description: 'A Karnataka variety known for long, tender, flavourful pods and steady yield.' },
      { name: 'Konkan Ruchira', description: 'A Konkan Agricultural University variety with long, fleshy, tasty pods.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-shield-heart', text: 'Rich in vitamin C' },
      { icon: 'fa-solid fa-seedling', text: 'Source of iron, calcium and magnesium' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports digestion' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium and antioxidants' },
      { icon: 'fa-solid fa-eye', text: 'Provides vitamin A' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low calorie; a staple of South Indian cooking' }
    ],
    steps: [
      harvestStep('Pods are picked while tender, before they turn fibrous, and sorted by length and thickness.', 'Young, snap-tender pods fetch the best price.'),
      washStep('Pods are cleaned, trimmed and checked for pest marks and drying.', 'Straight, fresh-green pods are selected.'),
      coolStep('Quick cooling reduces moisture loss; drumstick wilts fast at ambient temperature.', 'Typical storage: 10–12°C, 90% RH.'),
      packStep('Graded by length and packed in ventilated cartons, sometimes in bundles.', 'Packed to hold length and avoid breakage.')
    ],
    features: veg('Drumstick', 'Tamil Nadu, Andhra Pradesh, Karnataka and Kerala')
  },
  {
    slug: 'green-peas', name: 'Green Peas', theme: { bg: '#a8dc8a', card: '#d5f0c6', plate: '#b9e49f' }, tagline: TAGLINE,
    origin: 'Uttar Pradesh, Madhya Pradesh, Punjab, Himachal Pradesh, Haryana, Bihar',
    topVarieties: 'Arkel, Bonneville, Pusa Pragati, Azad P-1',
    shelfLife: '5–7 days at 0°C fresh; frozen peas last through the year',
    exportReach: 'UAE, Nepal, Bangladesh & the wider Middle East',
    states: ['uttar-pradesh', 'madhya-pradesh', 'punjab', 'himachal-pradesh', 'haryana', 'bihar'],
    varieties: [
      { name: 'Arkel', description: 'A European-type garden pea with large, sweet, dark-green seeds, popular for fresh and frozen use.' },
      { name: 'Bonneville', description: 'A high-yielding, sweet, tender variety with well-filled pods.' },
      { name: 'Pusa Pragati', description: 'An early, dwarf IARI variety with well-filled, dark-green pods.' },
      { name: 'Azad P-1', description: 'An early Uttar Pradesh variety with well-filled pods and sweet, tender seeds.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-seedling', text: 'Plant protein and fibre in every serving' },
      { icon: 'fa-solid fa-bowl-food', text: 'Fibre supports digestion' },
      { icon: 'fa-solid fa-shield-heart', text: 'Vitamins C and K' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Magnesium and potassium' },
      { icon: 'fa-solid fa-bolt', text: 'Sustained energy from complex carbohydrates' },
      { icon: 'fa-solid fa-eye', text: 'Lutein and zeaxanthin for the eyes' }
    ],
    steps: [
      harvestStep('Pods are picked when the peas are full but still sweet and tender; sugars turn to starch quickly after harvest.', 'Speed from field to cooling protects sweetness.'),
      washStep('Pods are cleaned and sorted; for frozen lines the peas are shelled, blanched and chilled.', 'Frozen peas are processed within hours of picking.'),
      coolStep('Fresh pods are cooled at once and held cold; frozen peas are stored at deep-freeze temperature.', 'Fresh: 0°C, 95% RH. Frozen: −18°C.'),
      packStep('Graded by pod size and packed in ventilated bags or crates; frozen peas are packed in retail and bulk bags.', 'Packed to the buyer’s weight and format.')
    ],
    features: veg('Green Peas', 'Uttar Pradesh, Madhya Pradesh, Punjab and Himachal Pradesh')
  }
];
