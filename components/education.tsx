import { GraduationCap, Calendar } from "lucide-react"
import { Reveal } from "@/components/reveal"

const education = [
  {
    degree: "Ingeniería en Sistemas de Información",
    institution: "UTN – Facultad Regional Córdoba",
    period: "Marzo 2023 – En curso",
    status: "En curso",
    description: "Formación continua en ingeniería de software, desarrollo de sistemas y gestión de proyectos tecnológicos.",
  },
  {
    degree: "Analista Desarrollador Universitario en Sistemas de Información",
    institution: "UTN – Facultad Regional Córdoba",
    period: "Marzo 2023 – Marzo 2026",
    status: "Completado",
    description: "Título universitario con enfoque en análisis, diseño y desarrollo de sistemas de información. Proyecto final desarrollado con metodología Scrum y tecnologías modernas.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={24} />
            Formación Académica
          </h3>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {education.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <article className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-lg font-medium text-foreground">{item.degree}</h4>
                    <span
                      className={`shrink-0 text-xs font-mono px-2 py-1 rounded ${
                        item.status === "Completado"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-2">{item.institution}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mb-3">
                    <Calendar size={14} />
                    {item.period}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
