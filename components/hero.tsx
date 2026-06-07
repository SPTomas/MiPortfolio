import { Mail, ArrowDown, Download } from "lucide-react"

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float-slow-reverse" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in-up [animation-delay:0ms]">
            Mi portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up [animation-delay:120ms] leading-tight">
            <span className="text-shimmer">Suarez Paez, Tomás</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty animate-fade-in-up [animation-delay:240ms]">
            Analista Desarrollador Universitario en Sistemas de Información egresado de la{" "}
            <span className="text-foreground font-medium">UTN FRC</span>, estudiando actualmente
            Ingeniería en Sistemas. Experiencia práctica en desarrollo full-stack mediante proyecto
            de tesis (Analista) con tecnologías modernas, metodología{" "}
            <span className="text-foreground font-medium">Scrum</span> e inglés{" "}
            <span className="text-primary font-medium">B2</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-in-up [animation-delay:360ms]">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail size={18} className="transition-transform group-hover:scale-110" />
              Contactar
            </a>
            <a
              href="/CV_Tomas_Suarez.pdf"
              download
              className="group inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
            >
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
              Descargar CV
            </a>
            <a
              href="https://www.linkedin.com/in/tomas-ticiano-suarez-paez-22b5582b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Ir a proyectos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce-subtle"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
