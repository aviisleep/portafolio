import { useRef } from "react";
import { motion } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import TypewriterText from "../components/TypewriterText";
import useSceneProgress from "../hooks/useSceneProgress";
import useReveal from "../hooks/useReveal";
import { repos } from "../data/github";

function RepoRow({ repo, index, total, progress }) {
  const start = 0.24 + (index / total) * 0.4;
  const reveal = useReveal(progress, [start, start + 0.1], 14);
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      style={reveal}
      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 border-b border-line/60 group"
    >
      <span className="font-display text-sm text-ink group-hover:text-accent transition-colors">
        {repo.name}
      </span>
      <span className="font-display text-[10px] text-accent-cool">{repo.lang}</span>
      <span className="text-xs text-ink-muted">{repo.description}</span>
      <span className="font-display text-[10px] tracking-wider text-ink-muted group-hover:text-accent transition-colors ml-auto">
        VER →
      </span>
    </motion.a>
  );
}

export default function Chapter07Github() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  const ctaReveal = useReveal(progress, [0.7, 0.8]);

  return (
    <StickyScene id="github" dwell="190vh" className="bg-bg" ref={ref}>
      <ChapterShell
        progress={progress}
        index="07"
        kicker="GITHUB"
        title="Todo lo que construyo deja una huella."
      >
        <TypewriterText
          progress={progress}
          range={[0.03, 0.22]}
          className="text-ink-muted leading-relaxed max-w-lg mb-8 text-sm"
          text="Una selección curada, no la lista completa — dejo afuera los repositorios de bootcamp y práctica que no aportan a esto."
        />
        <div className="max-w-2xl">
          {repos.map((repo, i) => (
            <RepoRow key={repo.name} repo={repo} index={i} total={repos.length} progress={progress} />
          ))}
        </div>
        <motion.a
          style={ctaReveal}
          href="https://github.com/aviisleep"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 font-display text-xs tracking-wider bg-accent text-bg px-5 py-3 hover:bg-ink transition-colors"
        >
          VER PERFIL COMPLETO →
        </motion.a>
      </ChapterShell>
    </StickyScene>
  );
}
