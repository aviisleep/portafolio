export default function Footer() {
  return (
    <footer className="border-t border-[#262b33]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-display text-[10px] tracking-wider text-[#8a919c]">
          © {new Date().getFullYear()} JAVIER MORENO
        </p>
        <div className="flex gap-6 font-display text-[10px] tracking-wider text-[#8a919c]">
          <a href="https://github.com/aviisleep" target="_blank" rel="noreferrer" className="hover:text-[#29d3c6] transition-colors">
            GITHUB
          </a>
          <a href="https://linkedin.com/in/aviisleep" target="_blank" rel="noreferrer" className="hover:text-[#29d3c6] transition-colors">
            LINKEDIN
          </a>
          <a href="https://wa.me/573159212000" target="_blank" rel="noreferrer" className="hover:text-[#29d3c6] transition-colors">
            WHATSAPP
          </a>
          <a href="mailto:aviisleep@gmail.com" className="hover:text-[#29d3c6] transition-colors">
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
