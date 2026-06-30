import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { AGENDA, EVENT } from "../data/content";

export default function Agenda() {
  return (
    <div data-testid="agenda-page" className="pt-20">
      {/* HEADER */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-12 border-b border-line">
        <Reveal>
          <p className="font-sub text-xs uppercase tracking-[0.3em] text-ink-soft mb-8">
            Event Program
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-heading font-medium text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
              One day.
              <br />
              <span className="italic text-ink-soft">Ten moments.</span>
            </h1>
            <div className="text-left lg:text-right">
              <div className="font-sub text-xs uppercase tracking-[0.25em] text-ink-soft">
                {EVENT.date}
              </div>
              <div className="font-heading text-3xl mt-1">{EVENT.city}</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TIMETABLE */}
      <section className="mx-auto max-w-5xl px-6 md:px-12 lg:px-0 py-16 md:py-24">
        <div className="border-t border-ink">
          {AGENDA.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.3)}>
              <div
                data-testid={`agenda-row-${i}`}
                className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline py-7 md:py-9 border-b border-line hover:bg-surface transition-colors px-2 md:px-4"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="font-sub text-xl md:text-3xl font-bold tabular-nums tracking-tight">
                    {item.time}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="font-heading text-2xl md:text-4xl tracking-tight leading-tight group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  {item.note && (
                    <p className="font-sub text-[11px] md:text-xs uppercase tracking-[0.2em] text-ink-soft mt-2">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-ink-soft mt-8">
            * Program subject to change.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <h2 className="font-heading text-5xl md:text-7xl tracking-tight leading-none">
                Secure your <br className="hidden md:block" /> place in the room.
              </h2>
              <a
                href={EVENT.venue.website}
                target="_blank"
                rel="noreferrer"
                data-testid="agenda-register-cta"
                className="inline-flex items-center gap-3 bg-bg text-ink px-8 py-4 font-sub text-xs uppercase tracking-[0.25em] hover:bg-white transition-colors self-start"
              >
                Register now <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
