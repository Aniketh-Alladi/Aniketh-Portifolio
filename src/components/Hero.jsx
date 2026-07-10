import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { site } from "../data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
      {/* Soft ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-crimson/20 blur-3xl"
      />

      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.4fr_1fr]"
        variants={container}
        initial={prefersReduced ? false : "hidden"}
        animate="show"
      >
        <div>
          <motion.p variants={item} className="eyebrow mb-5 flex items-center gap-2">
            <MapPin size={13} aria-hidden="true" />
            {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl"
          >
            {site.name.split(" ")[0]}
            <br />
            {site.name.split(" ").slice(1).join(" ")}
            <span className="text-crimson">.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 font-mono text-sm text-crimson md:text-base">
            {site.title}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
            >
              Contact Me
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-crimson"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Profile image / placeholder */}
        <motion.div variants={item} className="mx-auto w-full max-w-xs md:max-w-sm">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-crimson/50 via-gold/20 to-gold/60"
            />
            {site.profileImage ? (
              <img
                src={site.profileImage}
                alt={`Portrait of ${site.name}`}
                className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-lift"
              />
            ) : (
              <div
                role="img"
                aria-label={`Placeholder portrait for ${site.name}`}
                className="relative flex aspect-[4/5] w-full items-center justify-center rounded-[1.75rem] bg-charcoal shadow-lift"
              >
                <span className="font-display text-6xl font-bold text-cream/90">
                  {site.initials}
                  <span className="text-gold">.</span>
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
