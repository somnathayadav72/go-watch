"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { collections } from "@/data/collections";
import { site } from "@/config/site";
import styles from "./FinalSections.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) { event.currentTarget.reportValidity(); return; }
    // Connect an approved enquiry endpoint here when backend integration is authorized.
    setSent(true);
  };
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.contactIntro}><span>17 / BRAND ENQUIRY</span><h2 id="contact-title">FIND YOUR<br /><i>TIME WORLD.</i></h2><p>Tell the studio what draws your eye—quiet proportion, after-hours contrast, depth, motion, distance, or color.</p><div><a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={16} /></a><span>{site.location}</span></div></div>
      {sent ? <div className={styles.success} role="status"><Check size={34} /><h3>Your enquiry has been prepared.</h3><p>Thank you. This frontend concept keeps the message on your device until an approved endpoint is connected.</p><button onClick={() => setSent(false)}>Prepare another enquiry</button></div> :
      <form className={styles.form} onSubmit={handleSubmit}>
        <label><span>NAME</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label><span>EMAIL</span><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
        <label><span>COUNTRY</span><input name="country" autoComplete="country-name" required placeholder="Country" /></label>
        <label><span>COLLECTION OF INTEREST</span><select name="collection" defaultValue="" required><option value="" disabled>Select a collection</option>{collections.map((collection) => <option key={collection.id} value={collection.id}>{collection.name} — {collection.tagline}</option>)}</select></label>
        <label className={styles.message}><span>MESSAGE</span><textarea name="message" rows="5" required placeholder="What relationship with time are you looking for?" /></label>
        <button type="submit">Prepare enquiry <ArrowUpRight size={18} /></button>
      </form>}
    </section>
  );
}
