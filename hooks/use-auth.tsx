'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

type User = {
  id: string
  username: string
  isAdmin: boolean
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  isFirstVisit: boolean
  login: (username: string, password: string) => Promise<'admin' | 'user' | null>
  logout: () => void
  createAdmin: (username: string, password: string) => Promise<boolean>
}

const ADMIN_KEY = 'debo-pr-admin'
const USERS_KEY = 'debo-pr-users'
const SESSION_KEY = 'debo-pr-session'

function generateId(): string {
  return crypto.randomUUID?.() ?? Math.random().toString(36).slice(2, 11)
}

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function writeStorage<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // unavailable
  }
}

type StoredAdmin = {
  username: string
  passwordHash: string
}

type StoredUser = {
  id: string
  username: string
  passwordHash: string
  assignedTaskIds: string[]
}

type StoredSession = {
  userId: string
  username: string
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    const admin = readStorage<StoredAdmin | null>(ADMIN_KEY, null)
    if (!admin) {
      setIsFirstVisit(true)
      setIsLoading(false)
      return
    }
    const session = readStorage<StoredSession | null>(SESSION_KEY, null)
    if (session) {
      setUser({ id: session.userId, username: session.username, isAdmin: session.isAdmin })
    }
    setIsLoading(false)
  }, [])

  const createAdmin = useCallback(async (username: string, password: string): Promise<boolean> => {
    const existing = readStorage<StoredAdmin | null>(ADMIN_KEY, null)
    if (existing) return false
    const passwordHash = await hashPassword(password)
    writeStorage(ADMIN_KEY, { username, passwordHash })
    const session: StoredSession = { userId: 'admin', username, isAdmin: true }
    writeStorage(SESSION_KEY, session)
    setUser({ id: 'admin', username, isAdmin: true })
    setIsFirstVisit(false)
    return true
  }, [])

  const login = useCallback(async (username: string, password: string): Promise<'admin' | 'user' | null> => {
    const admin = readStorage<StoredAdmin | null>(ADMIN_KEY, null)
    if (admin) {
      const hash = await hashPassword(password)
      if (admin.username === username && admin.passwordHash === hash) {
        const session: StoredSession = { userId: 'admin', username, isAdmin: true }
        writeStorage(SESSION_KEY, session)
        setUser({ id: 'admin', username, isAdmin: true })
        return 'admin'
      }
    }

    const users = readStorage<StoredUser[]>(USERS_KEY, [])
    const match = users.find((u) => u.username === username)
    if (match) {
      const hash = await hashPassword(password)
      if (match.passwordHash === hash) {
        const session: StoredSession = { userId: match.id, username, isAdmin: false }
        writeStorage(SESSION_KEY, session)
        setUser({ id: match.id, username, isAdmin: false })
        return 'user'
      }
    }

    return null
  }, [])

  const logout = useCallback(() => {
    try { localStorage.removeItem(SESSION_KEY) } catch {}
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: user !== null, isLoading, isFirstVisit, login, logout, createAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export type { StoredUser }
export { USERS_KEY, readStorage, writeStorage, hashPassword }
