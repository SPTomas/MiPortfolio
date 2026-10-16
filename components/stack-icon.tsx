import { Database, Leaf } from "lucide-react"
import type { StackId } from "@/lib/stack"

export function StackIcon({ id, size = 24 }: { id: StackId; size?: number }) {
  if (id === "spring") return <Leaf size={size} strokeWidth={1.5} aria-hidden="true" />
  if (id === "postgres") return <Database size={size} strokeWidth={1.5} aria-hidden="true" />
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="m16 2 13 5-2 18-11 6L5 25 3 7 16 2Z" stroke="currentColor" strokeWidth="1.5" /><path d="m9 23 7-15 7 15M12 18h8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
}
