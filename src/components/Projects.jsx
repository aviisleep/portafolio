import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-display text-xs tracking-[0.3em] text-[#ffb020] mb-3">03 — PROYECTOS</p>
      <h2 className="font-display text-2xl sm:text-3xl text-[#edeff2] mb-12">
        Bitácora de ruta.
      </h2>

      <div className="space-y-px bg-[#262b33] border border-[#262b33]">
        {projects.map((p) => (
          <article key={p.id} className="bg-[#0b0d10] p-6 sm:p-8 grid sm:grid-cols-12 gap-6">
            <div className="sm:col-span-2">
              <p className="font-display text-xs text-[#8a919c]">{p.year}</p>
              <p className="font-display text-[10px] text-[#29d3c6] mt-1">{p.status}</p>
            </div>
            <div className="sm:col-span-7">
              <h3 className="font-display text-lg text-[#edeff2]">{p.title}</h3>
              <p className="text-xs text-[#8a919c] mb-3">{p.role}</p>
              <p className="text-sm text-[#c3c8cf] leading-relaxed mb-3">{p.description}</p>
              {p.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-[#8a919c] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#ffb020]">
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="sm:col-span-3 flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[10px] font-display text-[#8a919c] border border-[#262b33] px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {p.links.github && (
                  <a href={p.links.github} target="_blank" rel="noreferrer" className="font-display text-[10px] tracking-wider text-[#edeff2] hover:text-[#29d3c6] transition-colors">
                    GITHUB →
                  </a>
                )}
                {p.links.demo && (
                  <a href={p.links.demo} target="_blank" rel="noreferrer" className="font-display text-[10px] tracking-wider text-[#edeff2] hover:text-[#29d3c6] transition-colors">
                    DEMO →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
