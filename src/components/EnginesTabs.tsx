"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Cpu, Shield, Globe } from "lucide-react";
import styles from "./EnginesTabs.module.css";

type TabId = "marketplace" | "saas" | "ai";

interface TabItem {
  id: TabId;
  num: string;
  label: string;
  sub: string;
}

export default function EnginesTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("marketplace");

  const tabs: TabItem[] = [
    {
      id: "marketplace",
      num: "01",
      label: "MIDASX MarketPlace",
      sub: "Multi-asset product distribution for your clients",
    },
    {
      id: "saas",
      num: "02",
      label: "MIDASX SaaS",
      sub: "Full-stack practice management platform",
    },
    {
      id: "ai",
      num: "03",
      label: "MAGNIX AI",
      sub: "Practical intelligence for growth",
    },
  ];

  return (
    <section id="platform" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.title}>
            Three Engines.<br />
            One Connected Wealth Platform.
          </h2>
          <p className={styles.desc}>
            Each product solves a specific growth need — and they work together as one platform.
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
                <span className={styles.tabNum}>{tab.num}</span>
                <span className={styles.tabLabel}>{tab.label}</span>
                <span className={styles.tabSub}>{tab.sub}</span>
              </button>
            ))}
          </div>

          <div className={styles.contentCard} key={activeTab}>
            <div className={styles.cardHead}>
              <span className={styles.cardBadge}>
                {activeTab === "marketplace" && "Midasx MarketPlace"}
                {activeTab === "saas" && "Midasx SaaS"}
                {activeTab === "ai" && "Magnix AI"}
              </span>
              <h3 className={styles.cardTitle}>
                {activeTab === "marketplace" && "Multi-asset product access for your clients"}
                {activeTab === "saas" && "Full-stack practice management platform"}
                {activeTab === "ai" && "Practical intelligence for growth"}
              </h3>
              <p className={styles.cardDesc}>
                {activeTab === "marketplace" &&
                  "Access a curated selection of mutual funds, stock baskets, fixed deposits, loan against mutual funds, and research calls through a single unified catalog."}
                {activeTab === "saas" &&
                  "Empower your wealth management practice with deep analytics, automated client billing, CRM tools, and seamless workflow execution."}
                {activeTab === "ai" &&
                  "Leverage artificial intelligence to automate portfolio reviews, spot optimization opportunities, and draft personalized client advisory notes."}
              </p>
            </div>

            {/* Visual simulated UI mockup */}
            <div className={styles.visualPlaceholder}>
              {activeTab === "marketplace" && (
                <div className={styles.marketplacePreview}>
                  <div className={styles.previewTitle}>MARKETPLACE UI PREVIEW</div>
                  <div className={styles.previewGrid}>
                    <div className={styles.previewItem}>
                      <div className={styles.itemHeader}>
                        <span className={styles.itemTitle}>Mutual Funds</span>
                        <span className={styles.statusActive}>Active</span>
                      </div>
                      <span className={styles.itemVal}>1,200+ Schemes</span>
                    </div>
                    <div className={styles.previewItem}>
                      <div className={styles.itemHeader}>
                        <span className={styles.itemTitle}>Stock Baskets</span>
                        <span className={styles.statusActive}>Active</span>
                      </div>
                      <span className={styles.itemVal}>Curated Portfolios</span>
                    </div>
                    <div className={styles.previewItem}>
                      <div className={styles.itemHeader}>
                        <span className={styles.itemTitle}>Fixed Deposits</span>
                        <span className={styles.statusReady}>Ready</span>
                      </div>
                      <span className={styles.itemVal}>Multi-Bank FDs</span>
                    </div>
                    <div className={styles.previewItem}>
                      <div className={styles.itemHeader}>
                        <span className={styles.itemTitle}>LAMF & LAS</span>
                        <span className={styles.statusNew}>New</span>
                      </div>
                      <span className={styles.itemVal}>Instant Liquidity</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "saas" && (
                <div className={styles.saasPreview}>
                  <div className={styles.previewTitle}>SAAS WORKSPACE PREVIEW</div>
                  <div className={styles.saasMetricGrid}>
                    <div className={styles.saasMetricCard}>
                      <span className={styles.saasMetricLabel}>Active Clients</span>
                      <span className={styles.saasMetricValue}>412</span>
                    </div>
                    <div className={styles.saasMetricCard}>
                      <span className={styles.saasMetricLabel}>Invoiced (MTD)</span>
                      <span className={styles.saasMetricValue}>₹8,45,000</span>
                    </div>
                  </div>
                  <div className={styles.saasTaskBar}>
                    <span className={styles.saasTaskText}>KYC Onboarding Reviews Pending</span>
                    <span className={styles.saasTaskTag}>5 Actionable</span>
                  </div>
                </div>
              )}

              {activeTab === "ai" && (
                <div className={styles.aiPreview}>
                  <div className={styles.previewTitle}>MAGNIX AI PREVIEW</div>
                  <div className={styles.aiNotificationList}>
                    <div className={styles.aiAlertRow}>
                      <span className={`${styles.aiIndicator} ${styles.aiIndicatorGreen}`}></span>
                      <div className={styles.aiAlertContent}>
                        <span className={styles.aiAlertTitle}>Portfolio Drift Alert</span>
                        <span className={styles.aiAlertDesc}>Drift of 5.4% detected for Amit Sharma. Rebalancing draft ready.</span>
                      </div>
                    </div>
                    <div className={styles.aiAlertRow}>
                      <span className={`${styles.aiIndicator} ${styles.aiIndicatorBlue}`}></span>
                      <div className={styles.aiAlertContent}>
                        <span className={styles.aiAlertTitle}>Tax-Loss Harvesting Opportunity</span>
                        <span className={styles.aiAlertDesc}>Saved ₹43,200 for 12 clients this fiscal week.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <ul className={styles.bullets}>
              {activeTab === "marketplace" && (
                <>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    100% paperless onboarding & digital product journeys
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Mutual funds, stock baskets, FDs, LAMF, research calls
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    White-labelled storefront — your brand, your client
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Real-time transaction tracking and portfolio visibility
                  </li>
                </>
              )}
              {activeTab === "saas" && (
                <>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Centralized CRM & client relationship tracking
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Automated advisory billing, invoices & fee collection
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Comprehensive compliance check & audit trail
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Multi-tier sub-broker & referral commission management
                  </li>
                </>
              )}
              {activeTab === "ai" && (
                <>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    AI-powered tax-loss harvesting & portfolio rebalancing
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Smart allocation drift alerts & correction suggestions
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Generative advisory notes drafted in your brand voice
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletDot}></span>
                    Predictive client engagement & churn prevention insights
                  </li>
                </>
              )}
            </ul>

            <a href="#" className={styles.exploreLink}>
              {activeTab === "marketplace" && "Explore MarketPlace"}
              {activeTab === "saas" && "Explore SaaS Platform"}
              {activeTab === "ai" && "Explore MAGNIX AI"}
              <ArrowRight size={16} className={styles.linkArrowIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
