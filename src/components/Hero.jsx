import { useTypewriter } from '../hooks/useTypewriter';

const roles = [
  'Frontend Developer',
  'React Enthusiast',
  'UI/UX Craftsman',
  'Open Source Contributor',
];

export default function Hero() {
  const typedRole = useTypewriter(roles, 85, 45, 2000);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-5 pt-20 pb-16 bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--shadow-accent),transparent_50%)] pointer-events-none animate-gradient opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,var(--shadow-accent),transparent)] pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Typewriter role badge */}
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up opacity-0 delay-1">
          <span className="text-[var(--accent-muted)] text-sm font-medium tracking-widest uppercase">
            {typedRole}
            {/* blinking cursor */}
            <span className="inline-block w-[2px] h-[1em] bg-[var(--accent)] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" aria-hidden="true" />
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text)] tracking-tight leading-tight mb-6 animate-fade-in-up opacity-0 delay-2">
          Hi, I&apos;m{' '}
          <span className="text-[var(--accent)] inline-block animate-float">Your Name</span>
          <br />
          I build things for the web.
        </h1>

        <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-3">
          I craft responsive, accessible, and performant user interfaces with React,
          modern CSS, and a focus on great UX.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0 delay-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-strong)] text-[var(--skip-text)] font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-[var(--shadow-accent)] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            View Projects
          </a>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--accent)]/50 text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/80 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] group"
            aria-label="Download my resume"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
