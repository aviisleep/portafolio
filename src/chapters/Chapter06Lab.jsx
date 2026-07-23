import { useRef } from "react";
import { motion } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import { RegistrationMark } from "../components/PrintMarks";
import TypewriterText from "../components/TypewriterText";
import useSceneProgress from "../hooks/useSceneProgress";
import useReveal from "../hooks/useReveal";

// Real systems already built in the project — no invented screenshots,
// just what's actually there.
const SYSTEMS = [
  "Player",
  "Cámara",
  "Colisiones",
  "TileMap",
  "NPCs",
  "Diálogos",
  "Inventario (20 slots)",
  "UI del jugador",
];

function SystemItem({ label, index, total, progress }) {
  const start = 0.3 + (index / total) * 0.32;
  const reveal = useReveal(progress, [start, start + 0.08], 10);
  return (
    <motion.li
      style={reveal}
      className="flex items-center gap-2.5 py-1.5 border-b border-line/60 group"
    >
      <RegistrationMark className="w-3.5 h-3.5 text-line group-hover:text-accent-cool transition-colors shrink-0" />
      <span className="text-[11px] text-ink">{label}</span>
    </motion.li>
  );
}

export default function Chapter06Lab() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  const badgeReveal = useReveal(progress, [0.3, 0.4]);
  const boxReveal = useReveal(progress, [0.3, 0.42]);

  return (
    <StickyScene id="lab" dwell="180vh" className="bg-surface" ref={ref}>
      <ChapterShell
        progress={progress}
        index="06"
        kicker="THE LAB"
        title="También me gusta explorar sin que nadie me lo pida."
        eyebrowColor="text-accent"
      >
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <TypewriterText
              progress={progress}
              range={[0.04, 0.26]}
              className="text-ink-muted leading-relaxed text-sm mb-4"
              text="Legends Online es un MMORPG 2D top-down inspirado en Tibia, que vengo construyendo en Godot 4.5 con GDScript. Es un proyecto personal, todavía sin terminar ni publicar."
            />
            <motion.p
              style={badgeReveal}
              className="font-display text-[10px] tracking-[0.2em] text-accent border border-accent/40 inline-block px-3 py-1.5"
            >
              EN DESARROLLO · CAPTURAS PRÓXIMAMENTE
            </motion.p>
          </div>

          <motion.div style={boxReveal} className="md:col-span-3 border border-line bg-bg">
            <p className="font-display text-[10px] tracking-[0.3em] text-ink-muted px-5 pt-4">
              SISTEMAS CONSTRUIDOS
            </p>
            <ul className="grid grid-cols-2 gap-x-4 px-5 py-3">
              {SYSTEMS.map((label, i) => (
                <SystemItem key={label} label={label} index={i} total={SYSTEMS.length} progress={progress} />
              ))}
            </ul>
          </motion.div>
        </div>
      </ChapterShell>
    </StickyScene>
  );
}
