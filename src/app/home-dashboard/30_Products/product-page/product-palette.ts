// Builds the page's colour scheme from the product's own tint, so a carrot page
// is orange, a red cabbage page purple, a cucumber page green, and so on.
// The result is applied as CSS custom properties (see --fp-* in the stylesheet).

export interface ProductTheme { bg: string; card: string; plate: string; }

/** Hue and saturation (0-100) of a #rrggbb colour. */
function hueSat(hex: string): { h: number; s: number } {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  const l = (max + min) / 2;
  if (d === 0) { return { h: 0, s: 0 }; }
  const s = d / (1 - Math.abs(2 * l - 1));
  let h: number;
  if (max === r) { h = ((g - b) / d) % 6; }
  else if (max === g) { h = (b - r) / d + 2; }
  else { h = (r - g) / d + 4; }
  return { h: Math.round((h * 60 + 360) % 360), s: Math.round(s * 100) };
}

export function productPalette(theme: ProductTheme): Record<string, string> {
  const { h, s } = hueSat(theme.bg);
  // Keep each shade as colourful as the product tint allows, but never garish.
  const c = (maxSat: number, light: number) => `hsl(${h} ${Math.min(s, maxSat)}% ${light}%)`;
  return {
    '--fp-bg': theme.bg,
    '--fp-card': theme.card,
    '--fp-plate': theme.plate,
    '--fp-hero-a': c(85, 84),     // hero gradient, light end
    '--fp-hero-b': c(80, 70),     // hero gradient, deeper end
    '--fp-ink': c(70, 15),        // headings, buttons
    '--fp-ink-soft': c(55, 26),   // body and sub-headings
    '--fp-accent': c(55, 33),     // icon discs, map, links
    '--fp-accent-2': c(55, 44),   // benefit icons
    '--fp-map': c(70, 50),        // India map fill (brighter than the icon discs)
    '--fp-on-accent': c(100, 92), // icon colour on an accent disc
    '--fp-pale': c(70, 96),       // lightest section background
    '--fp-pale-2': c(60, 91)      // enquiry card background
  };
}
