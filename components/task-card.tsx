'use client'

import type { Task } from '@/lib/plan-data'
import { Check, ChevronDown, ChevronRight, ExternalLink, Users } from 'lucide-react'
import { useState } from 'react'

type TaskCardProps = {
  task: Task
  done: boolean
  onToggle: (id: string) => void
}

export function TaskCard({ task, done, onToggle }: TaskCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <li
      className={`rounded-lg border bg-card transition-colors ${
        done ? 'border-primary/40 bg-accent' : 'border-border'
      }`}
    >
      <div className="flex items-start gap-3 p-4 pb-3">
        <button
          type="button"
          role="checkbox"
          aria-checked={done}
          aria-label={done ? `Mark "${task.title}" as not done` : `Mark "${task.title}" as done`}
          onClick={() => onToggle(task.id)}
          className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border transition-colors ${
            done
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-input bg-card hover:border-primary'
          }`}
        >
          {done && <Check className="size-3.5" strokeWidth={3} />}
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h4
              className={`text-sm font-semibold leading-snug text-card-foreground ${
                done ? 'line-through opacity-60' : ''
              }`}
            >
              {task.title}
            </h4>
            {task.expansion && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary-foreground">
                <Users className="size-3" />
                Team growth
              </span>
            )}
          </div>

          <p className={`text-sm leading-relaxed text-muted-foreground ${done ? 'opacity-60' : ''}`}>
            {task.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
            <span className="uppercase tracking-wide">{task.timeline}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{task.hours}</span>
          </div>

          <a
            href={task.resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground underline-offset-4 hover:underline"
          >
            <ExternalLink className="size-3.5 shrink-0" />
            <span className="min-w-0">Learn: {task.resource.label}</span>
          </a>

          {task.subSteps && task.subSteps.length > 0 && (
            <>
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground underline-offset-4 hover:underline"
              >
                {expanded ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
                {expanded ? 'Hide steps' : `Show ${task.subSteps.length} step${task.subSteps.length > 1 ? 's' : ''} \u2192`}
              </button>

              {expanded && (
                <div className="space-y-3 border-l-2 border-muted pl-3 pt-1">
                  {task.subSteps.map((step, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-xs font-semibold text-foreground">
                        {i + 1}. {step.title}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                      {step.resources.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-0.5">
                          {step.resources.map((r, j) => (
                            <a
                              key={j}
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-medium text-accent-foreground underline-offset-4 hover:underline"
                            >
                              <ExternalLink className="size-3 shrink-0" />
                              {r.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  )
}
