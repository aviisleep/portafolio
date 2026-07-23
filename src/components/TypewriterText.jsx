import { motion, useTransform } from "framer-motion";

function Word({ word, index, total, progress, start, end }) {
  const wordStart = start + (index / total) * (end - start);
  const wordEnd = wordStart + ((end - start) / total) * 1.6;
  const opacity = useTransform(progress, [wordStart, wordEnd], [0, 1]);
  const y = useTransform(opacity, [0, 1], [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {word}
      {" "}
    </motion.span>
  );
}

/**
 * Reveals a longer passage of text word-by-word as the scene's own scroll
 * progress passes through [start, end] — a scroll-scrubbed "typewriter"
 * instead of the whole paragraph fading in as one block. Meant for the
 * longer intro paragraphs; short labels/kickers stay a simple fade.
 */
export default function TypewriterText({ text, progress, range, className = "" }) {
  const [start, end] = range;
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} word={word} index={i} total={words.length} progress={progress} start={start} end={end} />
      ))}
    </p>
  );
}
