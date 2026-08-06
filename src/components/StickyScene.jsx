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
 * The sticky element itself carries NO animated style. Safari/WebKit has
 * a real bug where a `transform` (or animated `opacity`) applied to the
 * same element that has `position: sticky` breaks the sticking — the
 * element never pins and just scrolls straight through, which on mobile
 * showed up as "scrolling down shows nothing but black background" since
 * the actual content flew past almost instantly. The transform/opacity
 * live on a plain child `motion.div` instead, which is always safe.
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
        height: `calc(100dvh + ${dwell})`,
        marginTop: `calc(-1 * ${overlap})`,
      }}
    >
      <section id={id} className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <motion.div
          style={transition ? { x, y, opacity, scale } : undefined}
          className={`w-full h-full flex items-center pt-20 pb-6 ${className}`}
        >
          {children}
        </motion.div>
      </section>
    </div>
  );
});

export default StickyScene;
