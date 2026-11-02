"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { watchesByCollection } from "@/data/watches";
import styles from "./CollectionRooms.module.css";

function RoomIndex({ number, collection, scene }) {
  return <div className={styles.roomIndex}><span>{number} / {collection}</span><span>{scene}</span></div>;
}

function WatchLineup({ watches, className = "" }) {
  return <div className={`${styles.lineup} ${className}`}>{watches.map((watch, index) => <Image key={watch.id} src={watch.image} alt={watch.alt} width={1800} height={1800} sizes="(max-width: 767px) 42vw, 18vw" style={{ "--i": index }} />)}</div>;
}

export function AetherRoom() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const collectionWatches = watchesByCollection.aether;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const aperture = useTransform(scrollYProgress, [0, .72], ["circle(18% at 50% 50%)", "circle(78% at 50% 50%)"]);
  const heroScale = useTransform(scrollYProgress, [0, .75], [1.3, .84]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-35, 165]);
  const copyOpacity = useTransform(scrollYProgress, [.52, .75], [0, 1]);
  return (
    <section ref={ref} id="aether" className={`${styles.room} ${styles.aether}`} aria-labelledby="aether-title">
      <div className={styles.sticky}>
        <RoomIndex number="06" collection="AETHER" scene="THE APERTURE" />
        <motion.div className={styles.aperture} style={{ clipPath: reduced ? "circle(78% at 50% 50%)" : aperture }}>
          <span className={styles.architecture} aria-hidden="true" />
          <motion.div className={styles.roomWatch} style={{ scale: reduced ? .84 : heroScale }}><Image src={collectionWatches[0].image} alt={collectionWatches[0].alt} width={1800} height={1800} sizes="(max-width: 767px) 92vw, 55vw" /></motion.div>
          <motion.span className={styles.apertureRing} style={{ rotate: reduced ? 120 : ringRotate }} aria-hidden="true" />
        </motion.div>
        <motion.div className={styles.roomCopy} style={{ opacity: reduced ? 1 : copyOpacity }}><p>MODERN DRESS / 36–40MM</p><h2 id="aether-title">AETHER<br /><i>QUIET PRECISION.</i></h2></motion.div>
        <WatchLineup watches={collectionWatches} />
      </div>
    </section>
  );
}

export function VantaRoom() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const collectionWatches = watchesByCollection.vanta;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const backgroundColor = useTransform(scrollYProgress, [0, .38, 1], ["#D6D7D9", "#111216", "#0E0F12"]);
  const markerOpacity = useTransform(scrollYProgress, [.28, .6], [.05, 1]);
  const sweepRotate = useTransform(scrollYProgress, [.55, .82], [-90, 270]);
  const copyOpacity = useTransform(scrollYProgress, [.68, .88], [0, 1]);
  const dayOpacity = useTransform(scrollYProgress, [0, .5], [1, .24]);
  return (
    <motion.section ref={ref} id="vanta" className={`${styles.room} ${styles.vanta}`} style={{ backgroundColor: reduced ? "#111216" : backgroundColor }} aria-labelledby="vanta-title">
      <div className={styles.sticky}>
        <RoomIndex number="07" collection="VANTA" scene="LIGHTS OUT" />
        <motion.div className={styles.vantaWatch} style={{ opacity: reduced ? 1 : dayOpacity }}><Image src={collectionWatches[3].image} alt={collectionWatches[3].alt} width={1800} height={1800} sizes="(max-width: 767px) 92vw, 52vw" /></motion.div>
        <motion.div className={styles.lumeDial} style={{ opacity: reduced ? 1 : markerOpacity }} aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <i key={i} style={{ transform: `rotate(${i * 30}deg)` }} />)}
          <motion.span style={{ rotate: reduced ? 180 : sweepRotate }} />
        </motion.div>
        <motion.div className={styles.roomCopy} style={{ opacity: reduced ? 1 : copyOpacity }}><p>URBAN / MONOCHROME</p><h2 id="vanta-title">DAY GIVES WAY<br /><i>TO THE DIAL.</i></h2></motion.div>
        <WatchLineup watches={collectionWatches} className={styles.darkLineup} />
      </div>
    </motion.section>
  );
}

