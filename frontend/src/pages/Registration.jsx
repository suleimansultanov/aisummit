import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  CalendarDays,
  MapPin,
  Ticket,
  Loader2,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import { EVENT } from "../data/content";

// ---------------------------------------------------------------------------
// ⚠️  REPLACE THIS with the client's own form endpoint.
// Works with Formspree (https://formspree.io) or Getform / Basin / FormSubmit —
// any service that accepts a POST of JSON or FormData and returns 2xx.
// The site is deployed statically to GitHub Pages, so there is no backend of
// our own to post to. Until a real ID is pasted in, the form runs in DEMO mode:
// it validates, shows the loading state and the success screen, but sends
// nothing over the network.
// ---------------------------------------------------------------------------
const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXXX";
const IS_CONFIGURED = !FORM_ENDPOINT.includes("XXXXXXXX");

const TICKETS = [
  {
    id: "standard",
    name: "Standard Pass",
    price: "Free",
    note: "Registration required",
    colour: "#FF7A18",
    perks: ["Full-day access", "All keynotes & sessions", "Coffee breaks & lunch"],
  },
  {
    id: "vip",
    name: "VIP Pass",
    price: "On request",
    note: "Limited seats",
    colour: "#FF2D78",
    featured: true,
    perks: [
      "Everything in Standard",
      "Front-row keynote seating",
      "Speaker networking reception",
      "Priority Q&A",
    ],
  },
  {
    id: "partner",
    name: "Partner / Press",
    price: "By invitation",
    note: "Accreditation needed",
    colour: "#A729F5",
    perks: ["Full-day access", "Media & partner lounge", "Interview slots on request"],
  },
];

const INTERESTS = [
  "LLMs in the enterprise",
  "Agentic AI & AGI",
  "AI in Healthcare",
  "HPC & Supercomputing",
  "AI regulation & the EU AI Act",
  "Investments in AI",
];

// Shared input styling
const INPUT_BASE =
  "w-full rounded-xl border bg-surface px-4 py-3.5 font-body text-[15px] outline-none transition-all duration-200 placeholder:text-ink-soft/50 focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/15";

// Defined at module scope on purpose: declaring this inside the page component
// would remount every input on each keystroke and blow away focus.
const Field = ({ label, name, type, placeholder, required, half, value, error, onChange }) => (
  <div className={half ? "sm:col-span-1" : "sm:col-span-2"}>
    <label
      htmlFor={name}
      className="mb-2 block font-sub text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft"
    >
      {label} {required && <span className="text-brand-pink">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type || "text"}
      value={value}
      placeholder={placeholder}
      data-testid={`reg-input-${name}`}
      onChange={(e) => onChange(name, e.target.value)}
      className={`${INPUT_BASE} ${error ? "border-red-400" : "border-line"}`}
    />
    {error && (
      <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-500">
        <AlertCircle size={12} /> {error}
      </p>
    )}
  </div>
);

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  ticket: "standard",
  interests: [],
  dietary: "",
  message: "",
  consent: false,
};

