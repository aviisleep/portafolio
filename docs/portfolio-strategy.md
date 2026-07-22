# Portfolio Strategy — v2 (post-contexto completo)

Este documento reconcilia el mapa de 8 capítulos que ya empezamos a construir con el mapa de 10 escenas que propusiste en el contexto completo. No es una decisión final — es la propuesta que espera tu aprobación.

## 1. Mapa narrativo reconciliado

Tu propuesta de 10 escenas se solapa mucho con lo que ya veníamos construyendo. En vez de tener dos sistemas, los fusiono en uno:

| # | Nombre | Equivale a tu escena | Estado | Contenido real |
|---|---|---|---|---|
| — | **Hero** | 01 CREAR | ✅ construido | Declaración de identidad, banner 3D a un lado |
| 01 | **ORIGIN** | 02 DISEÑO | ✅ construido | Trasfondo en diseño/impresión + piezas del PDF |
| 02 | **THE TRANSITION** | 03 TRANSFORMACIÓN | ✅ construido | Morph DESIGN→HTML→CSS→JS→REACT |
| 03 | **CODE** | 04 TECNOLOGÍA | Pendiente | Capas UI→Lógica→API→Datos, con tu stack real |
| 04 | **STACK** | (parte de 04/05) | Pendiente | Categorías de `Skills.jsx`, clasificadas por nivel real (ver sección 3) |
| 05 | **SELECTED WORK** | 06 RESOLVER + parte de 05 CONSTRUIR | Pendiente | Casos de estudio reales (ver sección 2) |
| 06 | **THE LAB** | 07 EXPLORAR | Pendiente — **ahora sí tengo contenido** | Legends Online (Godot 4.5, MMORPG 2D estilo Tibia) |
| 07 | **GITHUB** | 08 GITHUB | Nuevo, no estaba en el plan original de 8 | Evidencia técnica, no una lista de repos |
| 08 | **NOW** | 09 PRESENTE | Pendiente — necesito tus palabras | En qué estás enfocado hoy |
| 09 | **LET'S BUILD** | 10 FUTURO + cierre | Pendiente | Contacto + hacia dónde vas |

Diferencia clave con tu hipótesis: separé **STACK** de **SELECTED WORK** (vos los tenías más mezclados en las escenas 04-05) porque técnicamente necesitan mecánicas de scroll distintas — uno es exploración de tecnologías, el otro son casos de estudio con narrativa propia. Y agregué **GITHUB** como capítulo propio porque lo pediste explícitamente en la escena 08 y no tenía dónde vivir en el plan de 8.

## 2. Clasificación de proyectos para "SELECTED WORK"

Con el contexto nuevo, no todos los proyectos pesan igual. Propongo:

**Flagship (casos de estudio completos, Problema→Enfoque→Arquitectura→Resultado):**
- **RideStats** — no está en el portafolio actual y es tu repo más reciente. Nace de tu propia experiencia repartiendo (Rappi/DiDi/InDrive/Uber), tiene arquitectura real (Clean Architecture, Hilt, Room, StateFlow, Compose). Es el ejemplo más fuerte de "vivo el problema → lo resuelvo".
- **Rekcits** — no es "solo e-commerce", es diseño + producción física + marca + desarrollo + venta real. Conecta directo con el Capítulo 01 (tu trasfondo de impresión/vinilos/resina). Es el proyecto que mejor demuestra tu tesis central (diseño + tecnología + producto).

**Secundarios (formato más corto, sin el desarrollo completo de caso):**
- Facturación SaaS, Automotive Workshop ERP (reframeado como "proceso manual → digitalización → automatización"), GamaSYR, FixPoint.
- MotoAI se queda como está.

**Lab (Capítulo 06, no como caso de estudio):**
- **Legends Online** — vos mismo decís que no debería ocupar el mismo nivel que RideStats. Coincido: va en el Lab como proyecto experimental/creativo, no como caso de negocio.

**Todavía no listo para mostrar:**
- Automatización / n8n — vos mismo lo marcás como "debe analizarse y documentarse mejor". Lo dejo fuera por ahora, no le invento un caso de estudio.

## 3. ⚠️ Inconsistencia que encontré en el stack

