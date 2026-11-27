import { ProductDraft, generalFeatures } from './product-pages.types';

// Spices and coconut products. Photos are generic, not variety-specific.

const TAGLINE = 'Directly sourced from Indian farmers, globally trusted.';

const dry = (name: string, regions: string) =>
  generalFeatures(name, regions, {
    title: 'Dry, Clean Storage',
    description: 'Moisture-controlled drying, clean storage and sealed packing protect aroma, colour and quality.'
  });

export const SPICE_COCONUT_PAGES: ProductDraft[] = [
  {
    slug: 'white-pepper', name: 'White Pepper', theme: { bg: '#e8e0cf', card: '#f4efe3', plate: '#eee7d6' }, tagline: TAGLINE,
    origin: 'Kerala, Karnataka, Tamil Nadu (Wayanad, Idukki, Coorg and the Western Ghats)',
    topVarieties: 'Karimunda, Panniyur-1, Sreekara, Subhakara',
    shelfLife: '2–3 years in dry, sealed storage',
    exportReach: 'USA, Germany, Netherlands, UAE & the Middle East',
    states: ['kerala', 'karnataka', 'tamil-nadu'],
    varieties: [
      { name: 'Karimunda', description: 'The traditional Kerala pepper vine. Its small, aromatic berries give a pungent, well-rounded white pepper.' },
      { name: 'Panniyur-1', description: 'The first hybrid pepper from India, with long spikes, bold berries and high yield.' },
      { name: 'Sreekara', description: 'A selection from Kerala with bold berries, good pungency and steady yield.' },
      { name: 'Subhakara', description: 'A selection with high piperine and oleoresin content and good spike length.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bolt', text: 'Piperine gives its warm, sharp heat' },
      { icon: 'fa-solid fa-bowl-food', text: 'Traditionally used to aid digestion' },
      { icon: 'fa-solid fa-shield-heart', text: 'Contains plant antioxidants' },
      { icon: 'fa-solid fa-seedling', text: 'Mild, earthy flavour for light-coloured dishes' },
      { icon: 'fa-solid fa-weight-scale', text: 'Almost no calories; a little goes a long way' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'A staple of cuisines around the world' }
    ],
    steps: [
      { title: 'Harvesting Ripe Berries', icon: 'fa-solid fa-seedling', description: 'Fully ripe red pepper berries are hand-picked from the vine; white pepper starts from ripe, not green, berries.', note: 'Ripeness decides colour and aroma.' },
      { title: 'Soaking & Decorticating', icon: 'fa-solid fa-fan', description: 'The berries are soaked in clean flowing water until the outer skin loosens, then rubbed off to reveal the pale core.', note: 'Clean water prevents off-odours.' },
      { title: 'Washing & Drying', icon: 'fa-solid fa-temperature-low', description: 'The peeled berries are washed and sun-dried or mechanically dried to a low moisture content.', note: 'Dried to about 12% moisture or below.' },
      { title: 'Cleaning, Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Dried pepper is cleaned, graded by size and colour, and packed in food-grade bags.', note: 'Sealed packing keeps the aroma.' }
    ],
    features: dry('White Pepper', 'Kerala, Karnataka and Tamil Nadu')
  },
  {
    slug: 'tender-coconut', name: 'Tender Coconut', theme: { bg: '#bfe3a4', card: '#dff1cf', plate: '#cde9b6' }, tagline: TAGLINE,
    origin: 'Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Goa',
    topVarieties: 'Chowghat Orange Dwarf, Chowghat Green Dwarf, Malayan Yellow Dwarf, Ganga Bondam',
    shelfLife: '7–10 days fresh at cool temperature; longer with trimming and cold chain',
    exportReach: 'UAE, the Middle East & Europe',
    states: ['kerala', 'tamil-nadu', 'karnataka', 'andhra-pradesh'],
    varieties: [
      { name: 'Chowghat Orange Dwarf', description: 'A Kerala dwarf variety with orange-yellow nuts and sweet, plentiful water, prized as a tender coconut.' },
      { name: 'Chowghat Green Dwarf', description: 'A dwarf variety with green nuts, early bearing and sweet water.' },
      { name: 'Malayan Yellow Dwarf', description: 'A dwarf palm with bright yellow nuts and sweet coconut water.' },
      { name: 'Ganga Bondam', description: 'A dwarf variety bearing medium-sized nuts with good water content and a sweet taste.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-droplet', text: 'Natural electrolytes, including potassium' },
      { icon: 'fa-solid fa-bolt', text: 'Light natural sugars for quick energy' },
      { icon: 'fa-solid fa-weight-scale', text: 'Low in calories compared with soft drinks' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Potassium supports healthy blood pressure' },
      { icon: 'fa-solid fa-bowl-food', text: 'Soft, tender malai is easy to eat' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Refreshing and cooling' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Nuts are cut at 6–8 months when the water is sweetest, and sorted by size and colour.', note: 'Younger nuts have sweeter water.' },
      { title: 'Trimming & Cleaning', icon: 'fa-solid fa-fan', description: 'Husks are trimmed to the familiar shape and the nuts are washed and treated against browning.', note: 'Trimmed nuts pack and ship more easily.' },
      { title: 'Cooling & Storage', icon: 'fa-solid fa-temperature-low', description: 'Nuts are cooled and held cold to protect the taste of the water.', note: 'Typical storage: 5–10°C.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by size and packed in cartons or crates, often with protective wrap.', note: 'Packed by count to the buyer’s requirement.' }
    ],
    features: generalFeatures('Tender Coconut', 'Kerala, Tamil Nadu, Karnataka and Andhra Pradesh')
  },
  {
    slug: 'husked-coconut', name: 'Husked Coconut', theme: { bg: '#e3c9a0', card: '#f2e3cc', plate: '#ead4b2' }, tagline: TAGLINE,
    origin: 'Kerala, Tamil Nadu, Karnataka, Andhra Pradesh',
    topVarieties: 'West Coast Tall, East Coast Tall, Tiptur Tall, Chandra Sankara',
    shelfLife: '2–3 months in a cool, ventilated store',
    exportReach: 'UAE, the USA, Europe & Southeast Asia',
    states: ['kerala', 'tamil-nadu', 'karnataka', 'andhra-pradesh'],
    varieties: [
      { name: 'West Coast Tall', description: 'The most widely grown tall variety in Kerala and the west coast, producing medium nuts with good oil content.' },
      { name: 'East Coast Tall', description: 'A tall variety from the east coast that does well in drier conditions, with sturdy nuts.' },
      { name: 'Tiptur Tall', description: 'A Karnataka type known for good-quality nuts and thick, firm kernel suited to copra.' },
      { name: 'Chandra Sankara', description: 'A hybrid of a dwarf and a tall palm, with high yield and a good kernel.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bolt', text: 'Kernel is a dense source of energy' },
      { icon: 'fa-solid fa-bowl-food', text: 'Dietary fibre supports digestion' },
      { icon: 'fa-solid fa-seedling', text: 'Source of manganese and copper' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Medium-chain fats used in cooking' },
      { icon: 'fa-solid fa-droplet', text: 'Water inside the mature nut is refreshing' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'A staple of Indian kitchens and sweets' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Mature nuts of about 11–12 months are harvested and sorted by size and weight.', note: 'Mature nuts keep best and give the thickest kernel.' },
      { title: 'De-husking', icon: 'fa-solid fa-fan', description: 'Outer husks are removed fully or partly (semi-husked), leaving the shell intact.', note: 'Husks are a useful by-product (coir).' },
      { title: 'Cleaning & Storage', icon: 'fa-solid fa-temperature-low', description: 'Nuts are cleaned and stored dry in ventilated rooms away from moisture.', note: 'Cool, dry storage prevents mould.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Graded by size and weight and packed in mesh bags or cartons.', note: 'Packed by count or weight.' }
    ],
    features: dry('Coconut', 'Kerala, Tamil Nadu, Karnataka and Andhra Pradesh')
  },
  {
    slug: 'copra', name: 'Dry Coconut (Copra)', theme: { bg: '#eadcbc', card: '#f5ecd8', plate: '#efe3c8' }, tagline: TAGLINE,
    origin: 'Karnataka (Tiptur), Tamil Nadu, Kerala, Andhra Pradesh',
    topVarieties: 'Ball Copra, Cup Copra, Milling Copra',
    shelfLife: '6–12 months when kept dry',
    exportReach: 'UAE, the Middle East & South Asia',
    states: ['karnataka', 'tamil-nadu', 'kerala', 'andhra-pradesh'],
    varieties: [
      { name: 'Ball Copra', description: 'Whole coconut kernel dried slowly in the shell into a ball. Edible, with a sweet, nutty taste, used in cooking and festive foods.' },
      { name: 'Cup Copra', description: 'Halved kernels sun-dried in cup shape, used for edible purposes and for oil.' },
      { name: 'Milling Copra', description: 'Dried kernel broken into pieces and used to extract coconut oil.' }
    ],
    benefits: [
      { icon: 'fa-solid fa-bolt', text: 'Concentrated source of energy' },
      { icon: 'fa-solid fa-bowl-food', text: 'Rich in dietary fibre' },
      { icon: 'fa-solid fa-heart-pulse', text: 'Medium-chain fats used in cooking' },
      { icon: 'fa-solid fa-seedling', text: 'Source of manganese and copper' },
      { icon: 'fa-solid fa-face-smile-beam', text: 'Sweet, nutty taste for cooking and sweets' },
      { icon: 'fa-solid fa-weight-scale', text: 'Long shelf life without refrigeration' }
    ],
    steps: [
      { title: 'Harvesting & Sorting', icon: 'fa-solid fa-seedling', description: 'Fully mature nuts are harvested and sorted, then left to mature so the kernel loosens from the shell.', note: 'Only well-matured nuts give good copra.' },
      { title: 'De-husking & Cutting', icon: 'fa-solid fa-fan', description: 'Nuts are de-husked and split; for ball copra the whole nut is dried slowly until the kernel detaches.', note: 'Clean cutting avoids contamination.' },
      { title: 'Drying', icon: 'fa-solid fa-temperature-low', description: 'Kernels are sun-dried or dried in controlled dryers to a low moisture level to prevent mould and aflatoxin.', note: 'Dried to about 6% moisture for milling copra.' },
      { title: 'Grading & Packing', icon: 'fa-solid fa-box-open', description: 'Copra is graded by size, colour and moisture and packed in clean jute or woven bags.', note: 'Kept dry throughout transit.' }
    ],
    features: dry('Copra', 'Tiptur, Tamil Nadu, Kerala and Andhra Pradesh')
  }
];