export default function Registration() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleInterest = (topic) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(topic)
        ? f.interests.filter((t) => t !== topic)
        : [...f.interests, topic],
    }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Please enter your first name";
    if (!form.lastName.trim()) e.lastName = "Please enter your last name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "That email doesn't look right";
    if (!form.company.trim()) e.company = "Please enter your organisation";
    if (!form.consent) e.consent = "Please accept to continue";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector(`[name="${Object.keys(e)[0]}"]`);
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");

    if (!IS_CONFIGURED) {
      // Demo mode — no endpoint configured yet.
      setTimeout(() => setStatus("done"), 900);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          interests: form.interests.join(", "),
          event: `${EVENT.name} — ${EVENT.date}`,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  // ---------------------------------------------------------------- success
  if (status === "done") {
    return (
      <div data-testid="registration-page" className="pt-[100px]">
        <section className="relative overflow-hidden">
          <div className="blob -left-24 top-0 h-96 w-96" style={{ background: "#FF7A18" }} />
          <div className="blob right-0 top-20 h-96 w-96" style={{ background: "#A729F5", opacity: 0.4 }} />
          <div className="relative mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
            <div
              data-testid="registration-success"
              className="grad-bg mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-[0_18px_40px_-18px_rgba(255,45,120,.95)]"
            >
              <Check size={38} strokeWidth={3} />
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              You're on the list,
              <br />
              <span className="grad-text">{form.firstName}.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md font-body text-lg text-ink-soft">
              We've got your registration for {EVENT.name}. A confirmation with
              venue details will land in <strong>{form.email}</strong> shortly.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-sub text-xs font-bold uppercase tracking-[0.14em]">
                <CalendarDays size={15} className="text-brand-orange" />
                {EVENT.date}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-sub text-xs font-bold uppercase tracking-[0.14em]">
                <MapPin size={15} className="text-brand-pink" />
                {EVENT.city}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/agenda"
                data-testid="success-agenda-link"
                className="grad-bg inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-sub text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Plan your day <ArrowUpRight size={15} />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setForm(EMPTY);
                  setStatus("idle");
                }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 font-sub text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-white"
              >
                Register someone else
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ------------------------------------------------------------------- form
  const field = ({ label, name, type = "text", placeholder, required, half }) => (
    <Field
      key={name}
      label={label}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      half={half}
      value={form[name]}
      error={errors[name]}
      onChange={set}
    />
  );

  return (
    <div data-testid="registration-page" className="pt-[100px]">
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="blob -left-32 -top-16 h-96 w-96" style={{ background: "#FF2D78" }} />
        <div className="blob right-0 top-0 h-96 w-96" style={{ background: "#FF7A18", opacity: 0.4 }} />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-16 md:px-12 md:pt-20 lg:px-16">
          <Reveal>
            <div className="grad-bg mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 font-sub text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              <Ticket size={13} /> Registration
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Save your seat at the <span className="grad-text-anim">Summit.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl font-body text-lg text-ink-soft">
              One day, 29 speakers, two Silicon Valley keynotes. Fill in the form
              below and we'll send your confirmation and venue details by email.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* TICKETS */}
      <section className="bg-bg-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12 md:py-20 lg:px-16">
          <Reveal>
            <p className="mb-8 font-sub text-[11px] font-bold uppercase tracking-[0.26em] text-brand-violet">
              Choose your pass
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {TICKETS.map((t, i) => {
              const selected = form.ticket === t.id;
              return (
                <Reveal key={t.id} delay={i * 0.07}>
                  <button
                    type="button"
                    onClick={() => set("ticket", t.id)}
                    data-testid={`ticket-${t.id}`}
                    className={`relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border-2 bg-surface p-7 text-left transition-all duration-300 hover:-translate-y-1 ${
                      selected
                        ? "border-transparent shadow-[0_24px_54px_-28px_rgba(255,45,120,.75)]"
                        : "border-line hover:border-ink/20"
                    }`}
                  >
                    {selected && (
                      <span
                        className="pointer-events-none absolute inset-0 rounded-[1.5rem] grad-bg"
                        style={{
                          padding: 2,
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                    )}
                    <div className="mb-5 flex items-start justify-between">
                      <div>
                        <p
                          className="font-sub text-[10px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: t.colour }}
                        >
                          {t.note}
                        </p>
                        <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight">
                          {t.name}
                        </h3>
                      </div>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          selected ? "border-transparent grad-bg text-white" : "border-line"
                        }`}
                      >
                        {selected && <Check size={13} strokeWidth={3} />}
                      </span>
                    </div>
                    <p
                      className="font-display text-3xl font-semibold tracking-tight"
                      style={{ color: t.colour }}
                    >
                      {t.price}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {t.perks.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 font-body text-sm text-ink-soft">
                          <Check size={14} className="mt-0.5 shrink-0" style={{ color: t.colour }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} data-testid="registration-form" noValidate>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Your details
                </h2>
                <p className="mt-3 font-body text-ink-soft">
                  Fields marked <span className="text-brand-pink">*</span> are required.
                </p>

                <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {field({ label: "First name", name: "firstName", placeholder: "Ada", required: true, half: true })}
                  {field({ label: "Last name", name: "lastName", placeholder: "Lovelace", required: true, half: true })}
                  {field({ label: "Work email", name: "email", type: "email", placeholder: "ada@company.com", required: true, half: true })}
                  {field({ label: "Phone", name: "phone", type: "tel", placeholder: "+359 …", half: true })}
                  {field({ label: "Organisation", name: "company", placeholder: "Company / university", required: true, half: true })}
                  {field({ label: "Job title", name: "jobTitle", placeholder: "Head of AI", half: true })}
                </div>

                {/* interests */}
                <div className="mt-9">
                  <p className="mb-3 font-sub text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                    What are you most interested in?
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {INTERESTS.map((topic) => {
                      const on = form.interests.includes(topic);
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleInterest(topic)}
                          data-testid={`reg-interest-${topic.slice(0, 8).replace(/\s/g, "-").toLowerCase()}`}
                          className={`rounded-full px-4 py-2.5 font-sub text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                            on
                              ? "grad-bg text-white shadow-[0_10px_22px_-14px_rgba(255,45,120,.9)]"
                              : "border border-line bg-surface text-ink-soft hover:text-ink"
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5">
                  <div>
                    <label
                      htmlFor="dietary"
                      className="mb-2 block font-sub text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft"
                    >
                      Dietary requirements
                    </label>
                    <input
                      id="dietary"
                      name="dietary"
                      value={form.dietary}
                      onChange={(e) => set("dietary", e.target.value)}
                      placeholder="Vegetarian, allergies, none…"
                      data-testid="reg-input-dietary"
                      className={`${INPUT_BASE} border-line`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-sub text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft"
                    >
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Questions for the speakers, accessibility needs, partnership enquiries…"
                      data-testid="reg-input-message"
                      className={`${INPUT_BASE} resize-none border-line`}
                    />
                  </div>
                </div>

                {/* consent */}
                <div className="mt-8">
                  <label className="flex cursor-pointer items-start gap-3.5">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      data-testid="reg-input-consent"
                      className="sr-only"
                    />
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                        form.consent
                          ? "grad-bg border-transparent text-white"
                          : errors.consent
                          ? "border-red-400"
                          : "border-line"
                      }`}
                    >
                      {form.consent && <Check size={14} strokeWidth={3} />}
                    </span>
                    <span className="font-body text-sm leading-relaxed text-ink-soft">
                      I agree that my details may be used to process my registration
                      and to send me information about the {EVENT.name}.{" "}
                      <span className="text-brand-pink">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="ml-9 mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-500">
                      <AlertCircle size={12} /> {errors.consent}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p
                    data-testid="registration-error"
                    className="mt-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-body text-sm text-red-600"
                  >
                    <AlertCircle size={15} />
                    Something went wrong sending your registration. Please try again,
                    or email {EVENT.venue.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  data-testid="registration-submit"
                  className="group grad-bg mt-9 inline-flex items-center gap-3 rounded-full px-9 py-4 font-sub text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_36px_-16px_rgba(255,45,120,.95)] transition-transform duration-300 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Complete registration
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>

                {!IS_CONFIGURED && (
                  <p className="mt-4 font-body text-xs text-ink-soft">
                    Demo mode — no form endpoint is connected yet, so nothing is sent.
                    Paste a Formspree/Getform URL into <code>FORM_ENDPOINT</code> in{" "}
                    <code>src/pages/Registration.jsx</code> to go live.
                  </p>
                )}
              </form>
            </Reveal>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="sticky top-32 space-y-5">
                <div className="relative overflow-hidden rounded-[1.75rem] p-8 text-white">
                  <div className="grad-bg absolute inset-0" />
                  <div className="relative">
                    <p className="font-sub text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">
                      The event
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
                      {EVENT.headline}
                    </h3>
                    <div className="mt-7 space-y-4 font-body text-sm">
                      <p className="flex items-center gap-3">
                        <CalendarDays size={17} className="shrink-0" />
                        {EVENT.date} · Doors 08:30
                      </p>
                      <p className="flex items-start gap-3">
                        <MapPin size={17} className="mt-0.5 shrink-0" />
                        {EVENT.venue.name}, {EVENT.city}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-line bg-surface p-7">
                  <p className="font-sub text-[10px] font-bold uppercase tracking-[0.24em] text-ink-soft">
                    Questions?
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                    The summit secretariat is happy to help with group bookings,
                    invoicing, press accreditation and accessibility.
                  </p>
                  <div className="mt-5 space-y-3">
                    <a
                      href={`mailto:${EVENT.venue.email}`}
                      className="flex items-center gap-3 font-body text-sm transition-colors hover:text-brand-pink"
                    >
                      <Mail size={16} className="text-brand-pink" />
                      {EVENT.venue.email}
                    </a>
                    <p className="flex items-center gap-3 font-body text-sm">
                      <Phone size={16} className="text-brand-orange" />
                      {EVENT.venue.phone}
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-line">
                  <iframe
                    title="Venue map"
                    src={EVENT.venue.mapsEmbed}
                    className="h-56 w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}
