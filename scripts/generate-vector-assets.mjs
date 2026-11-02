import { mkdir, writeFile } from "node:fs/promises";

const watchPalettes = [
  ["aether-meridian-38", "#F1E9DC", "#C7A26A", "#6B2C32"],
  ["aether-halo-36", "#DED9D0", "#8A8D8F", "#C8CDD5"],
  ["aether-solstice-40", "#A8A19A", "#F1E9DC", "#8B7A6A"],
  ["aether-nocturne-39", "#6B2C32", "#D4B27A", "#171717"],
  ["vanta-null-41", "#0E0F12", "#4B66FF", "#202329"],
  ["vanta-shade-40", "#292C31", "#B4E64B", "#151619"],
  ["vanta-monolith-42", "#1C1E22", "#C8CDD5", "#343840"],
  ["vanta-eclipse-39", "#111A2C", "#6D7FFF", "#090A0C"],
  ["tidal-depthline-42", "#061C2E", "#C8E7DF", "#8EA0A9"],
  ["tidal-breaker-40", "#0B6B70", "#C8E7DF", "#90C6BD"],
  ["tidal-abyss-43", "#031017", "#D95C4E", "#252C30"],
  ["tidal-reef-39", "#C8E7DF", "#0B6B70", "#A4B2BA"],
  ["vector-apex-41", "#E9E4DC", "#E23C34", "#171717"],
  ["vector-chicane-42", "#171717", "#F47B20", "#303030"],
  ["vector-gridline-40", "#D6C1A0", "#E23C34", "#7A756B"],
  ["vector-redline-43", "#353537", "#F47B20", "#171717"],
  ["altus-wayfinder-40", "#48563A", "#C1A574", "#AE9B77"],
  ["altus-skytrace-41", "#7599B3", "#E7DFC9", "#7D5238"],
  ["altus-altimeter-42", "#272A28", "#C1A574", "#48563A"],
  ["altus-trailmark-39", "#E7DFC9", "#48563A", "#6E774E"],
  ["luma-prism-36", "#B0A1FF", "#F7F1E7", "#A795EF"],
  ["luma-mintline-38", "#98E0C3", "#F7F1E7", "#E8E0D2"],
  ["luma-sunpop-39", "#F2DC5D", "#1A1820", "#343139"],
  ["luma-roselight-37", "#E6909D", "#F7F1E7", "#D88491"],
];

const tickLines = Array.from({ length: 60 }, (_, index) => {
  const angle = index * 6;
  const major = index % 5 === 0;
  return `<line x1="100" y1="${major ? 10 : 15}" x2="100" y2="${major ? 27 : 21}" transform="rotate(${angle} 100 100)"/>`;
}).join("");

const watchSvg = (id, dial, accent, strap) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" role="img" aria-labelledby="title">
  <title id="title">Original fictional ${id.replaceAll("-", " ")} watch illustration</title>
  <defs>
    <linearGradient id="metal" x1="0" x2="1"><stop stop-color="#7b7d80"/><stop offset=".25" stop-color="#f1f2f3"/><stop offset=".55" stop-color="#8c8f93"/><stop offset=".8" stop-color="#fafafa"/><stop offset="1" stop-color="#686b70"/></linearGradient>
    <radialGradient id="dial"><stop stop-color="${dial}"/><stop offset="1" stop-color="${dial}" stop-opacity=".78"/></radialGradient>
    <filter id="shadow" x="-30%" y="-20%" width="160%" height="160%"><feDropShadow dx="0" dy="25" stdDeviation="24" flood-opacity=".22"/></filter>
  </defs>
  <g filter="url(#shadow)">
    <path d="M354 35h192l30 245H324Z" fill="${strap}"/><path d="M324 620h252l-30 245H354Z" fill="${strap}"/>
    <rect x="315" y="244" width="270" height="412" rx="92" fill="url(#metal)" transform="rotate(-8 450 450)"/>
    <circle cx="450" cy="450" r="189" fill="#4f5257"/><circle cx="450" cy="450" r="176" fill="url(#dial)"/>
    <g stroke="${accent}" stroke-width="7" stroke-linecap="round">${tickLines}</g>
    <g stroke="${accent}" stroke-linecap="round"><path d="M450 450 356 374" stroke-width="13"/><path d="M450 450 535 335" stroke-width="10"/><path d="M450 450 476 563" stroke-width="4"/></g>
    <circle cx="450" cy="450" r="16" fill="${accent}"/><path d="M628 408h50v84h-50" fill="url(#metal)"/>
  </g>
