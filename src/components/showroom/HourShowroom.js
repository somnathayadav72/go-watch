"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { watches } from "@/data/watches";
import styles from "./HourShowroom.module.css";

export default function HourShowroom() {
  const sectionRef = useRef(null);
  const mobileRailRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const railX = useTransform(scrollYProgress, [0, 1], ["10vw", "-862vw"]);
  const hourRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(23, Math.floor(latest * 24));
    if (next !== activeIndex) setActiveIndex(next);
  });

  const updateMobileIndex = () => {
    const rail = mobileRailRef.current;
    if (!rail) return;
    const cardWidth = rail.firstElementChild?.getBoundingClientRect().width || 1;
    const next = Math.min(23, Math.max(0, Math.round(rail.scrollLeft / (cardWidth + 14))));
    setActiveIndex(next);
  };

  const activeWatch = watches[activeIndex];

  return (
    <section ref={sectionRef} id="showroom" className={`${styles.showroom} ${reduced ? styles.reduced : ""}`} aria-labelledby="showroom-title">
      <div className={styles.sticky}>
        <div className={styles.showroomHead}>
          <span>05 / 24-HOUR SHOWROOM</span>
          <h2 id="showroom-title">TWENTY-FOUR WATCHES<br /><i>BECOME TWENTY-FOUR HOURS.</i></h2>
        </div>
        <div className={styles.dial} aria-hidden="true">
          {Array.from({ length: 24 }, (_, index) => <i key={index} style={{ transform: `rotate(${index * 15}deg)` }}><b>{String(index).padStart(2, "0")}</b></i>)}
          <motion.span className={styles.hourHand} style={{ rotate: reduced ? activeIndex * 15 : hourRotate }} />
        </div>
        <div className={styles.collectionGhost}>{activeWatch.collectionName}</div>
        <motion.div className={styles.desktopRail} style={{ x: railX }}>
          {watches.map((item, index) => <HourCard key={item.id} item={item} active={index === activeIndex} hour={index} />)}
        </motion.div>
        <div className={styles.activeMeta}>
          <span>{String(activeIndex).padStart(2, "0")}:00</span>
          <div><strong>{activeWatch.collectionName} / {activeWatch.name}</strong><small>{activeWatch.reference}</small></div>
        </div>
        <div ref={mobileRailRef} className={styles.mobileRail} onScroll={updateMobileIndex}>
          {watches.map((item, index) => <HourCard key={item.id} item={item} active={index === activeIndex} hour={index} />)}
        </div>
      </div>
    </section>
  );
}

function HourCard({ item, active, hour }) {
  return (
    <article className={`${styles.card} ${active ? styles.activeCard : ""}`} style={{ "--card": item.cardColor, "--ink": item.textColor, "--accent": item.accentColor }}>
      <span className={styles.hour}>{String(hour).padStart(2, "0")}H</span>
      <Image src={item.image} alt={item.alt} width={1800} height={1800} sizes="(max-width: 767px) 74vw, 33vw" />
      <div><small>{item.collectionName} / {item.reference}</small><h3>{item.name}</h3><p>{item.caseSize} · {item.movement}</p></div>
    </article>
  );
}
