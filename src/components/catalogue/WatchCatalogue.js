"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { collections } from "@/data/collections";
import { watches } from "@/data/watches";
import styles from "./WatchCatalogue.module.css";

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function WatchCatalogue() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const visible = filter === "all" ? watches : watches.filter((watch) => watch.collectionId === filter);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusables = [...dialog.querySelectorAll(focusableSelector)];
    focusables[0]?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key !== "Tab" || !focusables.length) return;
      const first = focusables[0];
      const last = focusables.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [selected]);

  const openDetails = (watch, trigger) => { lastTriggerRef.current = trigger; setSelected(watch); };

  return (
    <section id="catalogue" className={styles.catalogue} aria-labelledby="catalogue-title">
      <div className={styles.head}>
        <span>12 / THE CHROMATIC INDEX</span>
        <div><h2 id="catalogue-title">ALL 24.<br /><i>ONE FIELD.</i></h2><p>A calm index after the mechanisms—every expression of time, arranged by color and character.</p></div>
      </div>
      <div className={styles.filters} aria-label="Filter watches by collection">
        <button className={filter === "all" ? styles.activeFilter : ""} onClick={() => setFilter("all")}>All / 24</button>
        {collections.map((collection) => <button key={collection.id} className={filter === collection.id ? styles.activeFilter : ""} onClick={() => setFilter(collection.id)} style={{ "--accent": collection.colors.accent }}>{collection.name} / 04</button>)}
      </div>
      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {visible.map((watch, index) => (
            <motion.article layout key={watch.id} className={styles.card} data-collection={watch.collectionId} style={{ "--card": watch.cardColor, "--ink": watch.textColor, "--accent": watch.accentColor }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .4, delay: Math.min(index * .02, .16) }}>
              <div className={styles.visual}>
                <span className={styles.cardNumber}>{String(watches.indexOf(watch) + 1).padStart(2, "0")}</span>
                <Image src={watch.image} alt={watch.alt} width={1800} height={1800} sizes="(max-width: 600px) 94vw, (max-width: 1099px) 47vw, (max-width: 1439px) 32vw, 24vw" />
                <span className={styles.motionGlyph} aria-hidden="true" />
              </div>
              <div className={styles.cardCopy}>
                <div className={styles.eyebrow}><span>{watch.collectionName}</span><i style={{ background: watch.accentColor }} /><span>{watch.reference}</span></div>
                <h3>{watch.name}</h3>
                <p>{watch.description.split(". ")[0]}.</p>
                <dl><div><dt>CASE</dt><dd>{watch.caseSize}</dd></div><div><dt>MOVEMENT</dt><dd>{watch.movement.replace(" concept", "")}</dd></div></dl>
                <button onClick={(event) => openDetails(watch, event.currentTarget)}>View details <ArrowUpRight size={17} /></button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && <WatchDialog watch={selected} dialogRef={dialogRef} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function WatchDialog({ watch, dialogRef, onClose }) {
  const related = watches.find((item) => item.collectionId === watch.collectionId && item.id !== watch.id);
  return (
    <motion.div className={styles.dialogBackdrop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <motion.div ref={dialogRef} className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="watch-dialog-title" initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ type: "spring", stiffness: 220, damping: 28 }} style={{ "--card": watch.cardColor, "--ink": watch.textColor, "--accent": watch.accentColor }}>
        <button className={styles.dialogClose} onClick={onClose} aria-label="Close watch details"><X /></button>
        <div className={styles.dialogVisual}>
          <Image src={watch.image} alt={watch.alt} width={1800} height={1800} sizes="(max-width: 767px) 90vw, 55vw" />
          <div className={styles.frontInset}><Image src={watch.frontImage} alt={`Front dial view of ${watch.collectionName} ${watch.name}`} width={1800} height={1800} sizes="160px" /></div>
          <span>{watch.reference}</span>
        </div>
        <div className={styles.dialogCopy}>
          <span>{watch.collectionName} / {watch.category}</span>
          <h2 id="watch-dialog-title">{watch.name}</h2>
          <p>{watch.description}</p>
          <dl>
            <div><dt>CASE</dt><dd>{watch.caseMaterial}</dd></div><div><dt>DIAL</dt><dd>{watch.dial}</dd></div><div><dt>STRAP</dt><dd>{watch.strap}</dd></div><div><dt>MOVEMENT</dt><dd>{watch.movement}</dd></div><div><dt>WATER RESISTANCE</dt><dd>{watch.waterResistance}</dd></div>
          </dl>
          {related && <button className={styles.related} onClick={() => { onClose(); document.getElementById("catalogue")?.scrollIntoView(); }}>Related / {related.name} <ArrowUpRight size={16} /></button>}
        </div>
      </motion.div>
    </motion.div>
  );
}
