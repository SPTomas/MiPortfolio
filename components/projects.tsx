"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown, PawPrint, CalendarDays, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/components/language-provider"

const projects = [
  {
    title: "Sistema de Cuidado de Mascotas",
    description:
      "Proyecto final de Analista desarrollado con metodología Scrum. Sistema completo para gestión de cuidado de mascotas con calendario interactivo, mapas y notificaciones.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma ORM", "FullCalendar", "Leaflet", "NodeMailer"],
    context: "UTN FRC | Proyecto Final (Analista)",
    live: "https://www.linkedin.com/posts/tomas-ticiano-suarez-paez-22b5582b7_utnfrc-sistemas-fullstack-ugcPost-7435140018190331905-Qw6u/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwT-EMBVpaVUtgL1RRuTZLmUJHZ-tf8R0I",
    features: [
      "Frontend con React y calendario interactivo (FullCalendar)",
      "Integración de mapas con Leaflet",
      "Backend con Node.js y Prisma ORM",
      "Base de datos PostgreSQL en Neon + Supabase",
      "Sistema de notificaciones por correo",
      "Documentación técnica completa",
    ],
  },
  {
    title: "Estudio Iriarte",
    description:
      "Landing page profesional para estudio de servicios, desarrollada con tecnologías modernas y enfoque en rendimiento y experiencia de usuario.",
    tags: ["Astro", "React", "Tailwind CSS", "Formspree"],
    context: "Proyecto Freelance",
    live: "https://estudioiriarte.vercel.app/",
    features: [
      "Sitio estático de alto rendimiento con Astro",
      "Componentes interactivos con React",
      "Diseño responsivo con Tailwind CSS",
      "Formulario de contacto con Formspree",
    ],
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const detailsId = `project-details-${index}`

  return (
    <Reveal delay={index * 120} className="h-full">
      <article className="group relative h-full overflow-hidden bg-card border border-border rounded-xl transition-all duration-300 hover:border-primary/40">
        <div className={`project-visual ${index === 0 ? "project-visual-pets" : "project-visual-studio"}`} aria-hidden="true">
          <span className="project-number">{t("PROYECTO")} / 0{index + 1}</span>
          {index === 0 ? <div className="pet-graphic"><div className="pet-tile"><CalendarDays size={27} /></div><div className="pet-tile pet-tile-main"><PawPrint size={50} strokeWidth={1.3} /></div><div className="pet-tile"><MapPin size={27} /></div></div> : <div className="studio-graphic"><span>{t("ESTUDIO")}</span><strong>Iriarte.</strong><span>{t("PRESENCIA DIGITAL")}</span></div>}
          <span className="project-concept">{t("ILUSTRACIÓN CONCEPTUAL")}</span>
        </div>
        <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-primary mb-2 block">{t(project.context)}</span>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {t(project.title)}
            </h3>
          </div>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-muted-foreground transition-all hover:text-primary hover:-translate-y-0.5"
            aria-label={`${t("Ver")} ${t(project.title)} ${t(index === 0 ? "en LinkedIn" : "en vivo")}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight size={22} />
          </a>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mt-4">{t(project.description)}</p>

        {/* Tags: preview when collapsed, full list when expanded */}
        <div className="flex flex-wrap gap-2 mt-6">
          {(expanded ? project.tags : project.tags.slice(0, 4)).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && !expanded && (
            <span className="text-xs font-mono px-3 py-1 text-muted-foreground">
              +{project.tags.length - 4} {t("más")}
            </span>
          )}
        </div>

        {/* Expandable details */}
        <div
          id={detailsId}
          className={`grid transition-all duration-500 ease-out ${
            expanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <h4 className="text-sm font-medium text-foreground mb-3">{t("Características principales:")}</h4>
            <ul className="grid gap-2">
              {project.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  {t(feature)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {t(expanded ? "Menos detalles" : "Detalles técnicos")}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-primary hover:underline">{t(index === 0 ? "Ver presentación" : "Visitar sitio")}<ArrowUpRight size={15} /></a>
        </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-space border-t border-border">
      <div className="page-shell">
        <Reveal>
          <SectionHeading number="01" label="TRABAJO SELECCIONADO" title="Del concepto al código." description="Proyectos que conectan lo que aprendo con lo que me gusta hacer: construir soluciones útiles." />
        </Reveal>

        <div className="grid items-start gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
