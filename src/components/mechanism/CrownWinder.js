"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import styles from "./Mechanism.module.css";

export default function CrownWinder() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const crownRotate = useTransform(scrollYProgress, [0, .3], [0, 720]);
  const crownX = useTransform(scrollYProgress, [0, .3, .6], [0, 16, 0]);
  const watchRotate = useTransform(scrollYProgress, [.5, 1], [-56, 0]);
  const watchScale = useTransform(scrollYProgress, [.55, 1], [1.2, .88]);
  const reserve = useTransform(scrollYProgress, [.2, .62], [0, 1]);
  const copyOpacity = useTransform(scrollYProgress, [.74, .9], [0, 1]);

  return (
    <section ref={ref} id="winder" className={styles.winder} aria-labelledby="winder-title">
      <div className={styles.sticky}>
        <div className={styles.mechanismIndex}><span>03 / THE CROWN WINDER</span><span>VISUAL MECHANISM</span></div>
        <motion.div className={styles.winderWatch} style={{ rotate: reduced ? 0 : watchRotate, scale: reduced ? .88 : watchScale }}>
          <Image src="/images/watches/aether-meridian-38.webp" alt="Side detail of the ORVYN Meridian crown and case" width={1800} height={1800} sizes="(max-width: 767px) 110vw, 65vw" />
          <motion.span className={styles.ghostCrown} style={{ rotate: reduced ? 0 : crownRotate, x: reduced ? 0 : crownX }} aria-hidden="true" />
        </motion.div>
        <div className={styles.crownLabels} aria-hidden="true"><span>01 / GRIP</span><span>02 / STEM</span><span>03 / ENERGY</span></div>
        <motion.div className={styles.reserve} style={{ "--fill": reduced ? 1 : reserve }}><span>POWER<br />RESERVE</span></motion.div>
        <motion.div className={styles.winderCopy} style={{ opacity: reduced ? 1 : copyOpacity }}>
          <p>A gesture at the edge of the case<br />sets the whole watch in motion.</p>
          <h2 id="winder-title">ENERGY<br />BECOMES<br /><em>TIME.</em></h2>
        </motion.div>
        <div className={styles.progressChapters}><span>WIND</span><span>STORE</span><span>TURN</span><span>RESOLVE</span></div>
      </div>
    </section>
  );
}

export function ExplodedCalibre() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const titleOpacity = useTransform(scrollYProgress, [0, .14, .32, .78, .88], [1, 1, .12, .12, 0]);
  const titleY = useTransform(scrollYProgress, [0, .34], [0, -24]);
  const assemblyOpacity = useTransform(scrollYProgress, [0, .08, .75, .89], [0, 1, 1, 0]);
  const assemblyY = useTransform(scrollYProgress, [0, .18, .72, .89], [76, 0, 0, -34]);
  const assemblyScale = useTransform(scrollYProgress, [0, .18, .72, .89], [.88, 1, 1.035, .88]);
  const assemblyRotate = useTransform(scrollYProgress, [0, .28, .72], [-1.8, 0, .8]);
  const labelsOpacity = useTransform(scrollYProgress, [.08, .2, .72, .84], [0, 1, 1, 0]);
  const labelsX = useTransform(scrollYProgress, [.08, .2, .72, .84], [28, 0, 0, 18]);
  const resolveOpacity = useTransform(scrollYProgress, [.8, .93], [0, 1]);
  const resolveScale = useTransform(scrollYProgress, [.8, 1], [.82, 1]);

  return (
    <section ref={ref} id="calibre" className={styles.calibre} aria-labelledby="calibre-title">
      <div className={styles.sticky}>
        <div className={styles.mechanismIndex}><span>04 / EXPLODED CALIBRE</span><span>MERIDIAN / AE-M38-CH</span></div>
        <motion.div className={styles.calibreLead} style={{ opacity: reduced ? 1 : titleOpacity, y: reduced ? 0 : titleY }}>
          <span>THE ANATOMY OF MERIDIAN</span>
          <h2 id="calibre-title">ONE WATCH.<br /><i>MANY LAYERS.</i></h2>
          <p>From domed sapphire to the hand-wound calibre, every visible layer has a purpose.</p>
        </motion.div>

        <motion.figure
          className={styles.calibreAssembly}
          style={{
            opacity: reduced ? 1 : assemblyOpacity,
            y: reduced ? 0 : assemblyY,
            scale: reduced ? 1 : assemblyScale,
            rotate: reduced ? 0 : assemblyRotate,
          }}
        >
          <Image
            src="/images/exploded/meridian-exploded-no-straps.png"
            alt="Photorealistic exploded view of the Meridian watch with sapphire crystal, bezel, hands, champagne dial, mechanical movement, steel case, crown and exhibition caseback"
            width={1024}
            height={1536}
            sizes="(max-width: 900px) 88vw, 58vh"
          />
        </motion.figure>

        <motion.ol
          className={styles.partsLegend}
          style={{ opacity: reduced ? 1 : labelsOpacity, x: reduced ? 0 : labelsX }}
          aria-label="Meridian watch components"
        >
          <li><span>01</span><strong>SAPPHIRE + BEZEL</strong></li>
          <li><span>02</span><strong>HANDS + DIAL</strong></li>
          <li><span>03</span><strong>CALIBRE AE-M38</strong></li>
          <li><span>04</span><strong>MID-CASE + CROWN</strong></li>
          <li><span>05</span><strong>EXHIBITION BACK</strong></li>
        </motion.ol>

        <motion.div
          className={styles.resolvedWatch}
          style={{ opacity: reduced ? 0 : resolveOpacity, scale: reduced ? .82 : resolveScale }}
          aria-hidden={reduced ? "true" : undefined}
        >
          <Image src="/images/watches/aether-meridian-38.webp" alt="The assembled ORVYN Aether Meridian 38 watch" width={1800} height={1800} sizes="(max-width: 900px) 78vw, 48vh" />
        </motion.div>

        <motion.div className={styles.calibreResolve} style={{ opacity: reduced ? 0 : resolveOpacity }}>
          <span>FORM ON THE OUTSIDE.</span>
          <strong>RHYTHM WITHIN.</strong>
        </motion.div>
      </div>
    </section>
  );
}
