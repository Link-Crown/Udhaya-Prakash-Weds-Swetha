import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Compass,
  Heart,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import "./styles.css";

import coupleArt from "./assets/couple.jpeg";
import coupleArt2 from "./assets/couple 2.jpeg";
import groomArt from "./assets/groom.jpeg";
import brideArt from "./assets/bride.jpeg";
import godArt from "./assets/god.jpeg";
import hallArt from "./assets/wedding hall.jpeg";

const MAPS = {
  mandapam: "https://maps.app.goo.gl/VRgmBx7DoxUxZrnH6?g_st=ic",
  temple: "https://maps.app.goo.gl/cEaVQDTc8EuNUcDd9?g_st=ic"
};

const EASE = [0.22, 1, 0.36, 1];

function OrnamentalLine({ className = "" }) {
  return (
    <div className={`orn-line ${className}`} aria-hidden="true">
      <span />
      <i>✦</i>
      <span />
    </div>
  );
}

function Mandala({ className = "" }) {
  return (
    <div className={`mandala ${className}`} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} style={{ transform: `rotate(${i * 45}deg)` }} />
      ))}
      <b>✦</b>
    </div>
  );
}

function FloralCorner({ side = "left" }) {
  return (
    <div className={`floral-corner ${side}`} aria-hidden="true">
      <span>❧</span><span>✿</span><span>❧</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-lead">{text}</p>}
      <OrnamentalLine className="mt-5" />
    </div>
  );
}

