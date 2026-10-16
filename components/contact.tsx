"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/components/language-provider"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoajbnd"

type Status = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("submitting")

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative section-space bg-card/40 border-t border-border overflow-hidden">
      <div
        className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div className="page-shell relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-7"><span className="text-muted-foreground">04 /</span> {t("CONSTRUYAMOS ALGO")}</p>
            <h2 className="text-5xl md:text-6xl font-medium tracking-[-0.06em] leading-[1.08] mb-6">{t("Tu próxima idea.")}<br /><span className="text-primary">{t("Nuestro próximo")}<br />{t("proyecto.")}</span></h2>
            <p className="text-sm leading-relaxed max-w-sm text-muted-foreground mb-8">
              {t("¿Tenés un proyecto en mente o una oportunidad para compartir? Me encantaría conocerla. Escribime y conversemos.")}
            </p>
            <a href="mailto:sptomastici2@gmail.com" className="inline-flex items-center gap-3 border-b border-primary/40 pb-2 text-sm hover:text-primary">sptomastici2@gmail.com <ArrowUpRight size={17} /></a>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"><span className="flex items-center gap-2"><MapPin size={14} /> Córdoba, Argentina</span><a className="inline-flex items-center gap-1 hover:text-primary" href="https://www.linkedin.com/in/tomas-ticiano-suarez-paez-22b5582b7/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 transition-colors hover:border-primary/40">
              {status === "success" ? (
                <div role="status" className="flex flex-col items-center gap-4 py-8 text-center animate-fade-in-up">
                  <CheckCircle2 size={48} className="text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{t("¡Mensaje enviado!")}</h3>
                  <p className="text-muted-foreground">
                    {t("Gracias por contactarme. Te responderé lo antes posible.")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    {t("Enviar otro mensaje")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        {t("Nombre")}
                      </label>
                      <input
                        id="name"
                        name="name"
                         type="text"
                         autoComplete="name"
                        required
                        placeholder={t("Tu nombre")}
                        className="rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                         type="email"
                         autoComplete="email"
                        required
                        placeholder={t("tu@email.com")}
                        className="rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      {t("Asunto")}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder={t("¿De qué querés hablar?")}
                      className="rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      {t("Mensaje")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t("Contame sobre tu proyecto...")}
                      className="resize-none rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
                      <AlertCircle size={16} />
                      {t("Ocurrió un error al enviar. Intentá de nuevo o escribime por email.")}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        {t("Enviando...")}
                      </>
                    ) : (
                      <>
                        <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
                        {t("Enviar mensaje")}
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Direct contact info */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>Córdoba, Argentina</span>
                </div>
                <a
                  href="mailto:sptomastici2@gmail.com"
                  className="text-muted-foreground transition-all hover:text-primary hover:-translate-y-0.5"
                  aria-label={t("Enviar email")}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
