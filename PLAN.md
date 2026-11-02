# PLAN.md — ORVYN Watch Group — Immersive Multi-Collection Watch Marketing Website

> **Execution instruction**
>
> Open this project in Claude Code, Codex, or another capable coding agent and say:
>
> **"Read PLAN.md and execute it fully. Build the complete website described here as a clean, premium, frontend-only Next.js App Router project. Do not ask me for logos, watch photography, collection images, textures, favicons, social images, or campaign artwork—the project must create all original visual assets itself and store them locally. Do not copy any real watch brand, watch model, dial, case, bracelet, logo, trade dress, or campaign. Follow the brand architecture, 24-watch catalogue, layouts, responsive behavior, motion choreography, image-generation requirements, accessibility requirements, and clean-project rules exactly. When an image-generation capability is unavailable, create polished SVG/CSS fallbacks so no section is left blank. The website must feel like a high-end horology campaign, not an ecommerce template."**

---

# 1. Project Vision

Build a large, premium marketing website for a fictional multi-collection watch company.

This website should be more ambitious than the previous shoe, mobile-wholesale, spice, and food concepts.

The site must feel designed around **time itself**.

The core interaction principle is:

# **SCROLL IS THE MECHANISM**

Scrolling should not merely fade sections into view. Scrolling should wind a crown, rotate watch hands, reveal a case from an oversized dial, separate a watch into an exploded mechanical view, reassemble it, move watches around an orbital path, advance a 24-hour showroom, sweep chronograph hands, darken a dial into luminous night mode, simulate descent for a dive watch, move through altitude for a field watch, shift dial colors through a prism, and move straps, bezels, pushers, shadows, and reflections in restrained ways.

Do **not** repeat the same sticky image/copy swap pattern for every animated section.

---

# 2. Brand Architecture

## Parent Brand

Use this configurable fictional placeholder brand:

# **ORVYN WATCH GROUP**

Short wordmark:

```text
ORVYN
```

Descriptor:

```text
WATCH GROUP
```

Brand line:

```text
TIME, MADE PHYSICAL.
```

Secondary line:

```text
Six collections. Twenty-four expressions of time.
```

This is a fictional placeholder identity for the project. Do not imply trademark clearance.

Create:

```js
// src/config/site.js

export const site = {
  name: "ORVYN",
  fullName: "ORVYN Watch Group",
  tagline: "Time, Made Physical.",
  descriptor: "Six collections. Twenty-four expressions of time.",
  email: "studio@orvyn.example",
  phone: "+41 00 000 00 00",
  location: "Geneva, Switzerland",
  founded: "2008",
};
```

Do not hardcode `ORVYN` throughout components.

---

# 3. Six Sub-Brands / Collections

Each collection must have its own visual personality, card colors, case family, strap language, scroll behavior, four watch models, collection hero, and animation language.

## 3.1 ORVYN AETHER

Category: `Modern Dress`

Tagline: `Quiet precision.`

Personality: architectural, slim, refined, formal, minimal, warm metallic details.

Colors:

```text
Ivory       #F1E9DC
Champagne   #C7A26A
Oxblood     #6B2C32
Stone       #A8A19A
Ink         #161515
```

Watch language: 36–40mm cases, thin bezels, baton indices, small seconds or clean three-hand layouts, leather straps or fine-link bracelets.

Animation language: slow aperture reveals, fine concentric rings, precise hand movements, light across polished edges.

## 3.2 ORVYN VANTA

Category: `Urban / Monochrome`

Tagline: `After hours.`

Colors:

```text
Void        #0E0F12
Graphite    #292C31
Electric    #4B66FF
Acid        #B4E64B
Silver      #C8CDD5
```

Watch language: 39–42mm cases, black-coated steel, integrated bracelet options, high-contrast lume, cutout dials, strong geometry.

Animation language: lights shutting down, lume appearing, sweep reflections, hidden indices emerging in darkness.

## 3.3 ORVYN TIDAL

Category: `Dive`

Tagline: `Built below the surface.`

Colors:

```text
Abyss       #061C2E
Deep Teal   #0B6B70
Sea Glass   #C8E7DF
Coral       #D95C4E
Steel       #A4B2BA
```

Watch language: 39–43mm, dive-style bezels, large luminous markers, steel or rubber straps, high-legibility hands.

Animation language: depth descent, pressure marks, bezel rotation, light disappearing with depth, lume increasing.

## 3.4 ORVYN VECTOR

Category: `Performance / Chronograph`

Tagline: `Measured in motion.`

Colors:

```text
Race Red    #E23C34
Carbon      #171717
Warm Sand   #D6C1A0
Signal      #F47B20
Titanium    #989B9E
```

Watch language: 40–43mm, chronograph layouts, pushers, timing rings, perforated leather or technical straps.

Animation language: chronograph sweep, pusher activation, timing ring rotation, motion trails.

## 3.5 ORVYN ALTUS

Category: `Field / Aviation`

Tagline: `Read the horizon.`

Colors:

```text
Field Olive #48563A
Canvas      #C1A574
Sky         #7599B3
Parchment   #E7DFC9
Charcoal    #272A28
```

Watch language: 39–42mm, highly legible numerals, field straps, pilot-style crowns, matte surfaces.

Animation language: altitude scale, horizon shift, compass ring, vertical elevation movement.

## 3.6 ORVYN LUMA

Category: `Color / Contemporary`

Tagline: `Time in full color.`

Colors:

```text
Lilac       #B0A1FF
Mint        #98E0C3
Lemon       #F2DC5D
Rose        #E6909D
Cream       #F7F1E7
Ink         #1A1820
```

Watch language: 36–40mm, color dials, minimal indices, smooth cases, color-matched straps.

Animation language: prism wipes, dial-color transitions, translucent rings, chromatic shadows.

---

# 4. The 24-Watch Catalogue

Create exactly 24 fictional watch models. Every model must have a unique model name, collection, reference code, case size, case material, dial, strap/bracelet, movement concept, water-resistance concept, description, card background, foreground color, accent, transparent product render, front dial render, and accessible alt text.

## AETHER — 4 Watches

### 01. AETHER Meridian 38

- Reference: `AE-M38-CH`
- Case: 38mm polished/brushed stainless-steel concept case
- Dial: warm ivory sunray dial, champagne baton markers, small seconds at 6
- Strap: dark oxblood leather
- Movement: slim automatic-style three-hand concept
- Water resistance: 5 ATM concept
- Card: `#F1E9DC`
- Text: `#171514`
- Accent: `#C7A26A`
- Description: A restrained 38mm dress watch built around proportion rather than ornament. Meridian pairs a warm ivory dial with polished champagne details and a small-seconds register that gives the face a measured, architectural rhythm.

### 02. AETHER Halo 36

- Reference: `AE-H36-SL`
- Case: 36mm polished steel concept case
- Dial: silver-white circular brushed dial with floating minute track
- Strap: fine seven-link steel bracelet
- Movement: compact automatic-style concept
- Water resistance: 5 ATM concept
- Card: `#DED9D0`
- Text: `#151515`
- Accent: `#8A8D8F`
- Description: Halo reduces the traditional dress watch to a circle of light. A narrow case, bright dial, and fine-link bracelet create a watch that feels almost weightless while keeping enough geometry to remain distinctive.

### 03. AETHER Solstice 40

