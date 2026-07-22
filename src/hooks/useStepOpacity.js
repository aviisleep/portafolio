import { useTransform } from "framer-motion";

// Crossfades item `index` of `total` in and out over an equal slice of
// `progress` (0→1). The first item is visible the instant progress
// starts, the last stays visible once progress finishes — so nothing
// pops in/out of blank at the very edges of the scene.
export default function useStepOpacity(progress, index, total) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const pad = seg * 0.2;
  return useTransform(
    progress,
    [Math.max(start - pad, 0), start + pad, end - pad, Math.min(end + pad, 1)],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0]
  );
}
