"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { english } from "@/lib/translations"

type Language = "es" | "en"
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (text: string) => string }
const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, updateLanguage] = useState<Language>("es")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-language")
      if (saved === "en" || saved === "es") updateLanguage(saved)
    } catch { /* The selector still works when browser storage is unavailable. */ }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === "es" ? "Tomás Suarez Paez | Desarrollador Full-Stack" : "Tomás Suarez Paez | Full-Stack Developer"
  }, [language])

  function setLanguage(value: Language) {
    updateLanguage(value)
    try { localStorage.setItem("portfolio-language", value) } catch { /* Keep the in-memory preference. */ }
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t: (text) => language === "en" ? english[text] ?? text : text }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage requires LanguageProvider")
  return context
}

export function T({ children }: { children: string }) {
  const { t } = useLanguage()
  return <>{t(children)}</>
}