function EnvelopeIntro({ onOpen }) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1850);
  };

  return (
    <motion.section
      className="envelope-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ duration: 0.65, delay: 1.55 }}
      aria-label="Sealed wedding invitation"
    >
      <div className="intro-pattern" />
      <Mandala className="intro-mandala intro-mandala-a" />
      <Mandala className="intro-mandala intro-mandala-b" />

      {/* Grand Full Screen Envelope Scene */}
      <motion.div
        className={`envelope-scene ${opening ? "is-opening" : ""}`}
        animate={reduce ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="envelope-shadow" />
        <div className="envelope">
          {/* Paper inside envelope */}
          <div className="envelope-paper">
            <div className="paper-inner">
              <div className="paper-monogram">U <span>&amp;</span> S</div>
              <div className="paper-names">Udhaya Prakash<br />&amp; Swetha</div>
              <div className="paper-rule" />
              <small>With love &amp; blessings</small>
            </div>
          </div>

          <div className="envelope-back" />

          {/* Folded Pocket Flaps (Left, Right, Bottom) */}
          <div className="envelope-pocket">
            <div className="pocket-fold pocket-fold-left" />
            <div className="pocket-fold pocket-fold-right" />
            <div className="pocket-fold pocket-fold-bottom" />
          </div>

          {/* Top Flap Folding to Center */}
          <motion.div
            className="envelope-top-flap"
            animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          />

          <div className="envelope-gold-edge" />

          {/* Heart-Shaped Wax Seal with Stable Anchor (Prevents Framer Motion Transform Overwrite) */}
          <div className="wax-seal-anchor">
            <motion.button
              type="button"
              className="wax-heart-seal"
              onClick={open}
              aria-label="Open Udhaya Prakash and Swetha's wedding invitation"
              animate={reduce || opening ? {} : { scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
            >
              <svg viewBox="0 0 160 160" className="heart-seal-svg" aria-hidden="true">
                <defs>
                  {/* Wax Radial Gradient */}
                  <radialGradient id="waxMainGrad" cx="38%" cy="32%" r="68%">
                    <stop offset="0%" stopColor="#f04369" />
                    <stop offset="25%" stopColor="#c81e46" />
                    <stop offset="65%" stopColor="#87102e" />
                    <stop offset="100%" stopColor="#4e0618" />
                  </radialGradient>

                  {/* Wax Inner Highlight */}
                  <radialGradient id="waxHighlight" cx="30%" cy="25%" r="50%">
                    <stop offset="0%" stopColor="#ff7a99" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#d6244f" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#87102e" stopOpacity="0" />
                  </radialGradient>

                  {/* Gold Monogram Gradient */}
                  <radialGradient id="sealGoldGrad" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#fff2d6" />
                    <stop offset="45%" stopColor="#e5be65" />
                    <stop offset="100%" stopColor="#9a7428" />
                  </radialGradient>

                  {/* Drop Shadows */}
                  <filter id="cordShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#1a0409" floodOpacity="0.45" />
                  </filter>
                  <filter id="sealDepthShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#22040b" floodOpacity="0.55" />
                  </filter>
                </defs>

                {/* Decorative Tied Ribbon/Cord Under Wax Seal */}
                <g filter="url(#cordShadow)">
                  {/* Left cord loop */}
                  <path
                    d="M 68,84 C 36,60 14,46 20,32 C 28,20 46,34 62,68"
                    fill="none"
                    stroke="#1c1819"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 68,84 C 36,60 14,46 20,32 C 28,20 46,34 62,68"
                    fill="none"
                    stroke="#3a3235"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Right cord tails */}
                  <path
                    d="M 94,82 C 114,88 134,96 150,108"
                    fill="none"
                    stroke="#1c1819"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 90,90 C 108,102 126,120 138,138"
                    fill="none"
                    stroke="#1c1819"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>

                {/* Wax drip droplet */}
                <circle cx="122" cy="112" r="4.5" fill="url(#waxMainGrad)" filter="url(#sealDepthShadow)" />

                {/* Organic Melted Wax Heart Puddle */}
                <g filter="url(#sealDepthShadow)">
                  <path
                    d="M 80,138 C 38,108 16,84 16,56 C 16,35 31,20 52,20 C 65,20 75,27 80,38 C 85,27 95,20 108,20 C 129,20 144,35 144,56 C 144,84 122,108 80,138 Z"
                    fill="url(#waxMainGrad)"
                  />
                  {/* Melted Wax Outer Organic Ripples */}
                  <path
                    d="M 80,141 C 74,141 34,110 13,76 C 8,68 10,50 20,38 C 30,26 44,18 56,22 C 68,26 76,34 80,41 C 84,34 92,26 104,22 C 116,18 130,26 140,38 C 150,50 152,68 147,76 C 126,110 86,141 80,141 Z"
                    fill="url(#waxMainGrad)"
                    opacity="0.9"
                  />
                  {/* Outer Raised Wax Ridge */}
                  <path
                    d="M 80,128 C 46,102 26,80 26,56 C 26,40 38,28 54,28 C 65,28 74,34 80,44 C 86,34 95,28 106,28 C 122,28 134,40 134,56 C 134,80 114,102 80,128 Z"
                    fill="none"
                    stroke="#ff5c82"
                    strokeWidth="3"
                    opacity="0.6"
                  />
                  <path
                    d="M 80,126 C 47,100 28,78 28,56 C 28,41 39,30 54,30 C 65,30 73,36 80,45 C 87,36 95,30 106,30 C 121,30 132,41 132,56 C 132,78 113,100 80,126 Z"
                    fill="none"
                    stroke="#5e091d"
                    strokeWidth="2.5"
                  />
                  {/* Inner Embossed Heart Rim */}
                  <path
                    d="M 80,116 C 51,92 35,73 35,56 C 35,44 44,35 56,35 C 65,35 73,40 80,49 C 87,40 95,35 104,35 C 116,35 125,44 125,56 C 125,73 109,92 80,116 Z"
                    fill="url(#waxMainGrad)"
                    stroke="#ffaec0"
                    strokeWidth="2"
                  />
                  {/* Specular Wax Highlight */}
                  <path
                    d="M 80,114 C 53,91 38,72 38,56 C 38,46 46,38 56,38 C 65,38 72,43 80,51 C 88,43 95,38 104,38 C 114,38 122,46 122,56 C 122,72 107,91 80,114 Z"
                    fill="url(#waxHighlight)"
                  />
                  {/* Center Monogram U & S */}
                  <text
                    x="80"
                    y="71"
                    textAnchor="middle"
                    fill="url(#sealGoldGrad)"
                    fontFamily="Cormorant Garamond, serif"
                    fontSize="22"
                    fontWeight="700"
                    letterSpacing="1"
                  >
                    U &amp; S
                  </text>
                  {/* Small Embossed Heart */}
                  <path
                    d="M 80,87 C 75,82 70,76 70,72 C 70,69 72.5,67 75.5,67 C 77.5,67 79.2,68.2 80,69.5 C 80.8,68.2 82.5,67 84.5,67 C 87.5,67 90,69 90,72 C 90,76 85,82 80,87 Z"
                    fill="url(#sealGoldGrad)"
                    opacity="0.95"
                  />
                </g>
              </svg>
            </motion.button>
          </div>

          {/* Invitation Rising Out on Opening */}
          <motion.div
            className="invitation-rise"
            animate={opening ? { y: -300, scale: 1.06, opacity: 1 } : { y: 0, scale: 1, opacity: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
          >
            <div className="mini-card">
              <span>Wedding Invitation</span>
              <strong>U &amp; S</strong>
              <p>Udhaya Prakash &amp; Swetha</p>
              <small>13 September 2026</small>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Prominent Floating Tap Cue */}
      <motion.button
        type="button"
        onClick={open}
        className="tap-invite-cue"
        animate={opening ? { opacity: 0, y: 15 } : { opacity: 1, y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: opening ? 0 : Infinity }}
      >
        <Heart size={16} fill="#d63384" color="#d63384" />
        <span>Tap the heart seal to open our invitation</span>
      </motion.button>
    </motion.section>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-orbit" />
      <Mandala className="hero-mandala" />
      <FloralCorner side="left" />
      <FloralCorner side="right" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="eyebrow">Together with our families</div>
          <h1 className="hero-names">Udhaya Prakash <em>&amp;</em> Swetha</h1>
          <p className="hero-subtitle">
            We invite you to celebrate our wedding and be part of the joy,
            blessings, laughter and love that begin this beautiful chapter.
          </p>
          <div className="date-lockup">
            <span>13th September</span>
            <b>2026</b>
          </div>
          <p className="hero-quote">
            “Two hearts, one beautiful journey, and a lifetime of memories waiting to be written.”
          </p>
        </motion.div>

        <motion.div
          className="hero-art-wrap"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.18, ease: EASE }}
        >
          <div className="hero-art-frame">
            <div className="frame-corner tl" /><div className="frame-corner tr" />
            <div className="frame-corner bl" /><div className="frame-corner br" />
            <img src={coupleArt} alt="Illustrated portrait of Udhaya Prakash and Swetha together" />
            <div className="art-caption">
              <span>U</span><i>&amp;</i><span>S</span>
            </div>
          </div>
          <div className="hero-badge"><Sparkles size={15} /> Forever begins here</div>
        </motion.div>
      </div>
    </section>
  );
}

