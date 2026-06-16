import { ReactNode } from 'react'
import { Dices } from 'lucide-react'

export default function Trivia({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-8 rounded-lg border border-border bg-surface p-6 text-center shadow-sm">
      <div className="mb-2 flex justify-center text-accent-yellow">
        <Dices className="h-8 w-8" strokeWidth={2} />
      </div>
      <div className="mb-2 font-heading text-lg font-bold text-accent-yellow">
        Did you know?
      </div>
      <div className="font-body text-[15px] leading-relaxed text-ink/80">
        {children}
      </div>
    </div>
  )
}