</svg>`;

const textures = {
  "dial-ticks.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g fill="none" stroke="currentColor" stroke-width="1.5">${tickLines}</g></svg>`,
  "orbital-grid.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><g fill="none" stroke="currentColor" opacity=".28"><circle cx="400" cy="400" r="330"/><circle cx="400" cy="400" r="250"/><circle cx="400" cy="400" r="160"/><path d="M40 400h720M400 40v720M145 145l510 510M655 145 145 655"/></g></svg>`,
  "timing-grid.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420"><g stroke="currentColor" opacity=".24"><path d="M0 70h1200M0 140h1200M0 210h1200M0 280h1200M0 350h1200"/>${Array.from({length:24},(_,i)=>`<path d="M${i*50} 0v420"/>`).join("")}</g></svg>`,
  "lume-indices.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><g fill="#C9FF78">${Array.from({length:12},(_,i)=>`<rect x="143" y="16" width="14" height="38" rx="7" transform="rotate(${i*30} 150 150)"/>`).join("")}</g></svg>`,
  "pressure-lines.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><g fill="none" stroke="currentColor" opacity=".28">${Array.from({length:8},(_,i)=>`<path d="M0 ${40+i*58} Q200 ${5+i*58} 400 ${40+i*58}T800 ${40+i*58}"/>`).join("")}</g></svg>`,
  "tachymeter-ring.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><circle cx="200" cy="200" r="172" fill="none" stroke="currentColor" stroke-width="24" stroke-dasharray="2 13"/><circle cx="200" cy="200" r="142" fill="none" stroke="currentColor"/></svg>`,
  "elevation-lines.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700"><g fill="none" stroke="currentColor" opacity=".3">${Array.from({length:9},(_,i)=>`<path d="M0 ${660-i*55} C190 ${580-i*44} 260 ${680-i*75} 430 ${520-i*42}S760 ${610-i*65} 1200 ${320-i*20}"/>`).join("")}</g></svg>`,
  "prism-rings.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700"><g fill="none" stroke-width="70" opacity=".48"><circle cx="300" cy="300" r="190" stroke="#B0A1FF"/><circle cx="410" cy="310" r="170" stroke="#98E0C3"/><circle cx="360" cy="410" r="150" stroke="#F2DC5D"/><circle cx="270" cy="400" r="130" stroke="#E6909D"/></g></svg>`,
  "machining-lines.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><g fill="none" stroke="currentColor" opacity=".2">${Array.from({length:18},(_,i)=>`<circle cx="400" cy="400" r="${25+i*20}"/>`).join("")}</g></svg>`,
  "noise.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><filter id="n"><feTurbulence baseFrequency=".75" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity=".32"/></svg>`,
};

await mkdir("public/generated/watches", { recursive: true });
await mkdir("public/generated/mechanism", { recursive: true });
await mkdir("public/textures", { recursive: true });

await Promise.all(watchPalettes.map(([id, dial, accent, strap]) => writeFile(`public/generated/watches/${id}.svg`, watchSvg(id, dial, accent, strap))));
await Promise.all(Object.entries(textures).map(([name, svg]) => writeFile(`public/textures/${name}`, svg)));

const exploded = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="Exploded fictional ORVYN Meridian watch mechanism">
  <defs><radialGradient id="m"><stop stop-color="#f5f1e8"/><stop offset="1" stop-color="#a6a8ab"/></radialGradient></defs>
  <g fill="none" stroke="#C7A26A"><ellipse cx="600" cy="130" rx="250" ry="58"/><ellipse cx="600" cy="240" rx="230" ry="55"/><ellipse cx="600" cy="360" rx="210" ry="50"/><ellipse cx="600" cy="505" rx="190" ry="48"/><ellipse cx="600" cy="665" rx="225" ry="55"/></g>
  <g fill="url(#m)" stroke="#2B2C30"><circle cx="600" cy="360" r="190" opacity=".86"/><circle cx="600" cy="505" r="168" opacity=".92"/><path d="M442 485 758 525M470 430l260 145M510 390l180 230" opacity=".5"/></g>
  <g stroke="#F2EEE7" stroke-width="8" stroke-linecap="round"><path d="M600 360 525 300"/><path d="M600 360 670 265"/></g>
  <g fill="#F2EEE7" font-family="Arial,sans-serif" font-size="18" letter-spacing="3"><text x="890" y="138">01 / CRYSTAL</text><text x="890" y="248">02 / HANDS</text><text x="890" y="368">03 / DIAL</text><text x="890" y="513">04 / MOVEMENT</text><text x="890" y="673">05 / CASEBACK</text></g>
  <g stroke="#F2EEE7" opacity=".35"><path d="M845 130H710M845 240H730M845 360H810M845 505H768M845 665H825"/></g>
</svg>`;
await writeFile("public/generated/mechanism/meridian-exploded.svg", exploded);

console.log(`Generated ${watchPalettes.length} watch fallbacks, ${Object.keys(textures).length} textures, and the exploded mechanism.`);
