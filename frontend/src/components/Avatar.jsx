import { useState } from "react";

/** Strips titles/suffixes so "Prof. Krasen Stefanov, PhD" -> "KS". */
const initialsOf = (name = "") =>
  name
    .replace(/,.*$/, "")
    .replace(/\b(Prof\.?|Dr\.?|Eng\.?|PhD|MD|Assoc\.?)\b/gi, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || "")
    .join("");

/**
 * Speaker portrait with a graceful fallback: when there is no photo yet (or it
 * fails to load) we render gradient initials rather than a broken image.
 */
export const Avatar = ({ src, name, className = "", imgClassName = "" }) => {
  const [broken, setBroken] = useState(false);

  if (src && !broken) {
    return (
      <img
        src={src}
        alt={name}
        loading="lazy"
        onError={() => setBroken(true)}
        className={`${className} ${imgClassName}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={name}
      data-testid="avatar-fallback"
      className={`grad-bg flex items-center justify-center ${className}`}
    >
      <span className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-semibold tracking-tight text-white/95">
        {initialsOf(name)}
      </span>
    </div>
  );
};

export default Avatar;
