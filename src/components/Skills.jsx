import config from '../portfolio.config';

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
          {config.skills.map((group, groupIndex) => (
            <div
              key={group.title}
              data-aos="zoom-in-up"
              data-aos-delay={groupIndex * 100}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-[var(--accent-muted)] text-sm font-medium mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-[var(--border)]/80 text-[var(--text-muted)] text-sm transition-colors hover:bg-[var(--border)] hover:text-[var(--accent)]"
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
