(() => {
  "use strict";

  /* ===================== HELPERS ===================== */
  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  const ESCAPES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  /** Escape untrusted text before it is interpolated into HTML. */
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ESCAPES[c]);

  /** Allow only http(s), mailto and tel URLs. Returns null otherwise. */
  const safeUrl = (u) => {
    try {
      const { protocol } = new URL(u, window.location.href);
      return ["http:", "https:", "mailto:", "tel:"].includes(protocol)
        ? u
        : null;
    } catch {
      return null;
    }
  };

  /** Render a list into a container with a single DOM write. */
  const render = (id, items, template) => {
    const el = $(id);
    if (el) el.innerHTML = items.map(template).join("");
  };

  /* ===================== DATA ===================== */
  const skills = [
    {
      name: "C# / .NET",
      pct: 90,
      color: "linear-gradient(90deg,#4f46e5,#818cf8)",
    },
    {
      name: "ASP.NET Core / Web API",
      pct: 88,
      color: "linear-gradient(90deg,#6366f1,#ec4899)",
    },
    {
      name: "SQL Server",
      pct: 85,
      color: "linear-gradient(90deg,#06b6d4,#3b82f6)",
    },
    {
      name: "Entity Framework / Dapper",
      pct: 82,
      color: "linear-gradient(90deg,#f59e0b,#ef4444)",
    },
    {
      name: "JavaScript / HTML / CSS",
      pct: 75,
      color: "linear-gradient(90deg,#ec4899,#f97316)",
    },
    {
      name: "Python",
      pct: 70,
      color: "linear-gradient(90deg,#06b6d4,#6366f1)",
    },
    {
      name: "Git & GitHub",
      pct: 85,
      color: "linear-gradient(90deg,#4f46e5,#06b6d4)",
    },
    {
      name: "OOP / SOLID / Design Patterns",
      pct: 88,
      color: "linear-gradient(90deg,#f59e0b,#ec4899)",
    },
  ];

  const chips = [
    { name: "C#", color: "#818cf8" },
    { name: "ASP.NET Core", color: "#6366f1" },
    { name: "SQL Server", color: "#06b6d4" },
    { name: "Entity Framework", color: "#22d3ee" },
    { name: "Dapper", color: "#34d399" },
    { name: "RESTful API", color: "#f472b6" },
    { name: "MVC", color: "#a78bfa" },
    { name: "LINQ", color: "#818cf8" },
    { name: "xUnit", color: "#fb923c" },
    { name: "Firebase", color: "#fbbf24" },
    { name: "Stripe", color: "#60a5fa" },
    { name: "JavaScript", color: "#f59e0b" },
    { name: "Bootstrap", color: "#818cf8" },
    { name: "Tailwind CSS", color: "#22d3ee" },
    { name: "Python", color: "#6ee7b7" },
    { name: "C++", color: "#f87171" },
    { name: "Java", color: "#fca5a5" },
    { name: "Git", color: "#f97316" },
    { name: "GitHub", color: "#e2e8f0" },
    { name: "Visual Studio", color: "#818cf8" },
    { name: "Data Structures", color: "#c4b5fd" },
    { name: "Algorithms", color: "#f472b6" },
    { name: "OOP", color: "#6366f1" },
    { name: "SOLID", color: "#34d399" },
    { name: "Design Patterns", color: "#fbbf24" },
  ];

  const experience = [
    {
      title: "Web Developer & Programming Instructor",
      company: "Galaxy for Development",
      date: "Sep 2025 – Present",
      location: "Egypt",
      active: true,
      desc: "Develop and maintain responsive web applications using modern web technologies. Delivered training sessions in Data Structures & Algorithms for engineers. Built responsive UIs with HTML, CSS, Bootstrap. Collaborated on curriculum development and guided students in project-based learning.",
      tags: [
        { label: "Current Role", cls: "tag-indigo" },
        { label: "Full Stack", cls: "tag-cyan" },
        { label: "Instructor", cls: "tag-pink" },
      ],
    },
    {
      title: "Programming Instructor",
      company: "NASS Academy",
      date: "Feb 2025 – Sep 2025",
      location: "Egypt",
      active: false,
      desc: "Delivered Python and Networking courses with hands-on practical projects. Simplified complex programming concepts for beginners. Guided students in building real-world applications.",
      tags: [
        { label: "Python", cls: "tag-amber" },
        { label: "Networking", cls: "tag-cyan" },
        { label: "Teaching", cls: "tag-pink" },
      ],
    },
    {
      title: ".NET Developer Intern",
      company: "Creative School",
      date: "Dec 2024 – Feb 2025",
      location: "Egypt",
      active: false,
      desc: "Contributed to building an ERP System using ASP.NET Core. Designed backend modules and implemented database structures using SQL Server. Collaborated with team members on system architecture and development.",
      tags: [
        { label: "ASP.NET Core", cls: "tag-indigo" },
        { label: "ERP System", cls: "tag-cyan" },
        { label: "SQL Server", cls: "tag-amber" },
      ],
    },
    {
      title: ".NET Developer Intern",
      company: "Information Technology Institute (ITI)",
      date: "2023 – 2024",
      location: "Egypt",
      active: false,
      desc: "Developed an ERP system using ASP.NET Core and SQL Server, reducing manual processes by 40%. Optimized 50+ SQL queries, improving database performance by 30%. Applied SOLID principles to refactor legacy code, enhancing system maintainability.",
      tags: [
        { label: "40% Process Reduction", cls: "tag-pink" },
        { label: "30% DB Boost", cls: "tag-amber" },
        { label: "SOLID", cls: "tag-indigo" },
      ],
    },
  ];

  const projects = [
    {
      emoji: "🚆",
      name: "TrainD",
      desc: "Full-stack web and mobile app for train ticket booking, real-time tracking, and schedule management (Graduation Project). Integrated Stripe payment gateway processing $10K+ in pilot payments.",
      tech: ["ASP.NET Core", "SQL Server", "Firebase", "Stripe", "RESTful API"],
      links: [
        { label: "GitHub →", href: "https://github.com/Train-D/back-end" },
      ],
    },
    {
      emoji: "🎓",
      name: "College System",
      desc: "MVC application for managing courses, instructors, and students with full CRUD operations for 500+ records. Reduced query execution time by 20% through indexing and stored procedures.",
      tech: ["ASP.NET MVC", "Entity Framework", "SQL Server", "LINQ"],
      links: [
        {
          label: "GitHub →",
          href: "https://github.com/omarsalem33/ITI_Training",
        },
      ],
    },
    {
      emoji: "📊",
      name: "Expansive Soil Stabilization Research DSS",
      desc: "A Streamlit research prototype for predicting soil-stabilization responses, comparing regression models, explaining predictions with SHAP, exploring mixture trade-offs, generating a laboratory screening plan, and checking predictions against independent laboratory measurements.",
      tech: ["Python", "Streamlit", "SHAP", "JSON"],
      links: [
        {
          label: "Live Demo →",
          href: "https://soil-stabilization-dss.streamlit.app/",
        },
        {
          label: "GitHub →",
          href: "https://github.com/omarsalem33/soil-stabilization-dss",
        },
      ],
    },
  ];

  const certifications = [
    "Foundational C# with Microsoft",
    "SQL (Intermediate) Certificate",
    "Algorithmic Toolbox",
    "Web Development Using .NET (ITI)",
    "6th Place — 2021 ICPC Suez Canal Collegiate Programming Contest",
  ];

  const contactItems = [
    {
      icon: "✉️",
      cls: "c-indigo",
      label: "Email",
      value: "omarsalemabdelrouf@gmail.com",
      href: "mailto:omarsalemabdelrouf@gmail.com",
    },
    {
      icon: "📱",
      cls: "c-pink",
      label: "Phone",
      value: "+201211590390",
      href: "tel:+201211590390",
    },
    {
      icon: "📍",
      cls: "c-cyan",
      label: "Location",
      value: "Ismailia, Egypt",
      href: null,
    },
    {
      icon: "💼",
      cls: "c-amber",
      label: "LinkedIn",
      value: "linkedin.com/in/omarsalem33/",
      href: "https://linkedin.com/in/omarsalem33/",
    },
    {
      icon: "🐙",
      cls: "c-indigo",
      label: "GitHub",
      value: "github.com/omarsalem33",
      href: "https://github.com/omarsalem33",
    },
  ];

  const marqueeItems = [
    "Galaxy for Development",
    "NASS Academy",
    "Creative School",
    "ITI",
    "Suez Canal University",
    "ASP.NET Core",
    "C# Developer",
    "SQL Server",
    "RESTful APIs",
    "SOLID Principles",
  ];

  /* ===================== RENDER ===================== */
  // Inline styles are applied via CSSOM (not style="" attributes) so the
  // page can run under a strict Content-Security-Policy.
  const stagger = (i, step) => `data-delay="${(i * step).toFixed(2)}"`;

  const marqueeHTML = [...marqueeItems, ...marqueeItems]
    .map((i) => `<span class="marquee-item"><span>★</span>${esc(i)}</span>`)
    .join("");
  const track = $("marqueeTrack");
  if (track) track.innerHTML = marqueeHTML + marqueeHTML; // 4 copies → seamless -50% loop

  render(
    "skillBars",
    skills,
    (s, i) => `
    <div class="skill-bar-item reveal" ${stagger(i, 0.08)}>
      <div class="skill-bar-header"><span>${esc(s.name)}</span><span style="color:var(--text-muted)">${s.pct}%</span></div>
      <div class="skill-bar-bg" role="progressbar" aria-label="${esc(s.name)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.pct}">
        <div class="skill-bar-fill" data-pct="${s.pct}" data-bg="${esc(s.color)}"></div>
      </div>
    </div>`,
  );

  render(
    "chipsCloud",
    chips,
    (c) =>
      `<div class="chip"><div class="chip-dot" data-bg="${esc(c.color)}"></div>${esc(c.name)}</div>`,
  );

  render(
    "timeline",
    experience,
    (e, i) => `
    <div class="timeline-item reveal" ${stagger(i, 0.1)}>
      <div class="timeline-dot${e.active ? " active" : ""}"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <div class="exp-title">${esc(e.title)}</div>
            <div class="exp-company">${esc(e.company)}</div>
          </div>
          <div class="exp-meta">
            <span class="exp-date">${esc(e.date)}</span>
            <span>${esc(e.location)}</span>
          </div>
        </div>
        <div class="exp-desc">${esc(e.desc)}</div>
        <div class="exp-tags">${e.tags.map((t) => `<span class="exp-tag ${esc(t.cls)}">${esc(t.label)}</span>`).join("")}</div>
      </div>
    </div>`,
  );

  render("projectsGrid", projects, (p, i) => {
    const links = p.links
      .map((l) => ({ ...l, href: safeUrl(l.href) }))
      .filter((l) => l.href)
      .map(
        (l) =>
          `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer" class="project-link">${esc(l.label)}</a>`,
      )
      .join("");
    return `
    <div class="project-card reveal" ${stagger(i, 0.1)}>
      <div class="project-emoji" aria-hidden="true">${p.emoji}</div>
      <h3 class="project-name">${esc(p.name)}</h3>
      <div class="project-desc">${esc(p.desc)}</div>
      <div class="project-tech">${p.tech.map((t) => `<span class="tech-tag">${esc(t)}</span>`).join("")}</div>
      ${links ? `<div class="project-links">${links}</div>` : ""}
    </div>`;
  });

  const eduCards = $("eduCards");
  if (eduCards) {
    eduCards.innerHTML = `
    <div class="edu-card">
      <div class="edu-degree">Bachelor's in Computers &amp; Informatics</div>
      <div class="edu-uni">Suez Canal University</div>
      <div class="edu-meta">
        <span>2019 – 2023</span>
        <span class="edu-grade">Very Good · GP: Excellent</span>
      </div>
    </div>
    <div class="certs-title">Certifications &amp; Achievements</div>
    ${certifications.map((c) => `<div class="cert-item"><div class="cert-icon" aria-hidden="true">🏅</div>${esc(c)}</div>`).join("")}`;
  }

  const langSection = $("langSection");
  if (langSection) {
    langSection.innerHTML = `
    <div class="lang-title">Languages</div>
    <div class="lang-badges">
      <div class="lang-badge"><span class="lang-name">Arabic</span><span class="lang-level lang-native">Native</span></div>
      <div class="lang-badge"><span class="lang-name">English</span><span class="lang-level lang-pro">Professional</span></div>
    </div>`;
  }

  render("contactCards", contactItems, (c) => {
    const href = c.href ? safeUrl(c.href) : null;
    const tag = href ? "a" : "div";
    const attrs = href
      ? `href="${esc(href)}"${href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}`
      : "";
    return `<${tag} ${attrs} class="contact-card">
      <div class="contact-icon ${esc(c.cls)}" aria-hidden="true">${c.icon}</div>
      <div><div class="contact-info-title">${esc(c.label)}</div><div class="contact-info-val">${esc(c.value)}</div></div>
    </${tag}>`;
  });

  // Apply data-driven styles through the CSSOM
  document.querySelectorAll("[data-bg]").forEach((el) => {
    el.style.background = el.dataset.bg;
  });
  document.querySelectorAll("[data-delay]").forEach((el) => {
    el.style.setProperty("--delay", `${el.dataset.delay}s`);
  });

  const year = $("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ===================== LOADER ===================== */
  const loaderMs =
    Number.parseFloat(getComputedStyle(root).getPropertyValue("--loader-ms")) ||
    2000;
  const hideLoader = () =>
    setTimeout(
      () => {
        $("loader")?.classList.add("hidden");
        document.body.classList.add("is-loaded");
      },
      reducedMotion ? 0 : loaderMs,
    );
  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader, { once: true });

  /* ===================== CURSOR + PARTICLES (single rAF loop) ===================== */
  const dot = $("cursor-dot");
  const ring = $("cursor-ring");
  const HOVER_SELECTOR = "a,button,.chip,.project-card,.exp-card";
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  if (finePointer && dot && ring) {
    root.classList.add("has-cursor");
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      root.classList.add("cursor-active");
    });
    document.addEventListener("mouseover", (e) => {
      root.classList.toggle(
        "cursor-hover",
        Boolean(e.target.closest?.(HOVER_SELECTOR)),
      );
    });
    document.addEventListener("mouseleave", () =>
      root.classList.remove("cursor-active"),
    );
  }

  const canvas = $("particle-canvas");
  const ctx = canvas?.getContext("2d");
  const COLORS = [
    "rgba(99,102,241,",
    "rgba(236,72,153,",
    "rgba(6,182,212,",
    "rgba(245,158,11,",
  ];
  const LINK_DIST = 130;
  let W = 0;
  let H = 0;
  let particles = [];

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 2 + 1;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color}${this.opacity})`;
      ctx.fill();
    }
  }

  const resize = () => {
    if (!canvas || !ctx) return;
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Scale particle count with viewport area (O(n²) link pass stays cheap on phones)
    const count = Math.max(30, Math.min(100, Math.floor((W * H) / 14000)));
    particles = Array.from({ length: count }, () => new Particle());
  };

  const drawParticles = () => {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      p.update();
      p.draw();
    }
    const maxSq = LINK_DIST * LINK_DIST;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;
        if (distSq < maxSq) {
          const op = 1 - Math.sqrt(distSq) / LINK_DIST;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${op * 0.2})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
  };

  const frame = () => {
    if (finePointer && dot && ring) {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
    }
    if (ctx) drawParticles();
    requestAnimationFrame(frame);
  };

  if (ctx) {
    resize();
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });
  }
  if (reducedMotion) {
    if (ctx) drawParticles(); // single static frame
  } else {
    requestAnimationFrame(frame);
  }

  /* ===================== SCROLL REVEAL + SKILL BARS ===================== */
  const revealEls = document.querySelectorAll(
    ".reveal,.reveal-left,.reveal-right",
  );
  const bars = document.querySelectorAll(".skill-bar-item");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.add("revealed");
          // Drop the stagger delay once the entrance finishes so hovers aren't delayed
          el.addEventListener("transitionend", (ev) => {
            if (ev.target === el) el.classList.add("settled");
          });
          obs.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const barObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const fill = e.target.querySelector(".skill-bar-fill");
          if (fill) {
            fill.style.width = `${fill.dataset.pct}%`;
            fill.classList.add("animated");
          }
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.3 },
    );
    bars.forEach((el) => barObserver.observe(el));
  } else {
    // Old browsers: show everything immediately
    revealEls.forEach((el) => el.classList.add("revealed", "settled"));
    bars.forEach((el) => {
      const fill = el.querySelector(".skill-bar-fill");
      if (fill) fill.style.width = `${fill.dataset.pct}%`;
    });
  }

  /* ===================== NAV BURGER ===================== */
  const navLinks = $("navLinks");
  const burger = $("navBurger");
  const setMenu = (open) => {
    if (!navLinks || !burger) return;
    navLinks.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  };
  if (navLinks && burger) {
    burger.addEventListener("click", () =>
      setMenu(!navLinks.classList.contains("open")),
    );
    navLinks.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#navbar")) setMenu(false);
    });
  }
})();
