"use client"

import { useRef, useState } from "react"
import type { CSSProperties, PointerEvent } from "react"
import { ArrowUpRight, MousePointer2 } from "lucide-react"
import { T, useLanguage } from "@/components/language-provider"
import { BrandMark } from "@/components/brand-mark"
import { StackIcon } from "@/components/stack-icon"
import { primaryStack } from "@/lib/stack"

export function StackVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const { t } = useLanguage()
  const selected = active === null ? null : primaryStack[active]

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    ref.current?.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - .5) * -8}deg`)
    ref.current?.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - .5) * 10}deg`)
  }

  function reset() {
    ref.current?.style.setProperty("--tilt-x", "0deg")
    ref.current?.style.setProperty("--tilt-y", "0deg")
  }

  return (
    <div ref={ref} className="architecture" style={{ "--node-color": selected?.color ?? "var(--primary)" } as CSSProperties} onPointerMove={move} onPointerLeave={reset}>
      <div className="architecture-label"><span className="status-dot" /><T>UN STACK. TODO CONECTADO.</T><span>SYS / 01</span></div>
      <div className="architecture-stage">
        <div className="architecture-grid" aria-hidden="true" />
        <div className="architecture-scene">
          <div className="reactor-orbit orbit-outer" aria-hidden="true" /><div className="reactor-orbit orbit-inner" aria-hidden="true" />
          <svg className="architecture-paths" viewBox="0 0 500 460" fill="none" aria-hidden="true"><path className="connection-track" d="M115 95 250 225 380 210M250 225 130 355" /><path className="connection-pulse" d="M115 95 250 225 380 210M250 225 130 355" /></svg>
          <div className="reactor-core" aria-hidden="true"><div className="reactor-back" /><div className="reactor-face"><BrandMark /><span>TS / FULL-STACK</span></div></div>
          {primaryStack.map((tech, index) => (
            <button key={tech.id} type="button" className={`architecture-node node-${tech.id} ${active === index ? "node-active" : ""}`} style={{ "--tech-color": tech.color } as CSSProperties} onClick={() => setActive(current => current === index ? null : index)} aria-pressed={active === index} aria-controls="architecture-detail" aria-label={`${t("Explorar")} ${tech.name}`}>
              <span className="node-topline">{tech.label}<ArrowUpRight size={12} /></span>
              <span className="node-main"><span className="node-icon"><StackIcon id={tech.id} size={27} /></span><strong>{tech.name}</strong></span>
              <span className="node-bottom"><span className="node-indicator" />{t(tech.role)}<span>{tech.code}</span></span>
            </button>
          ))}
          <span className="architecture-coordinate coordinate-left" aria-hidden="true">+ 32.00 / 64.00</span><span className="architecture-coordinate coordinate-right" aria-hidden="true">END-TO-END ↗</span>
        </div>
      </div>
      <div id="architecture-detail" className="architecture-detail" aria-live="polite" aria-atomic="true"><div>{selected && active !== null ? <><span className="detail-index">0{active + 1}</span><p><strong>{selected.name}</strong><span>{t(selected.description)}</span></p></> : <p><span><T>Elegí una tecnología y explorá la conexión.</T></span></p>}</div><MousePointer2 size={15} aria-hidden="true" /></div>
      <p className="architecture-hint"><T>Elegí una tecnología y explorá la conexión.</T></p>
    </div>
  )
}
