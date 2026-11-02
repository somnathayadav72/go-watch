const watch = (record) => ({
  ...record,
  collectionName: record.collectionId.toUpperCase(),
  image: `/images/watches/${record.id}.webp`,
  frontImage: `/images/watches/${record.id}-front.webp`,
  fallbackImage: `/generated/watches/${record.id}.svg`,
  width: 1800,
  height: 1800,
  alt: `${record.collectionId.toUpperCase()} ${record.name}, an original fictional ${record.category.toLowerCase()} watch with ${record.dial.toLowerCase()} and ${record.strap.toLowerCase()}.`,
});

export const watches = [
  watch({
    id: "aether-meridian-38", collectionId: "aether", name: "Meridian 38", reference: "AE-M38-CH", category: "Modern Dress", caseSize: "38mm",
    caseMaterial: "Polished/brushed stainless-steel concept case", dial: "Warm ivory sunray dial with champagne baton markers and small seconds at 6", strap: "Dark oxblood leather strap",
    movement: "Slim automatic-style three-hand concept", waterResistance: "5 ATM concept", cardColor: "#F1E9DC", textColor: "#171514", accentColor: "#C7A26A",
    description: "A restrained 38mm dress watch built around proportion rather than ornament. Meridian pairs a warm ivory dial with polished champagne details and a small-seconds register that gives the face a measured, architectural rhythm.",
  }),
  watch({
    id: "aether-halo-36", collectionId: "aether", name: "Halo 36", reference: "AE-H36-SL", category: "Modern Dress", caseSize: "36mm",
    caseMaterial: "Polished steel concept case", dial: "Silver-white circular-brushed dial with floating minute track", strap: "Fine seven-link steel bracelet",
    movement: "Compact automatic-style concept", waterResistance: "5 ATM concept", cardColor: "#DED9D0", textColor: "#151515", accentColor: "#8A8D8F",
    description: "Halo reduces the traditional dress watch to a circle of light. A narrow case, bright dial, and fine-link bracelet create a watch that feels almost weightless while keeping enough geometry to remain distinctive.",
  }),
  watch({
    id: "aether-solstice-40", collectionId: "aether", name: "Solstice 40", reference: "AE-S40-GR", category: "Modern Dress", caseSize: "40mm",
    caseMaterial: "Brushed warm-gray steel concept case", dial: "Deep stone-gray dial with radial date aperture", strap: "Taupe leather strap",
    movement: "Automatic-style date concept", waterResistance: "5 ATM concept", cardColor: "#A8A19A", textColor: "#171717", accentColor: "#F1E9DC",
    description: "Solstice introduces a darker, more architectural side to AETHER. The radial date detail sits inside a monochrome stone dial while a taupe strap keeps the watch calm enough for everyday wear.",
  }),
  watch({
    id: "aether-nocturne-39", collectionId: "aether", name: "Nocturne 39", reference: "AE-N39-OX", category: "Modern Dress", caseSize: "39mm",
    caseMaterial: "Polished dark-steel concept case", dial: "Oxblood lacquer-style dial with minimal champagne markers", strap: "Black leather strap",
    movement: "Automatic-style two-hand and running-seconds concept", waterResistance: "5 ATM concept", cardColor: "#6B2C32", textColor: "#FFF8EE", accentColor: "#D4B27A",
    description: "Nocturne uses a deep oxblood dial as its entire visual statement. Fine metallic markers appear only when light reaches them, giving the watch a formal character that changes between daylight and evening.",
  }),
  watch({
    id: "vanta-null-41", collectionId: "vanta", name: "Null 41", reference: "VN-N41-BK", category: "Urban / Monochrome", caseSize: "41mm",
    caseMaterial: "Black-coated steel concept case", dial: "Matte-black sector dial with recessed electric-blue minute marks", strap: "Integrated black steel bracelet",
    movement: "Automatic-style central-seconds concept", waterResistance: "10 ATM concept", cardColor: "#0E0F12", textColor: "#F4F5F7", accentColor: "#4B66FF",
    description: "Null is designed as a near-monochrome object until the minute track catches the light. The integrated case and bracelet read as one continuous form, broken only by a narrow electric-blue timing ring.",
  }),
  watch({
    id: "vanta-shade-40", collectionId: "vanta", name: "Shade 40", reference: "VN-S40-GF", category: "Urban / Monochrome", caseSize: "40mm",
    caseMaterial: "Graphite PVD-style concept case", dial: "Smoked sapphire-style open center with solid outer hour ring", strap: "Graphite technical rubber strap",
    movement: "Open-work automatic-style concept", waterResistance: "10 ATM concept", cardColor: "#292C31", textColor: "#FAFAFA", accentColor: "#B4E64B",
    description: "Shade reveals just enough of the mechanism to create depth without becoming ornamental. A smoke-dark center, solid outer ring, and one acid-lime hand give the watch a precise night-instrument attitude.",
  }),
  watch({
    id: "vanta-monolith-42", collectionId: "vanta", name: "Monolith 42", reference: "VN-M42-SV", category: "Urban / Monochrome", caseSize: "42mm",
    caseMaterial: "Bead-blasted steel concept case", dial: "Vertical-brushed charcoal dial with oversized 12 and 6 markers", strap: "Wide brushed three-link bracelet",
    movement: "Automatic-style date concept", waterResistance: "10 ATM concept", cardColor: "#1C1E22", textColor: "#F3F4F5", accentColor: "#C8CDD5",
    description: "Monolith is the most structural watch in the VANTA range. Its tall markers and wide bracelet create a single visual column, while bead-blasted surfaces keep reflections quiet and controlled.",
  }),
  watch({
    id: "vanta-eclipse-39", collectionId: "vanta", name: "Eclipse 39", reference: "VN-E39-BL", category: "Urban / Monochrome", caseSize: "39mm",
    caseMaterial: "Satin black concept case", dial: "Black dial with hidden luminous ring and blue-black hands", strap: "Black woven technical strap",
    movement: "Automatic-style three-hand concept", waterResistance: "10 ATM concept", cardColor: "#111A2C", textColor: "#F7F8FF", accentColor: "#6D7FFF",
    description: "Eclipse is intentionally quiet in daylight and dramatically different after dark. Its hidden luminous ring is barely visible until the environment dims, when the dial becomes a clean circle of light.",
  }),
  watch({
    id: "tidal-depthline-42", collectionId: "tidal", name: "Depthline 42", reference: "TD-D42-NV", category: "Dive", caseSize: "42mm",
    caseMaterial: "Brushed steel dive-style concept case", dial: "Deep navy dial with oversized luminous blocks", strap: "Steel bracelet with broad center links",
    movement: "Automatic-style dive concept", waterResistance: "30 ATM concept", cardColor: "#061C2E", textColor: "#F4FAFF", accentColor: "#C8E7DF",
    description: "Depthline is built around immediate underwater legibility. Large markers, a broad minute hand, and a deeply knurled bezel produce a confident dive-watch silhouette without unnecessary decoration.",
  }),
  watch({
    id: "tidal-breaker-40", collectionId: "tidal", name: "Breaker 40", reference: "TD-B40-TL", category: "Dive", caseSize: "40mm",
    caseMaterial: "Brushed steel concept case", dial: "Deep teal dial with circular wave texture", strap: "Sea-glass rubber strap",
    movement: "Automatic-style date concept", waterResistance: "20 ATM concept", cardColor: "#0B6B70", textColor: "#F3FFFC", accentColor: "#C8E7DF",
    description: "Breaker softens the technical dive-watch formula with a textured teal dial and color-matched strap. The compact case keeps the watch wearable while the bezel and oversized hands preserve its functional character.",
  }),
  watch({
    id: "tidal-abyss-43", collectionId: "tidal", name: "Abyss 43", reference: "TD-A43-BK", category: "Dive", caseSize: "43mm",
    caseMaterial: "Dark titanium-style concept case", dial: "Near-black blue dial with coral accent ring", strap: "Black technical rubber strap",
    movement: "Automatic-style power-reserve concept", waterResistance: "50 ATM concept", cardColor: "#031017", textColor: "#F0FAFF", accentColor: "#D95C4E",
    description: "Abyss is the most extreme visual expression of the TIDAL family. A dark oversized case surrounds a nearly black dial, while a thin coral ring provides a single high-visibility reference around the perimeter.",
  }),
  watch({
    id: "tidal-reef-39", collectionId: "tidal", name: "Reef 39", reference: "TD-R39-SG", category: "Dive", caseSize: "39mm",
    caseMaterial: "Polished/brushed steel concept case", dial: "Sea-glass dial with navy hands and compact dive markers", strap: "Five-link steel bracelet",
    movement: "Automatic-style three-hand concept", waterResistance: "20 ATM concept", cardColor: "#C8E7DF", textColor: "#0B2A30", accentColor: "#0B6B70",
    description: "Reef brings the dive collection into a smaller, brighter format. Its pale sea-glass dial changes character under different light while navy hands and a compact bezel keep the design crisp.",
  }),
  watch({
    id: "vector-apex-41", collectionId: "vector", name: "Apex 41", reference: "VC-A41-RD", category: "Performance / Chronograph", caseSize: "41mm",
    caseMaterial: "Brushed steel chronograph-style concept case", dial: "Warm silver dial, black registers, race-red central seconds", strap: "Perforated black leather strap",
    movement: "Mechanical chronograph-style concept", waterResistance: "10 ATM concept", cardColor: "#E23C34", textColor: "#FFF8F4", accentColor: "#171717",
    description: "Apex uses a classic three-register layout but strips away nostalgic ornament. A bright red timing hand, crisp black subdials, and perforated leather create a modern performance watch with visual speed.",
  }),
  watch({
    id: "vector-chicane-42", collectionId: "vector", name: "Chicane 42", reference: "VC-C42-CB", category: "Performance / Chronograph", caseSize: "42mm",
    caseMaterial: "Dark carbon-texture concept case", dial: "Black layered dial with signal-orange timing marks", strap: "Textured black rubber strap",
    movement: "Automatic chronograph-style concept", waterResistance: "10 ATM concept", cardColor: "#171717", textColor: "#F7F5F1", accentColor: "#F47B20",
    description: "Chicane is built as a layered timing instrument. Recessed subdials, a dark case, and signal-orange markers create depth while keeping every performance element visually separate.",
  }),
  watch({
    id: "vector-gridline-40", collectionId: "vector", name: "Gridline 40", reference: "VC-G40-SD", category: "Performance / Chronograph", caseSize: "40mm",
    caseMaterial: "Brushed titanium-style concept case", dial: "Sand dial with black grid print and compact twin registers", strap: "Sand textile strap",
    movement: "Two-register chronograph-style concept", waterResistance: "10 ATM concept", cardColor: "#D6C1A0", textColor: "#211E19", accentColor: "#E23C34",
    description: "Gridline combines the accuracy of a timing dial with the softness of warm sand tones. Its compact twin registers keep the face balanced and make the performance collection feel unexpectedly relaxed.",
  }),
  watch({
    id: "vector-redline-43", collectionId: "vector", name: "Redline 43", reference: "VC-R43-OR", category: "Performance / Chronograph", caseSize: "43mm",
    caseMaterial: "Brushed dark-steel concept case", dial: "Graphite dial with orange timing arc and oversized chronograph seconds", strap: "Dark steel bracelet",
    movement: "Automatic chronograph-style concept", waterResistance: "10 ATM concept", cardColor: "#F47B20", textColor: "#1E150E", accentColor: "#171717",
    description: "Redline turns the outer minute track into a bold orange timing arc. The oversized central seconds hand and dark integrated bracelet give the model a deliberately technical, almost instrument-panel presence.",
  }),
  watch({
    id: "altus-wayfinder-40", collectionId: "altus", name: "Wayfinder 40", reference: "AL-W40-OL", category: "Field / Aviation", caseSize: "40mm",
    caseMaterial: "Matte steel field-style concept case", dial: "Olive dial with cream Arabic numerals", strap: "Sand canvas strap",
    movement: "Automatic-style field concept", waterResistance: "10 ATM concept", cardColor: "#48563A", textColor: "#F4F0E3", accentColor: "#C1A574",
    description: "Wayfinder is an intentionally straightforward field watch: strong numerals, a matte case, and a canvas strap designed around readability. Warm cream printing keeps the military influence soft rather than aggressive.",
  }),
  watch({
    id: "altus-skytrace-41", collectionId: "altus", name: "Skytrace 41", reference: "AL-S41-SK", category: "Field / Aviation", caseSize: "41mm",
    caseMaterial: "Brushed steel pilot-style concept case", dial: "Muted sky-blue dial with high-contrast minute scale", strap: "Brown leather strap with stitched edge",
    movement: "Automatic-style central-seconds concept", waterResistance: "10 ATM concept", cardColor: "#7599B3", textColor: "#10222D", accentColor: "#E7DFC9",
    description: "Skytrace takes the clear geometry of an aviation instrument and gives it a softer blue palette. A broad minute track and oversized crown remain functional, while warm leather makes the watch feel less technical on the wrist.",
  }),
  watch({
    id: "altus-altimeter-42", collectionId: "altus", name: "Altimeter 42", reference: "AL-A42-CH", category: "Field / Aviation", caseSize: "42mm",
    caseMaterial: "Charcoal titanium-style concept case", dial: "Charcoal concentric dial with elevation-inspired outer scale", strap: "Olive technical textile strap",
    movement: "Automatic-style GMT-inspired concept", waterResistance: "10 ATM concept", cardColor: "#272A28", textColor: "#F2F1E9", accentColor: "#C1A574",
    description: "Altimeter is the collection’s most instrument-like model. An elevation-inspired outer scale and dark concentric dial create visual depth, with a warm tan reference hand cutting through the monochrome case.",
  }),
  watch({
    id: "altus-trailmark-39", collectionId: "altus", name: "Trailmark 39", reference: "AL-T39-PR", category: "Field / Aviation", caseSize: "39mm",
    caseMaterial: "Brushed steel concept case", dial: "Parchment dial with olive numerals and railroad minute track", strap: "Olive canvas strap",
    movement: "Automatic-style date concept", waterResistance: "10 ATM concept", cardColor: "#E7DFC9", textColor: "#273124", accentColor: "#48563A",
    description: "Trailmark combines compact proportions with an almost paper-like dial. Olive typography and a canvas strap give it the feel of a field notebook translated into a clean everyday watch.",
  }),
  watch({
    id: "luma-prism-36", collectionId: "luma", name: "Prism 36", reference: "LU-P36-LI", category: "Color / Contemporary", caseSize: "36mm",
    caseMaterial: "Polished steel concept case", dial: "Soft lilac dial with polished dot indices", strap: "Lilac leather strap",
    movement: "Compact automatic-style concept", waterResistance: "5 ATM concept", cardColor: "#B0A1FF", textColor: "#211A3C", accentColor: "#F7F1E7",
    description: "Prism makes color the main complication. A soft lilac dial and matching strap are interrupted only by polished markers, creating a watch that feels graphic from a distance and refined up close.",
  }),
  watch({
    id: "luma-mintline-38", collectionId: "luma", name: "Mintline 38", reference: "LU-M38-MT", category: "Color / Contemporary", caseSize: "38mm",
    caseMaterial: "Polished steel concept case", dial: "Mint dial with recessed cream minute ring", strap: "Cream rubber strap",
    movement: "Automatic-style three-hand concept", waterResistance: "5 ATM concept", cardColor: "#98E0C3", textColor: "#173128", accentColor: "#F7F1E7",
    description: "Mintline balances a fresh dial with a neutral cream strap and a recessed minute ring. The result is colorful without becoming playful enough to lose its premium character.",
  }),
  watch({
    id: "luma-sunpop-39", collectionId: "luma", name: "Sunpop 39", reference: "LU-S39-YL", category: "Color / Contemporary", caseSize: "39mm",
    caseMaterial: "Brushed steel concept case", dial: "Lemon dial with charcoal baton markers", strap: "Charcoal rubber strap",
    movement: "Automatic-style central-seconds concept", waterResistance: "10 ATM concept", cardColor: "#F2DC5D", textColor: "#27230F", accentColor: "#1A1820",
    description: "Sunpop uses a bright lemon dial as a precise color field rather than a novelty treatment. Dark markers, a charcoal strap, and a brushed case keep the composition controlled.",
  }),
  watch({
    id: "luma-roselight-37", collectionId: "luma", name: "Roselight 37", reference: "LU-R37-RS", category: "Color / Contemporary", caseSize: "37mm",
    caseMaterial: "Polished steel concept case", dial: "Dusty rose dial with cream hands and minimal numerals", strap: "Dusty rose leather strap",
    movement: "Compact automatic-style concept", waterResistance: "5 ATM concept", cardColor: "#E6909D", textColor: "#3B1F26", accentColor: "#F7F1E7",
    description: "Roselight is the softest expression in the catalogue. Its rose dial, tonal strap, and warm cream hands form a low-contrast composition that changes subtly as polished edges catch the light.",
  }),
];

export const watchesByCollection = Object.fromEntries(
  ["aether", "vanta", "tidal", "vector", "altus", "luma"].map((id) => [id, watches.filter((item) => item.collectionId === id)]),
);

export const featuredWatches = Object.fromEntries(
  Object.entries(watchesByCollection).map(([id, collectionWatches]) => [id, collectionWatches[0]]),
);
