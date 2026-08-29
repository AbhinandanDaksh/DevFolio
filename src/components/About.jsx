import { profile } from '../config/profile';

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

        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Text */}
          <div
            className="md:col-span-3 space-y-4 text-[var(--text-muted)] leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
          >
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Photo wrapper */}
          <div
            className="md:col-span-2 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
          >
            {/* Outer glow ring — pulses */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">

              {/* Animated spinning gradient ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--accent)] via-[var(--accent-strong)] to-transparent
                              opacity-30 blur-sm animate-[spin_8s_linear_infinite]" />

              {/* Static glow behind */}
              <div className="absolute inset-0 rounded-2xl bg-[var(--accent)]/10 blur-xl animate-[pulse_4s_ease-in-out_infinite]" />

              {/* Decorative offset square */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[var(--accent)]/20" />

              {/* Photo card */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden
                           border-2 border-[var(--border)]
                           bg-[var(--bg-card)]
                           shadow-[0_0_0_1px_var(--border)]
                           transition-all duration-500 ease-out
                           hover:border-[var(--accent)]/60
                           hover:shadow-[0_0_32px_var(--shadow-accent)]
                           hover:scale-[1.04]
                           hover:-rotate-1
                           group"
              >
                {/* Shimmer on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {profile.photoUrl ? (
                  <img
                    src={profile.photoUrl}
                    alt={profile.photoAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Placeholder when no photo */
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg)]">
                    <div className="w-20 h-20 rounded-full bg-[var(--accent)]/10 border-2 border-[var(--accent)]/30 flex items-center justify-center">
                      <svg className="w-9 h-9 text-[var(--accent)]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-xs text-[var(--text-muted)]/50 font-mono">your photo here</span>
                  </div>
                )}
              </div>

              {/* Floating dot decorations */}
              <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-[var(--accent)]/60 animate-[pulse_3s_ease-in-out_infinite]" />
              <div className="absolute -bottom-1 -left-4 w-2 h-2 rounded-full bg-[var(--accent)]/40 animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
              <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-[var(--accent)]/30 animate-[pulse_5s_ease-in-out_infinite_1s]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
