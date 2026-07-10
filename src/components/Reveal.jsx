import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades and lifts children into view on scroll. Respects reduced motion.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
