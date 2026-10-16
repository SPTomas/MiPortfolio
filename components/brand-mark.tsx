export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 3 58 18v28L32 61 6 46V18L32 3Z" stroke="currentColor" strokeWidth="1.5" opacity=".35" />
      <path d="M13 20h23l-4 8h-7v17l-8-4V28h-4v-8Z" fill="currentColor" />
      <path d="M49 20H39l-7 7v7l10 5v3H31l-4 7h16l7-7v-8l-10-5v-2h7l2-7Z" fill="currentColor" />
      <path d="m48 11 7 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
