'use client'

import { ALL_TASKS_COUNT } from '@/lib/plan-data'
import { Download } from 'lucide-react'

type ProgressHeaderProps = {
  doneCount: number
  totalCount?: number
}

export function ProgressHeader({ doneCount, totalCount = ALL_TASKS_COUNT }: ProgressHeaderProps) {
  const percent = Math.round((doneCount / totalCount) * 100)

  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-foreground">
          Rotaract Club of Debo &middot; District 9212 &middot; RY 2026/27
        </p>
        <h1 className="text-3xl font-bold leading-tight text-foreground text-balance md:text-4xl">
          PR Action Plan Tracker
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          A solo-friendly roadmap scoped for 3&ndash;5 hours a week, with team-expansion milestones
          built in. Each task links to a free resource so you can learn the skill as you go.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Tasks completed
          </p>
          <p className="mt-1 text-3xl font-bold text-card-foreground">
            {doneCount}
            <span className="text-lg font-medium text-muted-foreground"> / {totalCount}</span>
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Year progress
          </p>
          <p className="mt-1 text-3xl font-bold text-card-foreground">{percent}%</p>
          <div
            className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Overall plan progress"
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 rounded-lg border border-border bg-card p-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Full written plan
          </p>
          <a
            href="/debo-pr-action-plan-2026-27.md"
            download="Debo-PR-Action-Plan-2026-27.md"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" />
            Download document
          </a>
        </div>
      </div>
    </header>
  )
}
