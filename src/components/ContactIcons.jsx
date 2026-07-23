// Small line icons matching the site's hand-drawn technical style
// (thin strokes, currentColor, no fill) — simple enough to sit next to
// the text label without needing pixel-accurate brand marks.

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <path d="M8 1.5a6.5 6.5 0 0 0-5.6 9.8L1.5 14.5l3.3-.9A6.5 6.5 0 1 0 8 1.5z" />
      <path
        d="M5.5 5.6c.2-.4.4-.4.6-.4h.4c.2 0 .3.1.4.3l.5 1.1c.1.2 0 .4-.1.5l-.4.4c.4.8 1 1.4 1.8 1.8l.4-.4c.1-.1.3-.2.5-.1l1.1.5c.2.1.3.2.3.4v.4c0 .3 0 .5-.5.6-1 .3-2.4-.2-3.5-1.3S5.2 6.6 5.5 5.6z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <rect x="1" y="3" width="14" height="10" rx="1" />
      <path d="M1.5 4l6.5 5 6.5-5" />
    </svg>
  );
}

export function GithubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <path d="M5.5 4L2 8l3.5 4" />
      <path d="M10.5 4L14 8l-3.5 4" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <circle cx="4" cy="12" r="1.2" />
      <circle cx="12" cy="12" r="1.2" />
      <circle cx="8" cy="4" r="1.2" />
      <path d="M4 10.8L8 5.2M12 10.8L8 5.2" />
    </svg>
  );
}
