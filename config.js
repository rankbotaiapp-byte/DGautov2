// ╔══════════════════════════════════════════════════════════╗
// ║              NEW ERA APPS — CLIENT CONFIG                 ║
// ║  Edit ONLY this file per client.                         ║
// ║  NEVER touch app.js, style.css, or index.html.           ║
// ║  Scroll to each color block, fill it, flip TODO to DONE. ║
// ╚══════════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────────┐
// │  BUILD STATUS:  🔴 DEMO — not client-ready               │
// │  (flip to  🟢 LIVE — tested & working  when done)        │
// └──────────────────────────────────────────────────────────┘

// ✈️ PRE-FLIGHT CHECK — before flipping mode to "live":
//   [ ] Formspree endpoint filled?       (🟨 FORMS)
//   [ ] Phone + email REAL, not placeholder?  (🟥 BUSINESS)
//   [ ] Colors set to their brand?        (🟧 BRANDING)
//   [ ] Services have real names + prices?    (🟩 CONTENT)
//   [ ] Real address confirmed?
//   [ ] I test-booked it MYSELF and it hit the inbox?
//   [ ] Opened the live URL on a phone and it works?

window.APP_CONFIG = {

  /* ═══════════════════════════════════════════════════════
     ⬛ META — go-live switch            [ TODO ]
     mode: "demo" = locked preview | "live" = real & working
     ═══════════════════════════════════════════════════════ */
  meta: {
    mode: "demo",              // FLIP TO "live" ONLY AFTER PRE-FLIGHT
    leadId: "",
    demoExpiresAt: "",         // ISO date "2026-07-30", empty = no expiry
    builtBy: "AXIOM Builder · New Era Apps"
  },

  /* ═══════════════════════════════════════════════════════
     🟥 BUSINESS — who they are          [ TODO ]
     ═══════════════════════════════════════════════════════ */
  business: {
    name: "",                  // e.g. D&G Automotive Repair
    tagline: "",               // short one-liner under the name
    phone: "",                 // REAL phone (call/text buttons use this)
    email: "",                 // REAL email
    logo: ""                   // data URL or /logo.png, empty = text only
  },

  /* ═══════════════════════════════════════════════════════
     🟧 BRANDING — colors & neon         [ TODO ]
     ═══════════════════════════════════════════════════════ */
  branding: {
    primary: "#B71C1C",        // main color   (D&G = #B71C1C red)
    accent:  "#F4A300",        // accent color (D&G = #F4A300 amber)
    theme: "aurora",           // aurora|nightsky|circuit|camo|galaxy|sunset|ocean|forest
    neon: {
      on: true,
      color: "match",          // "match" = use primary, or explicit hex
      width: 5                 // border thickness (5 = bold)
    }
  },

  /* ═══════════════════════════════════════════════════════
     🟨 FORMS — booking endpoint         [ TODO ]
     ⚠️ EMPTY = form GATED. MUST fill before "live"
     ═══════════════════════════════════════════════════════ */
  forms: {
    endpoint: ""               // https://formspree.io/f/xxxxxxx
  },

  /* ═══════════════════════════════════════════════════════
     🟪 ORB — the AXIOM helper button    [ DONE ]
     ═══════════════════════════════════════════════════════ */
  orb: {
    on: true,
    label: "AXIOM"
  },

  /* ═══════════════════════════════════════════════════════
     🟦 MODULES — features on/off        [ TODO ]
     true = show it | false = hide it
     ═══════════════════════════════════════════════════════ */
  modules: {
    // Present
    hero: true,
    stats: true,
    services: true,
    gallery: true,
    reviews: true,
    about: true,
    hours: true,
    faq: true,
    // Capture
    contact: true,
    bookingForm: true,
    // Transact
    payments: false,
    // Account
    accounts: false,
    // Navigation
    nav: true
  },

  /* ═══════════════════════════════════════════════════════
     🟩 CONTENT — the actual words       [ TODO ]
     ═══════════════════════════════════════════════════════ */
  content: {

    // --- Hero (top of app) ---
    hero: {
      headline: "Expert Auto Repair You Can Trust",
      subtext: "From oil changes to full engine overhauls — we keep you rolling.",
      buttons: [
        { label: "Book Now",     icon: "calendar", link: "#booking"  },
        { label: "Our Services", icon: "wrench",   link: "#services" }
      ]
    },

    // --- Stats (fill REAL numbers, or delete lines you don't have) ---
    stats: [
      { value: "4.9/5",   label: "Rating",      icon: "star"  },
      { value: "15+ Yrs", label: "Experience",  icon: "award" },
      { value: "2,400+",  label: "Cars Served", icon: "car"   }
    ],

    // --- Services (copy a line per service) ---
    services: [
      // { name: "Oil Change", price: "$45", desc: "Full synthetic", icon: "droplet" },
    ],

    // --- Gallery (image URLs) ---
    gallery: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600",
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600"
    ],

    // --- Reviews / Testimonials ---
    reviews: [
      { name: "Mike R.",  rating: 5, text: "Honest shop, fair prices. Fixed my truck same day." },
      { name: "Sarah T.", rating: 5, text: "Finally a mechanic I can trust. Great communication." },
      { name: "James K.", rating: 5, text: "Quick, professional, and didn't try to upsell me. Highly recommend." }
    ],

    // --- About ---
    about: {
      heading: "About Us",
      body: "Family-owned and operated for over 15 years, we treat every vehicle like it's our own. Honest work, fair prices, and no surprises — that's our promise. Whether it's a routine oil change or a major repair, you can trust us to get you back on the road safely.",
      image: ""
    },
    hours: [
      { day: "Monday",    time: "7:30 AM – 6:00 PM" },
      { day: "Tuesday",   time: "7:30 AM – 6:00 PM" },
      { day: "Wednesday", time: "7:30 AM – 6:00 PM" },
      { day: "Thursday",  time: "7:30 AM – 6:00 PM" },
      { day: "Friday",    time: "7:30 AM – 5:00 PM" },
      { day: "Saturday",  time: "8:00 AM – 2:00 PM" },
      { day: "Sunday",    time: "Closed" }
    ],
    faq: [
      { q: "Do I need an appointment?", a: "Walk-ins are welcome, but booking ahead guarantees your spot and cuts your wait." },
      { q: "How long does a typical service take?", a: "Oil changes are usually 30–45 minutes. Larger repairs vary — we'll give you an honest estimate up front." },
      { q: "Do you offer free estimates?", a: "Yes. We'll always tell you what's needed and what it costs before we start any work." },
      { q: "What forms of payment do you accept?", a: "Cash, all major cards, and we can discuss payment options for larger repairs." }
    ],

    // --- Bottom Nav ---
    nav: [
      { label: "Home",       icon: "home",     link: "#top"      },
      { label: "Services",   icon: "wrench",   link: "#services" },
      { label: "Book",       icon: "calendar", link: "#booking"  },
      { label: "Directions", icon: "map-pin",  link: "#contact"  }
    ]

  }

};

// 🎨 ICON CHEAT SHEET (Lucide names):
//   phone · mail · map-pin · calendar · calendar-check · wrench · car
//   droplet · disc · gauge · settings · scissors · coffee · utensils
//   shopping-bag · camera · star · clock · check · sparkles
//   Full list: lucide.dev/icons

// 📌 REFERENCE — Rogue Rafting Co (first real build, for shape)
//   business: "Rogue Rafting Co" / "Ride the Rogue" / 541-855-7080
//   branding: primary #B71C1C, accent #F4A300
//   services: Half-Day Trip $65 / Full-Day Trip $120
