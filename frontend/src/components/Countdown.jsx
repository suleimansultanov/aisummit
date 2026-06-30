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

export const Countdown = () => {
  const [t, setT] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div data-testid="countdown" className="grid grid-cols-4 gap-px bg-line border border-line">
      {Object.entries(t).map(([label, val]) => (
        <div key={label} className="bg-bg px-2 py-6 md:py-8 text-center">
          <div
            data-testid={`countdown-${label.toLowerCase()}`}
            className="font-sub text-4xl md:text-6xl font-extrabold tabular-nums tracking-tight"
          >
            {String(val).padStart(2, "0")}
          </div>
          <div className="font-sub text-[10px] uppercase tracking-[0.25em] text-ink-soft mt-3">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
