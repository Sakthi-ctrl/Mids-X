"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./AudienceTabs.module.css";

type AudienceId = "mfd" | "wm" | "advisory" | "fo" | "fintech";

interface AudienceItem {
  id: AudienceId;
  label: string;
  title: string;
  desc: string;
  ctaText: string;
  previewLabel: string;
}

export default function AudienceTabs() {
  const [activeTab, setActiveTab] = useState<AudienceId>("mfd");

  const audiences: AudienceItem[] = [
    {
      id: "mfd",
      label: "MFDs & Distributors",
      title: "Scale Your MFD Practice Without Limits",
      desc: "Scale beyond standard mutual funds with digital journeys, growth tools, and multi-asset access — all under your own name. Connect with HNI clients using robust advisory tools, portfolio reporting, and automated features.",
      ctaText: "Explore MFD Solution",
      previewLabel: "MFD WORKSPACE PREVIEW",
    },
    {
      id: "wm",
      label: "Wealth Firms & RIAs",
      title: "Elite Advisory Journeys for HNI Clients",
      desc: "Elevate your advisory firm with high-end client relationship tools, portfolio tracking, and customized HNI workflows designed for premium financial advisory houses.",
      ctaText: "Explore RIA Solution",
      previewLabel: "RIA WORKSPACE PREVIEW",
    },
    {
      id: "advisory",
      label: "Stockbrokers",
      title: "Activate Your Client Base with Wealth Products",
      desc: "Seamlessly cross-sell mutual funds, alternative assets, and fixed-income portfolios to your active trading users via secure, developer-first APIs and processing engines.",
      ctaText: "Explore Broker Solution",
      previewLabel: "BROKER WORKSPACE PREVIEW",
    },
    {
      id: "fo",
      label: "Enterprises & AMCs",
      title: "Institutional Wealth Solutions at Scale",
      desc: "Empower family offices and large distributor networks with hierarchical administrator consoles, custom compliance guardrails, and detailed sub-broker billing management.",
      ctaText: "Explore Enterprise Solution",
      previewLabel: "ENTERPRISE WORKSPACE PREVIEW",
    },
    {
      id: "fintech",
      label: "Banks",
      title: "Bank-Grade Compliance & Multi-Asset Execution",
      desc: "Integrate secure, compliant digital investment solutions into your banking application. Deliver unified wealth portfolios and real-time processing tracks via developer APIs.",
      ctaText: "Explore Banking Solution",
      previewLabel: "BANKING WORKSPACE PREVIEW",
    },
  ];

  const currentAudience = audiences.find((a) => a.id === activeTab)!;

  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.title}>
            Built for Every Serious<br />
            Financial Intermediary
          </h2>
          <p className={styles.desc}>
            Select your category to see how MIDASX is specifically built for your business model.
          </p>
        </div>

        <div className={styles.tabBar}>
          {audiences.map((aud) => (
            <button
              key={aud.id}
              className={`${styles.tabItem} ${activeTab === aud.id ? styles.activeTab : styles.inactiveTab}`}
              onClick={() => setActiveTab(aud.id)}
            >
              {aud.label}
            </button>
          ))}
        </div>

        <div className={styles.content} key={activeTab}>
          <div className={styles.textContent}>
            <h3 className={styles.contentTitle}>{currentAudience.title}</h3>
            <p className={styles.contentDesc}>{currentAudience.desc}</p>
            
            <a href="#" className={styles.ctaLink}>
              {currentAudience.ctaText} <ArrowRight size={14} className={styles.ctaArrowIcon} />
            </a>
          </div>

          <div className={styles.visualContent}>
            <span className={styles.visualLabel}>{currentAudience.previewLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
