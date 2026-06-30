# Intelligent EnterprAIse Summit — Landing Page Redesign

## Original Problem Statement
Redesign the existing "Intelligent EnterprAIse Summit" conference landing page (an AI conference for business leaders, innovators and AI experts in Sofia, Bulgaria, 01 October 2025). Original site used a loud orange→pink gradient template feel.

## User Choices
- Aesthetic: Premium & editorial (clean, sophisticated, generous whitespace)
- Structure: Multi-page (Home, Speakers, Agenda)
- Content: Keep existing content (user will update some text later)
- No functional forms — static polished redesign
- Full creative freedom on visuals

## Architecture
- Frontend-only static React site (no backend/db needed). FastAPI/Mongo template left untouched.
- React Router 7 multi-page: `/` Home, `/speakers` Speakers, `/agenda` Agenda.
- Design system: "Swiss Brutalist & Editorial Future" — light theme (#F8F8F6 / #0A0A0A), fonts Cormorant Garamond (headings), Cabinet Grotesk (UI/sub), Outfit (body). framer-motion scroll reveals.
- Single content source: `src/data/content.js` (event, speakers, lectures, agenda, sponsors).

## Implemented (2026-06-30)
- Navbar (sticky, transparent→blur on scroll, mobile menu), Footer, live Countdown timer.
- Home: full-bleed hero, About + countdown + opportunities list, dark Guest Lectures section, When/Where with grayscale Google Map embed, Organizers & Sponsors.
- Speakers: alternating editorial portrait+bio layout, grayscale→color hover (Dr. Michael Wu, Alexander Iliev, Georgi Todorov, Roumen Nikolov).
- Agenda: archival-index timetable (10 sessions, 01 Oct 2025).
- All interactive elements have data-testid. Build passes; all 3 pages visually verified via screenshots.

## Notes / Mocked
- Speaker portraits are EDITORIAL PLACEHOLDER images (Unsplash) — to be replaced with official photos.
- Agenda schedule beyond 08:30 Registration is a DRAFT (original site only exposed one row).
- Register buttons link to the official site (https://pros.innobiz1.com/) — no in-app form per user choice.

## Backlog
- P1: Replace placeholder speaker portraits + finalize real agenda.
- P2: Add functional registration form (if desired later), gallery/past-editions section.

## Next Tasks
- Await user feedback on visuals/copy and content updates.
