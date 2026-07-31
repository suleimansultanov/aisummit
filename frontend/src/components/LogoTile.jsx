import { useState } from "react";

/**
 * Renders a partner logo. If no image is supplied — or the image fails to
 * load — it falls back to a branded gradient wordmark so the logo wall never
 * shows a broken image. Drop real files into /public/img/logos and set
 * `logo` in src/data/content.js to switch any tile to a real mark.
 */
export const LogoTile = ({ item, testId }) => {
  const [broken, setBroken] = useState(false);
  const showImage = item.logo && !broken;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      title={item.full}
      data-testid={testId}
      className="group relative flex h-24 items-center justify-center rounded-2xl border border-line bg-surface px-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_14px_40px_-16px_rgba(124,77,255,.45)]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 grad-bg" style={{ padding: 2, WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
      {showImage ? (
        <img
          src={item.logo}
          alt={item.full}
          onError={() => setBroken(true)}
          className="max-h-16 w-auto max-w-full object-contain opacity-75 transition-all duration-300 group-hover:opacity-100"
          style={{ filter: "saturate(.6)" }}
        />
      ) : (
        <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ink-soft transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[image:var(--brand-gradient)]">
          {item.name}
        </span>
      )}
    </a>
  );
};

export default LogoTile;
