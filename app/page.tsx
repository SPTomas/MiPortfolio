import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider, T } from "@/components/language-provider"

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-24 focus:left-6 focus:z-50 focus:rounded focus:bg-primary focus:p-3 focus:text-primary-foreground"><T>Saltar al contenido</T></a>
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
