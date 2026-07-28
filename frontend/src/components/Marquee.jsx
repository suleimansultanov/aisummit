import { TOPICS } from "../data/content";

/** Infinite scrolling topic strip — the main "this event is alive" cue. */
export const Marquee = ({ items = TOPICS, dark = false }) => {
  const loop = [...items, ...items];

  return (
    <div
      data-testid="topic-marquee"
      className={`marquee-wrap overflow-hidden py-4 ${
        dark ? "bg-ink" : "grad-bg"
      }`}
    >
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 font-sub text-sm md:text-base font-bold uppercase tracking-[0.16em] text-white"
          >
            {t}
            <span className="text-white/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
