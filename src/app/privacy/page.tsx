import LegalLayout from '@/components/LegalLayout'

export const metadata = { title: 'Privacy Policy   Eyesome Tech' }

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>
        Eyesome Tech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates this website to provide
        free educational content. This policy explains what information we
        collect when you visit, and how it is used.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not require you to create an account or provide personal
        information to read content on this site. We may collect basic,
        non-identifying analytics data such as:
      </p>
      <ul>
        <li>Pages visited and time spent on them</li>
        <li>General location (country/city level, derived from IP)</li>
        <li>Device and browser type</li>
        <li>Referring website</li>
      </ul>
      <p>
        This data is aggregated and used only to understand which content is
        useful, so we can improve and prioritize future lessons.
      </p>

      <h2>Cookies</h2>
      <p>
        We use a minimal number of cookies, primarily for basic analytics and
        to remember that you&apos;ve dismissed our cookie notice. We do not use
        cookies for advertising or cross-site tracking. See our{' '}
        <a href="/cookies">Cookie Policy</a> for details.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        This site is hosted on Vercel and may use privacy-friendly analytics
        tools. These providers may process technical data (like IP address)
        as part of delivering the site to you, governed by their own privacy
        policies.
      </p>

      <h2>Your Rights</h2>
      <p>
        Since we collect minimal data and no accounts exist, there is
        generally no personal data tied to you to access, correct, or delete.
        If you have concerns about data collected via analytics, you can
        disable cookies in your browser settings at any time.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        This site is intended for general audiences interested in technical
        education and is not directed at children under 13. We do not
        knowingly collect data from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy as the site evolves. The &quot;Last updated&quot;
        date at the top of this page will reflect the most recent changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this policy, reach out via our{' '}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  )
}
