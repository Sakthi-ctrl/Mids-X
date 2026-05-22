"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCw, BarChart3, Database } from "lucide-react";
import styles from "./EnginesTabs.module.css";

type TabId = "recon" | "payout" | "analytics";

interface TabItem {
  id: TabId;
  label: string;
  sub: string;
}

export default function EnginesTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("recon");

  const tabs: TabItem[] = [
    {
      id: "recon",
      label: "RECON Engine",
      sub: "Automate transaction mapping and reconcile commissions with 100% precision.",
    },
    {
      id: "payout",
      label: "Payout Engine",
      sub: "Supercharge your business with real-time multi-tier distribution structures.",
    },
    {
      id: "analytics",
      label: "Analytics & Reporting",
      sub: "Deliver deep, white-labeled client insights across all asset classes.",
    },
  ];

  return (
    <section id="platform" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.sub}>Three Engines</span>
          <h2 className={styles.title}>One Connected Wealth Platform.</h2>
          <p className={styles.desc}>
            Built specifically to solve the core operational and advisory challenges of modern wealth professionals.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.tabList}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabLabel}>{tab.label}</span>
                <span className={styles.tabSub}>{tab.sub}</span>
              </button>
            ))}
          </div>

          <div className={styles.contentCard} key={activeTab}>
            <div className={styles.cardHead}>
              <span className={styles.cardBadge}>
                {activeTab === "recon" && "Data Accuracy"}
                {activeTab === "payout" && "Revenue Operations"}
                {activeTab === "analytics" && "Advisory Powerhouse"}
              </span>
              <h3 className={styles.cardTitle}>
                {activeTab === "recon" && "Automated Reconciliation & Matching"}
                {activeTab === "payout" && "Transparent Multi-tier Commissions"}
                {activeTab === "analytics" && "Dynamic Multi-Asset Reporting"}
              </h3>
              <p className={styles.cardDesc}>
                {activeTab === "recon" &&
                  "Reconcile massive transaction files from various registries, banks, and AMCs instantly. Zero manual mismatches."}
                {activeTab === "payout" &&
                  "Instantly calculate complex payouts for sub-agents, partners, and referrers with full transparency and zero delay."}
                {activeTab === "analytics" &&
                  "Provide your clients with unified portfolios tracking Mutual Funds, PMS, AIFs, Fixed Income, and more under one brand."}
              </p>
            </div>

            {/* Visual simulated UI mockup */}
            <div className={styles.visualPlaceholder}>
              {activeTab === "recon" && (
                <div className={styles.reconList}>
                  <div className={styles.reconHeader}>
                    <span>TRANSACTION LOG</span>
                    <span>STATUS</span>
                  </div>
                  <div className={styles.reconRow}>
                    <span className={styles.reconTextWithIcon}>
                      <Database size={14} className={styles.reconIconBlue} />
                      CAMS Mutual Fund Purchase - ₹1,00,000
                    </span>
                    <span className={styles.statusTag}>Matched</span>
                  </div>
                  <div className={styles.reconRow}>
                    <span className={styles.reconTextWithIcon}>
                      <Database size={14} className={styles.reconIconBlue} />
                      KFintech STP Switch Out - 4,212.5 Units
                    </span>
                    <span className={styles.statusTag}>Matched</span>
                  </div>
                  <div className={styles.reconRow}>
                    <span className={styles.reconTextWithIcon}>
                      <Database size={14} className={styles.reconIconBlue} />
                      HDFC Bank Settlement Match - Brokerage
                    </span>
                    <span className={styles.statusTag}>Matched</span>
                  </div>
                  <div className={styles.reconRow}>
                    <span className={styles.reconTextWithIcon}>
                      <Database size={14} className={styles.reconIconYellow} />
                      Alternative Asset Valuation Update
                    </span>
                    <span className={styles.statusPending}>Processing</span>
                  </div>
                </div>
              )}

              {activeTab === "payout" && (
                <div className={styles.payoutWrapper}>
                  <div className={styles.payoutGrid}>
                    <div className={styles.payoutStat}>
                      <span className={styles.payoutLabel}>COMMISSIONS EARNED</span>
                      <div className={styles.payoutVal}>₹2,84,500.00</div>
                    </div>
                    <div className={styles.payoutStat}>
                      <span className={styles.payoutLabel}>PARTNER PAYOUTS</span>
                      <div className={`${styles.payoutVal} ${styles.payoutValGreen}`}>
                        ₹1,42,250.00
                      </div>
                    </div>
                  </div>
                  <div className={styles.payoutAlert}>
                    <RefreshCw size={14} className={styles.payoutAlertIcon} />
                    <span>Payout automation schedule completed on 22nd May, 2026</span>
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div>
                  <div className={styles.analyticsHeader}>
                    <span className={styles.analyticsHeaderTitle}>AUM GROWTH TREND</span>
                    <BarChart3 size={16} />
                  </div>
                  <div className={styles.chartContainer}>
                    <div className={styles.chartBar}></div>
                    <div className={styles.chartBar}></div>
                    <div className={styles.chartBar}></div>
                    <div className={styles.chartBar}></div>
                    <div className={styles.chartBar}></div>
                    <div className={styles.chartBar}></div>
                    <div className={`${styles.chartBar} ${styles.chartBarActive}`}></div>
                  </div>
                </div>
              )}
            </div>

            <ul className={styles.bullets}>
              <li className={styles.bulletItem}>
                <span className={styles.bulletDot}></span>
                Seamless multi-asset reconciliation
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletDot}></span>
                Flexible distribution logic & splits
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletDot}></span>
                Custom dashboard branding
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletDot}></span>
                Comprehensive audit logs
              </li>
            </ul>

            <a href="#" className={styles.learnMoreLink}>
              Learn more about this engine <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
