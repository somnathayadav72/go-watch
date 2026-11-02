"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import styles from "./Craft.module.css";

export default function CasebackFlip() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rotateY = useTransform(scrollYProgress, [.25, .75], [0, 180]);
  const frontOpacity = useTransform(scrollYProgress, [.43, .52], [1, 0]);
  const backOpacity = useTransform(scrollYProgress, [.48, .57], [0, 1]);
  const copyOpacity = useTransform(scrollYProgress, [.62, .88], [0, 1]);
  return (
    <section ref={ref} className={styles.caseback} aria-labelledby="caseback-title">
      <div className={styles.caseSticky}>
        <div className={styles.caseIndex}><span>14 / CASEBACK FLIP</span><span>FRONT / REVERSE</span></div>
        <motion.div className={styles.flippingWatch} style={{ rotateY: reduced ? 0 : rotateY }}>
          <motion.div className={styles.watchFront} style={{ opacity: reduced ? 1 : frontOpacity }}><Image src="/images/watches/aether-meridian-38-front.webp" alt="Front dial view of the ORVYN Meridian 38" width={1800} height={1800} sizes="(max-width: 767px) 90vw, 52vw" /></motion.div>
          <motion.div className={styles.watchBack} style={{ opacity: reduced ? 1 : backOpacity }}>
            <Image src="/images/watches/aether-meridian-38.webp" alt="Conceptual reverse view of the ORVYN Meridian 38" width={1800} height={1800} sizes="(max-width: 767px) 90vw, 52vw" />
            <span className={styles.movementWindow}><i>O</i></span>
          </motion.div>
        </motion.div>
        <motion.div className={styles.caseCopy} style={{ opacity: reduced ? 1 : copyOpacity }}><p>ANOTHER FACE / THE SAME RHYTHM</p><h2 id="caseback-title">THE OTHER<br /><i>SIDE OF TIME.</i></h2></motion.div>
      </div>
    </section>
  );
}
