import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Check,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import Reveal from "../components/Reveal";
import Countdown from "../components/Countdown";
import Marquee from "../components/Marquee";
import LogoTile from "../components/LogoTile";
import {
  EVENT,
  ORGANIZERS,
  SPONSORS,
  LECTURES,
  FEATURED_SPEAKERS,
  STATS,
  ASSETS,
} from "../data/content";

const ACCENTS = {
  orange: { hex: "#FF7A18", chip: "bg-brand-orange" },
  pink: { hex: "#FF2D78", chip: "bg-brand-pink" },
  violet: { hex: "#A729F5", chip: "bg-brand-violet" },
  cyan: { hex: "#14C8C8", chip: "bg-brand-cyan" },
};

export default function Home() {
  const [heroImgBroken, setHeroImgBroken] = useState(false);

  return (
    <div data-testid="home-page">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="blob -left-40 -top-20 h-[28rem] w-[28rem]" style={{ background: "#FF7A18" }} />
        <div className="blob right-0 top-10 h-[30rem] w-[30rem]" style={{ background: "#FF2D78", opacity: 0.35 }} />
        <div className="blob -bottom-32 left-1/3 h-[26rem] w-[26rem]" style={{ background: "#A729F5", opacity: 0.3 }} />
        <div className="dot-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="grad-bg mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 font-sub text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_26px_-14px_rgba(255,45,120,.9)]">
                <Sparkles size={13} />
                {EVENT.headline}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.4rem]">
                Intelligent
                <br />
                <span className="grad-text-anim">EnterprAIse</span>
                <br />
                Summit
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
                {EVENT.subheadline}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-sub text-xs font-bold uppercase tracking-[0.14em]">
                  <CalendarDays size={15} className="text-brand-orange" />
                  {EVENT.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-sub text-xs font-bold uppercase tracking-[0.14em]">
                  <MapPin size={15} className="text-brand-pink" />
                  Sofia · NCE Mechatronics & Clean Technologies
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/registration"
                  data-testid="hero-register-btn"
                  className="group grad-bg inline-flex items-center gap-3 rounded-full px-8 py-4 font-sub text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_36px_-16px_rgba(255,45,120,.95)] transition-transform duration-300 hover:scale-[1.04]"
                >
                  Reserve your seat
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  to="/agenda"
                  data-testid="hero-agenda-btn"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-ink px-8 py-4 font-sub text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-ink hover:text-white"
                >
                  See the programme
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative mx-auto max-w-md">
                <div className="grad-bg absolute -inset-3 rounded-[2.5rem] opacity-25 blur-2xl" />
                {!heroImgBroken ? (
                  <img
                    src={ASSETS.heroSpeaker}
                    alt="Dr. Michael Wu on stage"
                    onError={() => setHeroImgBroken(true)}
                    className="relative w-full object-contain drop-shadow-2xl"
                  />
                ) : (
                  <img
                    src={ASSETS.michaelWu}
                    alt="Dr. Michael Wu"
                    className="relative w-full rounded-[2rem] object-cover shadow-2xl"
                  />
                )}
                <div className="absolute -bottom-4 -left-4 rounded-2xl border border-line bg-surface px-5 py-4 shadow-xl">
                  <p className="font-sub text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                    Keynote
                  </p>
                  <p className="font-display text-lg font-semibold">Dr. Michael Wu</p>
                  <p className="font-body text-xs text-ink-soft">Chief AI Strategist, PROS</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Topic marquee — the single biggest "alive" signal on the page */}
      <Marquee />

      {/* ------------------------------------------------------------------ */}
      {/* STATS                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-12 lg:px-16">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="text-center md:text-left">
                <div className="grad-text font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-1.5 font-sub text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ABOUT                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section id="about" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-12 md:py-28 lg:px-16">
          <div className="md:col-span-6">
            <Reveal>
              <p className="mb-5 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-pink">
                About the Conference
              </p>
              <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.9rem]">
                {EVENT.about}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 rounded-3xl border border-line bg-surface p-7 shadow-[0_18px_50px_-32px_rgba(23,16,31,.6)]">
                <p className="mb-5 font-sub text-[11px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                  You will have the opportunity to
                </p>
                <ul className="space-y-4">
                  {EVENT.opportunities.map((o, i) => (
                    <li key={i} className="group flex items-start gap-4">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                        style={{
                          background: [
                            "#FF7A18",
                            "#FF2D78",
                            "#A729F5",
                            "#14C8C8",
                            "#FF2D78",
                          ][i % 5],
                        }}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="font-body text-base leading-snug transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-10">
                <div className="grad-bg absolute inset-0" />
                <div className="relative">
                  <p className="font-sub text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">
                    Count every second until the event
                  </p>
                  <div className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">
                    {EVENT.date}
                  </div>
                  <div className="mt-7">
                    <Countdown variant="onGradient" />
                  </div>
                  <Link
                    to="/agenda"
                    data-testid="about-agenda-link"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sub text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:gap-4"
                  >
                    View full agenda <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="mt-8 rounded-3xl border-l-4 border-brand-orange bg-bg-deep p-7">
                <p className="font-display text-xl font-medium leading-snug md:text-2xl">
                  “{EVENT.closing}”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GUEST LECTURES                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="blob -left-20 top-10 h-96 w-96" style={{ background: "#FF7A18", opacity: 0.35 }} />
        <div className="blob -right-20 bottom-0 h-96 w-96" style={{ background: "#A729F5", opacity: 0.4 }} />

        <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-orange">
                  Guest Lectures
                </p>
                <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  Straight from
                  <br />
                  <span className="grad-text">Silicon Valley</span>
                </h2>
              </div>
              <p className="max-w-sm font-body text-white/55">
                Two deep-dive keynotes by Dr. Michael Wu, tracing the journey from
                large language models to artificial super-intelligence.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {LECTURES.map((lec, i) => {
              const accent = ACCENTS[lec.accent] || ACCENTS.pink;
              return (
                <Reveal key={lec.no} delay={i * 0.1}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-white/25 md:p-10">
                    <div
                      className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                      style={{ background: accent.hex }}
                    />
                    <div className="relative mb-7 flex items-start justify-between">
                      <span
                        className="font-display text-5xl font-semibold"
                        style={{ color: accent.hex }}
                      >
                        {lec.no}
                      </span>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className="rounded-full px-3 py-1 font-sub text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                          style={{ background: accent.hex }}
                        >
                          {lec.time}
                        </span>
                        <span className="rounded-full border border-white/20 px-3 py-1 font-sub text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                          {lec.length}
                        </span>
                      </div>
                    </div>

                    <h3 className="relative font-display text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">
                      {lec.title}
                    </h3>
                    <p className="relative mt-4 font-sub text-sm font-medium leading-relaxed text-white/70">
                      {lec.focus}
                    </p>
                    <p className="relative mt-5 flex-1 font-body text-sm leading-relaxed text-white/45">
                      {lec.body}
                    </p>
                    <p className="relative mt-7 border-t border-white/10 pt-6 font-sub text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                      {lec.speaker}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FEATURED SPEAKERS                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-bg-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-violet">
                  The Line-up
                </p>
                <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                  Minds shaping <span className="grad-text">enterprise AI</span>
                </h2>
              </div>
              <Link
                to="/speakers"
                data-testid="home-speakers-link"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-sub text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                All 29 speakers <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_SPEAKERS.map((s, i) => {
              const accent = ACCENTS[s.accent] || ACCENTS.pink;
              return (
                <Reveal key={s.name} delay={i * 0.07}>
                  <Link
                    to="/speakers"
                    data-testid={`home-speaker-${i}`}
                    className="group block overflow-hidden rounded-[1.5rem] border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(23,16,31,.55)]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-bg-deep">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="photo-pop h-full w-full object-cover object-top"
                      />
                      <span
                        className="absolute left-4 top-4 rounded-full px-3 py-1.5 font-sub text-[9px] font-bold uppercase tracking-[0.16em] text-white"
                        style={{ background: accent.hex }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">
                        {s.name}
                      </h3>
                      <p className="mt-2 font-body text-[13px] leading-snug text-ink-soft">
                        {s.role}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ORGANIZERS & SPONSORS                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 py-16 md:grid-cols-2 md:px-12 md:py-20 lg:px-16">
          <Reveal>
            <p className="mb-7 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-orange">
              Organizers
            </p>
            <div className="grid grid-cols-3 gap-4">
              {ORGANIZERS.map((o, i) => (
                <LogoTile key={`org-${o.name}`} item={o} testId={`organizer-${i}`} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-7 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-violet">
              Sponsors
            </p>
            <div className="grid grid-cols-3 gap-4">
              {SPONSORS.map((s, i) => (
                <LogoTile key={`spo-${s.name}`} item={s} testId={`sponsor-${i}`} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WHEN / WHERE                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="venue">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <Reveal>
              <p className="mb-5 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-pink">
                When & Where
              </p>
              <div className="flex items-end gap-4">
                <span className="grad-text font-display text-6xl font-semibold leading-none tracking-tight md:text-8xl">
                  {EVENT.dateShort}
                </span>
                <span className="pb-2 font-sub text-sm font-bold uppercase tracking-[0.2em] text-ink-soft">
                  October 2025
                  <br />
                  Doors 08:30
                </span>
              </div>

              <div className="mt-12 space-y-5">
                {[
                  [MapPin, "Venue", EVENT.venue.name, "#FF7A18"],
                  [MapPin, "City", EVENT.city, "#FF2D78"],
                  [Phone, "Phone", EVENT.venue.phone, "#A729F5"],
                  [Mail, "Email", EVENT.venue.email, "#14C8C8"],
                  [Globe, "Website", EVENT.venue.website, "#FF7A18"],
                ].map(([Icon, k, v, colour]) => (
                  <div key={k} className="flex items-start gap-4 border-b border-line pb-5">
                    <span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ background: colour }}
                    >
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-sub text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                        {k}
                      </p>
                      <p className="mt-1 font-body text-base md:text-lg">{v}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/registration"
                data-testid="venue-register-link"
                className="group grad-bg mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 font-sub text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_36px_-16px_rgba(255,45,120,.95)] transition-transform duration-300 hover:scale-[1.04]"
              >
                Register now
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full">
            <iframe
              title="Event location"
              data-testid="venue-map"
              src={EVENT.venue.mapsEmbed}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
