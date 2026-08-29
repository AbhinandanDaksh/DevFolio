export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-[var(--bg-alt)] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--bg-alt)_100%)] pointer-events-none opacity-30" />
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
            <span className="text-[var(--accent)]/80">01.</span> About Me
          </h2>
          <div className="h-px w-24 bg-[var(--accent)]/50 mb-10" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-4 text-[var(--text-muted)] leading-relaxed" data-aos="fade-right" data-aos-delay="100">
            <p>
              I&apos;m a frontend developer who loves turning ideas into clean,
              interactive experiences. I focus on component-based architecture,
              semantic HTML, and CSS that scales.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring new tools, contributing to
              open source, and keeping up with the ever-evolving web platform.
            </p>
            <p>
              I&apos;m open to freelance projects and full-time opportunities where
              I can build products that users love.
            </p>
          </div>

          <div className="md:col-span-2" data-aos="fade-left" data-aos-delay="200">
            <div className="aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] text-sm transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-lg">
              Your photo or illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
