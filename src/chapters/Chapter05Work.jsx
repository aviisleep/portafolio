import { useRef } from "react";
import { motion } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import useSceneProgress from "../hooks/useSceneProgress";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/projects";

// Flagship cases get the full Problema→Enfoque→Tecnología→Resultado
// treatment. Everything else stays a compact line — real, but not
// stretched into a case study it doesn't need.
const CASES = [
  {
    title: "RideStats",
    meta: "2026 · En construcción",
    link: { label: "GITHUB →", href: "https://github.com/aviisleep/ridestats" },
    fields: [
      { label: "PROBLEMA", text: "Repartir es tomar decisiones todo el día, sin ninguna herramienta que ayude a tomarlas." },
      { label: "ENFOQUE", text: "Arquitectura por capas desde el día uno — pensada para crecer, no para descartar." },
      { label: "TECNOLOGÍA", text: "Kotlin · Jetpack Compose · Supabase · Hilt · Room" },
      { label: "RESULTADO", text: "En construcción — dashboard y registro de jornada con StateFlow ya funcionando." },
    ],
  },
  {
    title: "Rekcits",
    meta: "2024 · En producción",
    link: { label: "DEMO →", href: "https://rekcits-web.vercel.app" },
    fields: [
      { label: "PROBLEMA", text: "Vender accesorios de moto necesitaba marca, catálogo y canal propio — no solo redes sociales." },
      { label: "ENFOQUE", text: "Diseño, producción física y tienda online, todo construido de punta a punta." },
      { label: "TECNOLOGÍA", text: "Next.js · Supabase · Tailwind CSS · Three.js" },
      { label: "RESULTADO", text: "En producción — 500+ productos, vitrina 3D, asistente de ventas con IA." },
    ],
  },
  {
    title: "Facturación SaaS",
    meta: "2025 · En producción",
    link: { label: "DEMO →", href: "https://facturacion-web-three.vercel.app/" },
    fields: [
      { label: "PROBLEMA", text: "Pymes colombianas facturando a mano, sin un sistema que aguante escala real." },
      { label: "ENFOQUE", text: "Arquitectura freemium sobre Supabase, pensada desde el inicio para 1,000+ usuarios concurrentes." },
      { label: "TECNOLOGÍA", text: "Kotlin · Jetpack Compose · Next.js · Supabase · PostgreSQL" },
      { label: "RESULTADO", text: "Web en producción con cliente real pagando; app Android en beta cerrada en Google Play." },
    ],
  },
  {
    title: "Automotive Workshop",
    meta: "2023 · En construcción",
    link: { label: "GITHUB →", href: "https://github.com/aviisleep/Automotive_Workshop_ERP" },
    fields: [
      { label: "PROBLEMA", text: "Talleres automotrices llevando entrada/salida de mercancía y despacho a mano." },
      { label: "ENFOQUE", text: "Sistema de gestión de inventario y bahías, nacido como proyecto freelance." },
      { label: "TECNOLOGÍA", text: "React · Node.js · Express · MongoDB" },
      { label: "RESULTADO", text: "En construcción — control de entrada/salida y despacho ya funcionando." },
    ],
  },
];

const SECONDARY = projects.filter(
  (p) => !["ridestats", "rekcits", "facturacion-saas", "automotive-workshop"].includes(p.id)
);

function CaseCard({ item, index, progress }) {
  const start = 0.03 + index * 0.15;
  const reveal = useReveal(progress, [start, start + 0.16], 24);
  return (
    <motion.article style={reveal} className="border border-line bg-bg p-2.5 sm:p-3.5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-headline text-base sm:text-xl text-ink">{item.title}</h3>
        <span className="font-display text-[9px] text-ink-muted whitespace-nowrap">{item.meta}</span>
      </div>
      <dl className="hidden sm:grid sm:grid-cols-2 gap-x-3 gap-y-2 mt-2.5">
        {item.fields.map((f) => (
          <div key={f.label}>
            <dt className="font-display text-[9px] tracking-[0.15em] text-accent-cool mb-0.5">{f.label}</dt>
            <dd className="text-xs text-ink-muted leading-snug">{f.text}</dd>
          </div>
        ))}
      </dl>
      <a
        href={item.link.href}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-1.5 sm:mt-2.5 font-display text-[9px] tracking-wider text-ink hover:text-accent transition-colors"
      >
        {item.link.label}
      </a>
    </motion.article>
  );
}

function SecondaryRow({ project, index, progress }) {
  const start = 0.68 + (index / SECONDARY.length) * 0.14;
  const reveal = useReveal(progress, [start, start + 0.06], 10);
  const href = project.links.demo || project.links.github;
  return (
    <motion.li style={reveal} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-1.5 border-b border-line/60">
      <span className="text-xs text-ink">{project.title}</span>
      <span className="font-display text-[9px] text-ink-muted">{project.year}</span>
      <span className="font-display text-[9px] text-accent-cool">{project.status}</span>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-display text-[9px] tracking-wider text-ink-muted hover:text-accent transition-colors ml-auto"
        >
          {project.links.demo ? "DEMO →" : "GITHUB →"}
        </a>
      )}
    </motion.li>
  );
}

export default function Chapter05Work() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);

  return (
    <StickyScene id="work" dwell="260vh" className="bg-bg" ref={ref}>
      <ChapterShell
        progress={progress}
        index="05"
        kicker="SELECTED WORK"
        title="Proyectos reales, no tutoriales."
      >
        <div className="grid sm:grid-cols-2 gap-2.5 mb-3">
          {CASES.map((item, i) => (
            <CaseCard key={item.title} item={item} index={i} progress={progress} />
          ))}
        </div>
        <ul>
          {SECONDARY.map((project, i) => (
            <SecondaryRow key={project.id} project={project} index={i} progress={progress} />
          ))}
        </ul>
      </ChapterShell>
    </StickyScene>
  );
}
