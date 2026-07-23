import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import TypewriterText from "../components/TypewriterText";
import useSceneProgress from "../hooks/useSceneProgress";
import useStepOpacity from "../hooks/useStepOpacity";
import useReveal from "../hooks/useReveal";

const STEPS = ["DESIGN", "HTML", "CSS", "JAVASCRIPT", "REACT"];

function MorphWord({ progress, index, total, word }) {
  const opacity = useStepOpacity(progress, index, total);
  const y = useTransform(opacity, [0, 1], [12, 0]);
  return (
    <motion.span
      style={{ opacity, y, transition: "opacity 0.2s ease, transform 0.2s ease" }}
      className="absolute inset-0 flex items-center justify-center font-display text-4xl sm:text-6xl text-ink"
    >
      {word}
    </motion.span>
  );
}

export default function Chapter02Transition() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  const footerReveal = useReveal(progress, [0.86, 1]);

  return (
    <StickyScene id="transition" dwell="160vh" className="bg-bg" ref={ref}>
      <ChapterShell
        progress={progress}
        index="02"
        kicker="THE TRANSITION"
        title="Quería entender qué pasaba detrás de la pantalla."
        eyebrowColor="text-accent-cool"
      >
        <TypewriterText
          progress={progress}
          range={[0.02, 0.22]}
          className="text-ink-muted leading-relaxed max-w-lg mb-10 text-sm"
          text="El diseño me enseñó a componer. La curiosidad por lo que había detrás de una página web fue lo que me llevó a programar — el mismo instinto de construir, aplicado a un material distinto."
        />

        <div className="relative h-24">
          {STEPS.map((word, i) => (
            <MorphWord key={word} word={word} index={i} total={STEPS.length} progress={progress} />
          ))}
        </div>

        <motion.p
          style={footerReveal}
          className="font-headline text-2xl sm:text-4xl text-ink text-center leading-snug mt-10"
        >
          El diseño me enseñó a pensar visualmente.
          <br />
          El código, a pensar sistemáticamente.
        </motion.p>
      </ChapterShell>
    </StickyScene>
  );
}
