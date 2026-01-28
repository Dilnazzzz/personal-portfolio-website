import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hello, I’m {siteConfig.name}.</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        {siteConfig.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-2 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Contact me
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center rounded-md border border-zinc-200 px-5 py-2 text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
        >
          View projects
        </Link>
      </div>
    </section>
  )
}

