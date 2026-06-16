import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="font-heading text-2xl font-bold text-ink">
              Eyesome <span className="text-accent-yellow">Tech</span>
            </div>
            <p className="mt-2 max-w-xs font-body text-sm text-muted-light">
              Empowering developers, one day at a time.
            </p>
          </div>

          <div>
            <div className="mb-3 font-heading text-lg font-bold text-ink">
              Learn
            </div>
            <ul className="flex flex-col gap-2 font-body text-sm text-muted-light">
              <li>
                <Link href="/" className="hover:text-accent-yellow">
                  All Challenges
                </Link>
              </li>
              <li>
                <Link href="/system-design" className="hover:text-accent-yellow">
                  System Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-heading text-lg font-bold text-ink">
              Legal
            </div>
            <ul className="flex flex-col gap-2 font-body text-sm text-muted-light">
              <li>
                <Link href="/privacy" className="hover:text-accent-yellow">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent-yellow">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-accent-yellow">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-yellow">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 font-body text-xs text-muted-light sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} Eyesome Tech. All rights reserved.</span>
          <span>Made in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  )
}
