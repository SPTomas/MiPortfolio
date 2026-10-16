import { T } from "@/components/language-provider"

type SectionHeadingProps = { number: string; label: string; title: string; description?: string }

export function SectionHeading({ number, label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow mb-5"><span className="text-muted-foreground">{number} /</span> <T>{label}</T></p>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="section-title"><T>{title}</T></h2>
        {description && <p className="max-w-sm text-sm leading-relaxed text-muted-foreground"><T>{description}</T></p>}
      </div>
    </div>
  )
}