Tu lista de tecnologías incluye **NestJS, TypeORM, Redux Toolkit, React Query, Axios, AWS S3, Cloudinary, React Router** — pero ninguno de estos aparece en los proyectos reales que ya documentamos (`data/projects.js`). Los stacks reales que sí veo son: Kotlin/Jetpack Compose/Next.js/Supabase/PostgreSQL, Vosk/Gemini, Next.js/Supabase/Tailwind/Three.js, React/Node/Express/MongoDB, React/Tailwind/Vite, Figma/React.

Según tu propia regla ("no domino automáticamente lo que solo probé"), no puedo mostrar esas 8 tecnologías como "dominio" sin evidencia de un proyecto real. Necesito que me digas: ¿las usaste en algo que no está documentado todavía, o son tecnologías que conocés/estás aprendiendo pero no has aplicado en un proyecto real?

## 4. Estructura final, vista desde dos ángulos

Doble objetivo declarado: conseguir empleo Y atraer clientes freelance. Son audiencias distintas pero necesitan la misma prueba: que sabés construir, no solo que conocés tecnologías. La tensión real es que un reclutador evalúa en segundos, mientras que la experiencia cinematográfica que queremos pide minutos. Por eso cada sección abajo tiene que funcionar en los dos modos: como parte de la historia completa, y como algo que se entiende de un vistazo si alguien salta directo ahí con el menú.

| Sección | Qué le dice a un reclutador | Qué le dice a un cliente freelance |
|---|---|---|
| **Hero** | Rol claro en el primer segundo (no esconder "Full Stack Developer" detrás de solo estética) | "Esta persona construye cosas reales" — tono de producto, no de CV |
| **01 ORIGIN** | Diferencial real: no es "otro dev de bootcamp", viene de producción real | Sensibilidad visual comprobada — importa si le vas a confiar tu marca |
| **02 TRANSITION** | Curva de aprendizaje genuina, no una lista de cursos | Refuerza que entiende diseño Y código, no solo uno de los dos |
| **03 CODE** | Piensa en sistemas (UI→Lógica→API→Datos), no solo en componentes sueltos | Va a entender la arquitectura completa de tu proyecto, no solo el frontend |
| **04 STACK** | Honestidad de nivel — un reclutador técnico detecta al toque si estás inflando | Transparencia = confianza; no promete lo que no puede cumplir |
| **05 SELECTED WORK** (RideStats + Rekcits como flagship) | Evidencia de arquitectura real y de resolver problemas de punta a punta | Casos con Problema→Enfoque→Resultado — literalmente el formato que un cliente necesita para decidir |
| **06 LAB** | Curiosidad más allá del trabajo pago (señal fuerte para equipos técnicos) | Muestra que no solo ejecuta pedidos, también crea por iniciativa propia |
| **07 GITHUB** | Verificación — el reclutador SIEMPRE cruza esto, mejor dárselo curado | Prueba de que el código existe y es real, no solo marketing |
| **08 NOW** | En qué estás disponible/enfocado hoy — filtra fit de rol rápido | Señal de disponibilidad real para tomar proyectos |
| **09 LET'S BUILD** | CTA dual explícito (ver abajo) | CTA dual explícito (ver abajo) |

**Salida rápida:** el menú overlay que ya armamos permite saltar directo a STACK o SELECTED WORK sin recorrer toda la narrativa — eso cubre al reclutador apurado sin sacrificar la experiencia cinematográfica para quien sí quiere recorrerla completa.

**CTA final dual (09 LET'S BUILD):** en vez de un mensaje genérico, algo tipo *"¿Buscás sumar a alguien a tu equipo, o tenés un producto que construir? Hablemos."* — cubre ambos objetivos sin sonar indeciso.

## 5. Pendiente antes de tocar código

- ~~Confirmar si `ridestats` y `hubdelivery10x` van al capítulo GITHUB~~ — **Resuelto (2026-07-22)**: `ridestats` es real, en construcción, ya agregado a `data/projects.js` como flagship. `hubdelivery10x` es real ("una de las primeras páginas tipo freelance que hice") — va al capítulo GITHUB cuando lo construyamos, no como caso de estudio completo.
- ~~Resolver la inconsistencia de stack de la sección 3~~ — **Resuelto**: NestJS, TypeORM, Redux Toolkit, React Query, Axios, AWS S3, Cloudinary y React Router son tecnologías practicadas sin proyecto real detrás. Nunca llegaron a estar en `data/projects.js: skills`, así que quedan fuera del capítulo STACK.
- Frase para el capítulo NOW.
- Decisión final sobre el tagline/filosofía (sección 16 del contexto completo).
