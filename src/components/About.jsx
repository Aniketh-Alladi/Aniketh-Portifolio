import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const strengths = [
  "End-to-end builds — from database internals to LLM products",
  "Plain-language communication with technical and business audiences",
  "Agile teamwork with real external clients",
  "Pragmatic trade-off analysis (cloud vs local, cost vs performance)",
];

const interests = ["AI agents & RAG systems", "Database internals", "Computer vision", "Developer tooling"];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Systems thinker, hands-on builder"
          lede="I like owning the whole problem — understanding the domain, designing the system, shipping it, and explaining it clearly to whoever needs to use it."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column: summary + education */}
          <div className="space-y-10">
            <Reveal>
              <p className="text-base leading-relaxed text-muted">
                I'm a second-year Bachelor of Computing student at the Australian National
                University, majoring in machine learning. My projects range from a relational
                database engine written from scratch in Go to LLM-powered assistants with
                retrieval-augmented generation, and I've delivered consulting work for a real
                external client in an agile team.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-ink/10 bg-gold/[0.07] p-6 shadow-soft">
                <div className="mb-3 flex items-center gap-2 text-crimson">
                  <GraduationCap size={18} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-ink">Education</h3>
                </div>
                <p className="font-medium text-ink">Australian National University</p>
                <p className="text-sm text-muted">Bachelor of Computing (Machine Learning) · 2025 – 2028</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Data structures & algorithms, computing systems, machine learning, software
                  construction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-ink/10 bg-gold/[0.07] p-6 shadow-soft">
                <div className="mb-3 flex items-center gap-2 text-crimson">
                  <Briefcase size={18} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-ink">Experience</h3>
                </div>
                <p className="font-medium text-ink">Industry Project Intern — Practera</p>
                <p className="text-sm text-muted">Study Australia Industry Experience Program · 2025</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Advised an external events company on market strategy in a cross-functional
                  consulting team, presenting research-backed recommendations to non-technical
                  stakeholders across agile sprints.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column: strengths + interests + certifications */}
          <div className="space-y-10">
            <Reveal delay={0.05}>
              <div>
                <div className="mb-4 flex items-center gap-2 text-crimson">
                  <Sparkles size={18} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-ink">Core strengths</h3>
                </div>
                <ul className="space-y-3">
                  {strengths.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h3 className="mb-4 font-display text-lg font-semibold text-ink">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-ink/10 bg-gold/[0.07] px-4 py-1.5 text-sm text-muted"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-charcoal p-6 text-cream shadow-soft">
                <div className="mb-3 flex items-center gap-2 text-gold">
                  <Award size={18} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-cream">Certifications</h3>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-cream/70">
                  <li>Object Oriented Java Programming: Data Structures and Beyond — UC San Diego (Coursera), 2026</li>
                  <li>Artificial Intelligence Fundamentals — IBM SkillsBuild, 2026</li>
                  <li>Study Australia Industry Experience Program — Australian Trade and Investment Commission, 2025</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
