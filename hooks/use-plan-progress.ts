'use client'

import { useSyncExternalStore, useCallback } from 'react'

function storageKey(userId: string) {
  return `debo-pr-progress-${userId}`
}

let caches = new Map<string, { cache: Set<string>; cacheJson: string }>()
const listeners = new Set<() => void>()

function getOrCreateBucket(key: string) {
  let bucket = caches.get(key)
  if (!bucket) {
    bucket = { cache: new Set(), cacheJson: '[]' }
    caches.set(key, bucket)
  }
  return bucket
}

function readStorage(key: string): Set<string> {
  if (typeof window === 'undefined') return new Set()
  const bucket = getOrCreateBucket(key)
  try {
    const raw = window.localStorage.getItem(key) ?? '[]'
    if (raw !== bucket.cacheJson) {
      bucket.cacheJson = raw
      bucket.cache = new Set(JSON.parse(raw) as string[])
    }
    return bucket.cache
  } catch {
    return bucket.cache
  }
}

function writeStorage(key: string, next: Set<string>) {
  const bucket = getOrCreateBucket(key)
  bucket.cache = next
  bucket.cacheJson = JSON.stringify(Array.from(next))
  try {
    window.localStorage.setItem(key, bucket.cacheJson)
  } catch {
    // storage unavailable
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (e: StorageEvent) => {
    if (e.key?.startsWith('debo-pr-progress-')) listener()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

const emptySet = new Set<string>()

export function usePlanProgress(userId: string) {
  const key = storageKey(userId)
  const done = useSyncExternalStore(
    subscribe,
    () => readStorage(key),
    () => emptySet,
  )

  const toggle = useCallback(
    (id: string) => {
      const next = new Set(readStorage(key))
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      writeStorage(key, next)
    },
    [key],
  )

  return { done, toggle }
}
