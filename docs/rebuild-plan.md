# Rebuild Plan — v3

Consolida todo lo anterior (`project-audit.md`, `content-inventory.md`, `portfolio-strategy.md`) en un plan de ejecución único, incorporando la nueva dirección visual.

## 0. Supuesto que estoy asumiendo

Asumo que la dirección visual del preview (fondo casi negro cálido, serif Fraunces, acento bronce) queda **aprobada** como base para reconstruir el sitio. Si no es así, avisame antes de que toque código.

## 1. Qué se mantiene tal cual

- La mecánica de scroll (`StickyScene`, ventanas pineadas, revelado bidireccional con `useSceneProgress`/`useStepOpacity`/`useReveal`) — funciona, es la base técnica, no hay que rehacerla.
- El menú overlay de pantalla completa — ya aprobado explícitamente.
- Todo el contenido real recopilado (proyectos, stack, piezas del PDF de branding, RideStats, Legends Online, etc.).
- La estructura narrativa de capítulos ya reconciliada (Hero → 01 ORIGIN → 02 THE TRANSITION → 03 CODE → 04 STACK → 05 SELECTED WORK → 06 LAB → 07 GITHUB → 08 NOW → 09 LET'S BUILD).
- Las marcas de registro / crop marks (`PrintMarks.jsx`) — encajan incluso mejor con la nueva estética "cuarto oscuro de imprenta" que con el HUD anterior.

## 2. Qué se reconstruye desde cero

- **Sistema de diseño completo**: paleta, tipografía (Fraunces + Space Mono + Inter), tokens de Tailwind.
- **Hero**: nueva composición visual. El banner 3D actual (cinta de ruta + tablero con brillo neón) no encaja con la dirección elegante/oscura nueva — necesita una decisión (ver sección 5).
- **Capítulos 01 y 02**: mismo contenido y mecánica, piel visual completamente nueva (colores, tipografía, sin bordes/glow tipo HUD).

## 3. Plan técnico

1. `index.html` — cargar Fraunces vía Google Fonts (igual que ya se cargan Space Mono / Inter).
2. `index.css` — reemplazar los tokens `--bg/--amber/--cyan/...` y el bloque `@theme` de Tailwind con la nueva paleta (ground/ink/ink-muted/line/accent/accent-cool).
3. Reescribir `Hero.jsx` (pendiente de la decisión sobre el 3D).
4. Reestilar `ChapterShell.jsx`, `StickyScene.jsx`, `PrintMarks.jsx` con los nuevos tokens.
5. Reestilar `Chapter01Origin.jsx` y `Chapter02Transition.jsx`.
6. `Nav.jsx` ya usa los tokens del theme (`bg-bg`, `text-ink`, etc.) — se actualiza solo al cambiar los tokens base, casi sin trabajo extra ahí.

## 4. Orden de ejecución

1. Sistema de diseño (tokens + fuentes) — base para todo lo demás.
2. Hero, con la decisión del punto 5 resuelta.
3. Reestilar 01 y 02 con el nuevo sistema.
4. Seguir con 03 CODE y 04 STACK ya directo en la nueva dirección (para no reestilar dos veces).
5. Continuar 05–09 según lo ya planeado.

## 5. Decisión pendiente: el banner 3D del Hero

El "route ribbon" con el tablero brillante no encaja con la estética nueva. Opciones:

- **A.** Quitarlo — Hero solo con tipografía grande como protagonista (más cerca de lamalama.com).
- **B.** Rediseñarlo con los materiales/colores de la nueva paleta — mismo concepto (ruta + tablero), sin el brillo neón.
- **C.** Otra idea — a definir.
