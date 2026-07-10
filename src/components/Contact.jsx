import { useState } from "react";
import { Github, Globe, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, socials } from "../data/site";

const icons = { Github, Globe, Linkedin, Mail, Twitter };

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-cream/80 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors duration-200 focus:border-crimson";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // Opens the visitor's mail client with the form pre-filled — no backend required.
  const handleSubmit = () => {
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const valid = form.name && form.email && form.message;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          lede="Open to internships, graduate roles, and interesting projects. The fastest way to reach me is email."
        />

        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          {/* Form */}
          <Reveal>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={fieldClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={fieldClass}
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-ink">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="What's this about?"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about the role or project"
                  className={`${fieldClass} resize-y`}
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!valid}
                className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-all duration-200 enabled:hover:scale-[1.03] enabled:hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={15} aria-hidden="true" />
                Send message
              </button>
              {sent && (
                <p role="status" className="text-sm text-muted">
                  Your mail client should have opened with the message ready to send.
                </p>
              )}
            </div>
          </Reveal>

          {/* Socials */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-charcoal p-8 text-cream shadow-soft">
              <h3 className="mb-2 font-display text-lg font-semibold">Elsewhere</h3>
              <p className="mb-6 text-sm leading-relaxed text-cream/60">
                Code, career history, and everything in between.
              </p>
              <ul className="space-y-3">
                {socials.map((s) => {
                  const Icon = icons[s.icon];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-3 rounded-xl border border-cream/10 px-4 py-3 text-sm text-cream/80 transition-all duration-200 hover:border-gold/50 hover:text-gold"
                      >
                        <Icon size={17} aria-hidden="true" />
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
