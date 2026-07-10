import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

function monogram(title) {
  return title
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          lede="Databases from scratch, LLM products, and computer vision — built solo and in teams."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.07} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-[#FFFBEF] shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                {/* Image or gradient placeholder */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="aspect-[16/9] w-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className={`flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br ${
                      project.accent === "gold"
                        ? "from-charcoal via-charcoal to-gold/50"
                        : "from-charcoal via-charcoal to-crimson/60"
                    }`}
                  >
                    <span className="font-display text-4xl font-bold text-cream/25 transition-colors duration-300 group-hover:text-cream/40">
                      {monogram(project.title)}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-ink">
                    {project.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mb-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-charcoal/[0.05] px-2.5 py-1 font-mono text-[11px] text-ink/70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:border-crimson hover:text-crimson"
                    >
                      <Github size={14} aria-hidden="true" />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-crimson px-4 py-2 text-xs font-semibold text-cream transition-all duration-200 hover:scale-[1.03]"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
