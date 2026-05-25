"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Percent,
  Users,
  Layers,
  ArrowRight,
  TrendingDown,
  Cpu,
  ShieldAlert,
  Sliders,
  DollarSign,
  Compass,
  ArrowUpRight,
  Sparkles,
  Zap,
  Target,
  CircleDot,
  Smartphone,
  Coins,
  Grid,
  Menu,
  Bell,
  Wifi,
  Battery,
  Signal,
  MoreHorizontal,
  Briefcase
} from "lucide-react";
import Header from "../components/Header";
import EnginesTabs from "../components/EnginesTabs";
import AudienceTabs from "../components/AudienceTabs";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function Home() {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const heroSlides = React.useMemo(() => [
    {
      category: "FINANCIAL INTERMEDIARIES",
      title: "Stockbrokers",
      description: "Bring trading, investments and client relationship management into a unified experience on one intelligent platform.",
      linkText: "Explore Broker Solution",
      linkUrl: "#solutions"
    },
    {
      category: "WEALTH DISTRIBUTORS",
      title: "MFDs & Distributors",
      description: "Move beyond single-asset limitations. Offer Mutual Funds, corporate deposits, and alternative investment products under your own brand.",
      linkText: "Explore MFD Solution",
      linkUrl: "#solutions"
    },
    {
      category: "WEALTH FIRMS & RIAs",
      title: "Wealth Managers",
      description: "Provide comprehensive wealth solutions. Access dynamic multi-asset reporting, custom branded apps, and rebalancing recommendations.",
      linkText: "Explore Advisory Solution",
      linkUrl: "#solutions"
    },
    {
      category: "ENTERPRISES & AMCS",
      title: "Family Offices",
      description: "Power large-scale advisory networks and trust entities with centralized admin consoles, compliance rules, and granular permissions.",
      linkText: "Explore Enterprise Solution",
      linkUrl: "#solutions"
    }
  ], []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const thoughtLeaders = [
    {
      badge: "SaaS",
      quote: "“With the right technology partner, scaling operations becomes effortless. Every process feels faster, smarter, and more connected.”",
      author: "Aakash Bansal",
      title: "Co-Founder and CEO",
      image: "/thought_leader.png"
    },
    {
      badge: "WealthTech",
      quote: "“Technology should not just solve problems — it should create opportunities for innovation, growth, and long-term impact.”",
      author: "Paresh Paladiya",
      title: "Co-Founder & CTO",
      image: "/thought_leader_2.png"
    },
    {
      badge: "Compliance",
      quote: "“True leadership is about building a vision that inspires innovation, empowers people, and drives sustainable growth.”",
      author: "Rajesh Paresh Soni",
      title: "Co-Founder & Chairman",
      image: "/thought_leader_3.png"
    }
  ];

  const stats = [
    { value: "2,500+", line1: "Partners", line2: "Enabled" },
    { value: "7,00,000+", line1: "Served", line2: "Clients" },
    { value: "₹2.5L Cr+", line1: "AUM", line2: "Managed" },
    { value: "₹15 Cr+", line1: "Commissions", line2: "Paid" },
  ];

  const products = [
    {
      num: "01",
      title: "One connected ecosystem",
      desc: "All products, journeys, client data and reporting in one place. Zero platform-switching, zero information silos.",
      icon: <CircleDot size={20} />,
    },
    {
      num: "02",
      title: "Your branded experience",
      desc: "Clients always see your identity across the app, reports, and communications — never a third-party platform.",
      icon: <Smartphone size={20} />,
    },
    {
      num: "03",
      title: "Full revenue control",
      desc: "No revenue sharing. Every rupee of AUM you manage stays yours. Complete independence.",
      icon: <Coins size={20} />,
    },
    {
      num: "04",
      title: "Multi-product access",
      desc: "MF, stocks, FDs, bonds, insurance — all from one unified product shelf.",
      icon: <Grid size={20} />,
    },
    {
      num: "05",
      title: "Faster execution",
      desc: "Digital workflows replace manual, fragmented legacy systems — serve clients at fintech speed.",
      icon: <Zap size={20} />,
    },
  ];

  const tickerItems = [
    "Mutual Funds",
    "Alternative Investments",
    "Global Stocks",
    "Corporate Bonds",
    "Structured Products",
    "Fixed Income",
    "PMS & AIFs",
    "Venture Capital",
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              
              {/* Left Column - Copy & Actions */}
              <div className={styles.heroLeft}>
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot}></span>
                  UNIFIED WEALTH INFRASTRUCTURE
                </div>
                <h1 className={styles.heroTitle}>
                  One Intelligent<br />
                  Platform.<br />
                  <span className={styles.heroTitleItalic}>Endless<br />Possibilities.</span>
                </h1>
                <p className={styles.heroDesc}>
                  MIDASX helps financial intermediaries build a modern, white-labelled wealth business across multiple financial products and client touchpoints.
                </p>
                <div className={styles.heroActions}>
                  <button className={styles.btnPrimaryRounded}>Book a Demo</button>
                  <button className={styles.btnSecondaryRounded}>Explore Products</button>
                </div>
              </div>
              {/* Right Column - Premium CSS iPhone solutions mockup */}
              <div className={styles.heroRight}>
                <div className={styles.phoneFrame}>
                  {/* Physical Buttons */}
                  <div className={styles.phonePowerButton} />
                  <div className={styles.phoneVolUpButton} />
                  <div className={styles.phoneVolDownButton} />
                  
                  <div className={styles.phoneScreen}>
                    {/* iOS Status Bar */}
                    <div className={styles.phoneStatusBar}>
                      <span className={styles.statusTime}>9:41</span>
                      <div className={styles.dynamicIsland} />
                      <div className={styles.statusIcons}>
                        <Signal size={12} strokeWidth={2.5} />
                        <Wifi size={12} strokeWidth={2.5} />
                        <Battery size={16} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* App Navigation Bar */}
                    <div className={styles.phoneAppHeader}>
                      <Menu size={18} className={styles.headerMenuIcon} />
                      <span className={styles.headerTitle}>Solutions</span>
                      <div className={styles.headerBellWrapper}>
                        <Bell size={18} className={styles.headerBellIcon} />
                        <span className={styles.headerBellDot} />
                      </div>
                    </div>

                    {/* Translucent layered waving gradient shapes */}
                    <div className={styles.waveBgContainer}>
                      <div className={styles.waveLayer1} />
                      <div className={styles.waveLayer2} />
                      <div className={styles.waveLayer3} />
                    </div>

                    {/* Floating Target Audience Solution Card inside the phone */}
                    <div key={activeSlideIndex} className={styles.phoneCard}>
                      <div className={styles.phoneCardHeader}>
                        <span className={styles.phoneCardHeaderLabel}>BUILT FOR</span>
                        <ArrowUpRight size={16} className={styles.phoneCardTrendIcon} />
                      </div>
                      <div className={styles.phoneCardDivider} />
                      
                      <div className={styles.phoneCardContent}>
                        <span className={styles.phoneCardCategory}>
                          {heroSlides[activeSlideIndex].category}
                        </span>
                        <h3 className={styles.phoneCardMainTitle}>
                          {heroSlides[activeSlideIndex].title}
                        </h3>
                        <p className={styles.phoneCardDescription}>
                          {heroSlides[activeSlideIndex].description}
                        </p>
                        
                        <a href={heroSlides[activeSlideIndex].linkUrl} className={styles.phoneCardCtaLink}>
                          {heroSlides[activeSlideIndex].linkText} <span className={styles.phoneArrowIcon}>→</span>
                        </a>
                      </div>

                      {/* Slider Dash Indicators at the bottom of the card */}
                      <div className={styles.phoneSliderIndicators}>
                        {heroSlides.map((_, idx) => (
                          <button
                            key={idx}
                            className={`${styles.phoneSliderDash} ${activeSlideIndex === idx ? styles.phoneActiveDash : ""}`}
                            onClick={() => setActiveSlideIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* App Bottom Navigation Bar inside the phone screen */}
                    <div className={styles.phoneBottomNav}>
                      <div className={`${styles.navItem} ${styles.navItemActive}`}>
                        <TrendingUp size={18} />
                        <span>Home</span>
                      </div>
                      <div className={styles.navItem}>
                        <TrendingUp size={18} style={{ transform: "rotate(45deg)" }} />
                        <span>Markets</span>
                      </div>
                      <div className={styles.navItem}>
                        <Briefcase size={18} />
                        <span>Portfolio</span>
                      </div>
                      <div className={styles.navItem}>
                        <Compass size={18} />
                        <span>Insights</span>
                      </div>
                      <div className={styles.navItem}>
                        <MoreHorizontal size={18} />
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Stats Row */}
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statVal}>{stat.value}</div>
                  <div className={styles.statLabel}>
                    <div className={styles.statLabelLine1}>{stat.line1}</div>
                    <div className={styles.statLabelLine2}>{stat.line2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logo / Asset Ribbon Marquee */}
        <section className={styles.tickerSection}>
          <div className={styles.tickerWrapper}>
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div key={index} className={styles.tickerItem}>
                <span className={styles.tickerDot}></span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Products Grid */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.productsHeader}>
              <span className={styles.sub}>Full Suite</span>
              <h2 className={styles.title}>
                One Platform. Every Product. Your Brand. Your Revenue.
              </h2>
              <p className={styles.desc}>
                Stop hopping between multiple vendor portals. Integrate all asset classes, settlement routines, and revenue mappings within a single digital ecosystem.
              </p>
            </div>

            <div className={styles.productsGrid}>
              {products.slice(0, 3).map((product) => (
                <div key={product.num} className={styles.productCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconCircle}>{product.icon}</div>
                  </div>
                  <div className={styles.cardBottom}>
                    <h3 className={styles.cardTitle}>{product.title}</h3>
                    <p className={styles.cardDesc}>{product.desc}</p>
                  </div>
                  <span className={styles.cardNumber}>{product.num}</span>
                </div>
              ))}
            </div>

            <div className={styles.productsRowBottom}>
              {products.slice(3).map((product) => (
                <div key={product.num} className={styles.productCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconCircle}>{product.icon}</div>
                  </div>
                  <div className={styles.cardBottom}>
                    <h3 className={styles.cardTitle}>{product.title}</h3>
                    <p className={styles.cardDesc}>{product.desc}</p>
                  </div>
                  <span className={styles.cardNumber}>{product.num}</span>
                </div>
              ))}
            </div>

            {/* Callout Banner */}
            <div className={styles.calloutBanner}>
              <div>
                <h3 className={styles.bannerTitle}>Grow AUM exponentially without growing headcount.</h3>
                <p className={styles.bannerDesc}>
                  Automate standard compliance workflows, client onboarding, and billing cycles to scale operations seamlessly.
                </p>
              </div>
              <button className={styles.bannerBtn}>Get The WealthTech Edge</button>
            </div>
          </div>
        </section>

        {/* Section 3: Engines Tab */}
        <EnginesTabs />

        {/* Section 4: AI Section */}
        <section className={styles.aiSection}>
          <div className={styles.container}>
            <div className={styles.aiGrid}>
              <div className={styles.aiLeft}>
                <span className={styles.sub}>MAGNIX AI</span>
                <h2 className={styles.title}>
                  AI That Works Where Intermediaries Need It Most
                </h2>
                <p className={`${styles.desc} ${styles.aiDesc}`}>
                  Practical intelligence built into the platform — spot allocation discrepancies, analyze investor behavior, identify tax-loss opportunities, and draft custom advisory updates.
                </p>
                <button className={`${styles.btnPrimary} ${styles.btnWithIcon}`}>
                  Meet MAGNIX AI <ArrowRight size={16} />
                </button>
              </div>

              <div className={styles.aiRight}>
                {/* Card 1: Agent M */}
                <div className={styles.aiCard}>
                  <div className={styles.aiCardHead}>
                    <div className={styles.aiCardLogoAgentM}>M</div>
                    <div className={styles.aiCardMeta}>
                      <span className={styles.aiCardTitle}>Agent M</span>
                      <span className={styles.aiCardSubtitle}>Personal Portfolio Analyst</span>
                    </div>
                    <button className={styles.aiCardLaunchBtn}>LAUNCH</button>
                  </div>
                  <div className={styles.aiCardPreview}>
                    <div className={styles.previewHeaderRow}>
                      <span className={styles.previewHeading}>PORTFOLIO DRIFT ANALYSIS</span>
                      <span className={styles.previewIndicatorGreen}>Active Scan</span>
                    </div>
                    <div className={styles.driftMetrics}>
                      <div className={styles.driftBarWrapper}>
                        <span className={styles.driftBarLabel}>Equity (US)</span>
                        <div className={styles.driftBarBg}>
                          <div className={styles.driftBarFillGreen} style={{ width: "72%" }}></div>
                        </div>
                        <span className={styles.driftBarVal}>72% (Target: 70%)</span>
                      </div>
                      <div className={styles.driftBarWrapper}>
                        <span className={styles.driftBarLabel}>Debt (Liquid)</span>
                        <div className={styles.driftBarBg}>
                          <div className={styles.driftBarFillOrange} style={{ width: "28%" }}></div>
                        </div>
                        <span className={styles.driftBarVal}>28% (Target: 30%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Portfolio Customizer */}
                <div className={styles.aiCard}>
                  <div className={styles.aiCardHead}>
                    <div className={styles.aiCardLogoCustomizer}>C</div>
                    <div className={styles.aiCardMeta}>
                      <span className={styles.aiCardTitle}>Portfolio Customizer</span>
                      <span className={styles.aiCardSubtitle}>Rebalancing & Drift</span>
                    </div>
                    <button className={styles.aiCardLaunchBtn}>LAUNCH</button>
                  </div>
                  <div className={styles.aiCardPreview}>
                    <div className={styles.previewHeaderRow}>
                      <span className={styles.previewHeading}>TAX-LOSS HARVESTING STATUS</span>
                      <span className={styles.previewIndicatorBlue}>Optimized</span>
                    </div>
                    <div className={styles.taxStatsGrid}>
                      <div className={styles.taxStatCard}>
                        <span className={styles.taxLabel}>Short Term Loss</span>
                        <span className={styles.taxVal}>₹42,500 Saved</span>
                      </div>
                      <div className={styles.taxStatCard}>
                        <span className={styles.taxLabel}>Long Term Loss</span>
                        <span className={styles.taxVal}>₹1,18,000 Saved</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Digital Advisor */}
                <div className={styles.aiCard}>
                  <div className={styles.aiCardHead}>
                    <div className={styles.aiCardLogoAdvisor}>D</div>
                    <div className={styles.aiCardMeta}>
                      <span className={styles.aiCardTitle}>Digital Advisor</span>
                      <span className={styles.aiCardSubtitle}>Personalized client communications</span>
                    </div>
                    <button className={styles.aiCardLaunchBtn}>LAUNCH</button>
                  </div>
                  <div className={styles.aiCardPreview}>
                    <div className={styles.previewHeaderRow}>
                      <span className={styles.previewHeading}>GENERATED ADVISORY BULLETIN</span>
                      <span className={styles.previewIndicatorPurple}>Draft Ready</span>
                    </div>
                    <div className={styles.bulletinDraftBox}>
                      <span className={styles.bulletinTitle}>Market Correction Update — Q2 2026</span>
                      <p className={styles.bulletinBody}>Dear Client, in light of the recent rate adjustments, we have optimized your portfolio's fixed income weight...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Audience/Solutions Selector */}
        <AudienceTabs />

        {/* Section 5.5: Thought Leadership Section */}
        <section className={styles.leadershipSection}>
          <div className={styles.container}>
            <div className={styles.leadershipCard}>
              <img 
                src={thoughtLeaders[activeLeaderIndex].image} 
                alt={thoughtLeaders[activeLeaderIndex].author}
                className={styles.leadershipImg}
              />
              <div className={styles.leadershipOverlay}>
                <div className={styles.leaderBadge}>
                  {thoughtLeaders[activeLeaderIndex].badge}
                </div>
                <blockquote className={styles.leaderQuote}>
                  {thoughtLeaders[activeLeaderIndex].quote}
                </blockquote>
                <div className={styles.leaderMeta}>
                  <div className={styles.leaderAuthor}>
                    {thoughtLeaders[activeLeaderIndex].author}
                  </div>
                  <div className={styles.leaderTitle}>
                    {thoughtLeaders[activeLeaderIndex].title}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel Page Indicators */}
            <div className={styles.carouselIndicators}>
              {thoughtLeaders.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.indicatorBar} ${activeLeaderIndex === idx ? styles.activeIndicator : ""}`}
                  onClick={() => setActiveLeaderIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Insights Grid */}
        <section className={styles.insightsSection}>
          <div className={styles.container}>
            <div className={styles.insightsHeader}>
              <h2 className={styles.title}>
                Insights for the Next Generation of Financial Intermediaries
              </h2>
              <p className={styles.insightsHeaderDesc}>
                Perspectives on AI in advisory, multi-asset distribution, investor behaviour and the evolving role of MFDs and wealth firms.
              </p>
            </div>

            <div className={styles.insightsGrid}>
              {/* Left Column: Featured Card */}
              <div className={styles.featuredCard}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderOverlay} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardCategory}>AI IN ADVISORY</div>
                  <h3 className={styles.postTitle}>
                    How AI Can Help Intermediaries Retain Clients
                  </h3>
                  <p className={styles.postDesc}>
                    A deep look at how behavioural AI insights are reshaping the way financial intermediaries manage client relationships, identify churn risks and unlock growth opportunities.
                  </p>
                  <a href="#" className={styles.readMoreBtn}>
                    Read Article <span className={styles.linkArrow}>→</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Stacked Cards */}
              <div className={styles.sideList}>
                {/* Top Stacked Card */}
                <div className={styles.sideCard}>
                  <div className={styles.sideCardMock}>
                    <div className={styles.placeholderOverlay} />
                  </div>
                  <div className={styles.sideCardBody}>
                    <div className={styles.cardCategory}>DISTRIBUTION</div>
                    <h3 className={styles.sideTitle}>
                      Why Multi-Asset Distribution Is the Next Growth Lever
                    </h3>
                    <a href="#" className={styles.readMoreBtn}>
                      Read <span className={styles.linkArrow}>→</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Stacked Card */}
                <div className={styles.sideCard}>
                  <div className={styles.sideCardMock}>
                    <div className={styles.placeholderOverlay} />
                  </div>
                  <div className={styles.sideCardBody}>
                    <div className={styles.cardCategory}>WEALTHTECH</div>
                    <h3 className={styles.sideTitle}>
                      Why White-Labelling Matters in WealthTech
                    </h3>
                    <a href="#" className={styles.readMoreBtn}>
                      Read <span className={styles.linkArrow}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Unified Split CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.splitCtaContainer}>
              {/* Left Panel (Black Background) */}
              <div className={styles.leftCta}>
                <div className={styles.ctaContentWrapper}>
                  <h3 className={styles.ctaTitle}>Ready to Build Your WealthTech Edge?</h3>
                  <p className={styles.ctaBodyText}>
                    See how MIDASX can help you own your brand, expand your product shelf and scale your entire financial distribution business from one intelligent platform.
                  </p>
                </div>
                <button className={styles.ctaButtonDark}>
                  Book a Demo
                </button>
              </div>

              {/* Right Panel (White Background) */}
              <div className={styles.rightCta}>
                <div className={styles.ctaContentWrapper}>
                  <h3 className={styles.ctaTitleLight}>Not ready for a demo yet?</h3>
                  <p className={styles.ctaBodyTextLight}>
                    Download our product overview and explore MIDASX at your own pace. Understand the platform, the products and the possibilities — before the conversation.
                  </p>
                </div>
                <button className={styles.ctaButtonLight}>
                  Download Product Overview <span className={styles.ctaButtonLightArrow}>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
