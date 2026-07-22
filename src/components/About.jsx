const specs = [
  { label: "BASE", value: "Bogotá, Colombia" },
  { label: "EXPERIENCIA", value: "6+ años" },
  { label: "ENFOQUE", value: "Full Stack · Android · IA" },
  { label: "IDIOMAS", value: "Español (nativo) · Inglés (técnico)" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28">
      <p className="font-display text-xs tracking-[0.3em] text-[#ffb020] mb-3">01 — SOBRE MÍ</p>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <h2 className="font-display text-2xl sm:text-3xl text-[#edeff2] leading-snug mb-6">
            Desarrollador que también reparte pedidos en moto —
            y construye el software para ese mismo mundo.
          </h2>
          <p className="text-[#8a919c] leading-relaxed mb-4">
            Empecé programando páginas y sistemas de gestión para talleres y
            pymes. Hoy construyo productos propios de punta a punta: apps
            Android para domiciliarios, backends que aguantan escala real, y
            asistentes con IA integrada — todo con la ventaja de conocer el
            oficio del reparto desde adentro, porque también lo ejerzo.
          </p>
          <p className="text-[#8a919c] leading-relaxed">
            Vengo del diseño gráfico antes que del código — más de 10 años
            entre Photoshop, Illustrator y CorelDraw — así que la parte visual
            de lo que construyo no es una idea de último momento.
          </p>
        </div>
        <div className="md:col-span-2 border border-[#262b33] bg-[#14171c] p-6">
          <p className="font-display text-[10px] tracking-[0.3em] text-[#8a919c] mb-4">
            FICHA TÉCNICA
          </p>
          <dl className="space-y-4">
            {specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 border-b border-[#262b33] pb-3">
                <dt className="font-display text-xs text-[#8a919c]">{s.label}</dt>
                <dd className="text-sm text-[#edeff2] text-right">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
