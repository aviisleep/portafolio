const LAYERS = [
  { label: "UI", z: 0 },
  { label: "LÓGICA", z: 34 },
  { label: "API", z: 68 },
  { label: "DATOS", z: 102 },
];

/**
 * A small exploded-view diagram — the kind of drawing that shows up in a
 * print-production manual, applied to a software stack instead of a
 * physical product. Says "full stack" by showing the layers instead of
 * repeating a </> or a laptop icon.
 */
export default function ExplodedStack() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-72 h-72 sm:w-80 sm:h-80" style={{ perspective: "1400px" }}>
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(58deg) rotateZ(-42deg)",
          }}
        >
          {LAYERS.map((layer, i) => (
            <div
              key={layer.label}
              className="absolute inset-0 border border-accent"
              style={{
                "--z": `${layer.z}px`,
                background:
                  "linear-gradient(135deg, rgba(237,231,222,0.06), rgba(237,231,222,0.01))",
                animation: "stack-float 6s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
      <ul className="flex flex-col gap-2.5 font-display text-xs tracking-[0.15em] text-ink-muted">
        {LAYERS.map((layer) => (
          <li key={layer.label} className="flex items-center gap-2.5">
            <span className="w-3.5 h-px bg-accent" aria-hidden="true" />
            {layer.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
