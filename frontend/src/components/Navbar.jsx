import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bg/85 backdrop-blur-xl border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex flex-col leading-[0.85] group"
        >
          <span className="font-heading text-2xl md:text-[26px] font-medium tracking-tight">
            Intelligent
          </span>
          <span className="font-sub text-[10px] uppercase tracking-[0.34em] text-ink-soft mt-1 group-hover:text-ink transition-colors">
            EnterprAIse Summit
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `font-sub text-xs uppercase tracking-[0.2em] transition-colors relative py-1 ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                } after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-ink after:transition-all ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="#registration"
            data-testid="nav-registration-btn"
            className="group inline-flex items-center gap-2 bg-ink text-bg px-6 py-3 font-sub text-xs uppercase tracking-[0.2em] hover:bg-[#222] transition-colors"
          >
            Register
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div data-testid="mobile-menu" className="md:hidden bg-bg border-t border-line px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
              className="font-heading text-3xl tracking-tight"
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="#registration"
            data-testid="mobile-registration-btn"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-ink text-bg px-6 py-4 font-sub text-xs uppercase tracking-[0.2em]"
          >
            Register <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
