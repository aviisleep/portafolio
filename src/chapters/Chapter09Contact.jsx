import { useRef } from "react";
import { motion } from "framer-motion";
import StickyScene from "../components/StickyScene";
import ChapterShell from "../components/ChapterShell";
import TypewriterText from "../components/TypewriterText";
import { WhatsAppIcon, EmailIcon, GithubIcon, LinkedinIcon } from "../components/ContactIcons";
import useSceneProgress from "../hooks/useSceneProgress";
import useReveal from "../hooks/useReveal";

const CHANNELS = [
  { label: "WHATSAPP", href: "https://wa.me/573159212000", Icon: WhatsAppIcon, primary: true },
  { label: "EMAIL", href: "mailto:aviisleep@gmail.com", Icon: EmailIcon },
  { label: "GITHUB", href: "https://github.com/aviisleep", Icon: GithubIcon },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/aviisleep/", Icon: LinkedinIcon },
];

export default function Chapter09Contact() {
  const ref = useRef(null);
  const progress = useSceneProgress(ref);
  const line1 = useReveal(progress, [0.05, 0.2], 20);
  const line2 = useReveal(progress, [0.16, 0.32], 20);
  const channelsReveal = useReveal(progress, [0.62, 0.76]);

  return (
    <StickyScene id="contact" dwell="160vh" className="bg-bg" slideEntrance ref={ref}>
      <ChapterShell progress={progress} index="09" kicker="LET'S BUILD" className="text-center">
        <div className="mb-8">
          <motion.p style={line1} className="font-headline text-3xl sm:text-5xl text-ink leading-tight">
            ¿Tienes una idea?
          </motion.p>
          <motion.p style={line2} className="font-headline text-3xl sm:text-5xl text-accent leading-tight">
            Construyámosla.
          </motion.p>
        </div>

        <TypewriterText
          progress={progress}
          range={[0.36, 0.58]}
          className="text-ink-muted leading-relaxed max-w-md mx-auto mb-9 text-sm"
          text="Buscás sumar a alguien a tu equipo, o tenés un producto que construir — en cualquier caso, hablemos directo, sin intermediarios ni formularios."
        />

        <motion.div style={channelsReveal} className="flex flex-wrap items-center justify-center gap-4">
          {CHANNELS.map((c) =>
            c.primary ? (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-display text-xs tracking-wider text-bg bg-accent px-5 py-3 hover:bg-ink transition-colors"
              >
                <c.Icon className="w-4 h-4" />
                {c.label} →
              </a>
            ) : (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-xs tracking-wider text-ink-muted border-b border-line pb-1 hover:border-accent-cool hover:text-accent-cool transition-colors"
              >
                <c.Icon className="w-3.5 h-3.5" />
                {c.label}
              </a>
            )
          )}
        </motion.div>
      </ChapterShell>
    </StickyScene>
  );
}
