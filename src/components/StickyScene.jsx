import { forwardRef } from "react";
import { motion, useTransform } from "framer-motion";
import useSceneProgress from "../hooks/useSceneProgress";

/**
 * A "window" of the scroll story. The outer div is taller than the
 * viewport (100vh + dwell); its child section is pinned (`sticky top-0
 * h-screen`) for that extra height, then releases and gets covered by
 * whatever scene comes next — the same mechanism izanami-official.com
 * uses for its project cards, no scroll-jacking library required.
 *
 * The pinned section also rides its own scroll progress: it slides/fades
 * up into place as it takes over (first ~15%) and gently recedes — scale
 * down, dim — right before the next scene covers it (last ~15%). Without
 * this the hand-off between two flat-colored scenes reads as an abrupt
 * cut instead of one screen replacing another.
 */
const StickyScene = forwardRef(function StickyScene(
  { id, dwell = "80vh", className = "", children, transition = true },
  ref
) {
  const progress = useSceneProgress(ref);
  const y = useTransform(progress, [0, 0.15], ["5%", "0%"]);
  const opacity = useTransform(progress, [0, 0.12, 0.85, 1], [0.3, 1, 1, 0.6]);
  const scale = useTransform(progress, [0.85, 1], [1, 0.95]);

  return (
    <div ref={ref} className="relative" style={{ height: `calc(100vh + ${dwell})` }}>
      <motion.section
        id={id}
        style={transition ? { y, opacity, scale } : undefined}
        className={`sticky top-0 h-screen w-full overflow-hidden flex items-center ${className}`}
      >
        {children}
      </motion.section>
    </div>
  );
});

export default StickyScene;
