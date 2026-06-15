import LegalLayout from '@/components/LegalLayout'

export const metadata = { title: 'Cookie Policy — Design30' }

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="June 2026">
      <p>
        This page explains how Design30 uses cookies and similar
        technologies when you visit our website.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device by your browser.
        They help websites remember information about your visit.
      </p>

      <h2>How We Use Cookies</h2>
      <p>We use cookies for two narrow purposes:</p>
      <ul>
        <li>
          <strong>Essential:</strong> remembering that you&apos;ve dismissed our
          cookie notice, so it doesn&apos;t reappear on every page.
        </li>
        <li>
          <strong>Analytics:</strong> understanding which pages are visited
          and how content performs, in an aggregated and anonymized way.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> use cookies for advertising, ad targeting,
        or selling data to third parties.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        Most browsers let you block or delete cookies through their settings.
        Disabling cookies may cause the cookie notice to reappear on each
        visit, but will not prevent you from reading any content on this
        site.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy occasionally. Continued use of the
        site after changes means you accept the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies can be sent via our{' '}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  )
}
