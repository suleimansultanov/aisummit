import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { SPEAKERS } from "../data/content";

export default function Speakers() {
  return (
    <div data-testid="speakers-page" className="pt-20">
      {/* HEADER */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-16 border-b border-line">
        <Reveal>
          <p className="font-sub text-xs uppercase tracking-[0.3em] text-ink-soft mb-8">
            The Lineup
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-heading font-medium text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
            The minds shaping
            <br />
            <span className="italic text-ink-soft">enterprise AI.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body text-lg text-ink-soft max-w-xl mt-8">
            Scholars, founders, and academic leaders from across Europe and
            Silicon Valley — gathered in Sofia for one day.
          </p>
        </Reveal>
      </section>

      {/* SPEAKER LIST */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="space-y-24 md:space-y-32">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={0.05}>
              <article
                data-testid={`speaker-card-${i}`}
                className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-5 [direction:ltr]">
                  <div className="relative overflow-hidden bg-line aspect-[4/5]">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover grayscale-img"
                    />
                    <span className="absolute top-5 left-5 font-sub text-xs uppercase tracking-[0.2em] bg-bg px-3 py-1.5">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-7 [direction:ltr]">
                  <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-none">
                    {s.name}
                  </h2>
                  <p className="font-sub text-xs uppercase tracking-[0.2em] text-ink-soft mt-5">
                    {s.role}
                  </p>
                  <p className="font-body text-base md:text-lg text-ink-soft leading-relaxed mt-8 max-w-2xl">
                    {s.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="font-heading text-5xl md:text-7xl tracking-tight leading-none">
              See them live in Sofia.
            </h2>
            <Link
              to="/agenda"
              data-testid="speakers-agenda-cta"
              className="mt-10 inline-flex items-center gap-3 bg-bg text-ink px-8 py-4 font-sub text-xs uppercase tracking-[0.25em] hover:bg-white transition-colors"
            >
              Explore the agenda <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
