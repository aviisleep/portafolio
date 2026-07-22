import { skills } from "../data/projects";

export default function Skills() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-display text-xs tracking-[0.3em] text-[#ffb020] mb-3">02 — STACK</p>
      <h2 className="font-display text-2xl sm:text-3xl text-[#edeff2] mb-12">
        Lo que uso para construir.
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#262b33] border border-[#262b33]">
        {skills.map((group) => (
          <div key={group.group} className="bg-[#0b0d10] p-6">
            <p className="font-display text-[10px] tracking-[0.25em] text-[#29d3c6] mb-4">
              {group.group.toUpperCase()}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-xs text-[#edeff2] border border-[#262b33] px-2.5 py-1 hover:border-[#ffb020] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
