import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { collections } from "@/data/collections";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}><Image src="/brand/orvyn-mark.svg" alt="" width={66} height={66} aria-hidden="true" /><strong>{site.name}</strong><span>WATCH GROUP</span><p>{site.tagline}</p></div>
        <nav aria-label="Collection links"><span>COLLECTIONS</span>{collections.map((collection) => <a key={collection.id} href={`#${collection.id}`}>{collection.name}</a>)}</nav>
        <nav aria-label="Information links"><span>OBSERVATORY</span><a href="#catalogue">All Watches</a><a href="#craft">Craft</a><a href="#contact">Contact</a><a href="#zero-hour">Return to Zero Hour</a></nav>
        <nav aria-label="Policy and social links"><span>FOLLOW / LEGAL</span><a href="#contact">Instagram <ArrowUpRight size={13} /></a><a href="#contact">Journal <ArrowUpRight size={13} /></a><a href="#contact">Privacy</a><a href="#contact">Terms</a><a href="#contact">Accessibility</a></nav>
      </div>
      <div className={styles.wordmark}>ORVYN</div>
      <div className={styles.bottom}><span>© 2026 {site.fullName}. Concept brand for this project.</span><span>{site.location} / EST. {site.founded}</span></div>
    </footer>
  );
}