export function TidalRoom() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const collectionWatches = watchesByCollection.tidal;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const backgroundColor = useTransform(scrollYProgress, [0, .3, .62, 1], ["#C8E7DF", "#0B6B70", "#061C2E", "#031017"]);
  const watchY = useTransform(scrollYProgress, [0, 1], ["-16vh", "8vh"]);
  const bezelRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const causticOpacity = useTransform(scrollYProgress, [0, .65], [.72, 0]);
  const titleOpacity = useTransform(scrollYProgress, [.72, .93], [0, 1]);
  return (
    <motion.section ref={ref} id="tidal" className={`${styles.room} ${styles.tidal}`} style={{ backgroundColor: reduced ? "#061C2E" : backgroundColor }} aria-labelledby="tidal-title">
      <div className={styles.sticky}>
        <RoomIndex number="08" collection="TIDAL" scene="DESCENT" />
        <motion.div className={styles.caustics} style={{ opacity: reduced ? .15 : causticOpacity }} aria-hidden="true" />
        <div className={styles.depthScale} aria-hidden="true"><span>SURFACE</span><span>10</span><span>20</span><span>30</span><span>40</span><span>DEPTH</span></div>
        <motion.div className={styles.tidalWatch} style={{ y: reduced ? 0 : watchY }}><Image src={collectionWatches[0].image} alt={collectionWatches[0].alt} width={1800} height={1800} sizes="(max-width: 767px) 94vw, 52vw" /><motion.span className={styles.bezel} style={{ rotate: reduced ? 45 : bezelRotate }} aria-hidden="true" /></motion.div>
        {Array.from({ length: 8 }, (_, index) => <i key={index} className={styles.bubble} style={{ left: `${9 + index * 11}%`, top: `${80 - (index % 4) * 17}%`, width: `${5 + (index % 3) * 5}px` }} aria-hidden="true" />)}
        <motion.div className={styles.roomCopy} style={{ opacity: reduced ? 1 : titleOpacity }}><p>DIVE / 20–50 ATM CONCEPT</p><h2 id="tidal-title">BUILT BELOW<br /><i>THE SURFACE.</i></h2></motion.div>
      </div>
    </motion.section>
  );
}

export function VectorRoom() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const collectionWatches = watchesByCollection.vector;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const chronoRotate = useTransform(scrollYProgress, [0, .5, .72, 1], [0, 300, 300, 0]);
  const firstPusher = useTransform(scrollYProgress, [.05, .12, .2], [0, 3, 0]);
  const secondPusher = useTransform(scrollYProgress, [.72, .8, .9], [0, 3, 0]);
  const timerOpacity = useTransform(scrollYProgress, [.45, .56, .72], [0, 1, 0]);
  const copyOpacity = useTransform(scrollYProgress, [.78, .94], [0, 1]);
  return (
    <section ref={ref} id="vector" className={`${styles.room} ${styles.vector}`} aria-labelledby="vector-title">
      <div className={styles.sticky}>
        <RoomIndex number="09" collection="VECTOR" scene="START / STOP / RESET" />
        <div className={styles.vectorChapters}><span>START</span><span>STOP</span><span>RESET</span></div>
        <div className={styles.vectorWatch}>
          <Image src={collectionWatches[0].image} alt={collectionWatches[0].alt} width={1800} height={1800} sizes="(max-width: 767px) 94vw, 56vw" />
          <motion.span className={styles.chronoHand} style={{ rotate: reduced ? 42 : chronoRotate }} aria-hidden="true" />
          <motion.i className={`${styles.pusher} ${styles.pusherOne}`} style={{ x: reduced ? 0 : firstPusher }} aria-hidden="true" />
          <motion.i className={`${styles.pusher} ${styles.pusherTwo}`} style={{ x: reduced ? 0 : secondPusher }} aria-hidden="true" />
        </div>
        <motion.div className={styles.campaignTime} style={{ opacity: reduced ? 1 : timerOpacity }}>00:41.8<small>DECORATIVE CAMPAIGN TIME</small></motion.div>
        <motion.div className={styles.roomCopy} style={{ opacity: reduced ? 1 : copyOpacity }}><p>PERFORMANCE / CHRONOGRAPH</p><h2 id="vector-title">MEASURED<br /><i>IN MOTION.</i></h2></motion.div>
      </div>
    </section>
  );
}

