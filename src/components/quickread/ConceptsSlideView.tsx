import { ConceptsSlide } from '@/lib/quickread-types'

export default function ConceptsSlideView({ slide }: { slide: ConceptsSlide }) {
  return (
    <div className="h-full overflow-y-auto bg-paper">
      <div className="flex min-h-full flex-col gap-3 p-[6%] sm:p-[7%]">
        <div className="font-heading text-[clamp(9px,2.2vw,12px)] uppercase tracking-[0.2em] text-muted-dark">
          {slide.eyebrow}
        </div>
        <h2 className="font-heading text-[clamp(20px,6.5vw,30px)] font-bold text-ink">
          {slide.heading}
        </h2>

        <div className="flex flex-1 flex-col justify-center gap-2.5">
          {slide.items.map((item) => (
            <div
              key={item.number}
              className="flex flex-1 items-center gap-3 rounded-lg bg-white p-[4%] shadow-sm"
            >
              <div className="flex h-[clamp(28px,8vw,36px)] w-[clamp(28px,8vw,36px)] flex-shrink-0 items-center justify-center rounded-full bg-ink font-heading text-[clamp(14px,4vw,18px)] font-bold text-accent-yellow">
                {item.number}
              </div>
              <div>
                <div className="font-heading text-[clamp(15px,4.5vw,19px)] font-bold text-ink">
                  {item.title}
                </div>
                <p className="font-body text-[clamp(10.5px,2.6vw,12px)] leading-snug text-ink/65">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
