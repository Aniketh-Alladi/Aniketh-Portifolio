import { ArrowUp, Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import { site, socials } from "../data/site";

const icons = { Github, Globe, Linkedin, Mail, Twitter };

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="text-muted transition-colors duration-200 hover:text-crimson"
                >
                  <Icon size={17} />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#home"
          aria-label="Back to top"
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-xs font-medium text-ink transition-all duration-200 hover:scale-[1.03] hover:border-crimson hover:text-crimson"
        >
          <ArrowUp size={13} aria-hidden="true" />
          Top
        </a>
      </div>
    </footer>
  );
}
