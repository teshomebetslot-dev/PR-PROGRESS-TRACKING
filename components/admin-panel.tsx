'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { QUARTERS, type Task } from '@/lib/plan-data'
import { readStorage, writeStorage, hashPassword, USERS_KEY } from '@/hooks/use-auth'
import type { StoredUser } from '@/hooks/use-auth'
import { X, Plus, Trash2, ChevronDown, ChevronRight, Save } from 'lucide-react'

function generateId(): string {
  return crypto.randomUUID?.() ?? Math.random().toString(36).slice(2, 11)
}

type AdminPanelProps = {
  open: boolean
  onClose: () => void
}

type EditDraft = {
  username: string
  newPassword: string
  assignedTaskIds: string[]
}

export function AdminPanel({ open, onClose }: AdminPanelProps) {
  const [users, setUsers] = useState<StoredUser[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<EditDraft | null>(null)
  const [newName, setNewName] = useState('')
  const [newPass, setNewPass] = useState('')
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const [addError, setAddError] = useState('')

  useEffect(() => {
    if (open) {
      setUsers(readStorage<StoredUser[]>(USERS_KEY, []))
      setEditingId(null)
      setDraft(null)
      setNewName('')
      setNewPass('')
      setAddError('')
    }
  }, [open])

  function persist(next: StoredUser[]) {
    setUsers(next)
    writeStorage(USERS_KEY, next)
  }

  function handleAdd(e: FormEvent) {
    e.preventDefault()
    const name = newName.trim()
    const pass = newPass.trim()
    if (!name || !pass) {
      setAddError('Both fields are required.')
      return
    }
    if (users.some((u) => u.username === name)) {
      setAddError('A user with that name already exists.')
      return
    }
    const user: StoredUser = {
      id: generateId(),
      username: name,
      passwordHash: '',
      assignedTaskIds: [],
    }
    hashPassword(pass).then((hash) => {
      user.passwordHash = hash
      persist([...users, user])
      setNewName('')
      setNewPass('')
      setAddError('')
    })
  }

  function handleDelete(id: string) {
    if (!confirm('Delete this user? This cannot be undone.')) return
    if (editingId === id) {
      setEditingId(null)
      setDraft(null)
    }
    persist(users.filter((u) => u.id !== id))
  }

  function startEditing(userId: string) {
    const user = users.find((u) => u.id === userId)
    if (!user) return
    setEditingId(userId)
    setDraft({
      username: user.username,
      newPassword: '',
      assignedTaskIds: [...user.assignedTaskIds],
    })
  }

  function cancelEditing() {
    setEditingId(null)
    setDraft(null)
  }

  async function saveEditing() {
    if (!editingId || !draft) return
    const name = draft.username.trim()
    if (!name) return

    let next = users.map((u) => {
      if (u.id !== editingId) return u
      return { ...u, username: name, assignedTaskIds: [...draft.assignedTaskIds] }
    })

    if (draft.newPassword.trim()) {
      const hash = await hashPassword(draft.newPassword.trim())
      next = next.map((u) => (u.id === editingId ? { ...u, passwordHash: hash } : u))
    }

    persist(next)
    setEditingId(null)
    setDraft(null)
  }

  function toggleDraftTask(taskId: string) {
    if (!draft) return
    const has = draft.assignedTaskIds.includes(taskId)
    setDraft({
      ...draft,
      assignedTaskIds: has
        ? draft.assignedTaskIds.filter((t) => t !== taskId)
        : [...draft.assignedTaskIds, taskId],
    })
  }

  function toggleDraftTaskAll(tasks: Task[]) {
    if (!draft) return
    const allAssigned = tasks.every((t) => draft.assignedTaskIds.includes(t.id))
    const without = draft.assignedTaskIds.filter((id) => !tasks.find((t) => t.id === id))
    setDraft({
      ...draft,
      assignedTaskIds: allAssigned ? without : [...without, ...tasks.map((t) => t.id)],
    })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <div className="bg-background/50 absolute inset-0 backdrop-blur-xs" onClick={onClose} />
      <div className="relative z-50 flex h-full w-full max-w-lg flex-col overflow-y-auto border-l border-border bg-card shadow-lg">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-bold text-card-foreground">Manage Users</h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <form onSubmit={handleAdd} className="mb-6 rounded-lg border border-border bg-background p-4">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Add User</h3>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Username"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/50"
              />
              <input
                type="password"
                placeholder="Password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/50"
              />
              {addError && <p className="text-xs font-medium text-destructive">{addError}</p>}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Plus className="size-4" />
                Add User
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-3">
            {users.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground">No users yet.</p>
            )}
            {users.map((user) => {
              const isEditing = editingId === user.id
              return (
                <div
                  key={user.id}
                  className={`rounded-lg border bg-background ${isEditing ? 'border-primary' : 'border-border'}`}
                >
                  <button
                    type="button"
                    onClick={() => (isEditing ? cancelEditing() : startEditing(user.id))}
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                  >
                    <div className="flex items-center gap-2">
                      {isEditing ? <ChevronDown className="size-4 text-muted-foreground" /> : <ChevronRight className="size-4 text-muted-foreground" />}
                      <span className="text-sm font-medium text-foreground">{user.username}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {user.assignedTaskIds.length} tasks
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleDelete(user.id) }}
                      className="rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </button>

                  {isEditing && draft && (
                    <div className="border-t border-border px-4 py-3">
                      <div className="mb-3 flex gap-2">
                        <input
                          type="text"
                          value={draft.username}
                          onChange={(e) => setDraft({ ...draft, username: e.target.value })}
                          placeholder="Username"
                          className="min-w-0 flex-1 rounded-md border border-input bg-background px-2.5 py-1.5 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/50"
                        />
                        <input
                          type="password"
                          value={draft.newPassword}
                          onChange={(e) => setDraft({ ...draft, newPassword: e.target.value })}
                          placeholder="New password"
                          className="min-w-0 flex-1 rounded-md border border-input bg-background px-2.5 py-1.5 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/50"
                        />
                      </div>

                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Assigned Tasks
                      </p>
                      <div className="flex flex-col gap-3">
                        {QUARTERS.map((quarter) => {
                          const tasks = quarter.tasks
                          const allChecked = tasks.every((t) => draft.assignedTaskIds.includes(t.id))
                          const someChecked = tasks.some((t) => draft.assignedTaskIds.includes(t.id))

                          return (
                            <div key={quarter.id}>
                              <button
                                type="button"
                                onClick={() => setCollapsed((c) => ({ ...c, [quarter.id]: !c[quarter.id] }))}
                                className="mb-1 flex w-full items-center gap-1.5 text-left"
                              >
                                {collapsed[quarter.id] ? <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" /> : <ChevronDown className="size-3.5 shrink-0 text-muted-foreground" />}
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  {quarter.label}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ({draft.assignedTaskIds.filter((id) => tasks.find((t) => t.id === id)).length}/{tasks.length})
                                </span>
                                <label
                                  onClick={(e) => e.stopPropagation()}
                                  className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground"
                                >
                                  <input
                                    type="checkbox"
                                    checked={allChecked}
                                    ref={(el) => { if (el) el.indeterminate = someChecked && !allChecked }}
                                    onChange={() => toggleDraftTaskAll(tasks)}
                                    className="size-3.5 rounded border-input text-primary focus:ring-primary/50"
                                  />
                                  All
                                </label>
                              </button>
                              {!collapsed[quarter.id] && (
                                <div className="ml-2 flex flex-col gap-1">
                                  {tasks.map((task) => (
                                    <label
                                      key={task.id}
                                      className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted"
                                    >
                                      <input
                                        type="checkbox"
                                        checked={draft.assignedTaskIds.includes(task.id)}
                                        onChange={() => toggleDraftTask(task.id)}
                                        className="size-3.5 rounded border-input text-primary focus:ring-primary/50"
                                      />
                                      <span className="text-sm text-foreground">{task.title}</span>
                                    </label>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>

                      <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
                        <button
                          type="button"
                          onClick={saveEditing}
                          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          <Save className="size-4" />
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={cancelEditing}
                          className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
