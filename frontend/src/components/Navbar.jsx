import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, EVENT, ASSETS } from "../data/content";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoBroken, setLogoBroken] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header data-testid="site-navbar" className="fixed top-0 left-0 right-0 z-50">
      {/* Thin gradient info bar — instant colour, sets the tone */}
      <div className="grad-bg hidden md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-1.5 md:px-12 lg:px-16">
          <p className="font-sub text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            {EVENT.headline}
          </p>
          <p className="font-sub text-[11px] font-bold uppercase tracking-[0.22em] text-white/90">
            {EVENT.date} · {EVENT.city}
          </p>
        </div>
      </div>

      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/90 shadow-[0_8px_30px_-20px_rgba(23,16,31,.4)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-6 md:px-12 lg:px-16">
          <Link to="/" data-testid="nav-logo" className="group flex items-center gap-3">
            {!logoBroken ? (
              <img
                src={ASSETS.logo}
                alt={EVENT.name}
                onError={() => setLogoBroken(true)}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <span className="flex flex-col leading-[0.95]">
                <span className="font-display text-lg font-semibold tracking-tight">
                  Intelligent
                </span>
                <span className="grad-text font-display text-lg font-semibold tracking-tight">
                  EnterprAIse
                </span>
              </span>
            )}
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.filter((l) => l.to !== "/registration").map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative py-1 font-sub text-[13px] font-bold uppercase tracking-[0.16em] transition-colors ${
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-full after:transition-all after:duration-300 after:[background-image:var(--brand-gradient)] ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/registration"
              data-testid="nav-registration-btn"
              className="group grad-bg inline-flex items-center gap-2 rounded-full px-6 py-3 font-sub text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_26px_-12px_rgba(124,77,255,.9)] transition-transform duration-300 hover:scale-[1.04]"
            >
              Register
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="text-ink md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          data-testid="mobile-menu"
          className="flex flex-col gap-5 border-t border-line bg-bg px-6 py-8 md:hidden"
        >
          {NAV_LINKS.filter((l) => l.to !== "/registration").map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
              className="font-display text-3xl font-semibold tracking-tight"
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/registration"
            data-testid="mobile-registration-btn"
            className="grad-bg mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-sub text-xs font-bold uppercase tracking-[0.18em] text-white"
          >
            Register <ArrowUpRight size={15} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
