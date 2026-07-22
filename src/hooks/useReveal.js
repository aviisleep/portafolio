import { useTransform } from "framer-motion";

// Scroll-linked reveal: fades/lifts in as `progress` passes through
// [start, end]. Because it's driven by the live scroll value instead of
// a one-shot "whileInView" trigger, it reverses the same way on
// scroll-up — text builds in going down, un-builds going back up.
export default function useReveal(progress, [start, end], distance = 16) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [distance, 0]);
  return { opacity, y };
}
