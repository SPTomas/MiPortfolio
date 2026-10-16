import { ArrowDown, ArrowUpRight, Download, BriefcaseBusiness, GraduationCap, Globe2 } from "lucide-react"
import { StackVisual } from "@/components/stack-visual"
import { StackIcon } from "@/components/stack-icon"
import { primaryStack } from "@/lib/stack"
import { T } from "@/components/language-provider"

export function Hero() {
  return (
    <section id="about" className="hero-section relative overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-watermark" aria-hidden="true">BUILD.</div>
      <div className="page-shell relative">
        <div className="hero-topline animate-fade-in-up"><span className="eyebrow"><span className="status-dot" /><T>DESARROLLADOR FULL-STACK</T></span><span className="font-mono text-[10px] tracking-wider text-muted-foreground">CÓRDOBA, ARGENTINA ↗</span></div>
        <div className="hero-composition">
          <div className="relative z-10">
            <p className="mb-6 text-sm text-muted-foreground animate-fade-in-up"><T>Hola, soy</T> <span className="text-foreground">Tomás Suarez Paez.</span></p>
            <h1 className="hero-title animate-fade-in-up [animation-delay:100ms]"><T>De la idea.</T><br /><span className="hero-title-accent"><T>A lo real.</T><svg viewBox="0 0 350 18" fill="none" aria-hidden="true"><path d="M3 13C80 1 230 0 345 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span></h1>
            <p className="hero-statement animate-fade-in-up [animation-delay:180ms]"><T>Diseño la lógica.</T> <span><T>Construyo la experiencia.</T></span></p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground animate-fade-in-up [animation-delay:220ms]"><T>Desarrollo soluciones web con Angular, Spring Boot y PostgreSQL. Del primer componente a la última consulta, cada pieza tiene un propósito.</T></p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up [animation-delay:300ms]"><a href="#projects" className="button-primary"><T>Explorar proyectos</T><ArrowUpRight size={18} /></a><a href="/CV_Tomas_Suarez.pdf" download className="button-secondary"><T>Descargar CV</T><Download size={17} /></a></div>
            <div className="hero-stack"><span><T>MI STACK PRINCIPAL</T></span><div>{primaryStack.map((tech) => <span key={tech.id}><StackIcon id={tech.id} size={16} />{tech.name}</span>)}</div></div>
          </div>
          <StackVisual />
        </div>
        <div className="profile-strip">
          <div><BriefcaseBusiness size={19} /><p><strong><T>Una nueva etapa profesional.</T></strong><span><T>Recientemente empecé a trabajar, sumando experiencia laboral a mi formación y a mis proyectos.</T></span></p></div>
          <div><GraduationCap size={21} /><p><strong>UTN · FRC</strong><span><T>Analista universitario. Estudiante de Ingeniería en Sistemas.</T></span></p></div>
          <div><Globe2 size={19} /><p><strong><T>Inglés B2 · Español nativo</T></strong><span><T>Ideas claras. Comunicación también.</T></span></p></div>
          <a href="#projects" className="hero-scroll"><span className="sr-only"><T>Explorar proyectos</T></span><ArrowDown size={21} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
