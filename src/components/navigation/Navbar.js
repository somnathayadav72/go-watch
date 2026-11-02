"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRight, Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { collections } from "@/data/collections";
import { navigation } from "@/data/navigation";
import styles from "./Navbar.module.css";

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const menu = menuRef.current;
    const focusables = [...menu.querySelectorAll(focusableSelector)];
    focusables[0]?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <a className={styles.brand} href="#zero-hour" aria-label={`${site.name} home`}>
          <Image src="/brand/orvyn-mark.svg" alt="" width={30} height={30} aria-hidden="true" />
          <span>{site.name}</span>
        </a>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <a className={styles.cta} href="#collections">Enter the collection <ArrowDownRight size={16} /></a>
        <button ref={triggerRef} className={styles.menuButton} onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu /></button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div ref={menuRef} className={styles.mobileMenu} role="dialog" aria-modal="true" aria-label="Site menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className={styles.mobileTop}>
              <span>{site.name} / MENU</span>
              <button onClick={close} aria-label="Close menu"><X /></button>
            </div>
            <nav aria-label="Mobile navigation">
              {collections.map((collection, index) => (
                <motion.a key={collection.id} href={`#${collection.id}`} onClick={close} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * .045 }} style={{ "--accent": collection.colors.accent }}>
                  <span>{collection.number}</span>{collection.name}<ArrowDownRight />
                </motion.a>
              ))}
            </nav>
            <div className={styles.mobileLinks}>
              {navigation.slice(1).map((item) => <a key={item.label} href={item.href} onClick={close}>{item.label}</a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
