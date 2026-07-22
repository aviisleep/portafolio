import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import { RegistrationMark, CropMarks } from "../components/PrintMarks";
import useSceneProgress from "../hooks/useSceneProgress";
import useStepOpacity from "../hooks/useStepOpacity";
import useReveal from "../hooks/useReveal";
import { printCraft, brandingPieces } from "../data/craft";

function ArchiveFrame({ piece, progress, index, total }) {
  const opacity = useStepOpacity(progress, index, total);
  return (
    <motion.figure style={{ opacity }} className="absolute inset-0">
      <img
        src={piece.image}
        alt={`${piece.title} — ${piece.tag}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <figcaption className="absolute bottom-0 inset-x-0 bg-bg/80 px-4 py-2.5 flex items-baseline justify-between">
        <span className="text-sm text-ink">{piece.title}</span>
        <span className="text-[10px] font-display tracking-wider text-ink-muted">
          {piece.tag}
        </span>
      </figcaption>
    </motion.figure>
  );
}

// Craft-list rows cascade in one after another as the scene scrolls by,
// and cascade back out the same way in reverse.
function CraftItem({ item, progress, index, total }) {
  const start = 0.16 + (index / total) * 0.3;
  const reveal = useReveal(progress, [start, start + 0.06], 10);
  return (
    <motion.li
      style={reveal}
      className="flex items-center gap-2 py-1.5 border-b border-line/60 group"
    >
      <RegistrationMark className="w-3.5 h-3.5 text-line group-hover:text-cyan transition-colors shrink-0" />
      <span className="text-[11px] text-ink">{item.label}</span>
    </motion.li>
  );
}

export default function Chapter01Origin() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  const introReveal = useReveal(progress, [0.08, 0.18]);
  const listBoxReveal = useReveal(progress, [0.14, 0.22]);

  // Image box slides in from the left as the scene starts, then slides
  // out to the right and fades until it's gone, right before the scene
  // itself gets covered by the next chapter.
  const archiveX = useTransform(
    progress,
    [0, 0.16, 0.84, 1],
    ["-45%", "0%", "0%", "45%"]
  );
  const archiveOpacity = useTransform(progress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);

  return (
    <StickyScene id="origin" dwell="130vh" className="bg-bg" ref={ref}>
      <CropMarks className="hidden sm:block" />
      <ChapterShell
        progress={progress}
        index="01"
        kicker="ORIGIN"
        title="Antes de escribir código, aprendí a construir con las manos."
      >
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <motion.p style={introReveal} className="text-ink-muted leading-relaxed text-sm mb-6">
              Casi 10 años en diseño gráfico publicitario, antes de tocar una
              sola línea de código: identidad de marca, piezas impresas y
              señalética para negocios — el trabajo salía del monitor y
              terminaba montado en una pared o en la mano de un cliente.
            </motion.p>

            <motion.div style={listBoxReveal} className="border border-line bg-surface">
              <p className="font-display text-[10px] tracking-[0.3em] text-ink-muted px-4 pt-3">
                HOJA DE PRODUCCIÓN
              </p>
              <ul className="grid grid-cols-2 gap-x-3 px-4 py-2">
                {printCraft.map((item, i) => (
                  <CraftItem key={item.label} item={item} progress={progress} index={i} total={printCraft.length} />
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            style={{ x: archiveX, opacity: archiveOpacity }}
            className="md:col-span-3 relative aspect-[16/10] border border-line bg-surface"
          >
            {brandingPieces.map((piece, i) => (
              <ArchiveFrame
                key={piece.title}
                piece={piece}
                progress={progress}
                index={i}
                total={brandingPieces.length}
              />
            ))}
          </motion.div>
        </div>
      </ChapterShell>
    </StickyScene>
  );
}
