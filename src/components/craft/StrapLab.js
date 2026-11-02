"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./Craft.module.css";

const straps = [
  { id: "leather", label: "LEATHER", image: "/images/watches/aether-meridian-38.webp", texture: "#6B2C32", copy: "Warm grain and a stitched edge soften the geometry of a polished case." },
  { id: "steel", label: "STEEL", image: "/images/watches/aether-halo-36.webp", texture: "#B8BABD", copy: "Fine articulated links turn the case into one continuous field of light." },
  { id: "rubber", label: "RUBBER", image: "/images/watches/tidal-breaker-40.webp", texture: "#0B6B70", copy: "A technical matte surface brings color, grip, and visual weight to the wrist." },
  { id: "textile", label: "TEXTILE", image: "/images/watches/altus-wayfinder-40.webp", texture: "#8B7755", copy: "Woven structure makes the watch feel exploratory, relaxed, and immediately tactile." },
];

export default function StrapLab() {
  const [active, setActive] = useState(straps[0]);
  const reduced = useReducedMotion();
  return (
    <section className={styles.strapLab} aria-labelledby="strap-title" style={{ "--material": active.texture }}>
      <div className={styles.strapHead}><span>15 / STRAP LAB</span><h2 id="strap-title">CHARACTER,<br /><i>BEFORE THE CASE.</i></h2><p>Different materials change the character before they change the watch.</p></div>
      <div className={styles.strapStage}>
        <div className={styles.texture} aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div key={active.id} className={styles.strapWatch} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, y: -18 }} transition={{ duration: reduced ? 0 : .45 }}>
            <Image src={active.image} alt={`ORVYN concept watch shown with ${active.label.toLowerCase()} character`} width={1800} height={1800} sizes="(max-width: 767px) 94vw, 55vw" />
          </motion.div>
        </AnimatePresence>
        <p>{active.copy}</p>
      </div>
      <div className={styles.strapControls} role="group" aria-label="Choose a strap material">{straps.map((strap) => <button key={strap.id} className={strap.id === active.id ? styles.activeStrap : ""} onClick={() => setActive(strap)} aria-pressed={strap.id === active.id}><span style={{ background: strap.texture }} />{strap.label}</button>)}</div>
    </section>
  );
}