function useCountdown(target) {
  const get = () => Math.max(0, new Date(target).getTime() - Date.now());
  const [remaining, setRemaining] = useState(get());

  useEffect(() => {
    const timer = setInterval(() => setRemaining(get()), 1000);
    return () => clearInterval(timer);
  }, [target]);

  return useMemo(() => {
    const total = Math.floor(remaining / 1000);
    return {
      days: Math.floor(total / 86400),
      hours: Math.floor((total % 86400) / 3600),
      minutes: Math.floor((total % 3600) / 60),
      seconds: total % 60
    };
  }, [remaining]);
}

function Countdown() {
  const values = useCountdown("2026-09-13T04:00:00+05:30");
  const units = [["days", "Days"], ["hours", "Hours"], ["minutes", "Minutes"], ["seconds", "Seconds"]];

  return (
    <section id="countdown" className="countdown-section">
      <div className="section-shell">
        <div className="eyebrow">Counting every moment</div>
        <h2 className="countdown-title">Until we say <em>“I do”</em></h2>
        <div className="countdown-grid">
          {units.map(([key, label]) => (
            <motion.div key={key} className="count-box" layout>
              <AnimatePresence mode="popLayout">
                <motion.strong
                  key={values[key]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  {String(values[key]).padStart(2, "0")}
                </motion.strong>
              </AnimatePresence>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Welcome() {
  return (
    <section className="section-shell welcome-section">
      <Mandala className="welcome-mandala" />
      <Reveal>
        <SectionHeading eyebrow="A Joyful Beginning" title="With the Blessings of Our Elders" />
        <div className="welcome-card">
          <div className="welcome-icon"><span>♡</span></div>
          <p>
            With the blessings of our elders, we joyfully invite you to be part of
            our wedding celebrations and share in the happiness of this beautiful beginning.
          </p>
          <OrnamentalLine className="mx-auto my-5 max-w-xs" />
          <div className="welcome-featured-quote">
            <span className="quote-mark open">“</span>
            The best things in life are meant to be shared with the ones we love.
            <span className="quote-mark close">”</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="section-shell events-section">
      <Reveal>
        <SectionHeading
          eyebrow="Save the Dates &amp; Times"
          title="Our Wedding Celebrations"
          text="We invite you to join us across three auspicious celebrations as we begin our new life together."
        />
      </Reveal>

      {/* Responsive 3-Column Events Grid */}
      <div className="events-columns-grid">
        {/* 1. Engagement Card */}
        <Reveal delay={0.05} className="event-col-wrap">
          <article className="event-column-card event-card-engagement">
            <div className="event-card-header">
              <span className="event-card-tag">Ceremony 1</span>
              <span className="event-number">01</span>
            </div>

            <div className="event-card-icon-wrap">
              <div className="event-card-icon">💍</div>
            </div>

            <div className="event-card-body">
              <h3 className="event-card-title">Engagement</h3>

              <div className="event-card-details">
                <div className="event-detail-item event-detail-date">
                  <CalendarDays size={18} className="detail-icon" />
                  <div>
                    <strong>12 September 2026</strong>
                    <span className="event-detail-sub">Saturday</span>
                  </div>
                </div>

                <div className="event-detail-item event-detail-time">
                  <Clock3 size={18} className="detail-icon" />
                  <div>
                    <strong>04:00 PM - 06:00 PM</strong>
                  </div>
                </div>

                <div className="event-detail-item event-detail-venue">
                  <MapPin size={18} className="detail-icon" />
                  <div>
                    <p>Sri Selvi Ponnusamy Gounder Thirumana Mandapam</p>
                  </div>
                </div>
              </div>

              <div className="event-card-actions">
                <a
                  className="gold-button event-directions-btn"
                  href={MAPS.mandapam}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Compass size={15} />
                  <span>View Location</span>
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* 2. Muhurtham Card (Featured Centerpiece) */}
        <Reveal delay={0.15} className="event-col-wrap">
          <article className="event-column-card event-card-muhurtham is-featured">
            <div className="event-card-header">
              <span className="event-card-tag">Sacred Muhurtham</span>
              <span className="event-number">02</span>
            </div>

            <div className="event-card-icon-wrap">
              <div className="event-card-icon">🪔</div>
            </div>

            <div className="event-card-body">
              <h3 className="event-card-title">Wedding Ceremony</h3>

              <div className="event-card-details">
                <div className="event-detail-item event-detail-date">
                  <CalendarDays size={18} className="detail-icon" />
                  <div>
                    <strong>13 September 2026</strong>
                    <span className="event-detail-sub">Sunday Morning</span>
                  </div>
                </div>

                <div className="event-detail-item event-detail-time">
                  <Clock3 size={18} className="detail-icon" />
                  <div>
                    <strong>04:00 AM – 06:00 AM</strong>
                  </div>
                </div>

                <div className="event-detail-item event-detail-venue">
                  <MapPin size={18} className="detail-icon" />
                  <div>
                    <p>Arulmigu Sri RajaMurugan Thirukovil, Salem AnaiMedu</p>
                  </div>
                </div>
              </div>

              <div className="event-card-actions">
                <a
                  className="gold-button event-directions-btn"
                  href={MAPS.temple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Compass size={15} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* 3. Reception Card */}
        <Reveal delay={0.25} className="event-col-wrap">
          <article className="event-column-card event-card-reception">
            <div className="event-card-header">
              <span className="event-card-tag">Celebration</span>
              <span className="event-number">03</span>
            </div>

            <div className="event-card-icon-wrap">
              <div className="event-card-icon">✨</div>
            </div>

            <div className="event-card-body">
              <h3 className="event-card-title">Reception</h3>

              <div className="event-card-details">
                <div className="event-detail-item event-detail-date">
                  <CalendarDays size={18} className="detail-icon" />
                  <div>
                    <strong>13 September 2026</strong>
                    <span className="event-detail-sub">Sunday Evening</span>
                  </div>
                </div>

                <div className="event-detail-item event-detail-time">
                  <Clock3 size={18} className="detail-icon" />
                  <div>
                    <strong>7:00 AM - 11:00 AM</strong>
                  </div>
                </div>

                <div className="event-detail-item event-detail-venue">
                  <MapPin size={18} className="detail-icon" />
                  <div>
                    <p>Sri Selvi Ponnusamy Gounder Thirumana Mandapam</p>
                  </div>
                </div>
              </div>

              <div className="event-card-actions">
                <a
                  className="gold-button event-directions-btn"
                  href={MAPS.mandapam}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Compass size={15} />
                  <span>View Location</span>
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function CenterQuoteHeading() {
  return (
    <section className="quote-center-section" aria-label="Wedding motto">
      <Reveal>
        <div className="quote-center-container">
          <OrnamentalLine className="quote-orn-line mb-3" />
          <h2 className="quote-center-heading">
            “Together is a beautiful place to be.”
          </h2>
          <OrnamentalLine className="quote-orn-line mt-3" />
        </div>
      </Reveal>
    </section>
  );
}

function Couple() {
  return (
    <section id="couple" className="section-shell couple-section">
      <Reveal><SectionHeading eyebrow="The ones at the heart of it all" title="Meet the couple" /></Reveal>
      <Reveal className="couple-art" delay={0.1}>
        <div className="couple-art-frame">
          <img src={coupleArt2} alt="Illustrated wedding portrait of Udhaya Prakash and Swetha" />
          <div className="couple-monogram">U <span>&amp;</span> S</div>
        </div>
      </Reveal>

      <div className="profile-grid">
        <Reveal delay={0.05}>
          <ProfileCard
            side="groom"
            image={groomArt}
            alt="Illustrated portrait of Udhaya Prakash"
            name="S. Udhaya Prakash"
            degree="B.E. (Civil)"
            role="Guidewire Software, Bangalore"
            family={<>Son of<br /><strong>Thiru. K. Sakthivel &amp; Thirumathi. S. Singaram</strong></>}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <ProfileCard
            side="bride"
            image={brideArt}
            alt="Illustrated portrait of Swetha"
            name="S. Swetha"
            degree="B.Com."
            role=""
            family={<>Daughter of<br /><strong>Thiru. P. Sureshkumar &amp; Thirumathi. S. Valli</strong></>}
          />
        </Reveal>
      </div>
      <div className="between-monogram">U <span>&amp;</span> S</div>
    </section>
  );
}

function ProfileCard({ side, image, alt, name, degree, role, family }) {
  return (
    <article className={`profile-card ${side}`}>
      <div className="profile-photo">
        <img src={image} alt={alt} />
        <div className="photo-label">{side === "groom" ? "The Groom" : "The Bride"}</div>
      </div>
      <div className="profile-copy">
        <div className="eyebrow">{side === "groom" ? "Hearts &amp; dreams" : "Grace &amp; joy"}</div>
        <h3>{name}</h3>
        <p className="profile-degree">{degree}</p>
        {role && <p className="profile-role">{role}</p>}
        <OrnamentalLine className="my-5" />
        <p className="profile-family">{family}</p>
      </div>
    </article>
  );
}

function VenueCard({ title, subtitle, tag, image, imageAlt, venueName, map, kind }) {
  return (
    <article className={`venue-card ${kind}`}>
      <div className="venue-image-container">
        <img src={image} alt={imageAlt} className="venue-photo" />
        <div className="venue-image-overlay" />
        <div className="venue-tag-badge">{tag}</div>
      </div>
      <div className="venue-copy">
        <div className="eyebrow">{subtitle}</div>
        <h3>{title}</h3>
        <p className="venue-address-text">{venueName}</p>
        <a className="gold-button venue-btn" href={map} target="_blank" rel="noopener noreferrer">
          <Compass size={16} />
          <span>Open in Google Maps</span>
        </a>
      </div>
    </article>
  );
}

function Venue() {
  return (
    <section id="venue" className="section-shell venue-section">
      <Reveal><SectionHeading eyebrow="Come celebrate with us" title="The Wedding Locations" /></Reveal>
      <div className="venue-grid">
        <VenueCard
          title="Wedding Location"
          subtitle="Muhurtham · 13 September"
          tag="Holy Temple Muhurtham"
          image={godArt}
          imageAlt="Arulmigu Sri RajaMurugan Thirukovil"
          venueName="Arulmigu Sri RajaMurugan Thirukovil, Salem Anai Medu"
          map={MAPS.temple}
          kind="temple"
        />
        <VenueCard
          title="Engagement & Reception Location"
          subtitle="12 & 13 September"
          tag="Grand Wedding Mandapam"
          image={hallArt}
          imageAlt="Sri Selvi Ponnusamy Gounder Thirumana Mandapam"
          venueName="Sri Selvi Ponnusamy Gounder Thirumana Mandapam"
          map={MAPS.mandapam}
          kind="hall"
        />
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    ["Suriya Prasath", "Groom Brother", "9688770052"],
    ["Udhaya Prakash", "Groom", "9043339798"],
    ["Nandha Prakash", "Groom Brother", "9384955009"]
  ];
  return (
    <section id="contact" className="section-shell contact-section">
      <Reveal><SectionHeading eyebrow="We would love to hear from you" title="For any queries, please feel free to contact us" /></Reveal>
      <div className="contact-grid">
        {contacts.map(([name, role, number], i) => (
          <Reveal key={number} delay={i * 0.1}>
            <a className="contact-card" href={`tel:${number}`}>
              <div className="contact-icon"><Phone size={18} /></div>
              <div>
                <span>{role}</span>
                <h3>{name}</h3>
                <p>{number}</p>
              </div>
              <ArrowUpRight className="contact-arrow" size={18} />
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="final-quote">
        <OrnamentalLine />
        <p>“A new chapter begins with love, laughter, and the blessings of our families.”</p>
        <OrnamentalLine />
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-pattern" />
      <div className="footer-inner">
        <div className="footer-monogram">U <span>&amp;</span> S</div>
        <div className="eyebrow">With all our hearts</div>
        <h2>Udhaya Prakash <em>&amp;</em> Swetha</h2>
        <p>Thank you for being a part of our happiness.</p>
        <OrnamentalLine className="footer-line" />
        <small>13 · 09 · 2026</small>
      </div>
    </footer>
  );
}

function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.title = "Udhaya Prakash & Swetha — Wedding Invitation";
    document.body.classList.toggle("is-locked", !opened);
    return () => document.body.classList.remove("is-locked");
  }, [opened]);

  return (
    <main>
      <AnimatePresence>
        {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Hero />
          <Countdown />
          <Welcome />
          <Events />
          <CenterQuoteHeading />
          <Couple />
          <Venue />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