- Reference: `AE-S40-GR`
- Case: 40mm brushed warm-gray steel concept case
- Dial: deep stone-gray dial with radial date aperture
- Strap: taupe leather
- Movement: automatic-style date concept
- Water resistance: 5 ATM concept
- Card: `#A8A19A`
- Text: `#171717`
- Accent: `#F1E9DC`
- Description: Solstice introduces a darker, more architectural side to AETHER. The radial date detail sits inside a monochrome stone dial while a taupe strap keeps the watch calm enough for everyday wear.

### 04. AETHER Nocturne 39

- Reference: `AE-N39-OX`
- Case: 39mm polished dark-steel concept case
- Dial: oxblood lacquer-style dial with minimal champagne markers
- Strap: black leather
- Movement: automatic-style two-hand and running-seconds concept
- Water resistance: 5 ATM concept
- Card: `#6B2C32`
- Text: `#FFF8EE`
- Accent: `#D4B27A`
- Description: Nocturne uses a deep oxblood dial as its entire visual statement. Fine metallic markers appear only when light reaches them, giving the watch a formal character that changes between daylight and evening.

## VANTA — 4 Watches

### 05. VANTA Null 41

- Reference: `VN-N41-BK`
- Case: 41mm black-coated steel concept case
- Dial: matte-black sector dial with recessed electric-blue minute marks
- Strap: integrated black steel bracelet
- Movement: automatic-style central seconds concept
- Water resistance: 10 ATM concept
- Card: `#0E0F12`
- Text: `#F4F5F7`
- Accent: `#4B66FF`
- Description: Null is designed as a near-monochrome object until the minute track catches the light. The integrated case and bracelet read as one continuous form, broken only by a narrow electric-blue timing ring.

### 06. VANTA Shade 40

- Reference: `VN-S40-GF`
- Case: 40mm graphite PVD-style concept case
- Dial: smoked sapphire-style open center with solid outer hour ring
- Strap: graphite technical rubber
- Movement: open-work automatic-style concept
- Water resistance: 10 ATM concept
- Card: `#292C31`
- Text: `#FAFAFA`
- Accent: `#B4E64B`
- Description: Shade reveals just enough of the mechanism to create depth without becoming ornamental. A smoke-dark center, solid outer ring, and one acid-lime hand give the watch a precise night-instrument attitude.

### 07. VANTA Monolith 42

- Reference: `VN-M42-SV`
- Case: 42mm bead-blasted steel concept case
- Dial: vertical brushed charcoal dial with oversized 12 and 6 markers
- Strap: wide brushed three-link bracelet
- Movement: automatic-style date concept
- Water resistance: 10 ATM concept
- Card: `#1C1E22`
- Text: `#F3F4F5`
- Accent: `#C8CDD5`
- Description: Monolith is the most structural watch in the VANTA range. Its tall markers and wide bracelet create a single visual column, while bead-blasted surfaces keep reflections quiet and controlled.

### 08. VANTA Eclipse 39

- Reference: `VN-E39-BL`
- Case: 39mm satin black concept case
- Dial: black dial with hidden luminous ring and blue-black hands
- Strap: black woven technical strap
- Movement: automatic-style three-hand concept
- Water resistance: 10 ATM concept
- Card: `#111A2C`
- Text: `#F7F8FF`
- Accent: `#6D7FFF`
- Description: Eclipse is intentionally quiet in daylight and dramatically different after dark. Its hidden luminous ring is barely visible until the environment dims, when the dial becomes a clean circle of light.

## TIDAL — 4 Watches

### 09. TIDAL Depthline 42

- Reference: `TD-D42-NV`
- Case: 42mm brushed steel dive-style concept case
- Dial: deep navy dial with oversized luminous blocks
- Strap: steel bracelet with broad center links
- Movement: automatic-style dive concept
- Water resistance: 30 ATM concept
- Card: `#061C2E`
- Text: `#F4FAFF`
- Accent: `#C8E7DF`
- Description: Depthline is built around immediate underwater legibility. Large markers, a broad minute hand, and a deeply knurled bezel produce a confident dive-watch silhouette without unnecessary decoration.

### 10. TIDAL Breaker 40

- Reference: `TD-B40-TL`
- Case: 40mm brushed steel concept case
- Dial: deep teal dial with circular wave texture
- Strap: sea-glass rubber strap
- Movement: automatic-style date concept
- Water resistance: 20 ATM concept
- Card: `#0B6B70`
- Text: `#F3FFFC`
- Accent: `#C8E7DF`
- Description: Breaker softens the technical dive-watch formula with a textured teal dial and color-matched strap. The compact case keeps the watch wearable while the bezel and oversized hands preserve its functional character.

### 11. TIDAL Abyss 43

- Reference: `TD-A43-BK`
- Case: 43mm dark titanium-style concept case
- Dial: near-black blue dial with coral accent ring
- Strap: black technical rubber
- Movement: automatic-style power-reserve concept
- Water resistance: 50 ATM concept
- Card: `#031017`
- Text: `#F0FAFF`
- Accent: `#D95C4E`
- Description: Abyss is the most extreme visual expression of the TIDAL family. A dark oversized case surrounds a nearly black dial, while a thin coral ring provides a single high-visibility reference around the perimeter.

### 12. TIDAL Reef 39

- Reference: `TD-R39-SG`
- Case: 39mm polished/brushed steel concept case
- Dial: sea-glass dial with navy hands and compact dive markers
- Strap: five-link steel bracelet
- Movement: automatic-style three-hand concept
- Water resistance: 20 ATM concept
- Card: `#C8E7DF`
- Text: `#0B2A30`
- Accent: `#0B6B70`
- Description: Reef brings the dive collection into a smaller, brighter format. Its pale sea-glass dial changes character under different light while navy hands and a compact bezel keep the design crisp.

## VECTOR — 4 Watches

### 13. VECTOR Apex 41

- Reference: `VC-A41-RD`
- Case: 41mm brushed steel chronograph-style concept case
- Dial: warm silver dial, black registers, race-red central seconds
- Strap: perforated black leather
- Movement: mechanical chronograph-style concept
- Water resistance: 10 ATM concept
- Card: `#E23C34`
- Text: `#FFF8F4`
- Accent: `#171717`
- Description: Apex uses a classic three-register layout but strips away nostalgic ornament. A bright red timing hand, crisp black subdials, and perforated leather create a modern performance watch with visual speed.

### 14. VECTOR Chicane 42

- Reference: `VC-C42-CB`
- Case: 42mm dark carbon-texture concept case
- Dial: black layered dial with signal-orange timing marks
- Strap: textured black rubber
- Movement: automatic chronograph-style concept
- Water resistance: 10 ATM concept
- Card: `#171717`
- Text: `#F7F5F1`
- Accent: `#F47B20`
- Description: Chicane is built as a layered timing instrument. Recessed subdials, a dark case, and signal-orange markers create depth while keeping every performance element visually separate.

### 15. VECTOR Gridline 40

- Reference: `VC-G40-SD`
- Case: 40mm brushed titanium-style concept case
- Dial: sand dial with black grid print and compact twin registers
- Strap: sand textile strap
- Movement: two-register chronograph-style concept
- Water resistance: 10 ATM concept
- Card: `#D6C1A0`
- Text: `#211E19`
- Accent: `#E23C34`
- Description: Gridline combines the accuracy of a timing dial with the softness of warm sand tones. Its compact twin registers keep the face balanced and make the performance collection feel unexpectedly relaxed.

