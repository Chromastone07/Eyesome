export default function VSCard({
  left,
  right,
  leftDesc,
  rightDesc,
}: {
  left: string
  right: string
  leftDesc: string
  rightDesc: string
}) {
  return (
    <div className="not-prose my-6 flex flex-col items-stretch gap-3 sm:flex-row">
      <div className="flex-1 rounded-lg border border-accent-blue/40 bg-accent-blue/5 p-4 text-center">
        <div className="mb-1 font-heading text-lg font-bold text-accent-blue">
          {left}
        </div>
        <div className="font-body text-[13px] leading-relaxed text-ink/70">
          {leftDesc}
        </div>
      </div>

      <div className="flex flex-shrink-0 items-center justify-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1f3a] font-heading text-xs font-bold text-accent-yellow shadow-sm">
          VS
        </span>
      </div>

      <div className="flex-1 rounded-lg border border-accent-red/40 bg-accent-red/5 p-4 text-center">
        <div className="mb-1 font-heading text-lg font-bold text-accent-red">
          {right}
        </div>
        <div className="font-body text-[13px] leading-relaxed text-ink/70">
          {rightDesc}
        </div>
      </div>
    </div>
  )
}
