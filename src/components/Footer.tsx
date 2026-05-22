"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, Send, Video } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              midasx<span className={styles.logoDot}></span>in
            </Link>
            <p className={styles.brandDesc}>
              SaaS infrastructure empowering modern wealth professionals, advisory teams, and distribution houses to build high-growth financial businesses.
            </p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Globe size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <Send size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <Video size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Products</h4>
            <ul className={styles.linkList}>
              <li><Link href="#platform" className={styles.link}>RECON Engine</Link></li>
              <li><Link href="#platform" className={styles.link}>Payout Engine</Link></li>
              <li><Link href="#platform" className={styles.link}>Client Portals</Link></li>
              <li><Link href="#solutions" className={styles.link}>Alternative Investments</Link></li>
              <li><Link href="#solutions" className={styles.link}>Mutual Funds Platform</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linkList}>
              <li><Link href="#solutions" className={styles.link}>Distributors</Link></li>
              <li><Link href="#solutions" className={styles.link}>Wealth Managers</Link></li>
              <li><Link href="#solutions" className={styles.link}>Advisory Firms</Link></li>
              <li><Link href="#solutions" className={styles.link}>Family Offices</Link></li>
              <li><Link href="#solutions" className={styles.link}>Fintech APIs</Link></li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Stay Updated</h4>
            <p className={styles.newsletterText}>
              Get the latest insights on WealthTech trends, compliance updates, and practice-scaling strategies.
            </p>
            {submitted ? (
              <div className={styles.subscribeSuccess}>
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.btnSubmit}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} MIDASX Technology Pvt Ltd. All rights reserved. 
            <br />
            <span className={styles.disclaimer}>
              Disclaimer: Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
            </span>
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Terms of Use</a>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Regulatory Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
