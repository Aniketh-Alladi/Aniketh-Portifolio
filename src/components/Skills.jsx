import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LayoutTemplate,
  Server,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

const icons = {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LayoutTemplate,
  Server,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          dark
          eyebrow="Skills"
          title="Tools I reach for"
          lede="A stack shaped by building AI products, data pipelines, and low-level systems — not just coursework."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon];
            return (
              <Reveal key={cat.category} delay={(i % 4) * 0.06}>
                <div className="group h-full rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/[0.07]">
                  <div className="mb-4 inline-flex rounded-xl bg-gold/15 p-2.5 text-gold transition-colors duration-300 group-hover:bg-crimson/20 group-hover:text-crimson">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 font-display text-base font-semibold text-cream">
                    {cat.category}
                  </h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-cream/10 px-2.5 py-1 text-xs text-cream/60"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
