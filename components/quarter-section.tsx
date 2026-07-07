'use client'

import type { Quarter } from '@/lib/plan-data'
import { TaskCard } from '@/components/task-card'

type QuarterSectionProps = {
  quarter: Quarter
  done: Set<string>
  onToggle: (id: string) => void
}

export function QuarterSection({ quarter, done, onToggle }: QuarterSectionProps) {
  const completed = quarter.tasks.filter((t) => done.has(t.id)).length

  return (
    <section aria-labelledby={`heading-${quarter.id}`} className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-3">
            <span className="rounded-md bg-primary px-2.5 py-1 font-mono text-sm font-semibold text-primary-foreground">
              {quarter.label}
            </span>
            <h3 id={`heading-${quarter.id}`} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {quarter.period}
            </h3>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {completed}/{quarter.tasks.length} done
          </span>
        </div>
        <p className="text-sm font-medium text-foreground text-pretty">{quarter.theme}</p>
      </header>

      <ul className="flex flex-col gap-3">
        {quarter.tasks.map((task) => (
          <TaskCard key={task.id} task={task} done={done.has(task.id)} onToggle={onToggle} />
        ))}
      </ul>
    </section>
  )
}
