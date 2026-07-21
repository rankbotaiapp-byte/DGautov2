// ╔══════════════════════════════════════════════════════════╗
// ║              NEW ERA APPS — CLIENT CONFIG                 ║
// ║  CLIENT: D&G Automotive Repair                            ║
// ╚══════════════════════════════════════════════════════════╝
// ⚠️ CONFIRM WITH TRAVIS: email, prices, hours, address, years, real reviews

window.APP_CONFIG = {

  meta: {
    mode: "demo",
    leadId: "dg-automotive",
    demoExpiresAt: "",
    builtBy: "AXIOM Builder · New Era Apps"
  },

  business: {
    name: "D&G Automotive Repair",
    tagline: "Saving the world one car at a time",
    phone: "541-295-4225",
    email: "rankbotaiapp@gmail.com",
    logo: ""
  },

  branding: {
    primary: "#B71C1C",
    accent: "#E50914",
    theme: "aurora",
    neon: { on: true, color: "match", width: 5 }
  },

  forms: {
    endpoint: "https://formspree.io/f/xaqrjqrw"
  },

  orb: { on: true, label: "AXIOM" },

  modules: {
    hero: true,
    stats: true,
    services: true,
    gallery: true,
    reviews: false,
    about: true,
    hours: true,
    faq: true,
    contact: true,
    bookingForm: true,
    payments: false,
    accounts: false,
    nav: true
  },

  content: {

    hero: {
      headline: "Expert Auto Repair You Can Trust",
      subtext: "From oil changes to full engine overhauls — we keep you rolling.",
      buttons: [
        { label: "Book Now",     icon: "calendar", link: "#book"  },
        { label: "Our Services", icon: "wrench",   link: "#services" }
      ]
    },

    stats: [
      { value: "4.4",         label: "Google Rating", icon: "star"   },
      { value: "Family",      label: "Owned",         icon: "users"  },
      { value: "Grants Pass", label: "Local Shop",    icon: "map-pin" }
    ],

    services: [
      { name: "Oil Change",          price: "Call", desc: "Full synthetic & conventional, most vehicles", icon: "droplet" },
      { name: "Brake Service",       price: "Call", desc: "Inspection, pads, and rotor service",           icon: "disc"    },
      { name: "Diagnostics",         price: "Call", desc: "Computer diagnostics & check engine light",     icon: "gauge"   },
      { name: "Routine Maintenance", price: "Call", desc: "Scheduled maintenance to extend vehicle life",  icon: "wrench"  }
    ],

    gallery: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600",
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600"
    ],

    reviews: [
      { name: "Local Customer", rating: 5, text: "Honest shop, fair prices. Fixed my truck same day." },
      { name: "Local Customer", rating: 4, text: "Straight answers, no runaround. Good local mechanics." },
      { name: "Local Customer", rating: 5, text: "Been coming here for years. They take care of you." }
    ],

    about: {
      heading: "About Us",
      body: "D&G Automotive Repair is a local, family-owned shop right here in Grants Pass. We treat every vehicle like it's our own — honest work, fair prices, and no surprises. Whether it's a routine oil change or a major repair, you can trust us to get you back on the road safely.",
      image: ""
    },

    hours: [
      { day: "Monday",    time: "8:00 AM – 5:00 PM" },
      { day: "Tuesday",   time: "8:00 AM – 5:00 PM" },
      { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
      { day: "Thursday",  time: "8:00 AM – 5:00 PM" },
      { day: "Friday",    time: "8:00 AM – 5:00 PM" },
      { day: "Saturday",  time: "By Appointment" },
      { day: "Sunday",    time: "Closed" }
    ],

    faq: [
      { q: "Do I need an appointment?", a: "Walk-ins are welcome, but booking ahead guarantees your spot and cuts your wait." },
      { q: "Do you offer free estimates?", a: "Yes. We'll always tell you what's needed and what it costs before we start any work." },
      { q: "What kind of vehicles do you work on?", a: "Most makes and models — cars, trucks, and SUVs. Give us a call if you're not sure." },
      { q: "What payment do you accept?", a: "Cash and all major cards. Ask us about options for larger repairs." }
    ],

    nav: [
      { label: "Home",       icon: "home",     link: "#app"      },   
      { label: "Services",   icon: "wrench",   link: "#services" },
      { label: "Book",       icon: "calendar", link: "#book"     },   
      { label: "Directions", icon: "map-pin",  link: "https://www.google.com/maps/search/?api=1&query=D%26G+Automotive+Repair+Grants+Pass+OR" }
    ]

  }

};
