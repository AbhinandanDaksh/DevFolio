import { profile } from '../config/profile';
import { social, email } from '../config/social';
import { SocialIcon } from './SocialIcon';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 bg-[var(--bg)]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[var(--accent-muted)] text-sm font-medium tracking-widest uppercase mb-4" data-aos="fade-up">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4" data-aos="fade-up" data-aos-delay="100">
          {profile.contactHeading}
        </h2>
        <p className="text-[var(--text-muted)] mb-10" data-aos="fade-up" data-aos-delay="150">
          {profile.contactSubtext}
        </p>

        <a
          href={`mailto:${email}`}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--accent)]/50 text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/70 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-4 mt-12">
          {social.map((item, i) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={250 + i * 50}
              className="p-3 rounded-xl text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
              aria-label={item.label}
            >
              <SocialIcon name={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
