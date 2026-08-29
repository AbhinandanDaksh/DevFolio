import config from '../portfolio.config';

export default function About() {
  const { about } = config;

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
          <div
            className="md:col-span-3 space-y-4 text-[var(--text-muted)] leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="md:col-span-2" data-aos="fade-left" data-aos-delay="200">
            <div className="aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] text-sm transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-lg">
              {about.photoUrl ? (
                <img
                  src={about.photoUrl}
                  alt={about.photoAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{about.photoAlt}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
