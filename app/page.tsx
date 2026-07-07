'use client'

import { useState } from 'react'
import { QUARTERS } from '@/lib/plan-data'
import { useAuth, readStorage, ADMIN_KEY, USERS_KEY } from '@/hooks/use-auth'
import type { StoredUser } from '@/hooks/use-auth'
import { usePlanProgress } from '@/hooks/use-plan-progress'
import { ProgressHeader } from '@/components/progress-header'
import { WeeklyRhythm } from '@/components/weekly-rhythm'
import { QuarterSection } from '@/components/quarter-section'
import { AdminPanel } from '@/components/admin-panel'
import { Users, LogOut } from 'lucide-react'

export default function Page() {
  const { user, logout } = useAuth()

  const storedAdmin = readStorage<{ username: string } | null>(ADMIN_KEY, null)
  const isAdmin = (user?.isAdmin ?? false) && user?.username === storedAdmin?.username
  const userId = user?.id ?? 'admin'
  const [showAdmin, setShowAdmin] = useState(false)

  const { done, toggle } = usePlanProgress(userId)

  function countDoneTasks(doneSet: Set<string>, quarters: typeof QUARTERS): number {
    let count = 0
    for (const quarter of quarters) {
      for (const task of quarter.tasks) {
        if (task.subSteps && task.subSteps.length > 0) {
          if (task.subSteps.every((_, i) => doneSet.has(`${task.id}::sub::${i}`))) {
            count++
          }
        } else if (doneSet.has(task.id)) {
          count++
        }
      }
    }
    return count
  }

  let assignedIds: string[] | undefined
  if (!isAdmin && user) {
    const users = readStorage<StoredUser[]>(USERS_KEY, [])
    const match = users.find((u) => u.id === user.id)
    assignedIds = match?.assignedTaskIds ?? []
  }

  const totalTaskCount = assignedIds?.length ?? QUARTERS.reduce((s, q) => s + q.tasks.length, 0)

  const quarters = isAdmin
    ? QUARTERS
    : QUARTERS.map((q) => ({
        ...q,
        tasks: q.tasks.filter((t) => assignedIds?.includes(t.id)),
      })).filter((q) => q.tasks.length > 0)

  const doneTaskCount = countDoneTasks(done, quarters)

  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-10 md:py-14">
        <div className="-mb-2 flex items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Logged in as <span className="font-medium text-foreground">{user?.username}</span>
          </p>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                type="button"
                onClick={() => setShowAdmin(true)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Users className="size-4" />
                Manage Users
              </button>
            )}
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <LogOut className="size-4" />
              Log out
            </button>
          </div>
        </div>

        <ProgressHeader doneCount={doneTaskCount} totalCount={totalTaskCount} />

        <WeeklyRhythm />

        {quarters.length === 0 && !isAdmin && (
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">
              No tasks have been assigned to you yet. Contact your admin.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-10">
          {quarters.map((quarter) => (
            <QuarterSection
              key={quarter.id}
              quarter={quarter}
              done={done}
              onToggle={toggle}
            />
          ))}
        </div>

        <footer className="border-t border-border pt-6">
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            Scoped from the official Debo PR Action Plan 2026/27 for a one-person team: 2 posts/week
            instead of 3 and monthly #MeetDebo spotlights. Scale both up as your committee grows
            through the marked team-growth milestones. Progress is saved on this device.
          </p>
        </footer>
      </main>

      <AdminPanel open={showAdmin} onClose={() => setShowAdmin(false)} />
    </>
  )
}
