import { skills } from '../config/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
            <span className="text-[var(--accent)]/80">02.</span> Skills
          </h2>
          <div className="h-px w-24 bg-[var(--accent)]/50 mb-10" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {skills.map((group, groupIndex) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100}
              data-aos-easing="ease-out-cubic"
              className="group relative p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden
                         transition-all duration-500 ease-out
                         hover:border-[var(--border-hover)] hover:-translate-y-2
                         hover:shadow-[0_12px_40px_var(--shadow-accent)]"
            >
              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[var(--accent)]/6 to-transparent" />

              {/* Corner glow */}
              <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[var(--accent)]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Group badge */}
              <span className="absolute top-4 right-5 text-xs font-mono text-[var(--accent)]/25 group-hover:text-[var(--accent)]/50 transition-colors duration-500">
                0{groupIndex + 1}
              </span>

              <h3 className="text-[var(--accent-muted)] text-xs font-semibold mb-5 tracking-widest uppercase">
                {group.title}
              </h3>

              {/* Tags — CSS stagger, no per-element AOS */}
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="skill-tag-animate px-3 py-1.5 rounded-lg text-sm font-medium
                               text-[var(--text-muted)] border border-[var(--border)]/60
                               bg-[var(--bg-card)] cursor-default select-none
                               transition-all duration-200 ease-out
                               hover:text-[var(--accent)] hover:border-[var(--accent)]/50
                               hover:bg-[var(--accent)]/8
                               hover:shadow-[0_0_14px_var(--shadow-accent)]
                               hover:-translate-y-0.5 hover:scale-[1.07]
                               active:scale-95"
                    style={{ '--tag-delay': `${groupIndex * 100 + itemIndex * 55}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
