/* ===================== DATA ===================== */
const skills = [
  { name: 'C# / .NET', pct: 90, color: 'linear-gradient(90deg,#4f46e5,#818cf8)' },
  { name: 'ASP.NET Core / Web API', pct: 88, color: 'linear-gradient(90deg,#6366f1,#ec4899)' },
  { name: 'SQL Server', pct: 85, color: 'linear-gradient(90deg,#06b6d4,#3b82f6)' },
  { name: 'Entity Framework / Dapper', pct: 82, color: 'linear-gradient(90deg,#f59e0b,#ef4444)' },
  { name: 'JavaScript / HTML / CSS', pct: 75, color: 'linear-gradient(90deg,#ec4899,#f97316)' },
  { name: 'Python', pct: 70, color: 'linear-gradient(90deg,#06b6d4,#6366f1)' },
  { name: 'Git & GitHub', pct: 85, color: 'linear-gradient(90deg,#4f46e5,#06b6d4)' },
  { name: 'OOP / SOLID / Design Patterns', pct: 88, color: 'linear-gradient(90deg,#f59e0b,#ec4899)' },
];

const chips = [
  { name: 'C#', color: '#818cf8' }, { name: 'ASP.NET Core', color: '#6366f1' },
  { name: 'SQL Server', color: '#06b6d4' }, { name: 'Entity Framework', color: '#22d3ee' },
  { name: 'Dapper', color: '#34d399' }, { name: 'RESTful API', color: '#f472b6' },
  { name: 'MVC', color: '#a78bfa' }, { name: 'LINQ', color: '#818cf8' },
  { name: 'xUnit', color: '#fb923c' }, { name: 'Firebase', color: '#fbbf24' },
  { name: 'Stripe', color: '#60a5fa' }, { name: 'JavaScript', color: '#f59e0b' },
  { name: 'Bootstrap', color: '#818cf8' }, { name: 'Tailwind CSS', color: '#22d3ee' },
  { name: 'Python', color: '#6ee7b7' }, { name: 'C++', color: '#f87171' },
  { name: 'Java', color: '#fca5a5' }, { name: 'Git', color: '#f97316' },
  { name: 'GitHub', color: '#e2e8f0' }, { name: 'Visual Studio', color: '#818cf8' },
  { name: 'Data Structures', color: '#c4b5fd' }, { name: 'Algorithms', color: '#f472b6' },
  { name: 'OOP', color: '#6366f1' }, { name: 'SOLID', color: '#34d399' },
  { name: 'Design Patterns', color: '#fbbf24' },
];

const experience = [
  {
    title: 'Web Developer & Programming Instructor',
    company: 'Galaxy for Development',
    date: 'Sep 2025 – Present',
    location: 'Egypt',
    active: true,
    desc: 'Develop and maintain responsive web applications using modern web technologies. Delivered training sessions in Data Structures & Algorithms for engineers. Built responsive UIs with HTML, CSS, Bootstrap. Collaborated on curriculum development and guided students in project-based learning.',
    tags: [
      { label: 'Current Role', cls: 'tag-indigo' },
      { label: 'Full Stack', cls: 'tag-cyan' },
      { label: 'Instructor', cls: 'tag-pink' },
    ]
  },
  {
    title: 'Programming Instructor',
    company: 'NASS Academy',
    date: 'Feb 2025 – Sep 2025',
    location: 'Egypt',
    active: false,
    desc: 'Delivered Python and Networking courses with hands-on practical projects. Simplified complex programming concepts for beginners. Guided students in building real-world applications.',
    tags: [
      { label: 'Python', cls: 'tag-amber' },
      { label: 'Networking', cls: 'tag-cyan' },
      { label: 'Teaching', cls: 'tag-pink' },
    ]
  },
  {
    title: '.NET Developer Intern',
    company: 'Creative School',
    date: 'Dec 2024 – Feb 2025',
    location: 'Egypt',
    active: false,
    desc: 'Contributed to building an ERP System using ASP.NET Core. Designed backend modules and implemented database structures using SQL Server. Collaborated with team members on system architecture and development.',
    tags: [
      { label: 'ASP.NET Core', cls: 'tag-indigo' },
      { label: 'ERP System', cls: 'tag-cyan' },
      { label: 'SQL Server', cls: 'tag-amber' },
    ]
  },
  {
    title: '.NET Developer Intern',
    company: 'Information Technology Institute (ITI)',
    date: '2023 – 2024',
    location: 'Egypt',
    active: false,
    desc: 'Developed an ERP system using ASP.NET Core and SQL Server, reducing manual processes by 40%. Optimized 50+ SQL queries, improving database performance by 30%. Applied SOLID principles to refactor legacy code, enhancing system maintainability.',
    tags: [
      { label: '40% Process Reduction', cls: 'tag-pink' },
      { label: '30% DB Boost', cls: 'tag-amber' },
      { label: 'SOLID', cls: 'tag-indigo' },
    ]
  },
];

