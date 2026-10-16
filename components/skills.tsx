import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { T } from "@/components/language-provider"
import { primaryStack } from "@/lib/stack"
import { StackIcon } from "@/components/stack-icon"
import { PanelsTopLeft, Braces, Database, Workflow, Library, Wrench, ArrowUpRight } from "lucide-react"

const skillCategories = [
  { title: "Frontend", icon: PanelsTopLeft, description: "Interfaces claras, responsivas y pensadas para las personas.", skills: ["Angular", "React", "Astro", "Tailwind CSS"] },
  { title: "Backend", icon: Braces, description: "La lógica que conecta cada interacción con una solución.", skills: ["Spring Boot", "Django", "Node.js"] },
  { title: "Datos & plataformas", icon: Database, description: "Persistencia y organización de la información.", skills: ["PostgreSQL", "Oracle SQL", "Supabase", "Neon"] },
  { title: "Librerías & integraciones", icon: Library, description: "Piezas especializadas para resolver necesidades concretas.", skills: ["Prisma ORM", "FullCalendar", "Leaflet", "NodeMailer"] },
  { title: "Herramientas & testing", icon: Wrench, description: "Control de versiones y pruebas de carga y estrés con Locust.", skills: ["Git", "Locust", "Load testing", "Stress testing"] },
  { title: "Gestión de proyectos", icon: Workflow, description: "Una mirada integral: organizar el trabajo, priorizar y comunicar con claridad.", skills: ["Scrum", "Metodologías ágiles", "Planificación", "Priorización de tareas", "Documentación técnica"] },
]

export function Skills() {
  return (
    <section id="skills" className="section-space bg-card/40 border-y border-border">
      <div className="page-shell">
        <Reveal><SectionHeading number="02" label="TECNOLOGÍAS & FORMA DE TRABAJAR" title="Más que escribir código." description="Desarrollo, herramientas y organización: una mirada completa para llevar una idea a la práctica." /></Reveal>
        <Reveal><div className="stack-foundation"><div><span className="eyebrow"><T>MI STACK PRINCIPAL</T></span><p><T>Tres tecnologías. Una visión completa.</T></p></div><div className="foundation-technologies">{primaryStack.map((tech) => <div key={tech.id}><StackIcon id={tech.id} size={28} /><span><strong>{tech.name}</strong><small><T>{tech.role}</T></small></span></div>)}</div></div></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, description, skills }, index) => (
            <Reveal key={title} delay={index * 70}>
              <div className={`skill-card ${index < 3 ? "skill-card-core" : ""}`}>
                <div className="mb-5 flex items-center justify-between"><Icon size={23} strokeWidth={1.4} className="text-primary" /><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span></div>
                <h3 className="text-base font-medium text-foreground mb-3"><T>{title}</T></h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground"><T>{description}</T></p>
                <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="text-xs px-3 py-1.5 border border-border text-secondary-foreground rounded-md"><T>{skill}</T></span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="management-panel mt-8 grid gap-8 rounded-xl border border-primary/20 p-6 md:p-9 lg:grid-cols-[1fr_1.3fr]">
            <div><p className="eyebrow mb-4"><T>DEL ANÁLISIS A LA ENTREGA</T></p><h3 className="text-2xl font-medium tracking-tight"><T>Código con dirección.</T><br /><span className="text-primary"><T>Trabajo con propósito.</T></span></h3></div>
            <div><p className="text-sm leading-relaxed text-muted-foreground"><T>Mi enfoque combina capacidad técnica con una visión amplia de la gestión de proyectos: entender necesidades, descomponer problemas, definir prioridades y dar seguimiento a los avances. Valoro la comunicación clara, la documentación útil y la coordinación en equipo para convertir objetivos en entregas concretas.</T></p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-foreground"><span><T>Resolución de problemas</T></span><span><T>Aprendizaje autónomo</T></span><span><T>Trabajo en equipo</T></span><span><T>Inglés B2 · Español nativo</T></span></div><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs text-primary hover:underline"><T>Conversemos sobre tu proyecto</T> <ArrowUpRight size={14} /></a></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
