import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

/**
 * Content chrome shared by every scene: the "NN — KICKER" index line and
 * an optional title, revealed as the scene's own scroll progress passes
 * a given window — so it builds in on the way down and un-builds on the
 * way back up, in step with the rest of the scene. Meant to be rendered
 * inside a <StickyScene>.
 */
export default function ChapterShell({
  progress,
  index,
  kicker,
  title,
  eyebrowColor = "text-accent",
  className = "",
  children,
}) {
  const kickerReveal = useReveal(progress, [0.02, 0.16]);
  const titleReveal = useReveal(progress, [0.1, 0.3], 24);

  return (
    <div className={`max-w-6xl mx-auto px-6 w-full ${className}`}>
      <motion.p
        style={kickerReveal}
        className={`font-display text-xs tracking-[0.3em] mb-3 ${eyebrowColor}`}
      >
        {index} — {kicker}
      </motion.p>
      {title && (
        <motion.h2
          style={titleReveal}
          className="font-headline text-xl sm:text-3xl text-ink leading-snug mb-5 max-w-3xl"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </div>
  );
}
