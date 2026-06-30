import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import Reveal from "../components/Reveal";
import Countdown from "../components/Countdown";
import {
  EVENT,
  ORGANIZERS,
  SPONSORS,
  LECTURES,
} from "../data/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000";

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Summit" className="w-full h-full object-cover grayscale-img !filter-none opacity-[0.92]" style={{ filter: "grayscale(20%)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-bg/10" />
        </div>

        <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-24 pt-32">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-ink" />
              <span className="font-sub text-xs uppercase tracking-[0.3em] text-ink">
                {EVENT.date} — {EVENT.city}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading font-medium tracking-tighter leading-[0.86] text-6xl sm:text-7xl lg:text-[9rem]">
              Intelligent
              <br />
              <span className="italic text-ink-soft">EnterprAIse</span> Summit
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="font-body text-lg text-ink-soft max-w-xl leading-relaxed">
                {EVENT.tagline}
              </p>
              <a
                href="#registration"
                data-testid="hero-register-btn"
                className="group inline-flex items-center gap-3 bg-ink text-bg px-8 py-4 font-sub text-xs uppercase tracking-[0.25em] hover:bg-[#222] transition-colors self-start"
              >
                Reserve your seat
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT + COUNTDOWN */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-sub text-xs uppercase tracking-[0.3em] text-ink-soft mb-6">
                (01) About the Conference
              </p>
              <div className="font-sub text-[10px] uppercase tracking-[0.25em] text-ink-soft mb-4">
                Count every second until the event
              </div>
              <Countdown />
              <Link
                to="/agenda"
                data-testid="about-agenda-link"
                className="mt-8 inline-flex items-center gap-2 font-sub text-xs uppercase tracking-[0.2em] border-b border-ink pb-1 hover:gap-4 transition-all"
              >
                View full agenda <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                {EVENT.about}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-12 border-t border-line">
                {EVENT.opportunities.map((o, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-6 py-5 border-b border-line group"
                  >
                    <span className="font-sub text-xs text-ink-soft tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-body text-lg md:text-xl group-hover:translate-x-2 transition-transform">
                      {o}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-heading italic text-2xl md:text-3xl text-ink-soft mt-12 leading-snug max-w-2xl">
                “{EVENT.closing}”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GUEST LECTURES */}
      <section className="bg-ink text-bg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="font-sub text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                  (02) Guest Lectures
                </p>
                <h2 className="font-heading text-5xl md:text-7xl tracking-tight leading-none">
                  From Silicon Valley
                </h2>
              </div>
              <p className="font-body text-white/50 max-w-sm">
                Two deep-dive keynotes tracing the journey from large language
                models to artificial super-intelligence.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {LECTURES.map((lec, i) => (
              <Reveal key={lec.no} delay={i * 0.1}>
                <div className="bg-ink p-8 md:p-12 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-heading text-6xl text-white/20">{lec.no}</span>
                    <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-white/50 border border-white/20 px-3 py-1.5">
                      {lec.length}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight">
                    {lec.title}
                  </h3>
                  <p className="font-sub text-sm text-white/60 mt-5 leading-relaxed">
                    {lec.focus}
                  </p>
                  <p className="font-body text-white/45 mt-6 leading-relaxed text-sm flex-1">
                    {lec.body}
                  </p>
                  <p className="font-sub text-xs uppercase tracking-[0.2em] text-white/70 mt-8 pt-6 border-t border-white/10">
                    {lec.speaker}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link
              to="/speakers"
              data-testid="lectures-speakers-link"
              className="mt-12 inline-flex items-center gap-3 font-sub text-xs uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:gap-5 transition-all"
            >
              Meet all speakers <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHEN / WHERE */}
      <section id="registration" className="border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b lg:border-b-0 lg:border-r border-line">
            <Reveal>
              <p className="font-sub text-xs uppercase tracking-[0.3em] text-ink-soft mb-6">
                (03) When & Where
              </p>
              <div className="font-heading text-6xl md:text-8xl tracking-tighter leading-none">
                01<span className="text-ink-soft">.</span>10
              </div>
              <p className="font-sub text-sm uppercase tracking-[0.25em] text-ink-soft mt-4">
                October 2025 · Doors 08:30
              </p>

              <div className="mt-12 space-y-8">
                {[
                  ["Venue", EVENT.venue.name],
                  ["City", EVENT.city],
                  ["Phone", EVENT.venue.phone],
                  ["Email", EVENT.venue.email],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4 border-b border-line pb-4">
                    <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-ink-soft pt-1">
                      {k}
                    </span>
                    <span className="col-span-2 font-body text-base md:text-lg">{v}</span>
                  </div>
                ))}
              </div>

              <a
                href={EVENT.venue.website}
                target="_blank"
                rel="noreferrer"
                data-testid="venue-website-link"
                className="mt-10 inline-flex items-center gap-3 bg-ink text-bg px-8 py-4 font-sub text-xs uppercase tracking-[0.25em] hover:bg-[#222] transition-colors"
              >
                Register on official site <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>

          <div className="min-h-[420px] lg:min-h-full relative">
            <iframe
              title="Event location"
              data-testid="venue-map"
              src={EVENT.venue.mapsEmbed}
              className="absolute inset-0 w-full h-full grayscale-img"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ORGANIZERS & SPONSORS */}
      <section className="bg-surface border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            ["Organizers", ORGANIZERS],
            ["Sponsors", SPONSORS],
          ].map(([title, list]) => (
            <Reveal key={title}>
              <p className="font-sub text-xs uppercase tracking-[0.3em] text-ink-soft mb-8">
                {title}
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {list.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 font-heading text-3xl md:text-4xl text-ink-soft hover:text-ink transition-colors"
                  >
                    <Plus size={18} className="text-ink/30" />
                    {name}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
