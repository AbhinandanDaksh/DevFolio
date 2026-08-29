import { projects } from '../config/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 bg-[var(--bg-alt)]">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
            <span className="text-[var(--accent)]/80">05.</span> Projects
          </h2>
          <div className="h-px w-24 bg-[var(--accent)]/50 mb-10" />
        </div>

        <ul className="space-y-6">
          {projects.map((project, i) => (
            <li
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-easing="ease-out-cubic"
              className="project-card group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]
                         transition-all duration-500 ease-out
                         hover:border-[var(--border-hover)]
                         hover:shadow-[0_16px_48px_var(--shadow-accent)]
                         hover:-translate-y-1"
            >
              {/* Left accent bar — slides in on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--accent)] to-[var(--accent-strong)]
                              scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out rounded-l-xl" />

              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[var(--accent)]/5 to-transparent" />

              {/* Top-right glow */}
              <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[var(--accent)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  {/* Project number */}
                  <span className="text-xs font-mono text-[var(--accent)]/40 group-hover:text-[var(--accent)]/70 transition-colors duration-300 mb-1 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="text-xl font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-muted)] mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags — CSS stagger pop-in */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="skill-tag-animate px-2.5 py-1 rounded-md text-xs font-medium
                                   text-[var(--accent-muted)] border border-[var(--accent)]/20
                                   bg-[var(--accent)]/5
                                   transition-all duration-200
                                   hover:bg-[var(--accent)]/15 hover:border-[var(--accent)]/40
                                   hover:text-[var(--accent)] hover:scale-[1.06]
                                   cursor-default select-none"
                        style={{ '--tag-delay': `${i * 100 + 200 + tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 shrink-0 sm:mt-7">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm
                               text-[var(--text-muted)] border border-[var(--border)]
                               hover:text-[var(--accent)] hover:border-[var(--accent)]/50
                               hover:bg-[var(--accent)]/8 hover:shadow-[0_0_12px_var(--shadow-accent)]
                               transition-all duration-200 hover:scale-[1.05] active:scale-95"
                    aria-label={`${project.title} — GitHub`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="hidden sm:inline text-xs">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm
                               text-[var(--text-muted)] border border-[var(--border)]
                               hover:text-[var(--accent)] hover:border-[var(--accent)]/50
                               hover:bg-[var(--accent)]/8 hover:shadow-[0_0_12px_var(--shadow-accent)]
                               transition-all duration-200 hover:scale-[1.05] active:scale-95"
                    aria-label={`${project.title} — Live demo`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="hidden sm:inline text-xs">Live</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
