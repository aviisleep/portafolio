import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {/* 3D banner lives on its own to the right so it never sits behind the
          headline — on mobile there isn't room to split, so it stays full
          width but low in the stack, well behind the fade. */}
      <div className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2 opacity-40 md:opacity-100">
        <Hero3D />
      </div>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-[#0b0d10]/40" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#0b0d10] via-[#0b0d10]/85 to-transparent" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xs tracking-[0.3em] text-[#29d3c6] mb-4"
        >
          BOGOTÁ, COLOMBIA · STATUS: DISPONIBLE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl leading-[1.05] text-[#edeff2] max-w-2xl"
        >
          Construyo el software
          <br />
          que corre en la ruta.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-lg text-[#8a919c] text-base sm:text-lg"
        >
          Full Stack Developer con 6+ años construyendo productos end-to-end —
          Android, web e IA — para el mundo real del reparto y las pymes
          colombianas.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex items-center gap-6"
        >
          <a
            href="#work"
            className="font-display text-xs tracking-wider bg-[#ffb020] text-[#0b0d10] px-5 py-3 hover:bg-[#edeff2] transition-colors"
          >
            VER PROYECTOS
          </a>
          <a
            href="https://github.com/aviisleep"
            target="_blank"
            rel="noreferrer"
            className="font-display text-xs tracking-wider text-[#edeff2] border-b border-[#8a919c] pb-1 hover:border-[#29d3c6] hover:text-[#29d3c6] transition-colors"
          >
            GITHUB →
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-[10px] tracking-[0.3em] text-[#8a919c] z-10">
        SCROLL
      </div>
    </section>
  );
}
