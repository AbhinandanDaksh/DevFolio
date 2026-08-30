<div align="center">

# ✦ DevFolio — Open Source Portfolio Template

**A clean, animated, fully config-driven portfolio built with React + Vite + Tailwind CSS**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![AOS](https://img.shields.io/badge/AOS-Animations-34D399?style=flat-square)](https://michalsnik.github.io/aos/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

[🚀 Live Demo](https://dev-folio-bay.vercel.app/) · [Report Bug](https://github.com/AbhinandanDaksh/DevFolio/issues) · [Request Feature](https://github.com/AbhinandanDaksh/DevFolio/issues)

![Portfolio Preview](./public/preview.png)

</div>

---

## ✨ Features

- 🎨 **Dark / Light theme** — smooth toggle with localStorage persistence
- 🔤 **Typewriter animation** — cycles through your roles
- 📜 **Scroll progress bar** — top indicator as you scroll
- 🌊 **AOS scroll animations** — elements animate every time they enter view
- ✨ **Micro-animations** — shimmer, glow, spring bounce on skills & projects
- 📱 **Fully responsive** — mobile-first, hamburger menu with overlay
- ⚙️ **Config-driven** — edit **5 files only**, zero component changes needed
- ♿ **Accessible** — semantic HTML, focus rings, skip link, ARIA labels
- 🚀 **Fast** — Vite build, GPU-accelerated CSS animations

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/AbhinandanDaksh/DevFolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Personalize — Edit Only These 5 Files

> **You never need to touch any component!**
> All personal data lives in `src/config/`.

### `src/config/profile.js` — Your info
```js
export const profile = {
  name: 'John Doe',                 // ← Your name
  tagline: 'I build things for the web.',
  shortBio: 'Full Stack Developer based in India',
  roles: [                          // ← These will cycle in the typewriter
    'Full Stack Developer',
    'React Enthusiast',
    'Open Source Contributor',
  ],
  resumeUrl: '/resume.pdf',         // ← Place in the public/ folder
  about: [                          // ← Paragraphs for the About section
    "I'm a developer who ...",
  ],
  photoUrl: '/photo.jpg',           // ← Set to null if you don't want a photo
  contactHeading: "Let's work together",
  contactSubtext: "I'm open to new projects ...",
};
```

### `src/config/skills.js` — Your skills
```js
export const skills = [
  {
    title: 'Languages & Markup',
    items: ['HTML5', 'CSS3', 'JavaScript'],
  },
  // add more groups...
];
```

### `src/config/education.js` — Your education history
```js
export const education = [
  {
    degree: 'Bachelor of Technology — Computer Science',
    institution: 'Your University Name',
    location: 'City, Country',
    duration: '2022 — 2026',
    grade: 'CGPA: 8.5 / 10',
    description: 'Brief overview of your coursework and achievements.',
    highlights: ['Web Development', 'DSA', 'DBMS'],
  },
  // add more entries...
];
```

### `src/config/projects.js` — Your projects
```js
export const projects = [
  {
    title: 'My Awesome App',
    description: 'What it does, tech used, outcome.',
    tags: ['React', 'Node.js'],
    githubUrl: 'https://github.com/you/repo',
    liveUrl: 'https://your-app.com',
    featured: true,
  },
];
```

### `src/config/social.js` — Your social links
```js
export const social = [
  { label: 'GitHub',   url: 'https://github.com/you',    icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/you', icon: 'linkedin' },
  { label: 'Twitter',  url: 'https://twitter.com/you',   icon: 'twitter' },
];

export const email = 'you@example.com';
```

---

## 📁 Project Structure

```
src/
├── config/                 ← Edit these to personalize
│   ├── profile.js          ← Name, bio, roles, about, contact
│   ├── skills.js           ← Skill groups
│   ├── education.js        ← Education timeline
│   ├── projects.js         ← Project cards
│   └── social.js           ← Social links + email
│
├── components/             ← Don't need to touch these
│   ├── Header.jsx          ← Navbar + scroll progress bar
│   ├── Hero.jsx            ← Landing section + typewriter
│   ├── About.jsx           ← About + animated photo
│   ├── Skills.jsx          ← Skill cards with animations
│   ├── Education.jsx       ← Education timeline with animations
│   ├── Projects.jsx        ← Project cards with animations
│   ├── Contact.jsx         ← Contact + social links
│   ├── Footer.jsx          ← Footer
│   └── SocialIcon.jsx      ← SVG icon renderer
│
├── hooks/
│   ├── useTypewriter.js    ← Typewriter hook
│   └── useInView.js        ← Intersection observer hook
│
├── context/
│   └── ThemeContext.jsx    ← Dark/light theme context
│
├── App.jsx                 ← AOS init + layout
└── index.css               ← Theme variables + animations
```

---

## 🎨 Theming

Colors are CSS variables in `src/index.css`. Change the accent from **emerald** to any color:

```css
:root {
  --accent: #34d399;        /* ← Change this to your color */
  --accent-strong: #10b981;
  --accent-muted: rgba(52, 211, 153, 0.9);
  --shadow-accent: rgba(52, 211, 153, 0.2);
}
```

---

## 📦 Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
# Set base in vite.config.js:
# base: '/repo-name/'
npm run build
```

---

## 🤝 Contributing

Contributions welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "feat: add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — free to use, modify, and distribute.
See [LICENSE](./LICENSE) for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/AbhinandanDaksh">Abhinandan Daksh</a></p>
  <p>
    <a href="https://dev-folio-bay.vercel.app/">🚀 Live Demo</a> ·
    <a href="https://github.com/AbhinandanDaksh/DevFolio">⭐ Star on GitHub</a>
  </p>
</div>
 
