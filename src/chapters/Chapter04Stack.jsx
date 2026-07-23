import { useRef } from "react";
import { motion } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import useSceneProgress from "../hooks/useSceneProgress";
import useReveal from "../hooks/useReveal";
import { skills } from "../data/projects";

function SkillGroup({ group, index, total, progress }) {
  const start = 0.22 + (index / total) * 0.5;
  const reveal = useReveal(progress, [start, start + 0.1], 16);
  return (
    <motion.div style={reveal} className="border border-line bg-bg p-3">
      <p className="font-display text-[10px] tracking-[0.2em] text-accent-cool mb-2">
        {group.group.toUpperCase()}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <li key={item} className="font-display text-[10px] text-ink border border-line px-2 py-0.5">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Chapter04Stack() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  const introReveal = useReveal(progress, [0.04, 0.18]);

  return (
    <StickyScene id="stack" dwell="190vh" className="bg-surface" ref={ref}>
      <ChapterShell
        progress={progress}
        index="04"
        kicker="STACK"
        title="Lo que uso para construir, agrupado por lo que resuelve."
        eyebrowColor="text-accent-cool"
      >
        <motion.p style={introReveal} className="text-ink-muted leading-relaxed max-w-lg mb-4 text-sm">
          Sin barras de nivel inventadas — esto es lo que uso en proyectos
          reales, agrupado por área.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {skills.map((group, i) => (
            <SkillGroup key={group.group} group={group} index={i} total={skills.length} progress={progress} />
          ))}
        </div>
      </ChapterShell>
    </StickyScene>
  );
}
