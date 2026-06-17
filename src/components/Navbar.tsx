import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur transition-colors duration-300">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-ink sm:text-2xl"
        >
          Eyesome <span className="text-accent-blue dark:text-accent-yellow">Tech</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <SearchBar />
          <Link
            href="/"
            className="hidden font-body text-xs font-medium text-ink/70 transition-colors hover:text-ink sm:block sm:text-sm"
          >
            Challenges
          </Link>
          <Link
            href="/bookmarks"
            className="font-body text-xs font-medium text-ink/70 transition-colors hover:text-ink sm:text-sm"
          >
            Bookmarks
          </Link>
          <ThemeToggle />
          <Link
            href="/#challenges"
            className="whitespace-nowrap rounded-full bg-accent-yellow px-3 py-1.5 font-body text-xs font-semibold text-ink transition-opacity hover:opacity-90 sm:px-4 sm:text-sm"
          >
            Start Learning
          </Link>
        </div>
      </nav>
    </header>
  )
}
