# Intelligent EnterprAIse Summit — Landing Page Redesign

## Original Problem Statement
Redesign the existing "Intelligent EnterprAIse Summit" conference landing page (an AI conference for business leaders, innovators and AI experts in Sofia, Bulgaria, 01 October 2025). Original site (https://pros.innobiz1.com) used a loud orange→pink gradient template feel.

## History
- **v1 (2026-06-30)** — "Swiss Brutalist & Editorial" monochrome direction (#F8F8F6 / #0A0A0A, Cormorant Garamond). Deployed to https://suleimansultanov.github.io/aisummit/.
- **v2 (2026-07-28)** — Rebuilt after client feedback: *"OK, I like it, but it is too clean, sterile and business like. We need to make it a bit more lively. Can you please propose another one with some of the more relevant logos and information from the actual site from last year?"*

## v2 User Choices
- Direction: **Brand-color energy** — keep the strong editorial layout, inject the summit's orange→pink→violet gradient as accents. Not dark/neon, not flat color-blocking.
- Content: **Everything real** — all placeholder names/photos/agenda replaced with genuine 2025 data.
- Registration form: real styled form posting to a **form-service endpoint** (Formspree/Getform), since the site is static on GitHub Pages.

## Architecture
- Frontend-only static React site (CRA + craco + Tailwind). FastAPI/Mongo template left untouched and unused.
- Deployed via GitHub Actions to GitHub Pages (`homepage` + `gh-pages -d build`).
- React Router 7: `/` Home, `/speakers` Speakers, `/agenda` Agenda, `/registration` Registration.
- Single content source: `src/data/content.js`.

## v2 Design System
- Palette: warm cream base `#FFF8F3` / deep `#FFEFE4`, ink `#17101F`, line `#F0DFD2`.
- Brand: orange `#FF7A18` → pink `#FF2D78` → violet `#A729F5`, plus cyan `#14C8C8`.
- `--brand-gradient` drives `.grad-bg` / `.grad-text` / `.grad-text-anim` (animated hero word).
- Fonts: **Clash Display** (headings, replaces Cormorant), Cabinet Grotesk (UI/overlines), Outfit (body).
- Liveliness devices: blurred color blobs, dot-grid texture, infinite topic marquee, pill buttons with colored glow shadows, colored icon chips, saturate-on-hover portraits, gradient scrollbar.

## Implemented (2026-07-28)
- **Navbar** — gradient info bar + real summit logo (`img/logo.png`), gradient underline on active link, pill Register CTA.
- **Home** — gradient hero with Michael Wu cutout + floating keynote card, topic marquee, stats strip, About with colored checklist + gradient countdown panel, dark Guest Lectures cards with per-lecture accent glow, featured-speaker cards, organizer/sponsor logo wall, When/Where with colored contact icons + color map.
- **Speakers** — 4 featured (alternating portrait/bio, accent rails) + full 25-card grid with click-to-open bio modal. All 29 real people, real photos, real LinkedIn links.
- **Agenda** — real 22-row programme (08:30–17:45) with keynote/session/panel/break color coding, left color rails, sticky filter pills, keynotes rendered as dark highlight cards.
- **Registration (new)** — 3 ticket cards, validated multi-field form, interest chips, consent, loading + success + error states, sidebar with event info/contacts/map.
- New components: `Marquee.jsx`, `LogoTile.jsx` (graceful wordmark fallback for missing logos). `Countdown` gained an `onGradient` variant.

## Notes / To finish before go-live
- **Images are hot-linked from last year's site** (`OLD_SITE` const in `content.js`). Download into `/public/img` and repoint before launch.
- **Only the IMI·BAS logo file was recoverable** from the old site; PROS, VirTech, TU-Sofia and iNNOBIZ1 tiles currently render as branded wordmarks via `LogoTile`'s fallback. Drop real files in and set `logo` in `content.js`.
- **`FORM_ENDPOINT` in `src/pages/Registration.jsx` is a placeholder** — the form runs in demo mode (validates + shows success, sends nothing) until a real Formspree/Getform URL is pasted in.
- Client said logos will be swapped/removed later — content.js is structured so that's a one-line change per logo.

## Verification
- `craco build` compiles clean, no warnings.
- All 6 page/chrome components server-rendered in Node without errors; asserted real speaker names, real agenda rows, brand classes and logo/photo URLs present in output.

## Next Tasks
- Await client reaction to the livelier direction; then swap logos and wire the real form endpoint.
