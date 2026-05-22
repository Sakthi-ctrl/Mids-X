"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Users, TrendingUp, Coins, Landmark, Globe, Activity, Terminal, Shield, Percent } from "lucide-react";
import styles from "./AudienceTabs.module.css";

type AudienceId = "mfd" | "wm" | "advisory" | "fo" | "fintech";

interface AudienceItem {
  id: AudienceId;
  label: string;
  title: string;
  desc: string;
  points: string[];
}

export default function AudienceTabs() {
  const [activeTab, setActiveTab] = useState<AudienceId>("mfd");

  const audiences: AudienceItem[] = [
    {
      id: "mfd",
      label: "MFDs & Distributors",
      title: "Scale Your MFD Practice Without Limits",
      desc: "Move beyond single-asset limitations. Offer Mutual Funds, corporate deposits, and alternative investment products under your own name and brand. Streamline your paperwork and maximize commissions.",
      points: [
        "100% digital client onboarding",
        "Automated commission tracking",
        "Alternative investment product access",
        "Paperless switch & STP execution",
      ],
    },
    {
      id: "wm",
      label: "Wealth Firms & RIAs",
      title: "Elite Advisory Journeys for HNI Clients",
      desc: "Provide comprehensive wealth solutions. Access dynamic multi-asset reporting, automated rebalancing recommendations, and white-labeled investor applications that elevate your professional value.",
      points: [
        "Integrated multi-asset portfolios",
        "Custom branded client apps",
        "Advanced advisory dashboards",
        "Automated rebalancing templates",
      ],
    },
    {
      id: "advisory",
      label: "Stockbrokers",
      title: "Activate Your Client Base with Wealth Products",
      desc: "Cross-sell mutual funds, structured notes, and fixed-income assets to your active trading client base. Leverage robust APIs and seamless execution rails.",
      points: [
        "Direct API stock/MF integration",
        "Automated cross-sell engines",
        "Consolidated ledger reporting",
        "Zero-friction client activation",
      ],
    },
    {
      id: "fo",
      label: "Enterprises & AMCs",
      title: "Institutional Wealth Solutions at Scale",
      desc: "Power large-scale advisory networks and asset management companies. Centralized admin panels, custom compliance rules, and granular permission access levels.",
      points: [
        "Hierarchical admin consoles",
        "Multi-distributor billing grids",
        "Automated enterprise compliance",
        "Custom portal deployments",
      ],
    },
    {
      id: "fintech",
      label: "Banks",
      title: "Bank-Grade Compliance & Multi-Asset Execution",
      desc: "Launch fully secure, highly compliant, and scalable digital investment platforms for banking clients in weeks using developer-first wealth APIs.",
      points: [
        "RESTful API & Webhook support",
        "Fully managed KYC workflows",
        "Direct mutual fund execution",
        "Pre-built white-labeled components",
      ],
    },
  ];

  const currentAudience = audiences.find((a) => a.id === activeTab)!;

  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.sub}>Tailored Journeys</span>
          <h2 className={styles.title}>Built for Every Serious Financial Intermediary</h2>
          <p className={styles.desc}>
            Flexible solutions designed to enhance your operational efficiency, client trust, and revenue potential.
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
            
            <div className={styles.pointsGrid}>
              {currentAudience.points.map((pt, i) => (
                <div key={i} className={styles.pointRow}>
                  <div className={styles.pointIconWrap}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <a href="#" className={styles.ctaLink}>
              Scale your practice today <ArrowRight size={16} />
            </a>
          </div>

          <div className={styles.visualContent}>
            {activeTab === "mfd" && (
              <div className={styles.mockCard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>MFD PRACTICE OVERVIEW</div>
                  <div className={styles.statusIndicator}>
                    <span className={styles.statusPulse}></span> Live Practice
                  </div>
                </div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgBlue}`}>
                      <Users size={14} />
                    </div>
                    <span className={styles.rowLabel}>Active Investors</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>1,248</span>
                    <div className={styles.avatarGroup} style={{ marginLeft: "12px" }}>
                      <div className={`${styles.avatar} ${styles.avatarBlue}`}>AS</div>
                      <div className={`${styles.avatar} ${styles.avatarGreen}`}>PP</div>
                      <div className={`${styles.avatar} ${styles.avatarPurple}`}>MK</div>
                      <div className={styles.avatar}>+1k</div>
                    </div>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgGreen}`}>
                      <TrendingUp size={14} />
                    </div>
                    <span className={styles.rowLabel}>Consolidated AUM</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={`${styles.rowValue} ${styles.textAccent}`}>₹42.8 Crores</span>
                    <span className={styles.trendBadge} style={{ marginLeft: "8px" }}>+14.2%</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgPurple}`}>
                      <Coins size={14} />
                    </div>
                    <span className={styles.rowLabel}>SIP Monthly Book</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>₹18.4 Lakhs</span>
                    <span className={styles.trendBadge} style={{ marginLeft: "8px" }}>+8.6%</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgGold}`}>
                      <Landmark size={14} />
                    </div>
                    <span className={styles.rowLabel}>Alternative Asset AUM</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>₹4.6 Crores</span>
                  </div>
                </div>

                <div className={styles.progressBarContainer} style={{ marginTop: "12px", marginBottom: 0 }}>
                  <div className={styles.progressBarTrack}>
                    <div className={`${styles.progressBarSegment} ${styles.segmentBlue}`} style={{ width: "90.3%" }}></div>
                    <div className={`${styles.progressBarSegment} ${styles.segmentPurple}`} style={{ width: "9.7%" }}></div>
                  </div>
                  <div className={styles.progressBarLegends} style={{ marginTop: "6px" }}>
                    <div><span className={`${styles.legendDot} ${styles.dotBlue}`}></span>Mutual Funds (90.3%)</div>
                    <div><span className={`${styles.legendDot} ${styles.dotPurple}`}></span>Alternatives (9.7%)</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "wm" && (
              <div className={styles.mockCard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>WEALTH ADVISORY PORTAL</div>
                  <div className={styles.statusIndicator} style={{ color: "#d97706", backgroundColor: "#fffbeb", borderColor: "rgba(217, 119, 6, 0.1)" }}>
                    <span className={styles.statusPulse} style={{ backgroundColor: "#f59e0b" }}></span> Elite Access
                  </div>
                </div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgGreen}`}>
                      <Shield size={14} />
                    </div>
                    <span className={styles.rowLabel}>Client Risk Profile</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <div className={styles.riskBadge}>
                      <span className={styles.riskDot}></span> Moderately Aggressive
                    </div>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgBlue}`}>
                      <Percent size={14} />
                    </div>
                    <span className={styles.rowLabel}>Equity Allocation</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>65.4%</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgCyan}`}>
                      <Percent size={14} />
                    </div>
                    <span className={styles.rowLabel}>Fixed Income Allocation</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>24.6%</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgGold}`}>
                      <Percent size={14} />
                    </div>
                    <span className={styles.rowLabel}>Alternative/Gold</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>10.0%</span>
                  </div>
                </div>

                <div className={styles.progressBarContainer} style={{ marginTop: "12px", marginBottom: 0 }}>
                  <div className={styles.progressBarTrack}>
                    <div className={`${styles.progressBarSegment} ${styles.segmentBlue}`} style={{ width: "65.4%" }}></div>
                    <div className={`${styles.progressBarSegment} ${styles.segmentCyan}`} style={{ width: "24.6%" }}></div>
                    <div className={`${styles.progressBarSegment} ${styles.segmentGold}`} style={{ width: "10.0%" }}></div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "6px" }}>
                    <div className={styles.progressBarLegends}>
                      <div><span className={`${styles.legendDot} ${styles.dotBlue}`}></span>Equity (65.4%)</div>
                      <div><span className={`${styles.legendDot} ${styles.dotCyan}`}></span>Fixed Income (24.6%)</div>
                    </div>
                    <div className={styles.progressBarLegends}>
                      <div><span className={`${styles.legendDot} ${styles.dotGold}`}></span>Alternative/Gold (10.0%)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "advisory" && (
              <div className={styles.mockCard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>FIRM MANAGEMENT</div>
                  <div className={styles.statusIndicator}>
                    <span className={styles.statusPulse}></span> Admin Portal
                  </div>
                </div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgGreen}`}>
                      <Coins size={14} />
                    </div>
                    <span className={styles.rowLabel}>Firm Monthly Revenue</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={`${styles.rowValue} ${styles.textAccent}`}>₹8,45,000.00</span>
                    <span className={styles.trendBadge} style={{ marginLeft: "8px" }}>+18.9%</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgBlue}`}>
                      <Users size={14} />
                    </div>
                    <span className={styles.rowLabel}>Active Wealth Advisors</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>24</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgPurple}`}>
                      <Activity size={14} />
                    </div>
                    <span className={styles.rowLabel}>Weekly Advisory Activity</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue} style={{ color: "#059669" }}>92% Active</span>
                  </div>
                </div>

                <div className={styles.advisorsList} style={{ marginTop: "12px" }}>
                  <div className={styles.advisorRow}>
                    <div className={styles.advisorMeta}>
                      <div className={`${styles.advisorAvatar} ${styles.avatarBlue}`}>AS</div>
                      <div className={styles.advisorInfo}>
                        <span className={styles.advisorName}>Amit Sharma</span>
                        <span className={styles.advisorStatus}>Active Now</span>
                      </div>
                    </div>
                    <span className={styles.advisorUtilization}>94% active</span>
                  </div>
                  <div className={styles.advisorRow}>
                    <div className={styles.advisorMeta}>
                      <div className={`${styles.advisorAvatar} ${styles.advisorGreen}`}>PP</div>
                      <div className={styles.advisorInfo}>
                        <span className={styles.advisorName}>Priya Patel</span>
                        <span className={styles.advisorStatus}>Active Now</span>
                      </div>
                    </div>
                    <span className={styles.advisorUtilization}>88% active</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fo" && (
              <div className={styles.mockCard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>FAMILY TRUST ENTITY VIEW</div>
                  <div className={styles.statusIndicator}>
                    <span className={styles.statusPulse}></span> Trust: Apex Family
                  </div>
                </div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgBlue}`}>
                      <Landmark size={14} />
                    </div>
                    <span className={styles.rowLabel}>Trust Holdings</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>₹124.5 Crores</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgPurple}`}>
                      <Globe size={14} />
                    </div>
                    <span className={styles.rowLabel}>Offshore Portfolios</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>$4.2 Million</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider}></div>

                <div className={styles.dashboardRow}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer} ${styles.iconBgGold}`}>
                      <TrendingUp size={14} />
                    </div>
                    <span className={styles.rowLabel}>Direct Startup Equity</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue}>8 Companies</span>
                  </div>
                </div>

                <div className={styles.progressBarContainer} style={{ marginTop: "12px", marginBottom: 0 }}>
                  <div className={styles.sectorBadgeGroup}>
                    <span className={styles.sectorBadge}>Fintech</span>
                    <span className={styles.sectorBadge}>SaaS</span>
                    <span className={styles.sectorBadge}>Deeptech</span>
                    <span className={styles.sectorBadge}>AI</span>
                  </div>
                </div>

                <div className={styles.dashboardFooter} style={{ borderTop: "1px solid rgba(0,0,0,0.04)", paddingTop: "12px", marginTop: "12px" }}>
                  <span className={styles.footerLabel}>Granular Permission Access</span>
                  <div className={styles.avatarGroup}>
                    <div className={`${styles.avatar} ${styles.avatarPurple}`}>JD</div>
                    <div className={`${styles.avatar} ${styles.avatarBlue}`}>HR</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fintech" && (
              <div className={`${styles.mockCard} ${styles.darkConsole}`}>
                <div className={styles.dashboardHeader} style={{ borderBottomColor: "rgba(255, 255, 255, 0.08)" }}>
                  <div className={styles.dashboardTitle} style={{ color: "#cbd5e1" }}>DEVELOPER API CONSOLE</div>
                  <div className={styles.statusIndicator} style={{ color: "#34d399", backgroundColor: "rgba(52, 211, 153, 0.1)", borderColor: "rgba(52, 211, 153, 0.15)" }}>
                    <span className={styles.statusPulse} style={{ backgroundColor: "#34d399" }}></span> API Operational
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div className={`${styles.consoleLogLine} ${styles.logSuccess}`}>
                    <div>
                      <span className={`${styles.methodBadge} ${styles.methodPost}`}>POST</span>
                      <span>/v1/investments</span>
                    </div>
                    <span className={styles.statusGreen}>200 OK (42ms)</span>
                  </div>

                  <div className={`${styles.consoleLogLine} ${styles.logSuccess}`}>
                    <div>
                      <span className={`${styles.methodBadge} ${styles.methodGet}`}>GET</span>
                      <span>/v1/kyc/status</span>
                    </div>
                    <span className={styles.statusGreen}>200 OK (18ms)</span>
                  </div>

                  <div className={`${styles.consoleLogLine} ${styles.logAccepted}`}>
                    <div>
                      <span className={`${styles.methodBadge} ${styles.methodPost}`}>POST</span>
                      <span>/v1/payouts/trigger</span>
                    </div>
                    <span className={styles.statusBlue}>202 ACC (85ms)</span>
                  </div>
                </div>

                <div className={styles.dashboardDivider} style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", margin: "12px 0" }}></div>

                <div className={styles.dashboardRow} style={{ padding: "4px 8px" }}>
                  <div className={styles.rowLabelGroup}>
                    <div className={`${styles.rowIconContainer}`} style={{ backgroundColor: "rgba(52, 211, 153, 0.1)", color: "#34d399" }}>
                      <Terminal size={14} />
                    </div>
                    <span className={styles.rowLabel} style={{ color: "#94a3b8" }}>Average API Response Time</span>
                  </div>
                  <div className={styles.rowValueGroup}>
                    <span className={styles.rowValue} style={{ color: "#ffffff" }}>42 ms</span>
                  </div>
                </div>

                <div className={styles.latencyChart}>
                  <div className={styles.latencyBar} style={{ height: "45%" }}></div>
                  <div className={styles.latencyBar} style={{ height: "65%" }}></div>
                  <div className={styles.latencyBar} style={{ height: "35%" }}></div>
                  <div className={`${styles.latencyBar} ${styles.latencyBarActive}`} style={{ height: "85%" }}></div>
                  <div className={styles.latencyBar} style={{ height: "55%" }}></div>
                  <div className={styles.latencyBar} style={{ height: "40%" }}></div>
                </div>

                <div className={styles.dashboardFooter} style={{ borderTopColor: "rgba(255, 255, 255, 0.08)", color: "#94a3b8", paddingTop: "12px", marginTop: "12px" }}>
                  <span className={styles.footerLabel} style={{ color: "#94a3b8" }}>Developer Sandbox</span>
                  <span className={styles.footerLabel} style={{ color: "#34d399" }}>99.99% Uptime</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
