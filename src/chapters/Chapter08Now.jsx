import { useRef } from "react";
import { motion } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import TypewriterText from "../components/TypewriterText";
import useSceneProgress from "../hooks/useSceneProgress";
import useReveal from "../hooks/useReveal";

export default function Chapter08Now() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  const tagReveal = useReveal(progress, [0.62, 0.74]);

  return (
    <StickyScene id="now" dwell="150vh" className="bg-surface" slideExit ref={ref}>
      <ChapterShell progress={progress} index="08" kicker="NOW">
        <TypewriterText
          progress={progress}
          range={[0.1, 0.55]}
          className="font-headline text-2xl sm:text-4xl text-ink leading-snug max-w-3xl"
          text="Sigo construyendo con el mismo instinto de siempre — Facturación SaaS para pymes reales, RideStats para repartidores como yo — y busco dónde seguir: en un equipo, o con vos."
        />
        <motion.p
          style={tagReveal}
          className="font-display text-xs tracking-[0.25em] text-accent-cool mt-8"
        >
          BOGOTÁ, COLOMBIA · ABIERTO A EQUIPO O FREELANCE
        </motion.p>
      </ChapterShell>
    </StickyScene>
  );
}
