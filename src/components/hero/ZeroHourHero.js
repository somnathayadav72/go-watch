"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import styles from "./ZeroHourHero.module.css";

export default function ZeroHourHero() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const dialScale = useTransform(scrollYProgress, [0, .18, .5, .78], [1.45, 1.24, 1.08, .72]);
  const secondRotate = useTransform(scrollYProgress, [0, .18], [0, 210]);
  const minuteRotate = useTransform(scrollYProgress, [0, .5], [0, 20]);
  const crownRotate = useTransform(scrollYProgress, [.18, .5], [0, 540]);
  const watchOpacity = useTransform(scrollYProgress, [.46, .64], [0, 1]);
  const watchScale = useTransform(scrollYProgress, [.5, .78], [.78, 1]);
  const watchRotate = useTransform(scrollYProgress, [.78, 1], [0, -8]);
  const watchY = useTransform(scrollYProgress, [.78, 1], [0, -18]);
  const heroCopyOpacity = useTransform(scrollYProgress, [.58, .77], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [.05, .25], [70, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [.05, .2, .6, .72], [0, 1, 1, 0]);

  const staticDial = reducedMotion ? { scale: .72 } : { scale: dialScale };

  return (
    <section ref={sectionRef} id="zero-hour" className={styles.hero} aria-label="Zero Hour — winding time into form">
      <div className={styles.sticky}>
        <div className={styles.topLabel}><span>00:00 / ZERO HOUR</span><span>GENEVA / 2008</span></div>

        <motion.div className={styles.giantDial} style={staticDial} aria-hidden="true">
          <div className={styles.ticks}>{Array.from({ length: 60 }, (_, i) => <i key={i} className={i % 5 === 0 ? styles.major : ""} style={{ transform: `rotate(${i * 6}deg)` }} />)}</div>
          <div className={styles.innerRing} />
          <motion.span className={styles.hourHand} style={{ rotate: reducedMotion ? 302 : 302 }} />
          <motion.span className={styles.minuteHand} style={{ rotate: reducedMotion ? 48 : minuteRotate }} />
          <motion.span className={styles.secondHand} style={{ rotate: reducedMotion ? 210 : secondRotate }} />
          <span className={styles.pin} />
          <motion.span className={styles.crown} style={{ rotate: reducedMotion ? 180 : crownRotate }} />
        </motion.div>

        <motion.div className={styles.heroHeadline} style={{ y: reducedMotion ? 0 : headlineY, opacity: reducedMotion ? 0 : headlineOpacity }}>
          <h1><span>TIME,</span><span>MADE</span><span>PHYSICAL.</span></h1>
        </motion.div>

        <motion.div className={styles.fullWatch} style={{ opacity: reducedMotion ? 1 : watchOpacity, scale: reducedMotion ? 1 : watchScale, rotate: reducedMotion ? -7 : watchRotate, y: reducedMotion ? -8 : watchY }}>
          <span className={styles.shadow} aria-hidden="true" />
          <Image src="/images/watches/aether-meridian-38.webp" alt="ORVYN AETHER Meridian 38, an original ivory-dial dress watch with an oxblood leather strap" width={1800} height={1800} sizes="(max-width: 767px) 88vw, 62vw" priority />
        </motion.div>

        <motion.div className={styles.finalCopy} style={{ opacity: reducedMotion ? 1 : heroCopyOpacity }}>
          <p><span>6 COLLECTIONS</span><span>24 WATCHES</span><span>ONE VIEW OF TIME</span></p>
          <a href="#statement">Wind the story <ArrowDown size={18} /></a>
        </motion.div>
        <div className={styles.heroWordmark}>ORVYN</div>
      </div>
    </section>
  );
}
