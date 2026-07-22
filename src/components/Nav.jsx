const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0b0d10]/70 border-b border-[#262b33]">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm tracking-wider text-[#edeff2]">
          JAVIER<span className="text-[#ffb020]">.</span>MORENO
        </a>
        <ul className="hidden md:flex gap-8 font-display text-xs tracking-wider text-[#8a919c]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#29d3c6] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:aviisleep@gmail.com"
          className="font-display text-xs tracking-wider border border-[#ffb020] text-[#ffb020] px-4 py-2 hover:bg-[#ffb020] hover:text-[#0b0d10] transition-colors"
        >
          CONTACTAR
        </a>
      </nav>
    </header>
  );
}
