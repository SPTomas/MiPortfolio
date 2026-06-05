import { Reveal } from "@/components/reveal"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Astro", "Tailwind CSS", "FullCalendar", "Leaflet"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Prisma ORM", "NodeMailer"],
  },
  {
    title: "Bases de Datos",
    skills: ["PostgreSQL", "Supabase", "Neon"],
  },
  {
    title: "Herramientas & Metodologías",
    skills: ["Git", "Scrum", "Metodologías Ágiles", "Documentación Técnica"],
  },
  {
    title: "Habilidades Blandas",
    skills: [
      "Resolución de problemas",
      "Aprendizaje autónomo",
      "Trabajo en equipo",
      "Comunicación efectiva",
      "Adaptabilidad",
      "Pensamiento crítico",
      "Inglés B2",
    ],
  },
  {
    title: "Idiomas",
    skills: ["Español (Nativo)", "Inglés (B2)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-2">Habilidades</h2>
          <p className="text-muted-foreground mb-12">Tecnologías y competencias que domino</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="h-full bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
