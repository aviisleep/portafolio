import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: "-100vh" }}
      className="relative border-t border-line bg-bg"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-display text-[10px] tracking-wider text-ink-muted">
          © {new Date().getFullYear()} JAVIER MORENO
        </p>
        <div className="flex gap-6 font-display text-[10px] tracking-wider text-ink-muted">
          <a href="https://github.com/aviisleep" target="_blank" rel="noreferrer" className="hover:text-accent-cool transition-colors">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/aviisleep/" target="_blank" rel="noreferrer" className="hover:text-accent-cool transition-colors">
            LINKEDIN
          </a>
          <a href="https://wa.me/573159212000" target="_blank" rel="noreferrer" className="hover:text-accent-cool transition-colors">
            WHATSAPP
          </a>
          <a href="mailto:aviisleep@gmail.com" className="hover:text-accent-cool transition-colors">
            EMAIL
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
