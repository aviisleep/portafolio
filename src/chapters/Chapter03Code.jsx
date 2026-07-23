import { useRef } from "react";
import { motion } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import TypewriterText from "../components/TypewriterText";
import useSceneProgress from "../hooks/useSceneProgress";
import useReveal from "../hooks/useReveal";

// Real stack, grouped by the layer it lives in — same data already used
// in data/projects.js, just re-read through a systems lens instead of a
// flat list.
const LAYERS = [
  { label: "UI", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "LÓGICA", items: ["Node.js", "Express.js"] },
  { label: "API", items: ["REST APIs", "JWT", "Supabase"] },
  { label: "DATOS", items: ["PostgreSQL", "MongoDB", "Row Level Security"] },
];

function LayerCard({ layer, index, total, progress }) {
  const start = 0.28 + (index / total) * 0.42;
  const reveal = useReveal(progress, [start, start + 0.1], 16);
  return (
    <motion.div style={reveal} className="border border-line p-4">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-display text-[10px] text-accent-cool">0{index + 1}</span>
        <h3 className="font-headline text-lg sm:text-xl text-ink">{layer.label}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {layer.items.map((item) => (
          <span
            key={item}
            className="font-display text-[10px] tracking-wide text-ink-muted border border-line px-2 py-0.5"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Chapter03Code() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  return (
    <StickyScene id="code" dwell="180vh" className="bg-bg" ref={ref}>
      <ChapterShell
        progress={progress}
        index="03"
        kicker="CODE"
        title="No solo armo interfaces. Armo sistemas."
      >
        <TypewriterText
          progress={progress}
          range={[0.03, 0.22]}
          className="text-ink-muted leading-relaxed max-w-lg mb-5 text-sm"
          text="Cada producto que construyo tiene las mismas capas debajo: una interfaz, la lógica que la sostiene, una API que conecta todo, y datos que persisten. Pensar las cuatro a la vez es lo que separa armar una pantalla de construir un producto."
        />
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
          {LAYERS.map((layer, i) => (
            <LayerCard key={layer.label} layer={layer} index={i} total={LAYERS.length} progress={progress} />
          ))}
        </div>
      </ChapterShell>
    </StickyScene>
  );
}
