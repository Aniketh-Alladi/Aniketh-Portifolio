import Reveal from "./Reveal";

/**
 * Consistent section header: mono eyebrow, display title, optional lede.
 * `dark` flips text colors for charcoal sections.
 */
export default function SectionHeading({ eyebrow, title, lede, dark = false }) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="eyebrow mb-3">
        <span aria-hidden="true">/ </span>
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-cream/60" : "text-muted"}`}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}
