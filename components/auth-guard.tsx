'use client'

import { type ReactNode } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { LoginScreen } from '@/components/login-screen'

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, isFirstVisit } = useAuth()

  if (isLoading) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-sm items-center justify-center px-4">
        <span className="inline-block size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </main>
    )
  }

  if (!isAuthenticated || isFirstVisit) {
    return <LoginScreen />
  }

  return <>{children}</>
}
