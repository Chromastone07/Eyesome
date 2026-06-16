import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-white sm:text-2xl"
        >
          Eyesome <span className="text-accent-yellow">Tech</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/"
            className="font-body text-xs font-medium text-muted-light transition-colors hover:text-white sm:text-sm"
          >
            Challenges
          </Link>
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
