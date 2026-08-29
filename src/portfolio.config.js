// ============================================================
//  portfolio.config.js — Apna saara data yahan bharo!
//  GitHub pe fork karne wale sirf yeh ek file edit karein.
// ============================================================

const config = {
  // ── Personal Info ─────────────────────────────────────────
  name: 'Your Name',
  tagline: 'I build things for the web.',
  shortBio: 'Frontend Developer based in India 🇮🇳',

  // Typewriter mein cycle honge ye roles
  roles: [
    'Frontend Developer',
    'React Enthusiast',
    'UI/UX Craftsman',
    'Open Source Contributor',
  ],

  // Resume file — /public folder mein rakhein
  resumeUrl: '/resume.pdf',

  // ── About Section ─────────────────────────────────────────
  about: {
    paragraphs: [
      "I'm a frontend developer who loves turning ideas into clean, interactive experiences. I focus on component-based architecture, semantic HTML, and CSS that scales.",
      "When I'm not coding, I enjoy exploring new tools, contributing to open source, and keeping up with the ever-evolving web platform.",
      "I'm open to freelance projects and full-time opportunities where I can build products that users love.",
    ],
    // Apni photo ka path (public folder mein rakhein) ya null rakhein
    photoUrl: null,
    photoAlt: 'Photo of Your Name',
  },

  // ── Skills Section ────────────────────────────────────────
  skills: [
    {
      title: 'Languages & Markup',
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React', 'Vite', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Tools & Other',
      items: ['Git', 'Figma', 'Responsive Design', 'Web Performance'],
    },
  ],

  // ── Projects Section ──────────────────────────────────────
  projects: [
    {
      title: 'Project One',
      description:
        'A short description of your project—tech stack, problem solved, and outcome. Keep it to 2–3 lines.',
      tags: ['React', 'Tailwind', 'API'],
      githubUrl: 'https://github.com',
      liveUrl: '#',
    },
    {
      title: 'Project Two',
      description:
        'Another project highlight. Mention key features or metrics if relevant.',
      tags: ['Next.js', 'TypeScript'],
      githubUrl: 'https://github.com',
      liveUrl: '#',
    },
    {
      title: 'Project Three',
      description:
        'Third project to show range. E-commerce, dashboard, or side project—whatever represents you best.',
      tags: ['React', 'Node', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: '#',
    },
  ],

  // ── Contact & Social Links ────────────────────────────────
  contact: {
    email: 'your.email@example.com',
    heading: "Let's work together",
    subtext:
      "I'm open to new projects and collaborations. Drop a message and I'll get back to you.",
  },

  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'linkedin',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'twitter',
    },
  ],

  // ── Footer ────────────────────────────────────────────────
  footer: {
    credit: 'Designed & built with care',
  },

  // ── SEO / Meta ────────────────────────────────────────────
  seo: {
    title: 'Your Name — Frontend Developer',
    description:
      'Portfolio of Your Name, a frontend developer specialising in React, modern CSS, and great UX.',
    url: 'https://yourwebsite.com',
  },
};

export default config;
