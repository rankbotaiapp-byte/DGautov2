(function () {
  const cfg = window.APP_CONFIG;
  const app = document.getElementById("app");
  const header = document.getElementById("app-header");
  const root = document.documentElement;

  /* ---------- Theme ---------- */
  const neonColor =
    cfg.branding.neon?.color === "match" || !cfg.branding.neon?.color
      ? cfg.branding.primary
      : cfg.branding.neon.color;

  root.style.setProperty("--primary", cfg.branding.primary);
  root.style.setProperty("--accent", cfg.branding.accent);
  root.style.setProperty("--neon", neonColor);
  root.style.setProperty("--neon-width", (cfg.branding.neon?.width || 3) + "px");
  document.body.className = "theme-" + (cfg.branding.theme || "aurora");

  if (!cfg.branding.neon?.on) {
    document.getElementById("neonFrame").style.display = "none";
  }

  /* ---------- Identity ---------- */
  document.title = cfg.business.name;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute("content", cfg.branding.primary);

  header.innerHTML = `
    ${cfg.business.logo ? `<img class="logo" src="${cfg.business.logo}" alt="${cfg.business.name}">` : ""}
    <h1>${cfg.business.name}</h1>
    <p>${cfg.business.tagline}</p>`;

  /* ---------- Modules ---------- */
  const icon = (name, size = 20) =>
    `<i data-lucide="${name}" width="${size}" height="${size}"></i>`;

  const modules = {
    hero: () => {
      const h = cfg.content.hero || {};
      const btns = (h.buttons || []).map(b =>
        `<a class="hero-btn" href="${b.link || '#'}">${b.icon ? icon(b.icon) : ""} ${b.label}</a>`
      ).join("");
      return `
      <section class="hero-premium">
        <div class="hero-inner">
          <h2 class="hero-headline">${h.headline || cfg.business.tagline || ""}</h2>
          <p class="hero-sub">${h.subtext || ""}</p>
          <div class="hero-btns">${btns}</div>
        </div>
      </section>`;
    },
    stats: () => {
      const s = cfg.content.stats;
      if (!s || !s.length) return "";
      return `
      <section class="stats-bar">
        <div class="stats-inner">
          ${s.map(item => `
            <div class="stat">
              ${item.icon ? icon(item.icon, 22) : ""}
              <div class="stat-value">${item.value}</div>
              <div class="stat-label">${item.label}</div>
            </div>
          `).join("")}
        </div>
      </section>`;
    },

    services: () => `
      <section id="services" class="services">
        <h2>${icon("notebook-pen")} Services</h2>
        ${cfg.content.services.map(s => `
          <div class="card">
            <div class="card-head">
              ${s.icon ? icon(s.icon, 22) : ""}
              <h3>${s.name}</h3>
              <span class="price">${s.price}</span>
            </div>
            <p>${s.desc}</p>
          </div>`).join("")}
      </section>`,

    gallery: () => {
      if (!cfg.content.gallery?.length) return "";
      return `
      <section class="gallery">
        <h2>${icon("images")} Gallery</h2>
        <div class="grid">
          ${cfg.content.gallery.map(src => `<img src="${src}" alt="" loading="lazy">`).join("")}
        </div>
      </section>`;
    },
    reviews: () => {
      if (!cfg.content.reviews?.length) return "";
      return `
      <section class="reviews">
        <h2>${icon("star")} What Customers Say</h2>
        ${cfg.content.reviews.map(r => `
          <div class="review-card">
            <div class="review-stars">${"★".repeat(r.rating || 5)}</div>
            <p class="review-text">"${r.text}"</p>
            <div class="review-name">— ${r.name}</div>
          </div>
        `).join("")}
      </section>`;
    },
    about: () => {
      const a = cfg.content.about;
      if (!a) return "";
      return `
      <section class="about">
        <h2>${icon("info")} ${a.heading || "About Us"}</h2>
        ${a.image ? `<img class="about-img" src="${a.image}" alt="">` : ""}
        <p class="about-body">${a.body || ""}</p>
      </section>`;
    },
    hours: () => {
      const h = cfg.content.hours;
      if (!h || !h.length) return "";
      return `
      <section class="hours">
        <h2>${icon("clock")} Hours</h2>
        <div class="hours-list">
          ${h.map(row => `
            <div class="hours-row">
              <span class="hours-day">${row.day}</span>
              <span class="hours-time">${row.time}</span>
            </div>
          `).join("")}
        </div>
      </section>`;
    },
    faq: () => {
      const f = cfg.content.faq;
      if (!f || !f.length) return "";
      return `
      <section class="faq">
        <h2>${icon("help-circle")} FAQ</h2>
        ${f.map(item => `
          <details class="faq-item">
            <summary class="faq-q">${item.q}</summary>
            <p class="faq-a">${item.a}</p>
          </details>
        `).join("")}
      </section>`;
    },

    contact: () => `
      <section id="contact" class="contact">
        <h2>${icon("map-pin")} Get In Touch</h2>
        <div class="contact-rows">
          <a class="contact-row" href="tel:${cfg.business.phone}">
            ${icon("phone")}<span>${cfg.business.phone}</span>
          </a>
          <a class="contact-row" href="mailto:${cfg.business.email}">
            ${icon("mail")}<span>${cfg.business.email}</span>
          </a>
        </div>
      </section>`,

    bookingForm: () => {
      if (!cfg.forms?.endpoint) {
        console.error("APP_CONFIG.forms.endpoint is empty — form not rendered.");
        return `<section class="contact"><p class="cfg-warning">
          Form not configured. Set forms.endpoint in config.js.
        </p></section>`;
      }
      return `
      <section id="book" class="booking">
        <h2>${icon("calendar-check")} Request Info</h2>
        <form id="bookingForm" action="${cfg.forms.endpoint}" method="POST">
          <input type="text"  name="name"  placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input type="tel"   name="phone" placeholder="Phone (optional)" />
          <textarea name="message" placeholder="What are you looking for?" rows="4" required></textarea>
          <input type="hidden" name="_subject" value="New request — ${cfg.business.name}" />
          <button class="btn" type="submit" id="bookBtn">Send Request</button>
          <div class="form-err" id="formErr" hidden>
            Couldn't send. Please call <a href="tel:${cfg.business.phone}">${cfg.business.phone}</a>.
          </div>
          <div class="form-ok" id="formOk" hidden>
            Got it — we'll be in touch shortly.
          </div>
        </form>
      </section>`;
    }
  };

  /* ---------- Render ---------- */
  let html = "";
  Object.keys(cfg.modules).forEach(key => {
    if (cfg.modules[key] && modules[key]) html += modules[key]();
  });
  app.innerHTML = html;

  if (window.lucide) lucide.createIcons();

  /* ---------- Form submit ---------- */
  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = document.getElementById("bookBtn");
      const err = document.getElementById("formErr");
      const ok  = document.getElementById("formOk");
      err.hidden = true;
      btn.disabled = true;
      btn.textContent = "Sending…";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(res => {
          if (!res.ok) throw new Error("failed");
          form.querySelectorAll("input,textarea,button").forEach(el => el.remove());
          ok.hidden = false;
        })
        .catch(() => {
          btn.disabled = false;
          btn.textContent = "Send Request";
          err.hidden = false;
        });
    });
  }

  /* ---------- AXIOM orb (static help, no API) ---------- */
  if (cfg.orb?.on) {
    const wrap  = document.getElementById("orbWrap");
    const orb   = document.getElementById("orb");
    const panel = document.getElementById("orbPanel");
    wrap.hidden = false;

    panel.innerHTML = `
      <div class="orb-head">${cfg.orb.label || "AXIOM"}</div>
      <div class="orb-body">
        <p><strong>Add to your home screen</strong><br>
        iPhone: Share → Add to Home Screen.<br>
        Android: menu (⋮) → Add to Home screen.</p>
        <p><strong>Need a person?</strong><br>
        Call <a href="tel:${cfg.business.phone}">${cfg.business.phone}</a>
        or email <a href="mailto:${cfg.business.email}">${cfg.business.email}</a>.</p>
      </div>
      <div class="orb-foot">Built by New Era Apps</div>`;

    orb.addEventListener("click", () => { panel.hidden = !panel.hidden; });
  }
  /* ---------- Bottom Nav ---------- */
  if (cfg.modules.nav && cfg.content.nav?.length) {
    const navBar = document.createElement("nav");
    navBar.className = "bottom-nav";
    navBar.innerHTML = cfg.content.nav.map(item => `
      <a class="nav-item" href="${item.link || '#'}">
        ${icon(item.icon, 22)}
        <span>${item.label}</span>
      </a>
    `).join("");
    document.body.appendChild(navBar);
    if (window.lucide) lucide.createIcons();
  }
})();
