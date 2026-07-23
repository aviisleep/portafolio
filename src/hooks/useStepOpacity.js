import { useTransform } from "framer-motion";

// A hard, unambiguous switch — at any given progress value exactly one
// item is opacity 1 and every other item is exactly 0. No continuous
// interpolation between items, so there's no midpoint where an item can
// end up "stuck" partially visible. Pair with a short CSS `transition`
// on the consumer's opacity for a quick smoothing crossfade at each
// discrete jump.
export default function useStepOpacity(progress, index, total) {
  return useTransform(progress, (p) => {
    const active = Math.min(total - 1, Math.max(0, Math.floor(p * total)));
    return active === index ? 1 : 0;
  });
}
