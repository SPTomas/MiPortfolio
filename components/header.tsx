"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { BrandMark } from "@/components/brand-mark"

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Stack" },
  { href: "#education", label: "Formación" },
]

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState("#about")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(`#${entry.target.id}`) })
    }, { rootMargin: "-20% 0px -55% 0px", threshold: 0 })
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section))
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setIsMenuOpen(false) }
    window.addEventListener("keydown", onEscape)
    return () => { observer.disconnect(); window.removeEventListener("keydown", onEscape) }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-5">
        <a href="#about" aria-label={t("Tomás Suarez Paez, inicio")} className="brand-lockup" onClick={() => setIsMenuOpen(false)}><BrandMark className="brand-symbol" /><span className="hidden lg:block"><strong>TOMÁS SUAREZ PAEZ</strong><span>{t("Desarrollador full-stack")}</span></span></a>
        <nav aria-label={t("Navegación principal")} className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined} className={`nav-link ${active === link.href ? "is-active" : ""}`}>{t(link.label)}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <div role="group" aria-label={language === "es" ? "Idioma" : "Language"} className="flex rounded-full border border-border p-1">
            {(["es", "en"] as const).map((locale) => <button key={locale} type="button" lang={locale} aria-label={locale === "es" ? "Ver en español" : "View in English"} aria-pressed={language === locale} onClick={() => setLanguage(locale)} className={`rounded-full px-3 py-2 text-[11px] font-medium transition-colors ${language === locale ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{locale.toUpperCase()}</button>)}
          </div>
          <a href="#contact" className="hidden items-center gap-3 rounded-full border border-border px-4 py-2.5 text-xs transition-colors hover:border-primary hover:text-primary md:flex">{t("Hablemos")} <ArrowUpRight size={15} /></a>
          <button className="rounded-lg p-3 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={t(isMenuOpen ? "Cerrar menú" : "Abrir menú")}>{isMenuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </div>
      {isMenuOpen && <nav id="mobile-navigation" aria-label={t("Navegación móvil")} className="border-t border-border bg-background px-6 py-5 md:hidden">{[...navLinks, { href: "#contact", label: "Hablemos ↗" }].map((link) => <a key={link.href} href={link.href} className="block py-3 text-sm text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t(link.label)}</a>)}</nav>}
    </header>
  )
}