export function AltusRoom() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const collectionWatches = watchesByCollection.altus;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const backgroundColor = useTransform(scrollYProgress, [0, .55, 1], ["#48563A", "#C1A574", "#7599B3"]);
  const watchX = useTransform(scrollYProgress, [0, 1], ["-16vw", "12vw"]);
  const watchY = useTransform(scrollYProgress, [0, 1], ["12vh", "-10vh"]);
  const compassRotate = useTransform(scrollYProgress, [0, 1], [0, 65]);
  const titleOpacity = useTransform(scrollYProgress, [.68, .9], [0, 1]);
  return (
    <motion.section ref={ref} id="altus" className={`${styles.room} ${styles.altus}`} style={{ backgroundColor: reduced ? "#7599B3" : backgroundColor }} aria-labelledby="altus-title">
      <div className={styles.sticky}>
        <RoomIndex number="10" collection="ALTUS" scene="ELEVATION" />
        <Image className={styles.topography} src="/textures/elevation-lines.svg" alt="" width={1200} height={700} aria-hidden="true" />
        <div className={styles.checkpoints} aria-hidden="true"><span>GROUND</span><span>RIDGE</span><span>HORIZON</span></div>
        <motion.div className={styles.altusWatch} style={{ x: reduced ? 0 : watchX, y: reduced ? 0 : watchY }}><Image src={collectionWatches[2].image} alt={collectionWatches[2].alt} width={1800} height={1800} sizes="(max-width: 767px) 94vw, 52vw" /><motion.span className={styles.compass} style={{ rotate: reduced ? 35 : compassRotate }} aria-hidden="true" /></motion.div>
        <motion.div className={styles.roomCopy} style={{ opacity: reduced ? 1 : titleOpacity }}><p>FIELD / AVIATION</p><h2 id="altus-title">READ<br /><i>THE HORIZON.</i></h2></motion.div>
      </div>
    </motion.section>
  );
}

export function LumaRoom() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const collectionWatches = watchesByCollection.luma;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const ringOne = useTransform(scrollYProgress, [0, 1], [-18, 80]);
  const ringTwo = useTransform(scrollYProgress, [0, 1], [20, -65]);
  const ringThree = useTransform(scrollYProgress, [0, 1], [-30, 48]);
  const watchRotate = useTransform(scrollYProgress, [0, 1], [-2, 4]);
  const copyY = useTransform(scrollYProgress, [.2, .75], [60, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(3, Math.floor(latest * 4));
    setActive((current) => current === next ? current : next);
  });

  const activeWatch = collectionWatches[reduced ? 0 : active];
  return (
    <section ref={ref} id="luma" className={`${styles.room} ${styles.luma}`} aria-labelledby="luma-title">
      <div className={styles.sticky}>
        <RoomIndex number="11" collection="LUMA" scene="PRISM" />
        <div className={styles.prismPlanes} aria-hidden="true"><motion.i className={styles.lilac} style={{ rotate: reduced ? 0 : ringOne }} /><motion.i className={styles.mint} style={{ rotate: reduced ? 0 : ringTwo }} /><motion.i className={styles.lemon} style={{ rotate: reduced ? 0 : ringThree }} /><motion.i className={styles.rose} style={{ rotate: reduced ? 0 : ringTwo }} /></div>
        <div className={styles.lumaWatch}>
          <AnimatePresence mode="popLayout">
            <motion.div key={activeWatch.id} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: .45 }} style={{ rotate: reduced ? 0 : watchRotate }}>
              <Image src={activeWatch.image} alt={activeWatch.alt} width={1800} height={1800} sizes="(max-width: 767px) 94vw, 52vw" />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div className={styles.roomCopy} style={{ y: reduced ? 0 : copyY }}><p>COLOR / CONTEMPORARY</p><h2 id="luma-title">TIME<br />IN FULL<br /><i>COLOR.</i></h2></motion.div>
        <div className={styles.swatches}>{collectionWatches.map((watch, index) => <span key={watch.id} className={index === active ? styles.activeSwatch : ""} style={{ background: watch.cardColor }}><b>{String(index + 1).padStart(2, "0")}</b></span>)}</div>
      </div>
    </section>
  );
}
