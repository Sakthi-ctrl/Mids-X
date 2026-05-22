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
  Grid
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
      quote: "“Unlike most financial institutions, Mercury is built on software. Everything can be done within the app in 1-2 minutes.”",
      author: "Karri Saarinen",
      title: "Founder, Linear",
      image: "/thought_leader.png"
    },
    {
      badge: "WealthTech",
      quote: "“Scaling our advisory firm was a nightmare of paperwork until we integrated MIDASX's APIs. Now we onboard clients in minutes.”",
      author: "Ananya Sharma",
      title: "Managing Partner, Vertex Wealth",
      image: "/thought_leader_2.png"
    },
    {
      badge: "Compliance",
      quote: "“The automated reconciliation and payout tracking saved our finance operations over 30 hours of manual work every single month.”",
      author: "Marcus Chen",
      title: "Chief Operating Officer, Apex Advisors",
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

              {/* Right Column - Interactive Target Audience Card */}
              <div className={styles.heroRight}>
                <div className={styles.heroCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardHeaderLabel}>BUILT FOR</span>
                    <TrendingUp size={20} className={styles.cardTrendIcon} />
                  </div>
                  <div className={styles.cardDivider}></div>
                  
                  {/* Dynamic Slide Content with Key to Re-trigger Fade Animation */}
                  <div key={activeSlideIndex} className={styles.cardSlideContent}>
                    <span className={styles.cardCategory}>
                      {heroSlides[activeSlideIndex].category}
                    </span>
                    <h3 className={styles.cardMainTitle}>
                      {heroSlides[activeSlideIndex].title}
                    </h3>
                    <p className={styles.cardDescription}>
                      {heroSlides[activeSlideIndex].description}
                    </p>
                    <a 
                      href={heroSlides[activeSlideIndex].linkUrl} 
                      className={styles.cardCtaLink}
                    >
                      {heroSlides[activeSlideIndex].linkText} <span className={styles.arrowIcon}>→</span>
                    </a>
                  </div>

                  {/* Slider Dash Indicators */}
                  <div className={styles.sliderIndicators}>
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        className={`${styles.sliderDash} ${activeSlideIndex === idx ? styles.activeDash : ""}`}
                        onClick={() => setActiveSlideIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
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
                <span className={styles.sub}>Artificial Intelligence</span>
                <h2 className={styles.title}>
                  AI That Works Where Intermediaries Need It Most
                </h2>
                <p className={`${styles.desc} ${styles.aiDesc}`}>
                  Stop wasting hours reviewing client sheets manually. Our built-in AI models scan allocations, identify tax-loss opportunities, and draft personalized communications under your firm's brand voice.
                </p>
                <button className={`${styles.btnPrimary} ${styles.btnWithIcon}`}>
                  Explore AI Capabilities <ArrowRight size={16} />
                </button>
              </div>

              <div className={styles.aiRight}>
                <div className={styles.aiCard}>
                  <div className={styles.aiCardHead}>
                    <span className={`${styles.aiCardBadge} ${styles.aiCardBadgeGreen}`}></span>
                    <span className={styles.aiCardLabel}>PORTFOLIO DRIFT</span>
                    <span className={styles.aiCardTime}>1 min ago</span>
                  </div>
                  <div className={styles.aiCardBar}>
                    <div className={styles.aiCardBarContent}>
                      <div className={styles.aiCardBarLineHeader}></div>
                      <div className={styles.aiCardBarLine}></div>
                      <div className={styles.aiCardBarLine}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.aiCard}>
                  <div className={styles.aiCardHead}>
                    <span className={`${styles.aiCardBadge} ${styles.aiCardBadgeBlue}`}></span>
                    <span className={styles.aiCardLabel}>TAX OPTIMIZER</span>
                    <span className={styles.aiCardTime}>3 min ago</span>
                  </div>
                  <div className={styles.aiCardBar}>
                    <div className={styles.aiCardBarContent}>
                      <div className={styles.aiCardBarLineHeader}></div>
                      <div className={styles.aiCardBarLine}></div>
                      <div className={styles.aiCardBarLine}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.aiCard}>
                  <div className={styles.aiCardHead}>
                    <span className={`${styles.aiCardBadge} ${styles.aiCardBadgePurple}`}></span>
                    <span className={styles.aiCardLabel}>CLIENT COMMUNICATIONS</span>
                    <span className={styles.aiCardTime}>5 min ago</span>
                  </div>
                  <div className={styles.aiCardBar}>
                    <div className={styles.aiCardBarContent}>
                      <div className={styles.aiCardBarLineHeader}></div>
                      <div className={styles.aiCardBarLine}></div>
                      <div className={styles.aiCardBarLine}></div>
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
            <div 
              className={styles.leadershipCard} 
              style={{ backgroundImage: `url(${thoughtLeaders[activeLeaderIndex].image})` }}
            >
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