const projects = [
  {
    emoji: '🚆',
    name: 'TrainD',
    desc: 'Full-stack web and mobile app for train ticket booking, real-time tracking, and schedule management (Graduation Project). Integrated Stripe payment gateway processing $10K+ in pilot payments.',
    tech: ['ASP.NET Core', 'SQL Server', 'Firebase', 'Stripe', 'RESTful API'],
    link: 'https://github.com/Train-D/back-end',
    linkLabel: 'GitHub →',
  },
  {
    emoji: '🎓',
    name: 'College System',
    desc: 'MVC application for managing courses, instructors, and students with full CRUD operations for 500+ records. Reduced query execution time by 20% through indexing and stored procedures.',
    tech: ['ASP.NET MVC', 'Entity Framework', 'SQL Server', 'LINQ'],
    link: 'https://github.com/omarsalem33/ITI_Training',
    linkLabel: 'GitHub →',
  },
  {
    emoji: '📊',
    name: 'Student Result Management',
    desc: 'System to manage and display student results, importing data from Excel sheets and presenting it through a user-friendly web interface.',
    tech: ['ASP.NET', 'SQL Server', 'Excel Integration', 'HTML/CSS'],
    link: null,
    linkLabel: null,
  },
];

const certifications = [
  'Foundational C# with Microsoft',
  'SQL (Intermediate) Certificate',
  'Algorithmic Toolbox',
  'Web Development Using .NET (ITI)',
  '6th Place — 2021 ICPC Suez Canal Collegiate Programming Contest',
];

const contactItems = [
  { icon: '✉️', cls: 'c-indigo', label: 'Email', value: 'omarsalemabdelrouf@gmail.com', href: 'mailto:omarsalemabdelrouf@gmail.com' },
  { icon: '📱', cls: 'c-pink', label: 'Phone', value: '+201211590390', href: 'tel:+201211590390' },
  { icon: '📍', cls: 'c-cyan', label: 'Location', value: 'Ismailia, Egypt', href: null },
  { icon: '💼', cls: 'c-amber', label: 'LinkedIn', value: 'linkedin.com/in/omarsalem33/', href: 'https://linkedin.com/in/omarsalem33/' },
  { icon: '🐙', cls: 'c-indigo', label: 'GitHub', value: 'github.com/omarsalem33', href: 'https://github.com/omarsalem33' },
];

const marqueeItems = [
  'Galaxy for Development', 'NASS Academy', 'Creative School', 'ITI', 'Suez Canal University',
  'ASP.NET Core', 'C# Developer', 'SQL Server', 'RESTful APIs', 'SOLID Principles',
];

/* ===================== RENDER ===================== */
// Marquee
const track = document.getElementById('marqueeTrack');
const marqueeHTML = [...marqueeItems,...marqueeItems].map(i => `<span class="marquee-item"><span>★</span>${i}</span>`).join('');
track.innerHTML = marqueeHTML + marqueeHTML;

// Skill bars
const barsCol = document.getElementById('skillBars');
skills.forEach((s, i) => {
  barsCol.innerHTML += `
    <div class="skill-bar-item reveal" style="transition-delay:${i*0.08}s">
      <div class="skill-bar-header"><span>${s.name}</span><span style="color:var(--text-muted)">${s.pct}%</span></div>
      <div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="${s.pct}" style="background:${s.color}"></div></div>
    </div>`;
});

// Chips
const cloud = document.getElementById('chipsCloud');
chips.forEach(c => {
  cloud.innerHTML += `<div class="chip"><div class="chip-dot" style="background:${c.color}"></div>${c.name}</div>`;
});

// Experience
const tl = document.getElementById('timeline');
experience.forEach((e, i) => {
  tl.innerHTML += `
    <div class="timeline-item reveal" style="transition-delay:${i*0.1}s">
      <div class="timeline-dot${e.active?' active':''}"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <div class="exp-title">${e.title}</div>
            <div class="exp-company">${e.company}</div>
          </div>
          <div class="exp-meta">
            <span class="exp-date">${e.date}</span>
            <span>${e.location}</span>
          </div>
        </div>
        <div class="exp-desc">${e.desc}</div>
        <div class="exp-tags">${e.tags.map(t=>`<span class="exp-tag ${t.cls}">${t.label}</span>`).join('')}</div>
      </div>
    </div>`;
});

