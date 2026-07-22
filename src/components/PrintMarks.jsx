// Prepress registration mark — the crosshair-in-circle used to align
// color plates on a printing press. A small nod to the print-shop years
// rendered in the same HUD language as the rest of the site.
export function RegistrationMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <circle cx="20" cy="20" r="9" />
      <line x1="20" y1="0" x2="20" y2="40" />
      <line x1="0" y1="20" x2="40" y2="20" />
    </svg>
  );
}

// Corner crop marks — the trim guides printed at the edge of a page.
export function CropMarks({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 text-line ${className}`}
      aria-hidden="true"
    >
      {[
        "top-4 left-4",
        "top-4 right-4",
        "bottom-4 left-4",
        "bottom-4 right-4",
      ].map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 16 16"
          className={`absolute ${pos} w-4 h-4`}
          stroke="currentColor"
          strokeWidth="1"
        >
          <line x1="8" y1="0" x2="8" y2="5" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <line x1="0" y1="8" x2="5" y2="8" />
          <line x1="11" y1="8" x2="16" y2="8" />
        </svg>
      ))}
    </div>
  );
}
