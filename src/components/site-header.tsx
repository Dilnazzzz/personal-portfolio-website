import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold tracking-tight">
            <span className="select-none">/home</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white">About</Link>
            <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-white">Projects</Link>
            <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white">Blog</Link>
            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