// Projects
const pg = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  pg.innerHTML += `
    <div class="project-card reveal" style="transition-delay:${i*0.1}s">
      <div class="project-emoji">${p.emoji}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tech">${p.tech.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
      ${p.link ? `<a href="${p.link}" target="_blank" class="project-link">${p.linkLabel}</a>` : ''}
    </div>`;
});

// Education
const eduCards = document.getElementById('eduCards');
eduCards.innerHTML = `
  <div class="edu-card">
    <div class="edu-degree">Bachelor's in Computers & Informatics</div>
    <div class="edu-uni">Suez Canal University</div>
    <div class="edu-meta">
      <span>2019 – 2023</span>
      <span class="edu-grade">Very Good · GP: Excellent</span>
    </div>
  </div>
  <div class="certs-title">Certifications & Achievements</div>
  ${certifications.map(c=>`<div class="cert-item"><div class="cert-icon">🏅</div>${c}</div>`).join('')}`;

// Languages
const langSection = document.getElementById('langSection');
langSection.innerHTML = `
  <div class="lang-title">Languages</div>
  <div class="lang-badges">
    <div class="lang-badge"><span class="lang-name">Arabic</span><span class="lang-level lang-native">Native</span></div>
    <div class="lang-badge"><span class="lang-name">English</span><span class="lang-level lang-pro">Professional</span></div>
  </div>`;

// Contact
const cc = document.getElementById('contactCards');
contactItems.forEach(c => {
  const tag = c.href ? 'a' : 'div';
  const href = c.href ? `href="${c.href}"` : '';
  const target = c.href && c.href.startsWith('http') ? 'target="_blank"' : '';
  cc.innerHTML += `<${tag} ${href} ${target} class="contact-card">
    <div class="contact-icon ${c.cls}">${c.icon}</div>
    <div><div class="contact-info-title">${c.label}</div><div class="contact-info-val">${c.value}</div></div>
  </${tag}>`;
});

/* ===================== LOADER ===================== */
window.addEventListener('load', () => {
  setTimeout(() => { document.getElementById('loader').classList.add('hidden'); }, 2000);
});

/* ===================== CURSOR ===================== */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
  rx += (e.clientX - rx) * 0.12; ry += (e.clientY - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
});
function animateRing() {
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animateRing);
}
animateRing();
document.querySelectorAll('a,button,.chip,.project-card,.exp-card').forEach(el => {
  el.addEventListener('mouseenter', () => { dot.style.width='12px'; dot.style.height='12px'; ring.style.width='50px'; ring.style.height='50px'; ring.style.borderColor='rgba(236,72,153,0.6)'; });
  el.addEventListener('mouseleave', () => { dot.style.width='8px'; dot.style.height='8px'; ring.style.width='36px'; ring.style.height='36px'; ring.style.borderColor='rgba(99,102,241,0.6)'; });
});

/* ===================== PARTICLE CANVAS ===================== */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles=[];
const COLORS = ['rgba(99,102,241,', 'rgba(236,72,153,', 'rgba(6,182,212,', 'rgba(245,158,11,'];
function resize() { W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
resize(); window.addEventListener('resize', resize);
class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x=Math.random()*W; this.y=Math.random()*H;
    this.vx=(Math.random()-0.5)*0.4; this.vy=(Math.random()-0.5)*0.4;
    this.r=Math.random()*2+1;
    this.color=COLORS[Math.floor(Math.random()*COLORS.length)];
    this.opacity=Math.random()*0.5+0.2;
  }
  update() {
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<0||this.x>W||this.y<0||this.y>H) this.reset();
  }
  draw() {
    ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fillStyle=this.color+this.opacity+')'; ctx.fill();
  }
}
for(let i=0;i<100;i++) particles.push(new Particle());
function drawParticles() {
  ctx.clearRect(0,0,W,H);
  particles.forEach(p=>{p.update();p.draw();});
  for(let i=0;i<particles.length;i++) {
    for(let j=i+1;j<particles.length;j++) {
      const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<130) {
        const op=1-dist/130;
        ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle=`rgba(99,102,241,${op*0.2})`; ctx.lineWidth=0.7; ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ===================== SCROLL REVEAL ===================== */
const revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('revealed'); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ===================== SKILL BAR OBSERVER ===================== */
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      const fill = e.target.querySelector('.skill-bar-fill');
      if(fill && !fill.dataset.animated) {
        fill.dataset.animated='1';
        fill.style.width = fill.dataset.pct + '%';
      }
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-bar-item').forEach(el => barObserver.observe(el));

/* ===================== NAV BURGER ===================== */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}