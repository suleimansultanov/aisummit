import { useState, useEffect } from "react";
import { EVENT } from "../data/content";

const getRemaining = () => {
  const diff = new Date(EVENT.dateISO).getTime() - Date.now();
  if (diff <= 0) return { Days: 0, Hrs: 0, Mins: 0, Secs: 0 };
  const sec = Math.floor(diff / 1000);
  return {
    Days: Math.floor(sec / 86400),
    Hrs: Math.floor((sec % 86400) / 3600),
    Mins: Math.floor((sec % 3600) / 60),
    Secs: sec % 60,
  };
};

/** variant: "light" (on cream) | "onGradient" (white text on the colour band) */
export const Countdown = ({ variant = "light" }) => {
  const [t, setT] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const onGradient = variant === "onGradient";

  return (
    <div data-testid="countdown" className="grid grid-cols-4 gap-3 md:gap-4">
      {Object.entries(t).map(([label, val]) => (
        <div
          key={label}
          className={`rounded-2xl px-2 py-5 text-center backdrop-blur-sm md:py-7 ${
            onGradient
              ? "border border-white/25 bg-white/15"
              : "border border-line bg-surface shadow-[0_10px_30px_-22px_rgba(23,16,31,.6)]"
          }`}
        >
          <div
            data-testid={`countdown-${label.toLowerCase()}`}
            className={`font-display text-3xl font-semibold tabular-nums tracking-tight md:text-5xl ${
              onGradient ? "text-white" : "grad-text"
            }`}
          >
            {String(val).padStart(2, "0")}
          </div>
          <div
            className={`mt-2 font-sub text-[10px] font-bold uppercase tracking-[0.2em] ${
              onGradient ? "text-white/80" : "text-ink-soft"
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
