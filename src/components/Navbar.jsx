import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = ["home", ...navLinks.map((l) => l.id)];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  const linkClass = (id) =>
    `relative py-1 text-sm font-medium transition-colors duration-200 ${
      active === id ? "text-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <header className="glass fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink"
          aria-label={`${site.name} — back to top`}
        >
          {site.initials}
          <span className="text-crimson">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={linkClass(link.id)}>
                {link.label}
                {/* Animated underline for the active section */}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-crimson"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-crimson hover:text-cream"
            >
              Let's talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass overflow-hidden border-t border-ink/5 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium ${
                    active === link.id ? "text-crimson" : "text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
