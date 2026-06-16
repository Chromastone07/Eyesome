import { ReactNode } from 'react'
import { Lightbulb } from 'lucide-react'

export default function Analogy({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border-l-4 border-accent-yellow bg-accent-yellow/10 p-5">
      <div className="mb-2 flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-accent-yellow" strokeWidth={2.5} />
        <span className="font-heading text-lg font-bold text-ink">
          Think of it like this
        </span>
      </div>
      <div className="font-body text-[15px] leading-relaxed text-ink/80">
        {children}
      </div>
    </div>
  )
}
