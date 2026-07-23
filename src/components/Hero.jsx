import { motion } from "framer-motion";
import ExplodedStack from "./ExplodedStack";

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-bg py-28 sm:py-36">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-xs tracking-[0.25em] text-accent-cool mb-5"
          >
            BOGOTÁ, COLOMBIA · DISPONIBLE
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-xs sm:text-sm tracking-[0.3em] text-accent border-l-2 border-accent pl-4 mb-6 leading-relaxed"
          >
            FULL STACK
            <br />
            DEVELOPER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="font-headline text-4xl sm:text-6xl leading-[1.1] text-ink max-w-xl"
          >
            Construyo software de punta a punta.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-6 max-w-md text-ink-muted text-base sm:text-lg"
          >
            Del diseño de la interfaz a la base de datos — Android, web e IA,
            con la misma persona pensando cada capa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex items-center gap-6"
          >
            <a
              href="#work"
              className="font-display text-xs tracking-wider bg-accent text-bg px-5 py-3 hover:bg-ink transition-colors"
            >
              VER PROYECTOS
            </a>
            <a
              href="https://github.com/aviisleep"
              target="_blank"
              rel="noreferrer"
              className="font-display text-xs tracking-wider text-ink border-b border-line pb-1 hover:border-accent-cool hover:text-accent-cool transition-colors"
            >
              GITHUB →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden sm:flex justify-center"
        >
          <ExplodedStack />
        </motion.div>
      </div>

      <p className="relative z-10 mt-16 text-center font-display text-[10px] tracking-[0.3em] text-ink-muted">
        SCROLL
      </p>
    </section>
  );
}
