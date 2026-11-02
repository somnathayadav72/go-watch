"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import styles from "./FinalSections.module.css";

export default function BigReveal() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const firstOpacity = useTransform(scrollYProgress, [0, .24], [0, 1]);
  const secondOpacity = useTransform(scrollYProgress, [.45, .72], [0, 1]);
  const outlineRotate = useTransform(scrollYProgress, [0, .82], [-15, 15]);
  const outlineScale = useTransform(scrollYProgress, [0, 1], [.85, 1]);
  return (
    <section ref={ref} className={styles.reveal} aria-labelledby="reveal-title">
      <div className={styles.revealSticky}>
        <motion.div className={styles.watchOutline} style={{ rotate: reduced ? 0 : outlineRotate, scale: reduced ? 1 : outlineScale }} aria-hidden="true"><span /><i /><b /></motion.div>
        <h2 id="reveal-title">
          <motion.span style={{ opacity: reduced ? 1 : firstOpacity }}>YOU DO NOT<br />WEAR THE HOUR.</motion.span>
          <motion.span style={{ opacity: reduced ? 1 : secondOpacity }}>YOU WEAR<br />YOUR WAY<br /><i>OF SEEING IT.</i></motion.span>
        </h2>
        <p>ORVYN / TIME, MADE PHYSICAL.</p>
      </div>
    </section>
  );
}
