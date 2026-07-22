# Project Audit — Fase 1

Fecha: 2026-07-22
Rama: `redesign/built-in-layers` (a partir del commit base `162a145`)

## 1. Arquitectura actual

- **Stack**: React 19 + Vite 8 + Tailwind CSS 4 + Framer Motion 12 + Three.js / `@react-three/fiber` / `@react-three/drei` (Hero 3D) + `emailjs-com` (formulario de contacto, sin configurar).
- Sin router — página única, `App.jsx` compone las secciones en orden.
- Sin TypeScript, sin test runner. Lint con `oxlint` (config en `.oxlintrc.json`).
- Sin CMS/backend — todo el contenido vive en `src/data/*.js` como JS estático.

## 2. Lo que ya se construyó (sistema nuevo, scroll-driven)

- **`Hero.jsx`** — banner 3D (cinta de ruta + tablero) reposicionado a la mitad derecha, texto a la izquierda.
- **`chapters/Chapter01Origin.jsx`** — ventana "01 ORIGIN": lista de oficios de impresión (`data/craft.js: printCraft`) + archivo de piezas de branding en crossfade (`data/craft.js: brandingPieces`, 5 imágenes extraídas del PDF de diseño, en `public/design/*.webp`).
- **`chapters/Chapter02Transition.jsx`** — ventana "02 THE TRANSITION": morph de palabras DESIGN→HTML→CSS→JAVASCRIPT→REACT atado al scroll.
- **Sistema base**: `StickyScene.jsx` (mecánica de "ventanas" apiladas con `position: sticky`, entrada/salida con escala+fade), hooks `useSceneProgress` / `useStepOpacity` / `useReveal` (revelado bidireccional: el texto y las imágenes aparecen bajando y desaparecen subiendo).
- **`ChapterShell.jsx`** — chrome compartido (kicker + título) para cada capítulo.

## 3. Lo que sigue sin tocar (contenido viejo, todavía renderizado debajo)

- **`About.jsx`** — bio, se solapa temáticamente con el nuevo Capítulo 01 (contenido duplicado).
- **`Skills.jsx`** — grilla estática de stack (corresponde al futuro Capítulo 04 STACK, no migrado).
- **`Projects.jsx`** — lista de 6 proyectos reales (corresponde al futuro Capítulo 05 SELECTED WORK, no migrado).
- **`Contact.jsx`** — formulario + email + WhatsApp (corresponde al futuro Capítulo 08 LET'S BUILD, no migrado). El formulario de EmailJS sigue con placeholders (`YOUR_SERVICE_ID`, etc.) — **no envía correos todavía**.
- **`Footer.jsx`** — sin cambios salvo el link de WhatsApp agregado.
- **`Nav.jsx`** — navbar clásico horizontal sin tocar; sus links apuntan a IDs viejos (`#about`, `#stack`, `#work`, `#contact`) que todavía existen, así que no rompe nada, pero no refleja los capítulos nuevos (`#origin`, `#transition`).

## 4. Git / respaldo ⚠️

- El repo se inicializó en esta sesión (antes no era un repositorio git).
- Existe **un solo commit base** (`162a145`) que captura el estado previo al rediseño — es el punto de retorno seguro.
- Todo lo construido después (Capítulos 01/02, sistema `StickyScene`, hooks, reposición del Hero, WhatsApp, assets de imagen) está **sin commitear**, como cambios sueltos en el árbol de trabajo, en la rama `redesign/built-in-layers`.
- **Riesgo real**: si algo le pasa al directorio de trabajo ahora mismo, todo el trabajo de esta sesión no es recuperable vía git.
- **Recomendación**: hacer un commit de checkpoint ahora. Espero tu confirmación antes de tratarlo como oficial, según tu propia regla.

## 5. Contenido ya verificado como real (no inventado)

- ~10 años en diseño gráfico publicitario (categorías de `printCraft`) — de tus propias palabras en el chat.
- 5 piezas de branding (Luxuure, Tickets Coffee, Cantaro Beer, Jarabe Mixteco, Ripants) — extraídas directamente de tu PDF (`avii sleep portafolio 2020.pdf`, 131 páginas, hecho en Illustrator en 2020).
- Contacto: `aviisleep@gmail.com`, WhatsApp `3159212000`, GitHub `github.com/aviisleep` — confirmados por vos directamente.
- 6 proyectos reales en `data/projects.js` (Facturación SaaS, MotoAI, Rekcits, Automotive Workshop ERP, GamaSYR, FixPoint) — ya existían antes de esta sesión, cruzados contra tu GitHub real (el link de Automotive Workshop se corrigió tras descubrir que el repo se renombró desde `Inventario-Gama`).

## 6. Auditoría de GitHub (ya hecha antes en esta sesión)

Repos públicos, no-fork, en `github.com/aviisleep` (28 en total, ~15 son forks de bootcamps/cursos, excluidos):

| Repo | Estado actual en el portafolio |
|---|---|
| `ridestats` | Más actualizado de todos (2026-07-12) — **no está en el portafolio, sin resolver** |
| `Automotive_Workshop_ERP` | Enlazado |
| `gamasyr` | Enlazado |
| `Websiteprototypeforfixpoint` | Enlazado como FixPoint |
| `rekcits`, `rekcits-frontend`, `rekcits-backend` | Solo el demo está enlazado, no estos repos |
| `hubdelivery10x` | "landing page" de delivery, temática afín — no está en el portafolio |
| `almacen`, `dashboardnew`, `proyectphpmysql`, `portafolio`, `Trabajo-Final-Bootcamp`, `OpenBootcamp_htmlcss`, `g5figma`, `first-proyect-ruby`, `clima_api`, `M2henry`, `FT-M1-masterhenry`, `circleinfinit` | Práctica/bootcamp, probablemente no aportan al portafolio — tu decisión |

## 7. Investigación externa ya completada (Fase 3)

- **izanami-official.com**: mecánica de "ventanas" con `position: sticky` (sin librería de scroll-jacking, solo Lenis para suavizar); menú overlay de pantalla completa (no navbar persistente) con revelado escalonado de links; `/projects/` usa `<canvas>` WebGL con transición de imágenes por shader (no un crossfade plano).
- **lamalama.com**: tipografía grande y en negrita (H1 66px+) como recurso visual principal, poco texto por sección.
- **glitchandgrit.com**: stack GSAP + ScrollTrigger + SplitType + Lenis + Barba.js; efecto "glitch" en el logo disparado por hover.
