import { WEEKLY_RHYTHM } from '@/lib/plan-data'

export function WeeklyRhythm() {
  return (
    <section aria-labelledby="weekly-rhythm-heading" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2
          id="weekly-rhythm-heading"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          Your weekly rhythm (3&ndash;5 hrs)
        </h2>
        <p className="text-sm text-muted-foreground text-pretty">
          Split your week into three short sessions. Consistency beats intensity.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {WEEKLY_RHYTHM.map((slot) => (
          <div key={slot.focus} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-sm font-semibold text-card-foreground">{slot.focus}</p>
              <span className="font-mono text-xs text-accent-foreground">{slot.duration}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{slot.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
