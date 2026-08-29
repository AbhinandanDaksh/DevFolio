import { education } from '../config/education';

export default function Education() {
  return (
    <section id="education" className="py-24 px-5 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
            <span className="text-[var(--accent)]/80">04.</span> Education
          </h2>
          <div className="h-px w-24 bg-[var(--accent)]/50 mb-12" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)]/60 via-[var(--accent)]/20 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {education.map((item, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  data-aos={isEven ? 'fade-right' : 'fade-left'}
                  data-aos-delay={i * 100}
                  data-aos-easing="ease-out-cubic"
                  className={`relative flex flex-col md:flex-row md:items-start gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-5 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--shadow-accent)] ring-4 ring-[var(--bg)]" />
                  </div>

                  {/* Duration badge — desktop only, opposite side */}
                  <div className={`hidden md:flex md:w-1/2 ${isEven ? 'justify-end pr-10' : 'justify-start pl-10'} pt-4`}>
                    <span className="text-xs font-mono text-[var(--accent)]/70 bg-[var(--accent)]/8 border border-[var(--accent)]/20 px-3 py-1.5 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'}
                      group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]
                      p-6 transition-all duration-500 ease-out
                      hover:border-[var(--border-hover)]
                      hover:shadow-[0_8px_32px_var(--shadow-accent)]
                      hover:-translate-y-1`}
                  >
                    {/* Shimmer */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[var(--accent)]/6 to-transparent" />

                    {/* Corner glow */}
                    <div className="pointer-events-none absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[var(--accent)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Mobile duration */}
                    <span className="md:hidden inline-block text-xs font-mono text-[var(--accent)]/70 bg-[var(--accent)]/8 border border-[var(--accent)]/20 px-2.5 py-1 rounded-full mb-3">
                      {item.duration}
                    </span>

                    {/* Degree */}
                    <h3 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug mb-1">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-1.5 text-sm text-[var(--accent-muted)] mb-1">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                      </svg>
                      {item.institution}
                    </div>

                    {/* Location + Grade */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-muted)] mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1 text-[var(--accent)]/80 font-medium">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        {item.grade}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.highlights.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="skill-tag-animate px-2.5 py-1 rounded-md text-xs font-medium
                                     text-[var(--accent-muted)] border border-[var(--accent)]/20
                                     bg-[var(--accent)]/5
                                     hover:bg-[var(--accent)]/15 hover:text-[var(--accent)]
                                     hover:scale-[1.06] hover:-translate-y-0.5
                                     transition-all duration-200 cursor-default select-none"
                          style={{ '--tag-delay': `${i * 100 + 300 + tagIndex * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
