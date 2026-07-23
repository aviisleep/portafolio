import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#origin", label: "Origin", number: "01" },
  { href: "#transition", label: "The Transition", number: "02" },
  { href: "#code", label: "Code", number: "03" },
  { href: "#stack", label: "Stack", number: "04" },
  { href: "#work", label: "Selected Work", number: "05" },
  { href: "#lab", label: "The Lab", number: "06" },
  { href: "#github", label: "GitHub", number: "07" },
  { href: "#now", label: "Now", number: "08" },
  { href: "#contact", label: "Let's Build", number: "09" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" onClick={() => setOpen(false)} className="font-display text-sm tracking-wider text-ink">
            JAVIER<span className="text-accent">.</span>MORENO
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex items-center gap-3 font-display text-xs tracking-[0.3em] text-ink"
          >
            {open ? "CERRAR" : "MENU"}
            <span className="relative w-6 h-4 shrink-0">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-center px-6"
          >
            <ul className="max-w-6xl mx-auto w-full">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                  className="border-b border-line"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 sm:py-6 group"
                  >
                    {l.number && (
                      <span className="font-display text-xs text-accent">{l.number}</span>
                    )}
                    <span className="font-display text-3xl sm:text-5xl text-ink group-hover:text-accent-cool transition-colors">
                      {l.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.05 + links.length * 0.06 }}
              className="max-w-6xl mx-auto w-full mt-10 flex flex-wrap gap-6 font-display text-xs tracking-wider text-ink-muted"
            >
              <a href="mailto:aviisleep@gmail.com" className="hover:text-accent-cool transition-colors">
                EMAIL
              </a>
              <a href="https://wa.me/573159212000" target="_blank" rel="noreferrer" className="hover:text-accent-cool transition-colors">
                WHATSAPP
              </a>
              <a href="https://github.com/aviisleep" target="_blank" rel="noreferrer" className="hover:text-accent-cool transition-colors">
                GITHUB
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
