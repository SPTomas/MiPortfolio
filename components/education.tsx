import { Calendar, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { T } from "@/components/language-provider"

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
    <section id="education" className="section-space">
      <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <SectionHeading number="03" label="FORMACIÓN" title="Curiosidad constante." />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground"><T>Una base académica sólida y la motivación de seguir aprendiendo, proyecto a proyecto.</T></p>
          <div className="mt-8 inline-flex items-center gap-3 text-xs text-primary"><T>Universidad Tecnológica Nacional</T> <ArrowUpRight size={16} /></div>
        </Reveal>

        <div className="pl-2">
          <div>
            {education.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <article className="education-card">
                  <div className="flex flex-col-reverse items-start justify-between gap-4 mb-3 sm:flex-row">
                    <h3 className="text-lg font-medium text-foreground"><T>{item.degree}</T></h3>
                    <span
                      className={`shrink-0 text-xs font-mono px-2 py-1 rounded ${
                        item.status === "Completado"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <T>{item.status}</T>
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-2"><T>{item.institution}</T></p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mb-3">
                    <Calendar size={14} />
                    <T>{item.period}</T>
                  </p>
                  <p className="text-muted-foreground text-sm"><T>{item.description}</T></p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
