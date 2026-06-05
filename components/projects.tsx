"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    title: "Sistema de Cuidado de Mascotas",
    description:
      "Proyecto final de carrera desarrollado con metodología Scrum. Sistema completo para gestión de cuidado de mascotas con calendario interactivo, mapas y notificaciones.",
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
  const [expanded, setExpanded] = useState(false)
  const detailsId = `project-details-${index}`

  return (
    <Reveal delay={index * 120}>
      <article className="group relative bg-card border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-primary mb-2 block">{project.context}</span>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
          </div>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-muted-foreground transition-all hover:text-primary hover:-translate-y-0.5"
            aria-label="Ver proyecto en vivo"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <p className="text-muted-foreground mt-4">{project.description}</p>

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
              +{project.tags.length - 4} más
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
            <h4 className="text-sm font-medium text-foreground mb-3">Características principales:</h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
        >
          {expanded ? "Ver menos" : "Ver más"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-2">Proyectos</h2>
          <p className="text-muted-foreground mb-12">
            Trabajos destacados que demuestran mis habilidades técnicas
          </p>
        </Reveal>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
