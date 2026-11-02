"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { timeRail } from "@/data/navigation";
import styles from "./GlobalTimeRail.module.css";

export default function GlobalTimeRail() {
  const [active, setActive] = useState(timeRail[0][1]);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const sections = timeRail
      .map(([id, label]) => ({ node: document.getElementById(id), label }))
      .filter(({ node }) => node);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(sections.find(({ node }) => node === visible.target)?.label ?? timeRail[0][1]);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.5] },
    );
    sections.forEach(({ node }) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className={styles.rail} aria-hidden="true">
      <span className={styles.label}>{active}</span>
      <div className={styles.track}>
        <motion.span className={`${styles.progress} ${styles.desktopProgress}`} style={{ scaleY: reducedMotion ? 0.08 : scale }} />
        <motion.span className={`${styles.progress} ${styles.mobileProgress}`} style={{ scaleX: reducedMotion ? 0.08 : scale }} />
        {Array.from({ length: 24 }, (_, index) => <i key={index} style={{ top: `${(index / 23) * 100}%` }} />)}
      </div>
      <span className={styles.end}>24</span>
    </aside>
  );
}
