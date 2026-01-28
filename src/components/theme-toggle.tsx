"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const active = (theme ?? resolvedTheme) === 'dark'

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(active ? 'light' : 'dark')}
      className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium shadow-sm transition hover:bg-zinc-100 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      {active ? '🌙' : '🌤️'}
      <span className="ml-2 hidden sm:inline">{active ? 'Dark' : 'Light'}</span>
    </button>
  )
}

