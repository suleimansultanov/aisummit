import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, EVENT, ASSETS } from "../data/content";

export const Footer = () => {
  const [logoBroken, setLogoBroken] = useState(false);

  return (
    <footer data-testid="site-footer" className="relative overflow-hidden bg-ink text-white">
      {/* colour glow so the footer doesn't read as a flat black slab */}
      <div className="blob -left-32 -top-24 h-80 w-80" style={{ background: "#FF7A18" }} />
      <div className="blob -right-24 bottom-0 h-96 w-96" style={{ background: "#A729F5" }} />

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {!logoBroken ? (
              <img
                src={ASSETS.logoFooter}
                alt={EVENT.name}
                onError={() => setLogoBroken(true)}
                className="h-14 w-auto object-contain"
              />
            ) : (
              <div className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Intelligent
                <br />
                <span className="grad-text">EnterprAIse</span> Summit
              </div>
            )}
            <p className="mt-7 max-w-md font-body leading-relaxed text-white/55">
              {EVENT.tagline}
            </p>
            <Link
              to="/registration"
              data-testid="footer-register-btn"
              className="group grad-bg mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-sub text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Reserve your seat
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="mb-6 font-sub text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="font-display text-xl font-medium text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-6 font-sub text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
              Contact
            </p>
            <div className="space-y-4 font-body text-sm text-white/70">
              <a
                href={`mailto:${EVENT.venue.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-brand-pink" />
                {EVENT.venue.email}
              </a>
              <p className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-brand-orange" />
                {EVENT.venue.phone}
              </p>
              <p className="flex items-start gap-3 leading-relaxed">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-violet" />
                <span>
                  {EVENT.venue.name}, {EVENT.city}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-sub text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            © {new Date().getFullYear()} — All rights reserved
          </p>
          <p className="font-sub text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            {EVENT.date} · {EVENT.city}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