### 16. VECTOR Redline 43

- Reference: `VC-R43-OR`
- Case: 43mm brushed dark-steel concept case
- Dial: graphite dial with orange timing arc and oversized chronograph seconds
- Strap: dark steel bracelet
- Movement: automatic chronograph-style concept
- Water resistance: 10 ATM concept
- Card: `#F47B20`
- Text: `#1E150E`
- Accent: `#171717`
- Description: Redline turns the outer minute track into a bold orange timing arc. The oversized central seconds hand and dark integrated bracelet give the model a deliberately technical, almost instrument-panel presence.

## ALTUS — 4 Watches

### 17. ALTUS Wayfinder 40

- Reference: `AL-W40-OL`
- Case: 40mm matte steel field-style concept case
- Dial: olive dial with cream Arabic numerals
- Strap: sand canvas
- Movement: automatic-style field concept
- Water resistance: 10 ATM concept
- Card: `#48563A`
- Text: `#F4F0E3`
- Accent: `#C1A574`
- Description: Wayfinder is an intentionally straightforward field watch: strong numerals, a matte case, and a canvas strap designed around readability. Warm cream printing keeps the military influence soft rather than aggressive.

### 18. ALTUS Skytrace 41

- Reference: `AL-S41-SK`
- Case: 41mm brushed steel pilot-style concept case
- Dial: muted sky-blue dial with high-contrast minute scale
- Strap: brown leather with stitched edge
- Movement: automatic-style central-seconds concept
- Water resistance: 10 ATM concept
- Card: `#7599B3`
- Text: `#10222D`
- Accent: `#E7DFC9`
- Description: Skytrace takes the clear geometry of an aviation instrument and gives it a softer blue palette. A broad minute track and oversized crown remain functional, while warm leather makes the watch feel less technical on the wrist.

### 19. ALTUS Altimeter 42

- Reference: `AL-A42-CH`
- Case: 42mm charcoal titanium-style concept case
- Dial: charcoal concentric dial with elevation-inspired outer scale
- Strap: olive technical textile
- Movement: automatic-style GMT-inspired concept
- Water resistance: 10 ATM concept
- Card: `#272A28`
- Text: `#F2F1E9`
- Accent: `#C1A574`
- Description: Altimeter is the collection’s most instrument-like model. An elevation-inspired outer scale and dark concentric dial create visual depth, with a warm tan reference hand cutting through the monochrome case.

### 20. ALTUS Trailmark 39

- Reference: `AL-T39-PR`
- Case: 39mm brushed steel concept case
- Dial: parchment dial with olive numerals and railroad minute track
- Strap: olive canvas
- Movement: automatic-style date concept
- Water resistance: 10 ATM concept
- Card: `#E7DFC9`
- Text: `#273124`
- Accent: `#48563A`
- Description: Trailmark combines compact proportions with an almost paper-like dial. Olive typography and a canvas strap give it the feel of a field notebook translated into a clean everyday watch.

## LUMA — 4 Watches

### 21. LUMA Prism 36

- Reference: `LU-P36-LI`
- Case: 36mm polished steel concept case
- Dial: soft lilac dial with polished dot indices
- Strap: lilac leather
- Movement: compact automatic-style concept
- Water resistance: 5 ATM concept
- Card: `#B0A1FF`
- Text: `#211A3C`
- Accent: `#F7F1E7`
- Description: Prism makes color the main complication. A soft lilac dial and matching strap are interrupted only by polished markers, creating a watch that feels graphic from a distance and refined up close.

### 22. LUMA Mintline 38

- Reference: `LU-M38-MT`
- Case: 38mm polished steel concept case
- Dial: mint dial with recessed cream minute ring
- Strap: cream rubber
- Movement: automatic-style three-hand concept
- Water resistance: 5 ATM concept
- Card: `#98E0C3`
- Text: `#173128`
- Accent: `#F7F1E7`
- Description: Mintline balances a fresh dial with a neutral cream strap and a recessed minute ring. The result is colorful without becoming playful enough to lose its premium character.

### 23. LUMA Sunpop 39

- Reference: `LU-S39-YL`
- Case: 39mm brushed steel concept case
- Dial: lemon dial with charcoal baton markers
- Strap: charcoal rubber
- Movement: automatic-style central-seconds concept
- Water resistance: 10 ATM concept
- Card: `#F2DC5D`
- Text: `#27230F`
- Accent: `#1A1820`
- Description: Sunpop uses a bright lemon dial as a precise color field rather than a novelty treatment. Dark markers, a charcoal strap, and a brushed case keep the composition controlled.

### 24. LUMA Roselight 37

- Reference: `LU-R37-RS`
- Case: 37mm polished steel concept case
- Dial: dusty rose dial with cream hands and minimal numerals
- Strap: dusty rose leather
- Movement: compact automatic-style concept
- Water resistance: 5 ATM concept
- Card: `#E6909D`
- Text: `#3B1F26`
- Accent: `#F7F1E7`
- Description: Roselight is the softest expression in the catalogue. Its rose dial, tonal strap, and warm cream hands form a low-contrast composition that changes subtly as polished edges catch the light.

---

# 5. Product Data Structure

Create `src/data/watches.js`, `src/data/collections.js`, `src/data/assets.js`, and `src/data/navigation.js`.

Example watch record:

```js
{
  id: "aether-meridian-38",
  collectionId: "aether",
  collectionName: "AETHER",
  name: "Meridian 38",
  reference: "AE-M38-CH",
  category: "Modern Dress",
  caseSize: "38mm",
  caseMaterial: "Polished/brushed stainless-steel concept case",
  dial: "Warm ivory sunray dial",
  strap: "Dark oxblood leather",
  movement: "Slim automatic-style three-hand movement",
  waterResistance: "5 ATM",
  description: "...",
  cardColor: "#F1E9DC",
  textColor: "#171514",
  accentColor: "#C7A26A",
  image: "/images/watches/aether-meridian-38.webp",
  frontImage: "/images/watches/aether-meridian-38-front.webp",
  fallbackImage: "/generated/watches/aether-meridian-38.svg",
  width: 1800,
  height: 1800,
}
```

Never hardcode catalogue content in JSX.

---

# 6. Overall Visual Direction — “Temporal Observatory”

The website should feel like the visitor has entered a collection of rooms devoted to different ways of measuring time.

Global concept:

# **TEMPORAL OBSERVATORY**

Combine horology, architecture, celestial movement, material studies, instrument graphics, editorial fashion, and precision mechanics.

Do not make it feel like a generic black-and-gold luxury watch template, Rolex imitation, Apple Watch page, cyberpunk site, crypto page, car-site imitation, jewelry store, or ecommerce catalogue.

---

# 7. Global Theme

