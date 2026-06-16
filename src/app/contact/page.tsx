import LegalLayout from '@/components/LegalLayout'

export const metadata = { title: 'Contact   Eyesome Tech' }

export default function ContactPage() {
  return (
    <LegalLayout title="Contact Us" updated="June 2026">
      <p>
        Have a question, found an error in a lesson, or want to suggest a
        topic for a future challenge? We&apos;d love to hear from you.
      </p>

      <h2>Email</h2>
      <p>
        Reach us at{' '}
        <a href="mailto:okappeal@gmail.com">okappeal@gmail.com</a>
      </p>

      <h2>Response Time</h2>
      <p>
        We aim to respond to all messages within 3-5 business days.
      </p>

      <h2>Follow Along</h2>
      <p>
        New challenges and daily lessons are also posted on our social
        channels   follow us there for daily updates.
      </p>
    </LegalLayout>
  )
}
