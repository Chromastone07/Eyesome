import LegalLayout from '@/components/LegalLayout'

export const metadata = { title: 'Terms of Use   Eyesome Tech' }

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="June 2026">
      <p>
        Welcome to Eyesome Tech. By accessing or using this website, you agree to
        the following terms. Please read them carefully.
      </p>

      <h2>Educational Purpose</h2>
      <p>
        All content on this site   articles, diagrams, and challenge
        materials   is provided for educational purposes only. While we aim
        for accuracy, technical concepts evolve, and content may not reflect
        the latest tools, versions, or industry practices at all times.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        Nothing on this site constitutes professional, legal, or financial
        advice. Decisions you make based on this content   including
        architectural, career, or business decisions   are your own
        responsibility.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Unless otherwise stated, all written content, diagrams, and visual
        designs on this site are the property of Eyesome Tech. You may read and
        share links to our content, but you may not copy, republish, or
        redistribute our articles or visuals without permission.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use automated tools to scrape or bulk-download content</li>
        <li>Attempt to disrupt or overload the site</li>
        <li>Misrepresent content from this site as your own original work</li>
      </ul>

      <h2>Changes to Content</h2>
      <p>
        We may update, modify, or remove any content on this site at any time
        without prior notice, as part of improving the learning experience.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        This site is provided &quot;as is&quot; without warranties of any kind. We
        are not liable for any damages or losses arising from your use of, or
        inability to use, this site or its content.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of India. Any disputes arising
        from use of this site will be subject to the jurisdiction of Indian
        courts.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent via our{' '}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  )
}