```css
:root {
  --obsidian: #090A0C;
  --carbon: #121419;
  --graphite: #1D2026;
  --paper: #F2EEE7;
  --paper-bright: #FAF8F4;
  --paper-dark: #DDD7CD;
  --ink: #111216;
  --ink-soft: #33363D;
  --muted: #767B84;
  --muted-dark: #A6ABB4;
  --line-light: rgba(17, 18, 22, 0.14);
  --line-dark: rgba(255, 255, 255, 0.14);
  --signal: #FF5A36;
  --electric: #4B66FF;
  --lume: #C9FF78;
  --radius-small: 12px;
  --radius-card: 28px;
  --radius-large: 44px;
  --radius-pill: 999px;
  --content-width: 1540px;
  --page-gutter: clamp(20px, 4vw, 68px);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Use black and warm paper as the parent environment. Let sub-brand colors dominate only in their collection worlds. Use large watch imagery, generous negative space, fine engineering labels, hairline borders, and typography as structure. Do not put every section inside rounded cards. Do not use gradients as the default solution.

---

# 8. Typography

Use `next/font/google`.

Preferred display: **Instrument Serif**. If unavailable through the chosen Next.js font setup, use **DM Serif Display**.

Interface/body: **Manrope**.

Technical/numeric: **Space Grotesk**.

Do not use more than three type families.

Hero:

```css
font-size: clamp(4.2rem, 11vw, 11rem);
line-height: 0.82;
letter-spacing: -0.065em;
```

Technical label:

```css
font-size: 0.67rem;
font-weight: 700;
letter-spacing: 0.14em;
text-transform: uppercase;
```

---

# 9. Clean Next.js Technical Foundation

Use the latest stable Next.js release available when the project is created.

Scaffold:

```bash
npx create-next-app@latest .
```

Choose:

- JavaScript
- ESLint
- No Tailwind
- `src/` directory
- App Router
- Turbopack
- `@/*` alias

Install only:

```bash
npm install motion lucide-react
```

Use App Router, Server Components by default, small Client Components for interaction, CSS Modules, `src/app/globals.css`, `motion/react`, `next/image`, `next/font/google`, Metadata API, local images, and local static catalogue data.

Do not add GSAP, Lenis, Three.js, React Three Fiber, Swiper, a UI kit, or extra animation libraries merely for visual effects.

---

# 10. Prohibited Infrastructure

Do not create or retain Vite, Vinext, Wrangler, Cloudflare Workers, Workerd, Miniflare, Cloudflare adapters, Prisma, Drizzle, Sequelize, Mongoose, Supabase, Firebase, Appwrite, Auth.js, NextAuth, Clerk, API routes, `src/app/api/`, Server Actions, databases, shopping cart, checkout, payments, TypeScript, `.ts`, `.tsx`, `tsconfig.json`, Tailwind, or custom bundlers.

This is a frontend-only marketing website.

---

# 11. Standard Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "validate:assets": "node scripts/validate-assets.mjs"
  }
}
```

---

# 12. Autonomous Visual Asset Generation

The coding AI must create all visual assets. Do not ask the user for watch images. Do not hotlink remote assets. Do not copy real watch products, logos, trade dress, signature case shapes, bracelet forms, dial layouts, or campaigns.

Every watch must be fictional and original.

Generate transparent main renders for all 24 watches under `public/images/watches/`, plus matching `*-front.webp` renders.

Main render requirements:

- Transparent background
- At least 1800 × 1800
- 3/4 front angle
- Crown visible
- Naturally curved strap/bracelet
- Full product in frame
- No crop
- No random text
- No watermark
- Original dial/case
- Clean studio light

Front render:

- Centered front view
- Hands around 10:08
- No perspective distortion
- Dial fully visible

Master prompt:

```text
Original fictional premium mechanical wristwatch designed for the ORVYN portfolio concept. [MODEL-SPECIFIC CASE, DIAL, STRAP, AND COLOR DESCRIPTION]. Three-quarter front product view, crown visible, naturally curved strap or bracelet, physically plausible watch construction, realistic brushed and polished metal, premium studio lighting, transparent background, complete watch visible with generous breathing room, original dial layout not copied from any real manufacturer, no real brand marks, no watermark, no random text, no duplicated hands, no malformed crown, no impossible bracelet links, no extra pushers, high-end horology campaign rendering.
```

---

# 13. Collection Hero Images

Generate:

```text
public/images/collections/
├── aether-collection.webp
├── vanta-collection.webp
├── tidal-collection.webp
├── vector-collection.webp
├── altus-collection.webp
└── luma-collection.webp
```

AETHER: warm architectural still life, travertine, champagne light.

VANTA: dark abstract blocks, electric-blue reflection, watches emerging from shadow.

TIDAL: underwater-inspired blue environment with caustic light, no stock ocean scene.

VECTOR: timing marks and motion-line environment, no cars or racing logos.

ALTUS: elevation/map-inspired surface, olive/sand/sky.

LUMA: translucent acrylic planes and chromatic shadows.

---

# 14. Exploded Watch Asset Set

Use AETHER Meridian 38.

Create:

```text
public/images/exploded/
├── meridian-crystal.webp
├── meridian-hands.webp
├── meridian-dial.webp
├── meridian-chapter-ring.webp
├── meridian-movement.webp
├── meridian-case.webp
├── meridian-caseback.webp
├── meridian-crown.webp
├── meridian-strap-left.webp
└── meridian-strap-right.webp
```

All pieces must match perspective, lighting, scale, and construction.

If consistent raster layers cannot be generated, create a polished original SVG exploded mechanism instead. Never leave the section broken.

---

# 15. Brand Assets

Create:

```text
public/brand/
├── orvyn-mark.svg
├── orvyn-wordmark.svg
├── orvyn-lockup-dark.svg
├── orvyn-lockup-light.svg
├── orvyn-watch-group-lockup.svg
└── orvyn-social-avatar.svg
```

Logo concept: watch-hand intersection + orbital ring + subtle O + crown-stem cut.

Avoid generic watch outline, shield, wings, lion, Swiss cross, crown crest, or imitation luxury marks.

Wordmark: wide uppercase `ORVYN`, custom V/Y relationship, index-inspired cuts, one-color compatible.

Create favicon, Apple icon, and Open Graph image. OG text:

```text
TIME,
MADE PHYSICAL.

SIX COLLECTIONS · 24 WATCHES
```

---

# 16. Campaign / Detail Assets

Generate original local assets:

```text
public/images/details/
├── crown-macro.webp
├── polished-case-edge.webp
├── brushed-case-edge.webp
├── aether-dial-macro.webp
├── vanta-lume-macro.webp
├── tidal-bezel-macro.webp
├── vector-pusher-macro.webp
├── altus-crown-macro.webp
├── luma-dial-macro.webp
├── bracelet-link-macro.webp
├── leather-stitch-macro.webp
└── movement-macro.webp
```

```text
public/images/campaign/
├── workshop-hands.webp
├── wrist-aether.webp
├── wrist-vanta.webp
├── wrist-tidal.webp
├── wrist-vector.webp
├── wrist-altus.webp
├── wrist-luma.webp
├── watchmakers-bench.webp
└── architectural-time-room.webp
```

Avoid recognizable faces, malformed fingers, real logos, and real watch designs.

Generate technical SVGs:

```text
public/textures/
├── dial-ticks.svg
├── orbital-grid.svg
├── timing-grid.svg
├── lume-indices.svg
├── pressure-lines.svg
├── tachymeter-ring.svg
├── elevation-lines.svg
├── prism-rings.svg
├── machining-lines.svg
└── noise.svg
```

---

# 17. Image Quality Validation

Inspect every generated watch for correct hand count, centered hands, correct crown/pusher logic, bracelet continuity, lug geometry, strap connection, no random letters, no real brand marks, no warped indices, no impossible perspective, no crop, no watermark, and clean transparency. Regenerate failures.

# 18. Page Structure

Build the landing page in this order:

1. Global Time Rail
2. Navbar
3. Zero Hour Hero
4. Brand Statement
5. Collection Gateway
6. Crown Winder
7. Exploded Calibre
8. 24-Hour Showroom
9. AETHER Room
10. VANTA Lights Out Room
11. TIDAL Descent Room
12. VECTOR Start / Stop / Reset Room
13. ALTUS Elevation Room
14. LUMA Prism Room
15. Full 24-Watch Chromatic Catalogue
16. Material of Time
17. Caseback Flip
18. Strap Lab
19. Campaign Editorial
20. Big Reveal
21. Brand Enquiry
22. Footer

This should be a deliberately larger landing page than the previous projects.

---

# 19. Global Time Rail

Create `<GlobalTimeRail />`.

Desktop:

- Thin fixed rail on right
- 24 hour markers
- Current section marker moves down rail
- Context labels switch between `00:00 ZERO HOUR`, `WIND`, `CALIBRE`, `24H`, `AETHER`, `VANTA`, `TIDAL`, `VECTOR`, `ALTUS`, `LUMA`

Mobile:

- Thin bottom progress line
- No tiny labels

Reduced motion:

- Static section marker only

---

# 20. Navbar

Desktop:

- Fixed
- ORVYN left
- Collections center
- `All 24 Watches`
- `Craft`
- `Contact`
- Right CTA: `Enter the Collection`

Do not include cart, wishlist, account, price, search, or shop UI.

Scrolled state adapts to light/dark section theme.

Mobile menu:

- Full-screen
- All six collection names
- Each receives collection accent color
- Focus trap
- Escape close
- Body scroll lock
- Restore trigger focus

---

# 21. HERO — “ZERO HOUR”

This is the first unique motion concept.

Desktop height: `170vh`.

Sticky viewport: `100svh`.

Initial screen:

- Huge cropped dial fills viewport
- Hour markers touch edges
- Large ORVYN wordmark
- Small `00:00 / ZERO HOUR`
- Second hand centered
- Crown silhouette at right

## 0–18% scroll

- Second hand: `0deg → 210deg`
- Minute hand: `0deg → 16deg`
- Dial scale: `1.45 → 1.24`
- Headline enters:

```text
TIME,
MADE
PHYSICAL.
```

## 18–50%

- Crown rotates `0deg → 540deg`
- Each 120 degrees creates one restrained index flash
- No sound
- Minute hand advances slightly

## 50–78%

- Dial scales `1.24 → 0.72`
- Case, lugs, crown, strap reveal around it
- Experience changes from giant dial to full watch

## 78–100%

- Watch rotates `0deg → -8deg`
- Watch y: `0 → -2vh`
- Soft contact shadow forms
- Copy enters:

```text
6 COLLECTIONS
24 WATCHES
ONE VIEW OF TIME
```

CTA:

```text
Wind the story
```

The first scroll must feel like the page itself is being wound.

Reduced motion: show the full hero watch and final copy immediately.

---

# 22. Brand Statement — “Time Has More Than One Shape”

Quiet warm-paper section.

Headline:

```text
TIME HAS
MORE THAN
ONE SHAPE.
```

Body:

```text
ORVYN is imagined as six watch worlds—formal, nocturnal, aquatic, performance-driven, exploratory, and expressive—each built around a different relationship with time.
```

Visuals:

- Macro case edge
- Fine dial tick line
- Large negative space

Motion:

- Each headline line clips upward
- Macro image enters later
- No sticky behavior

---

# 23. Collection Gateway — “Six Doors”

Create six full-width horizontal strips.

Desktop collapsed height around `190px`, expanding to about `280px` on hover/focus.

Each strip contains:

- Collection number
- Collection name
- Tagline
- One watch
- Accent line

```text
01 AETHER — Quiet precision.
02 VANTA — After hours.
03 TIDAL — Built below the surface.
04 VECTOR — Measured in motion.
05 ALTUS — Read the horizon.
06 LUMA — Time in full color.
```

Hover/focus:

- Strip expands
- Product moves in
- Tagline appears
- Technical index slides

Mobile:

- Stack 340–420px editorial cards
- No expansion dependency

---

# 24. UNIQUE SCROLL SECTION — “THE CROWN WINDER”

Section height: `250vh`.

Use a side-profile watch render with visible crown.

## 0–30%

- Crown rotates `0 → 720deg`
- Crown translates outward `0 → 8px`
- Technical labels appear around it

## 30–60%

- Crown translates back inward
- Ghosted dial hand advances
- Circular visual power reserve fills

## 60–80%

- Case rotates side profile toward 3/4

## 80–100%

- Watch rotates to front
- Text resolves:

```text
ENERGY
BECOMES
TIME.
```

This is visual storytelling, not a claim about real winding duration.

Reduced motion: three static explanatory frames.

---

# 25. UNIQUE SCROLL SECTION — “EXPLODED CALIBRE”

Desktop height: `360vh`.

Use exploded Meridian assets.

Background: Obsidian.

Initial title:

```text
ONE WATCH.
MANY LAYERS.
```

## 0–20%

Crystal:

```text
y: 0 → -180px
scale: 1 → 1.03
```

Label: `01 / CRYSTAL`

## 20–35%

Hands move up `-110px`.

Dial moves up `-45px`.

Labels:

```text
02 / HANDS
03 / DIAL
```

## 35–55%

Movement moves down `100px`, scale `1 → 0.96`.

Balance wheel rotates based on scroll.

## 55–70%

Caseback moves down `190px`.

Straps separate horizontally up to `80px` each.

## 70–85%

Complete exploded stack visible.

Technical annotation lines draw to components.

Copy:

```text
FORM ON THE OUTSIDE.
RHYTHM WITHIN.
```

## 85–100%

Everything reassembles smoothly.

No snap.

No fake 3D engine.

Use transform, opacity, and SVG line drawing only.

Reduced motion: one static exploded diagram with labels.

---

# 26. UNIQUE SCROLL SECTION — “24-HOUR SHOWROOM”

This showcases all 24 watches without a standard product grid.

Desktop height: approximately `620vh` with sticky viewport.

Concept:

# **TWENTY-FOUR WATCHES BECOME TWENTY-FOUR HOURS.**

Layout:

- Giant 24-hour dial centered in background
- Horizontal product rail
- One active watch card in foreground
- Current hour / collection / model / reference at edge

Scroll mapping:

- 0–100% maps across 24 visual hour zones
- Hour hand rotates `0deg → 360deg`
- Product rail translates across the 24 watches
- Active model changes once per segment
- Document scroll itself remains normal; do not hard-snap it

Active card:

- Scale `0.86 → 1 → 0.86`
- Slight depth shift
- Card color fills active panel
- Adjacent cards remain visible but subdued

Every four watches introduce the next collection name in oversized type behind the rail.

Mobile:

- Do not use a 620vh sticky sequence
- Use a native horizontal scroll-snap carousel
- Keep a small 24-hour dial persistent
- Dial updates with active card

Reduced motion uses the same mobile-style carousel.

---

# 27. AETHER ROOM — “THE APERTURE”

Background: ivory.

Use Meridian 38.

A circular mask starts around 18% viewport diameter and expands.

As it expands:

- Four watches move from one aligned stack into a precise editorial layout
- Champagne line travels partly around aperture like a minute hand
- Copy appears after composition settles

Headline:

```text
AETHER
QUIET PRECISION.
```

Keep section under about 170vh.

---

# 28. VANTA ROOM — “LIGHTS OUT”

Use Eclipse 39.

Start in a bright neutral environment.

## 0–35%

Background moves from light gray to `#111216`.

## 35–60%

Daylight dial markers fade.

Luminous ring emerges.

## 60–80%

Second hand becomes luminous.

One subtle lume sweep travels around dial once.

## 80–100%

Text resolves:

```text
DAY GIVES WAY
TO THE DIAL.
```

End with all four VANTA models in an editorial lineup.

No neon outer glows; lume is limited to dial elements.

Reduced motion: daylight and lume cards side by side.

---

# 29. TIDAL ROOM — “DESCENT”

Section height: `260vh`.

Sticky watch.

Background moves:

```text
Sea Glass → Teal → Navy → Abyss
```

Watch y:

```text
-16vh → 8vh
```

Depth stage labels:

```text
SURFACE
10
20
30
40
DEPTH
```

These are visual storytelling markers, not scientific claims.

Bezel rotates approximately `0 → 90deg`.

Caustic light fades as user descends.

Lume becomes more visible.

Maximum eight decorative CSS bubble circles; no particle engine.

Finish:

```text
BUILT BELOW
THE SURFACE.
```

---

# 30. VECTOR ROOM — “START / STOP / RESET”

Use Apex 41.

Three chapters.

## START

- First pusher depresses 3px
- Chronograph seconds moves with scroll
- Timing ring fills
- Label: `START`

## STOP

Around 55%:

- Timing hand stops for the visual stage
- Motion line freezes
- Decorative campaign time appears:

```text
00:41.8
```

Do not present this as a measured real event.

## RESET

Around 75–100%:

- Second pusher depresses
- Chronograph hand returns to 12
- Timing ring clears
- Four VECTOR watches form a structured lineup

Headline:

```text
MEASURED
IN MOTION.
```

Reduced motion: static START / STOP / RESET triptych.

---

# 31. ALTUS ROOM — “ELEVATION”

Background uses parchment, olive, and sky.

Use Altimeter 42.

A topographic/elevation SVG crosses the section.

Scroll:

- Watch moves diagonally upward
- Elevation line rises
- Horizon line shifts
- Compass ring rotates maximum 65deg
- Background shifts from olive lowland to sky

Copy checkpoints:

```text
GROUND
RIDGE
HORIZON
```

Finish:

```text
READ
THE HORIZON.
```

Avoid fake coordinates, GPS, or measured altitude claims.

---

# 32. LUMA ROOM — “PRISM”

Use Prism 36.

Behind the watch, place four translucent circular planes:

- Lilac
- Mint
- Lemon
- Rose

As user scrolls:

- Planes rotate at different restrained rates
- Overlap composition changes
- Dial render crossfades through four LUMA models
- Chromatic shadow shifts
- Watch case rotates no more than 4deg

Headline:

```text
TIME
IN FULL
COLOR.
```

Finish with four LUMA watches in a 2×2 color composition.

Do not use a generic rainbow gradient.

---

# 33. Full Catalogue — “THE CHROMATIC INDEX”

After the motion-heavy sections, give users a calm place to view all 24 watches.

Desktop:

- 4 columns at wide desktop
- 3 around 1100px
- 2 on tablet
- 1 or 2 on mobile depending width

Cards can vary slightly in height to prevent catalogue monotony.

Each card shows:

- Watch image
- Collection
- Model
- Reference
- One-sentence description
- Case size
- Movement concept
- Color chip

Never show price, cart, wishlist, checkout, rating, discount, or stock count.

## Collection-specific card animations

### AETHER

- Watch rises 8px
- Reflection sweeps across case
- Minute hand advances visually

### VANTA

- Background darkens
- Lume indices appear
- Scale max 1.02

### TIDAL

- Bezel rotates about 12deg
- Depth line moves upward

### VECTOR

- Chronograph seconds rotates about 24deg
- Pusher nudges 2px

### ALTUS

- Compass ring rotates about 12deg
- Watch moves diagonally 6px

### LUMA

- Chromatic shadow shifts
- Background transitions to a neighboring LUMA tone

Keyboard focus must produce equivalent meaningful emphasis.

Disable intricate hover behavior on touch and reduced motion.

---

# 34. Watch Detail Dialog

Optional informational interaction via `View details`.

Dialog contains:

- Large main watch
- Front render
- Model
- Reference
- Description
- Case
- Dial
- Strap
- Movement concept
- Water resistance concept
- Collection
- Related watch

No buying flow.

Accessibility:

- Focus trap
- Escape close
- Close button
- Restore focus
- Body scroll lock
- Semantic dialog attributes

---

# 35. “THE MATERIAL OF TIME” — Craft Section

Use macro imagery.

Four chapters:

```text
POLISHED
BRUSHED
LEATHER
LUMINOUS
```

Each chapter:

- Macro image
- Large material word
- Short paragraph
- Technical marker

Motion:

- Narrow vertical image mask reveal
- Large word moves horizontally at slower speed
- Macro zoom changes subtly
- No sticky behavior required

---

# 36. “CASEBACK FLIP”

Short dedicated 130vh section.

Watch begins front-facing.

Between 25–75% scroll:

```text
rotateY: 0deg → 180deg
```

Use separate front and back renders.

Near 90deg:

- Crossfade front/back carefully
- Preserve believable case thickness

Back render can show a fictional movement window or geometric ORVYN mark.

No real certification marks or fake serial claim.

Copy:

```text
THE OTHER
SIDE OF TIME.
```

Reduced motion: side-by-side front and back.

---

# 37. “STRAP LAB”

Interactive visual-only section.

Center watch stays stable.

Controls:

```text
LEATHER
STEEL
RUBBER
TEXTILE
```

On switch:

- Strap image crossfades
- Body remains almost fixed
- Background material texture changes
- Short description updates

No ecommerce customization or pricing.

Copy:

```text
Different materials change the character before they change the watch.
```

Reduced motion: immediate swap.

---

# 38. Campaign Editorial

Create six editorial campaign chapters:

- Morning / AETHER
- Night / VANTA
- Below / TIDAL
- Motion / VECTOR
- Distance / ALTUS
- Color / LUMA

Use large campaign images, irregular magazine-like layout, small captions, watch close-ups, and restrained 20–40px parallax.

Do not use identical card layouts.

Reduced motion disables parallax.

---

# 39. Big Reveal

Full viewport, obsidian.

Large watch outline behind copy.

```text
YOU DO NOT
WEAR THE HOUR.

YOU WEAR
YOUR WAY
OF SEEING IT.
```

Below:

```text
ORVYN / TIME, MADE PHYSICAL.
```

Animation:

- First block enters
- Watch outline rotates 30deg
- Second block enters
- Outline aligns once
- No full 360 spin

---

# 40. Contact / Brand Enquiry

Headline:

```text
FIND YOUR
TIME WORLD.
```

Fields:

- Name
- Email
- Country
- Collection of interest
- Message

Frontend only:

- Browser-side validation
- `preventDefault()`
- Local success state
- No API
- No server action

Success:

```text
Your enquiry has been prepared.
```

Comment:

```js
// Connect an approved enquiry endpoint here when backend integration is authorized.
```

---

# 41. Footer

Obsidian.

Include:

- ORVYN lockup
- Tagline
- Six collection links
- All Watches
- Craft
- Contact
- Social placeholders
- Privacy
- Terms
- Accessibility

Bottom:

```text
© 2026 ORVYN Watch Group. Concept brand for this project.
```

No shop/cart/payment links.

---

# 42. Motion Architecture

Use Motion scroll values.

```js
const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end end"],
});
```

Map progress using `useTransform()`.

Use `useMotionValueEvent()` only when a discrete section/stage index must change.

Do not set React state on every scroll frame.

Do not create global `requestAnimationFrame` loops when Motion values can drive the transform.

---

# 43. Meaningful Watch Rotation Rules

Do not simply rotate the whole watch 360 degrees as a generic visual trick.

Use watch-native motion:

- Crown winds 540–720deg
- Bezel rotates 60–120deg
- Seconds hand completes up to one revolution
- Chronograph hand sweeps with progress
- Case turns 8–24deg to reveal thickness
- One dedicated caseback flip uses 180deg
- Orbital product cards move around dial geometry
- Prism rings rotate around LUMA
- Balance wheel rotates in exploded mechanism

This is what makes the animation feel designed for watches rather than copied from another product site.

---

# 44. Responsive Strategy

Breakpoints:

```text
base
768px
1100px
1440px
```

Test:

```text
375 × 812
430 × 932
768 × 1024
1024 × 768
1366 × 768
1440 × 900
1728 × 1117
1920 × 1080
```

Verify:

- Hero dial does not crop important text
- Crown remains visible
- Exploded layers stay understandable
- Mobile 24-Hour Showroom becomes native carousel
- Watches never collide with copy unintentionally
- Large display type wraps intentionally
- Cards remain readable
- No horizontal page overflow
- Sticky sections release correctly
- Touch devices do not depend on hover
- Dialog fits 375px
- Strap controls are 44px+
- Navigation works on short mobile height

---

# 45. Reduced Motion Strategy

When `prefers-reduced-motion: reduce`:

Hero:

- Full watch immediately visible
- No dial zoom, crown winding, or hand rotation

Crown Winder:

- Three static frames

Exploded Calibre:

- Labeled static exploded diagram

24-Hour Showroom:

- Native horizontal carousel

VANTA:

- Daylight and lume side by side

TIDAL:

- Static depth composition

VECTOR:

- Static Start / Stop / Reset triptych

ALTUS:

- Static elevation composition

LUMA:

- Static four-color composition

Catalogue:

- No hand/bezel rotation on hover

All content remains available.

---

# 46. Accessibility

- One `<h1>`
- Logical heading hierarchy
- Semantic nav/main/section/footer
- Descriptive section aria labels
- Descriptive watch alt text
- Decorative dial ticks use `aria-hidden`
- Real buttons and links
- Visible focus states
- Mobile menu focus trap
- Dialog focus trap
- Escape closes overlays
- Focus returns to trigger
- 44px touch targets
- Color is never the only collection identifier
- Collection names always visible as text
- Reduced motion supported
- Sticky sections do not trap keyboard users

Focus style:

```css
:focus-visible {
  outline: 3px solid var(--electric);
  outline-offset: 3px;
}
```

Adjust focus color by background contrast.

---

# 47. Performance Requirements

Target:

```text
Performance     90+
Accessibility   95+
Best Practices  95+
SEO             95+
```

Rules:

- Use `next/image`
- Explicit dimensions
- Correct `sizes`
- Hero watch only gets priority
- Lazy-load later assets
- Preload only what is required for first animation
- Local WebP
- Optimized SVG
- No video
- No canvas
- No WebGL
- No frame sequences
- No Three.js
- No smooth-scroll library
- No giant JSON animation
- No Lottie by default
- Transform/opacity first
- Blur sparingly
- `will-change` only for active elements
- Server Components by default
- Small Client islands
- No global scroll state

---

# 48. Asset Validation

Create `scripts/validate-assets.mjs`.

Verify:

- All 24 main watch renders exist
- All 24 front renders exist
- All six collection renders exist
- Exploded assets exist
- Brand assets exist
- Favicon exists
- Apple icon exists
- Open Graph image exists
- Required detail assets exist
- Campaign images exist
- Texture SVGs exist
- No zero-byte files
- No remote image URLs
- Every watch data path exists
- Every watch has width/height
- Every watch has card/text/accent colors
- All reference codes unique
- All IDs unique
- Exactly six collections
- Exactly four watches per collection

---

# 49. Suggested Component Structure

```text
src/components/
├── navigation/
│   ├── Navbar.js
│   ├── Navbar.module.css
│   ├── MobileMenu.js
│   └── MobileMenu.module.css
├── global/
│   ├── GlobalTimeRail.js
│   ├── GlobalTimeRail.module.css
│   ├── SiteNoise.js
│   └── SectionThemeController.js
├── hero/
│   ├── ZeroHourHero.js
│   ├── ZeroHourHero.module.css
│   ├── GiantDial.js
│   └── HeroWatch.js
├── collections/
│   ├── CollectionGateway.js
│   ├── CollectionGateway.module.css
│   ├── CollectionStrip.js
│   ├── AetherRoom.js
│   ├── VantaRoom.js
│   ├── TidalRoom.js
│   ├── VectorRoom.js
│   ├── AltusRoom.js
│   └── LumaRoom.js
├── mechanism/
│   ├── CrownWinder.js
│   ├── CrownWinder.module.css
│   ├── ExplodedCalibre.js
│   ├── ExplodedCalibre.module.css
│   ├── ExplodedLayer.js
│   └── TechnicalAnnotation.js
├── showroom/
│   ├── HourShowroom.js
│   ├── HourShowroom.module.css
│   ├── HourDial.js
│   ├── HourWatchCard.js
│   └── HourIndicator.js
├── catalogue/
│   ├── WatchCatalogue.js
│   ├── WatchCatalogue.module.css
│   ├── WatchCard.js
│   ├── WatchCard.module.css
│   ├── WatchDetailDialog.js
│   └── WatchVisual.js
├── craft/
│   ├── MaterialOfTime.js
│   ├── MaterialOfTime.module.css
│   ├── CasebackFlip.js
│   ├── CasebackFlip.module.css
│   ├── StrapLab.js
│   └── StrapLab.module.css
├── editorial/
│   ├── CampaignEditorial.js
│   └── CampaignEditorial.module.css
├── sections/
│   ├── BrandStatement.js
│   ├── BigReveal.js
│   └── Contact.js
├── layout/
│   ├── Footer.js
│   └── Footer.module.css
└── ui/
    ├── Reveal.js
    ├── SectionHeading.js
    ├── TechnicalLabel.js
    ├── MotionFallback.js
    └── Dialog.js
```

---

# 50. Suggested File Structure

```text
/
├── .gitignore
├── README.md
├── PLAN.md
├── jsconfig.json
├── next.config.mjs
├── package.json
├── eslint.config.mjs
├── scripts/
│   └── validate-assets.mjs
├── public/
│   ├── brand/
│   ├── images/
│   │   ├── watches/
│   │   ├── collections/
│   │   ├── details/
│   │   ├── exploded/
│   │   └── campaign/
│   ├── generated/
│   │   ├── watches/
│   │   └── mechanism/
│   └── textures/
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── icon.svg
    │   ├── apple-icon.png
    │   ├── opengraph-image.png
    │   ├── globals.css
    │   ├── layout.js
    │   ├── page.js
    │   ├── not-found.js
    │   └── robots.js
    ├── components/
    ├── config/
    │   └── site.js
    ├── data/
    │   ├── assets.js
    │   ├── watches.js
    │   ├── collections.js
    │   └── navigation.js
    ├── hooks/
    │   ├── useBodyScrollLock.js
    │   ├── useMediaQuery.js
    │   └── usePrefersReducedMotion.js
    └── lib/
        ├── metadata.js
        ├── structuredData.js
        └── validation.js
```

---

# 51. `page.js` Assembly

```jsx
import Navbar from "@/components/navigation/Navbar";
import GlobalTimeRail from "@/components/global/GlobalTimeRail";
import ZeroHourHero from "@/components/hero/ZeroHourHero";
import BrandStatement from "@/components/sections/BrandStatement";
import CollectionGateway from "@/components/collections/CollectionGateway";
import CrownWinder from "@/components/mechanism/CrownWinder";
import ExplodedCalibre from "@/components/mechanism/ExplodedCalibre";
import HourShowroom from "@/components/showroom/HourShowroom";
import AetherRoom from "@/components/collections/AetherRoom";
import VantaRoom from "@/components/collections/VantaRoom";
import TidalRoom from "@/components/collections/TidalRoom";
import VectorRoom from "@/components/collections/VectorRoom";
import AltusRoom from "@/components/collections/AltusRoom";
import LumaRoom from "@/components/collections/LumaRoom";
import WatchCatalogue from "@/components/catalogue/WatchCatalogue";
import MaterialOfTime from "@/components/craft/MaterialOfTime";
import CasebackFlip from "@/components/craft/CasebackFlip";
import StrapLab from "@/components/craft/StrapLab";
import CampaignEditorial from "@/components/editorial/CampaignEditorial";
import BigReveal from "@/components/sections/BigReveal";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <GlobalTimeRail />
      <Navbar />
      <main>
        <ZeroHourHero />
        <BrandStatement />
        <CollectionGateway />
        <CrownWinder />
        <ExplodedCalibre />
        <HourShowroom />
        <AetherRoom />
        <VantaRoom />
        <TidalRoom />
        <VectorRoom />
        <AltusRoom />
        <LumaRoom />
        <WatchCatalogue />
        <MaterialOfTime />
        <CasebackFlip />
        <StrapLab />
        <CampaignEditorial />
        <BigReveal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

Do not make the whole page a Client Component.

---

# 52. Metadata

Use Next.js Metadata API.

```js
export const metadata = {
  metadataBase: new URL("https://orvyn.example"),
  title: {
    default: "ORVYN — Time, Made Physical",
    template: "%s | ORVYN",
  },
  description:
    "A concept watch group exploring six collections and twenty-four expressions of time.",
  openGraph: {
    title: "ORVYN — Time, Made Physical",
    description: "Six collections. Twenty-four watches. One view of time.",
    url: "/",
    siteName: "ORVYN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ORVYN watch collection",
      },
    ],
  },
};
```

Do not add ecommerce Product schema.

---

# 53. Build Order

1. Inspect repository.
2. Remove prohibited infrastructure and stale build folders.
3. Confirm standard Next.js App Router + JavaScript + CSS Modules.
4. Install Motion and Lucide only if needed.
5. Create central site config.
6. Create six collection records.
7. Create all 24 watch records.
8. Validate unique IDs and references.
9. Generate ORVYN brand identity.
10. Generate favicon and social assets.
11. Generate 24 main watch renders.
12. Generate 24 front renders.
13. Inspect and regenerate flawed assets.
14. Generate six collection images.
15. Generate exploded Meridian assets.
16. Generate macro detail assets.
17. Generate campaign images.
18. Generate SVG textures and mechanism artwork.
19. Generate SVG watch fallbacks.
20. Create asset manifest.
21. Create asset validator.
22. Run asset validation.
23. Build global CSS and fonts.
24. Build metadata.
25. Build Navbar.
26. Build Global Time Rail.
27. Build static Zero Hour hero.
28. Add dial/hand/crown scroll motion.
29. Build Brand Statement.
30. Build Collection Gateway.
31. Build Crown Winder.
32. Build static Exploded Calibre.
33. Add exploded scroll transforms.
34. Build reduced-motion exploded version.
35. Build 24-Hour Showroom desktop.
36. Build mobile native carousel.
37. Build AETHER room.
38. Build VANTA Lights Out room.
39. Build TIDAL Descent room.
40. Build VECTOR Start/Stop/Reset room.
41. Build ALTUS Elevation room.
42. Build LUMA Prism room.
43. Build 24-watch catalogue.
44. Implement six distinct card motion languages.
45. Build accessible detail dialog.
46. Build Material of Time.
47. Build Caseback Flip.
48. Build Strap Lab.
49. Build Campaign Editorial.
50. Build Big Reveal.
51. Build Contact.
52. Build Footer.
53. Test every sticky release.
54. Test no blank scroll stages.
55. Test all 24 watch images and cards.
56. Test keyboard interaction.
57. Test dialog and menu focus.
58. Test reduced motion.
59. Test all target viewport sizes.
60. Check contrast and overflow.
61. Run `npm run validate:assets`.
62. Run `npm run lint`.
63. Run `npm run build`.
64. Fix errors and meaningful warnings.
65. Recheck package dependencies.
66. Recheck source tree for prohibited files.
67. Run `npm run dev`.
68. Report local URL and generated asset summary.

---

# 54. Definition of Done

The project is complete only when:

- It is a clean standard Next.js App Router frontend.
- It runs with `npm run dev`.
- Production build succeeds.
- ESLint succeeds.
- Asset validation succeeds.
- There are exactly six collection worlds.
- There are exactly 24 watch records.
- Each collection has exactly four watches.
- All 24 models have unique descriptions and references.
- All 24 watches have deliberate card colors/accent treatment.
- All 24 main renders exist.
- All 24 front renders exist.
- ORVYN logo assets exist.
- Favicon, Apple icon, and Open Graph image exist.
- Collection campaign images exist.
- Macro and exploded assets exist.
- Hero scroll feels like winding a watch, not a standard fade.
- Crown Winder works.
- Exploded Calibre works and reassembles cleanly.
- 24-Hour Showroom showcases all 24 watches.
- AETHER uses an aperture animation.
- VANTA uses a lights-out/lume animation.
- TIDAL uses descent and bezel motion.
- VECTOR uses Start/Stop/Reset chronograph storytelling.
- ALTUS uses elevation/horizon motion.
- LUMA uses prism/color motion.
- Catalogue shows all watches clearly.
- Each collection has a distinct card interaction.
- Caseback Flip works.
- Strap Lab works.
- Reduced-motion alternatives exist for every major interaction.
- Mobile does not inherit harmful desktop sticky behavior.
- No horizontal overflow exists.
- No real watch design or brand is copied.
- No remote placeholder images are used.
- No ecommerce UI exists.
- No price/cart/checkout/rating/stock behavior exists.
- No Vite exists.
- No Vinext exists.
- No Wrangler or Cloudflare worker infrastructure exists.
- No database exists.
- No API route exists.
- No authentication exists.
- No TypeScript exists.
- No Tailwind exists.
- No unnecessary animation dependency exists.
- The experience feels like a premium horology campaign.
- Motion feels native to watches rather than generic product scrolling.
- The site is visually and mechanically different from the previous shoe, mobile, spice, and food plans.
