export const projects = [
  {
    id: "facturacion-saas",
    year: "2025",
    status: "En producción",
    title: "Facturación SaaS",
    role: "Producto propio · Android + Web",
    description:
      "SaaS de facturación electrónica para pymes colombianas, con un cliente pagador real. Arquitectura freemium sobre Supabase, optimizada para 1,000+ usuarios concurrentes.",
    stack: ["Kotlin", "Jetpack Compose", "Next.js", "Supabase", "PostgreSQL"],
    highlights: [
      "Reescribí las políticas de Row Level Security y agregué índices de llaves foráneas para eliminar la re-evaluación por fila a escala.",
      "Llevé la app Android a producción en Google Play: builds firmados, deep linking y requisitos de Play Console.",
    ],
    links: { demo: "https://facturacion-web-three.vercel.app/" },
  },
  {
    id: "motoai",
    year: "2025",
    status: "En desarrollo",
    title: "MotoAI",
    role: "Producto propio · Android",
    description:
      "Asistente de voz manos-libres para domiciliarios en moto. Reconocimiento de voz offline con fallback a IA en la nube, pensado para operar bajo casco y con conectividad inestable.",
    stack: ["Kotlin", "Vosk", "Gemini 2.0 Flash Lite", "Android SDK"],
    highlights: [
      "Arquitectura de dos capas: resolución local rápida + fallback a Gemini para comandos complejos.",
      "Foreground service con activación por palabra clave ('copiloto') sobre audio Bluetooth.",
    ],
    links: {},
  },
  {
    id: "rekcits",
    year: "2024",
    status: "En producción",
    title: "Rekcits",
    role: "Producto propio · E-commerce",
    description:
      "Tienda en línea para accesorios de moto y protectores de tanque en resina, con catálogo de 500+ productos y un asistente de ventas con IA.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Three.js"],
    highlights: [
      "Vitrina 3D interactiva del producto con Three.js, en lugar de fotos estáticas.",
      "Asistente de ventas con reglas de precios, lógica de despacho y respuestas en español colombiano.",
    ],
    links: { demo: "https://rekcits-web.vercel.app" },
  },
  {
    id: "automotive-workshop",
    year: "2023",
    status: "Completado",
    title: "Automotive Workshop Management System",
    role: "Proyecto freelance",
    description:
      "Sistema de gestión de inventario y bahías para talleres automotrices: control de entrada/salida de mercancía y despacho.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [],
    links: { github: "https://github.com/aviisleep/Automotive_Workshop_ERP" },
  },
  {
    id: "gamasyr",
    year: "2023",
    status: "Completado",
    title: "GamaSYR",
    role: "Cliente · Sitio corporativo",
    description:
      "Sitio corporativo de alto rendimiento con arquitectura basada en componentes, optimización SEO técnica y diseño responsive.",
    stack: ["React", "Tailwind CSS", "Vite"],
    highlights: [],
    links: { github: "https://github.com/aviisleep/gamasyr" },
  },
  {
    id: "fixpoint",
    year: "2022",
    status: "Completado",
    title: "FixPoint",
    role: "Cliente (EE. UU.) · Prototipado",
    description:
      "Colaboración remota en prototipos y mejoras frontend para una empresa de Estados Unidos: diseño de interfaces y experiencia de usuario en Figma.",
    stack: ["Figma", "React"],
    highlights: [],
    links: { github: "https://github.com/aviisleep/Websiteprototypeforfixpoint" },
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "Supabase"] },
  { group: "Mobile", items: ["Kotlin", "Jetpack Compose", "Android SDK"] },
  { group: "Bases de datos", items: ["PostgreSQL", "MongoDB", "MySQL", "Row Level Security"] },
  { group: "IA / Integraciones", items: ["Gemini API", "Reconocimiento de voz (Vosk)", "Integración de LLM"] },
  { group: "Diseño", items: ["Figma", "Photoshop", "Illustrator", "CorelDraw"] },
];
