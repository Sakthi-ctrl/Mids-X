"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              MIDAS X
            </Link>
            <p className={styles.brandDesc}>
              India&apos;s first B2B2C multi-asset AI-powered marketplace built exclusively for financial intermediaries.
            </p>
            <div className={styles.socialRow}>
              <span className={styles.socialCircle}></span>
              <span className={styles.socialCircle}></span>
              <span className={styles.socialCircle}></span>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>PRODUCTS</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="#platform" className={styles.link}>
                  MIDASX MarketPlace
                </Link>
              </li>
              <li>
                <Link href="#platform" className={styles.link}>
                  MIDASX SaaS
                </Link>
              </li>
              <li>
                <Link href="#platform" className={styles.link}>
                  MAGNIX AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>SOLUTIONS</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="#solutions" className={styles.link}>
                  MFDs &amp; Distributors
                </Link>
              </li>
              <li>
                <Link href="#solutions" className={styles.link}>
                  Wealth Firms &amp; RIAs
                </Link>
              </li>
              <li>
                <Link href="#solutions" className={styles.link}>
                  Stockbrokers
                </Link>
              </li>
              <li>
                <Link href="#solutions" className={styles.link}>
                  Enterprises &amp; AMCs
                </Link>
              </li>
              <li>
                <Link href="#solutions" className={styles.link}>
                  Banks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>COMPANY</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="#" className={styles.link}>
                  About MIDASX
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  Insights
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 MIDASX. ALL RIGHTS RESERVED.
          </p>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>
              PRIVACY POLICY
            </Link>
            <Link href="#" className={styles.legalLink}>
              TERMS OF USE
            </Link>
            <Link href="#" className={styles.legalLink}>
              SECURITY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
