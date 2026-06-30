import { Link } from "react-router-dom";
import { NAV_LINKS, EVENT } from "../data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-ink text-bg">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <div className="font-heading text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Intelligent
            <br />
            EnterprAIse
            <br />
            <span className="italic text-white/60">Summit.</span>
          </div>
          <p className="font-body text-white/50 mt-8 max-w-md leading-relaxed">
            {EVENT.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-sub text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            Navigate
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-link-${l.label.toLowerCase()}`}
                  className="font-heading text-2xl text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-sub text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            Contact
          </p>
          <div className="space-y-4 font-body text-white/70 text-sm">
            <a href={`mailto:${EVENT.venue.email}`} className="block hover:text-white transition-colors">
              {EVENT.venue.email}
            </a>
            <p>{EVENT.venue.phone}</p>
            <p className="leading-relaxed">{EVENT.venue.name}, {EVENT.city}</p>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-white/40">
          © 2026 — All rights reserved
        </p>
        <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-white/40">
          {EVENT.date} · {EVENT.city}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
