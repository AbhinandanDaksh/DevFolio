import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../config/profile';

const navLinks = profile.navLinks ?? [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
    const el = document.documentElement;
    const scrollTop = window.scrollY || el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    const progress = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const ThemeIcon = () => (
    theme === 'dark' ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={scrollProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${scrollProgress}%` }}
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] transition-[width] duration-100 ease-linear shadow-[0_0_8px_var(--shadow-accent)]"
        />

        <nav className="w-full max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            className="shrink-0 text-lg font-semibold text-[var(--text)] tracking-tight transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 rounded"
            onClick={() => setOpen(false)}
          >
            <span className="text-[var(--accent)]">&lt;</span>Portfolio <span className="text-[var(--accent)]">{'/>'}  </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-0.5 after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300 after:content-['']"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop theme toggle */}
          <div className="hidden md:flex items-center justify-end shrink-0 w-[72px]">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 inline-flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <ThemeIcon />
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-1 shrink-0">
            <button
              type="button"
              className="p-2.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 inline-flex items-center justify-center"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <ThemeIcon />
            </button>
            <button
              type="button"
              className="p-2.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-card)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 inline-flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu — separate from header so it doesn't push content */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--bg)]/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Menu panel — slides from top */}
        <div
          className={`absolute top-0 left-0 right-0 bg-[var(--bg)] border-b border-[var(--border)] shadow-2xl transition-transform duration-300 ease-out ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Header row inside menu */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]/50">
            <a
              href="#hero"
              className="text-lg font-semibold text-[var(--text)] tracking-tight"
              onClick={() => setOpen(false)}
            >
              <span className="text-[var(--accent)]">&lt;</span>Portfolio <span className="text-[var(--accent)]">{'/>'}</span>
            </a>
            <button
              type="button"
              className="p-2.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)] transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: open ? `${60 + i * 50}ms` : '0ms',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                }}
                className={open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/8 text-base font-medium transition-all"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-[var(--accent)]/60 text-xs font-mono">0{i + 1}.</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom action */}
          <div className="px-8 pb-6 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center py-3 rounded-xl border border-[var(--accent)]/50 text-[var(--accent)] hover:bg-[var(--accent)]/10 font-medium transition-all text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
