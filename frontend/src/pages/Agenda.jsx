import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Coffee, Mic, Users, Info, Star } from "lucide-react";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import { AGENDA, EVENT } from "../data/content";

const KINDS = {
  keynote: { label: "Keynote", colour: "#7C4DFF", Icon: Star },
  talk: { label: "Session", colour: "#3B4FD8", Icon: Mic },
  panel: { label: "Panel", colour: "#FF8A3D", Icon: Users },
  break: { label: "Break", colour: "#14B8B8", Icon: Coffee },
  admin: { label: "Programme", colour: "#6C5F78", Icon: Info },
};

const FILTERS = [
  { key: "all", label: "Everything" },
  { key: "keynote", label: "Keynotes" },
  { key: "talk", label: "Sessions" },
  { key: "panel", label: "Panels" },
];

export default function Agenda() {
  const [filter, setFilter] = useState("all");
  const rows = AGENDA.filter((r) => filter === "all" || r.kind === filter);

  return (
    <div data-testid="agenda-page" className="pt-[100px]">
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="blob -left-24 -top-16 h-96 w-96" style={{ background: "#FF8A3D" }} />
        <div className="blob right-0 top-10 h-96 w-96" style={{ background: "#3B4FD8", opacity: 0.35 }} />
        <div className="dot-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-16 md:px-12 md:pt-20 lg:px-16">
          <Reveal>
            <p className="mb-6 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-amber">
              Event Programme
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                One day.
                <br />
                <span className="grad-text-anim">{AGENDA.length} moments.</span>
              </h1>
              <div className="rounded-2xl border border-line bg-surface px-6 py-5 text-left lg:text-right">
                <div className="font-sub text-[10px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                  {EVENT.date}
                </div>
                <div className="grad-text mt-1 font-display text-2xl font-semibold">
                  {EVENT.city}
                </div>
                <div className="mt-1 font-body text-sm text-ink-soft">Doors 08:30</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* FILTERS */}
      <section className="sticky top-[70px] z-30 border-b border-line bg-bg/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-2.5 px-6 py-4 md:px-12 lg:px-16">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              data-testid={`agenda-filter-${f.key}`}
              className={`rounded-full px-5 py-2.5 font-sub text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                filter === f.key
                  ? "grad-bg text-white shadow-[0_10px_24px_-14px_rgba(124,77,255,.9)]"
                  : "border border-line bg-surface text-ink-soft hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* TIMETABLE */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-12 md:py-20 lg:px-0">
        <div className="space-y-3">
          {rows.map((item, i) => {
            const k = KINDS[item.kind] || KINDS.talk;
            const { Icon } = k;
            const isBig = item.kind === "keynote";

            return (
              <Reveal key={`${item.time}-${i}`} delay={Math.min(i * 0.03, 0.3)}>
                <div
                  data-testid={`agenda-row-${i}`}
                  className={`group relative flex gap-4 overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 md:gap-6 md:p-6 ${
                    isBig
                      ? "border-transparent bg-ink text-white shadow-[0_20px_44px_-26px_rgba(124,77,255,.8)]"
                      : "border-line bg-surface hover:shadow-[0_18px_40px_-28px_rgba(23,16,31,.5)]"
                  }`}
                >
                  {isBig && (
                    <div
                      className="blob -right-10 -top-10 h-44 w-44"
                      style={{ background: "#7C4DFF", opacity: 0.5 }}
                    />
                  )}

                  {/* left colour rail */}
                  <div
                    className="absolute inset-y-0 left-0 w-1.5"
                    style={{ background: k.colour }}
                  />

                  <div className="relative shrink-0 pl-2 md:pl-3">
                    <div
                      className={`font-display text-xl font-semibold tabular-nums tracking-tight md:text-2xl ${
                        isBig ? "text-white" : ""
                      }`}
                    >
                      {item.time}
                    </div>
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <span
                      className="mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-sub text-[9px] font-bold uppercase tracking-[0.16em] text-white"
                      style={{ background: k.colour }}
                    >
                      <Icon size={11} />
                      {k.label}
                    </span>
                    <h3
                      className={`font-display font-semibold leading-snug tracking-tight ${
                        isBig ? "text-xl md:text-2xl" : "text-base md:text-xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.speakers && (
                      <p
                        className={`mt-2 font-body text-sm ${
                          isBig ? "text-white/60" : "text-ink-soft"
                        }`}
                      >
                        {item.speakers}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 font-sub text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
            * Programme subject to change.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="blob left-10 top-0 h-96 w-96" style={{ background: "#3B4FD8", opacity: 0.45 }} />
        <div className="blob right-0 bottom-0 h-80 w-80" style={{ background: "#FF8A3D", opacity: 0.35 }} />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <Reveal>
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Secure your <br className="hidden md:block" />
                <span className="grad-text">place in the room.</span>
              </h2>
              <Link
                to="/registration"
                data-testid="agenda-register-cta"
                className="group grad-bg inline-flex items-center gap-3 self-start rounded-full px-8 py-4 font-sub text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.04]"
              >
                Register now
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
