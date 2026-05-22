"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Partners", href: "#solutions" },
    { label: "Investors", href: "#platform" },
    { label: "Why MIDASX", href: "#why-midasx" },
    { label: "Resources", href: "#resources" },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            midasx<span className={styles.logoDot}></span>in
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.btnDemo}>Book a Demo</button>
          </div>

          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className={styles.mobileDemoBtn} onClick={() => setIsMenuOpen(false)}>
            Book a Demo
          </button>
        </div>
      )}
    </>
  );
}
