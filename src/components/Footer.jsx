import { profile } from '../config/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-5 border-t border-[var(--border)] bg-[var(--bg-alt)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[var(--text-muted)] text-sm">
        <p>{profile.footerCredit} · {year}</p>
        <p>{profile.name}</p>
      </div>
    </footer>
  );
}
