"use client"

import { ArrowUpRight, ArrowUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { BrandMark } from "@/components/brand-mark"

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="portfolio-footer border-t border-border py-8">
      <div className="page-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4"><a href="#about" aria-label={t("Volver al inicio")} className="text-primary"><BrandMark className="h-12 w-12" /></a><p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Tomás Suarez Paez<br /><span className="mt-1 block text-[10px]">{t("Construido con Next.js, React y atención al detalle.")}</span></p></div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground"><a className="flex items-center gap-1 hover:text-primary" href="https://www.linkedin.com/in/tomas-ticiano-suarez-paez-22b5582b7/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="#about" className="flex items-center gap-2 hover:text-primary">{t("Volver arriba")} <ArrowUp size={15} /></a></div>
      </div>
    </footer>
  )
}
