import { RecapSlide } from '@/lib/quickread-types'

export default function RecapSlideView({ slide }: { slide: RecapSlide }) {
  return (
    <div className="h-full overflow-y-auto bg-[#1a1f3a]">
      <div className="flex min-h-full flex-col items-center justify-between gap-3 p-[6%] text-center sm:p-[7%]">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-3">
          <div className="flex h-[clamp(40px,11vw,54px)] w-[clamp(40px,11vw,54px)] items-center justify-center rounded-full bg-white/10 font-heading text-[clamp(18px,5vw,26px)] text-accent-yellow">
            ✓
          </div>
          <h2 className="font-heading text-[clamp(20px,6.5vw,30px)] font-bold leading-tight text-white">
            {slide.heading}
          </h2>

          <div className="flex w-full flex-col gap-1.5">
            {slide.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md bg-white/10 px-[4%] py-[2.5%] text-left shadow-sm"
              >
                <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-accent-green text-[10px] font-bold text-white">
                  ✓
                </span>
                <span className="font-heading text-[clamp(12px,3.2vw,15px)] font-semibold text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-lg bg-black/20 p-[4%]">
          <div className="font-heading text-[clamp(9px,2.2vw,11px)] uppercase tracking-[0.2em] text-accent-yellow">
            Tomorrow — Day {slide.nextDay.day}
          </div>
          <div className="font-heading text-[clamp(14px,4vw,18px)] font-bold text-white">
            {slide.nextDay.title} ☞
          </div>
        </div>
      </div>
    </div>
  )
}
