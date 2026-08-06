import { forwardRef } from "react";
import { motion, useTransform } from "framer-motion";
import useSceneProgress from "../hooks/useSceneProgress";

/**
 * A "window" of the scroll story. The outer div is taller than the
 * viewport (100dvh + dwell); its child section is pinned (`sticky top-0
 * h-[100dvh]`) for that extra height, then releases and gets covered by
 * whatever scene comes next — the same mechanism izanami-official.com
 * uses for its project cards, no scroll-jacking library required.
 *
 * `overlap` pulls this scene's wrapper up into the tail of the previous
 * one (negative margin-top), so there's a real shared scroll range where
 * both are simultaneously on screen. The entrance/exit windows below are
 * computed as a *fraction of this scene's own total height* so they line
 * up exactly with that shared range regardless of how long `dwell` is —
 * a fixed fraction like 0.15 would cover the real overlap on a short
 * scene but undershoot it on a long one, leaving a stretch with nothing
 * to blend into (a "black screen" gap) before the next scene's own
 * fade-in has anything to dissolve from.
 *
 * `slideEntrance`/`slideExit` swap the default fade+dim for a horizontal
 * slide, for the rare chapter-to-chapter hand-off that wants to read as
 * "this one slides out, the next slides in" instead of a cross-dissolve.
 */
const StickyScene = forwardRef(function StickyScene(
  {
    id,
    dwell = "80vh",
    overlap = "45vh",
    className = "",
    children,
    transition = true,
    slideEntrance = false,
    slideExit = false,
  },
  ref
) {
  const progress = useSceneProgress(ref);
  const dwellVh = parseFloat(dwell) || 0;
  const overlapVh = parseFloat(overlap) || 0;
  const frac = Math.min(overlapVh / (100 + dwellVh), 0.35);

  const y = useTransform(progress, [0, frac], [slideEntrance ? "0%" : "4%", "0%"]);
  const x = useTransform(
    progress,
    [0, frac, 1 - frac, 1],
    [slideEntrance ? "100%" : "0%", "0%", "0%", slideExit ? "-100%" : "0%"]
  );
  const opacity = useTransform(
    progress,
    [0, frac, 1 - frac, 1],
    [0, 1, 1, slideExit ? 1 : 0.55]
  );
  const scale = useTransform(progress, [1 - frac, 1], [1, slideExit ? 1 : 0.97]);

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        // 100dvh (dynamic viewport height), not 100vh — mobile browsers
        // resize the visible viewport as the address bar shows/hides on
        // scroll, and plain vh doesn't track that. Mixing the two means
        // this wrapper's measured height drifts from what `sticky` is
        // actually pinning against, so the math for "when does this
        // scene release and the next one take over" goes wrong — on
        // mobile that showed up as scrolling down landing in the gap
        // between scenes (blank) until scrolling back up far enough to
        // land on a scene again.
        height: `calc(100dvh + ${dwell})`,
        marginTop: `calc(-1 * ${overlap})`,
      }}
    >
      <motion.section
        id={id}
        style={transition ? { x, y, opacity, scale } : undefined}
        className={`sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center ${className}`}
      >
        {children}
      </motion.section>
    </div>
  );
});

export default StickyScene;
