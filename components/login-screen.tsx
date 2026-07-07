'use client'

import { useState, type FormEvent } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { LogIn, UserPlus } from 'lucide-react'

export function LoginScreen() {
  const { isFirstVisit, login, createAdmin } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isFirstVisit) {
        if (!username.trim() || !password.trim()) {
          setError('Please fill in both fields.')
          setLoading(false)
          return
        }
        const ok = await createAdmin(username.trim(), password)
        if (!ok) setError('Could not create admin account.')
      } else {
        const result = await login(username.trim(), password)
        if (!result) setError('Invalid username or password.')
      }
    } catch {
      setError('An unexpected error occurred.')
    }
    setLoading(false)
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-sm flex-col items-center justify-center px-4">
      <div className="w-full rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-1">
          <h1 className="text-xl font-bold text-card-foreground">
            {isFirstVisit ? 'Create Admin Account' : 'Log In'}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isFirstVisit
              ? 'Set up the admin account to manage users and tasks.'
              : 'Enter your username and password.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-sm font-medium text-card-foreground">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/50"
              autoComplete="username"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-card-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/50"
              autoComplete={isFirstVisit ? 'new-password' : 'current-password'}
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-destructive" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : isFirstVisit ? (
              <>
                <UserPlus className="size-4" />
                Create Account
              </>
            ) : (
              <>
                <LogIn className="size-4" />
                Log In
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  )
}
