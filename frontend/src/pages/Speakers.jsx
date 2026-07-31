import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, X } from "lucide-react";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import Avatar from "../components/Avatar";
import { FEATURED_SPEAKERS, SPEAKERS, ALL_SPEAKERS, EVENT } from "../data/content";

const ACCENTS = {
  amber: "#FF8A3D",
  violet: "#7C4DFF",
  indigo: "#3B4FD8",
  teal: "#14B8B8",
};

const RING = ["#FF8A3D", "#7C4DFF", "#3B4FD8", "#14B8B8"];

export default function Speakers() {
  const [active, setActive] = useState(null);

  return (
    <div data-testid="speakers-page" className="pt-[100px]">
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="blob -left-32 -top-20 h-96 w-96" style={{ background: "#7C4DFF" }} />
        <div className="blob right-0 top-0 h-96 w-96" style={{ background: "#3B4FD8", opacity: 0.35 }} />
        <div className="dot-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-[1400px] px-6 pb-14 pt-16 md:px-12 md:pt-20 lg:px-16">
          <Reveal>
            <p className="mb-6 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-violet">
              The Line-up · {EVENT.date}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              The minds shaping
              <br />
              <span className="grad-text-anim">enterprise AI.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl font-body text-lg text-ink-soft">
              Scholars, founders, clinicians and academic leaders from across Europe
              and beyond — gathered in Sofia for one day.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* FEATURED */}
      <section className="bg-bg-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <Reveal>
            <p className="mb-10 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-indigo">
              Featured Speakers
            </p>
          </Reveal>

          <div className="space-y-16 md:space-y-24">
            {FEATURED_SPEAKERS.map((s, i) => {
              const colour = ACCENTS[s.accent] || ACCENTS.violet;
              return (
                <Reveal key={s.name} delay={0.05}>
                  <article
                    data-testid={`featured-speaker-${i}`}
                    className={`grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-14 ${
                      i % 2 === 1 ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    <div className="group md:col-span-5 [direction:ltr]">
                      <div className="relative overflow-hidden rounded-[2rem] bg-surface shadow-[0_24px_60px_-34px_rgba(23,16,31,.6)]">
                        <div
                          className="absolute inset-x-0 top-0 z-10 h-1.5"
                          style={{ background: colour }}
                        />
                        <div className="aspect-[4/5] overflow-hidden">
                          <Avatar
                            src={s.image}
                            name={s.name}
                            className="photo-pop h-full w-full object-cover object-top"
                          />
                        </div>
                        <span
                          className="absolute left-5 top-6 rounded-full px-3.5 py-1.5 font-sub text-[10px] font-bold uppercase tracking-[0.16em] text-white"
                          style={{ background: colour }}
                        >
                          {s.tag}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-7 [direction:ltr]">
                      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                        {s.name}
                      </h2>
                      <p
                        className="mt-4 font-sub text-xs font-bold uppercase tracking-[0.16em]"
                        style={{ color: colour }}
                      >
                        {s.role}
                      </p>
                      <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-soft md:text-lg">
                        {s.bio}
                      </p>
                      {s.linkedin && (
                        <a
                          href={s.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`featured-speaker-link-${i}`}
                          className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-sub text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-ink hover:text-white"
                        >
                          <Linkedin size={14} /> Profile
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL GRID */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                The full <span className="grad-text">2025 line-up</span>
              </h2>
              <p className="font-sub text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                {ALL_SPEAKERS.length} speakers · tap a card for the bio
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {SPEAKERS.map((s, i) => (
              <Reveal key={s.name} delay={Math.min(i * 0.03, 0.3)}>
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  data-testid={`speaker-card-${i}`}
                  className="group block w-full overflow-hidden rounded-[1.25rem] border border-line bg-surface text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(23,16,31,.55)]"
                >
                  <div className="relative aspect-square overflow-hidden bg-bg-deep">
                    <Avatar
                      src={s.image}
                      name={s.name}
                      className="photo-pop h-full w-full object-cover object-top"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-1"
                      style={{ background: RING[i % RING.length] }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-[15px] font-semibold leading-tight tracking-tight">
                      {s.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 font-body text-xs leading-snug text-ink-soft">
                      {s.role}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BIO MODAL */}
      {active && (
        <div
          data-testid="speaker-modal"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-surface p-7 sm:rounded-[2rem] sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              data-testid="speaker-modal-close"
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:bg-bg-deep"
            >
              <X size={17} />
            </button>
            <div className="flex flex-col gap-6 sm:flex-row">
              <Avatar
                src={active.image}
                name={active.name}
                className="h-32 w-32 shrink-0 rounded-2xl object-cover object-top"
              />
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {active.name}
                </h3>
                <p className="grad-text mt-2 font-sub text-xs font-bold uppercase tracking-[0.16em]">
                  {active.role}
                </p>
                {active.linkedin && (
                  <a
                    href={active.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-sub text-[11px] font-bold uppercase tracking-[0.16em] transition-colors hover:bg-bg-deep"
                  >
                    <Linkedin size={13} /> Profile
                  </a>
                )}
              </div>
            </div>
            <p className="mt-7 font-body leading-relaxed text-ink-soft">{active.bio}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="blob left-1/4 top-0 h-96 w-96" style={{ background: "#7C4DFF", opacity: 0.45 }} />
        <div className="blob right-10 bottom-0 h-80 w-80" style={{ background: "#FF8A3D", opacity: 0.35 }} />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 text-center md:px-12 md:py-28 lg:px-16">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              See them live in <span className="grad-text">Sofia.</span>
            </h2>
            <Link
              to="/registration"
              data-testid="speakers-register-cta"
              className="group grad-bg mt-9 inline-flex items-center gap-3 rounded-full px-8 py-4 font-sub text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Reserve your seat
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
