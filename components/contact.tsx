"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

// 1. Crea un formulario gratis en https://formspree.io
// 2. Reemplaza "tu-id" por el ID de tu formulario (ej: "xanbqrwl").
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoajbnd"

type Status = "idle" | "submitting" | "success" | "error"

export function Contact() {
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
    <section id="contact" className="relative py-20 bg-card/50 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Contacto</h2>
            <p className="text-muted-foreground mb-8">
              ¿Interesado en trabajar juntos? Escribime y te respondo a la brevedad.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 transition-colors hover:border-primary/40">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center animate-fade-in-up">
                  <CheckCircle2 size={48} className="text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nombre
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
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
                        required
                        placeholder="tu@email.com"
                        className="rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Asunto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="¿De qué querés hablar?"
                      className="rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Contame sobre tu proyecto..."
                      className="resize-none rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {status === "error" && (
                    <p className="flex items-center gap-2 text-sm text-destructive">
                      <AlertCircle size={16} />
                      Ocurrió un error al enviar. Intentá de nuevo o escribime por email.
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
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
                        Enviar mensaje
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
                  aria-label="Enviar email"
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
