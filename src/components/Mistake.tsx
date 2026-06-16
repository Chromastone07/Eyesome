import { ReactNode } from 'react'
import { TriangleAlert } from 'lucide-react'

export default function Mistake({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border-l-4 border-accent-red bg-accent-red/10 p-5">
      <div className="mb-2 flex items-center gap-2">
        <TriangleAlert className="h-5 w-5 text-accent-red" strokeWidth={2.5} />
        <span className="font-heading text-lg font-bold text-ink">
          Common Mistake
        </span>
      </div>
      <div className="font-body text-[15px] leading-relaxed text-ink/80">
        {children}
      </div>
    </div>
  )
}
