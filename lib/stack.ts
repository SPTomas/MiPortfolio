export const primaryStack = [
  { id: "angular", name: "Angular", role: "Experiencia", label: "01 / FRONTEND", description: "Interfaces con intención. Componentes organizados para construir experiencias claras y consistentes.", code: "UI", color: "#ff987f" },
  { id: "spring", name: "Spring Boot", role: "Lógica", label: "02 / BACKEND", description: "La lógica detrás del producto. Servicios y reglas de negocio que conectan cada parte del sistema.", code: "API", color: "#c3f36b" },
  { id: "postgres", name: "PostgreSQL", role: "Estructura", label: "03 / DATABASE", description: "Una base sólida. Datos relacionados y organizados para sostener cada funcionalidad.", code: "SQL", color: "#8cd7e9" },
] as const

export type StackId = (typeof primaryStack)[number]["id"]
