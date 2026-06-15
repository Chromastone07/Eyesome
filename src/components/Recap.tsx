export default function Recap({ items }: { items: string[] }) {
  return (
    <div className="not-prose my-8 rounded-lg border border-accent-green/30 bg-accent-green/5 p-6">
      <div className="mb-3 font-heading text-lg font-bold text-ink">
        Quick Recap
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-green text-xs font-bold text-white">
              ✓
            </span>
            <span className="font-body text-[15px] leading-relaxed text-ink/80">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
