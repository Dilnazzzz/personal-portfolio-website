import { siteConfig } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white">GitHub</a>
          <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white">Twitter</a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
