import { useScroll } from "framer-motion";

// Scroll progress (0→1) across the pinned lifetime of a StickyScene:
// 0 the instant the scene locks to the viewport, 1 the instant it's
// about to be covered by the next scene.
export default function useSceneProgress(ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return scrollYProgress;
}
