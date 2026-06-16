import { CompareSlide } from '@/lib/quickread-types'
import { renderHighlighted } from './helpers'

export default function CompareSlideView({ slide }: { slide: CompareSlide }) {
  return (
    <div className="h-full overflow-y-auto bg-[#1a1f3a]">
      <div className="flex min-h-full flex-col gap-3 p-[6%] sm:p-[7%]">
        <div className="font-heading text-[clamp(9px,2.2vw,12px)] uppercase tracking-[0.2em] text-white/50">
          {slide.eyebrow}
        </div>
        <h2 className="font-heading text-[clamp(20px,6.5vw,30px)] font-bold leading-tight text-white">
          {slide.highlight
            ? renderHighlighted(
                slide.heading.replace(
                  slide.highlight,
                  `**${slide.highlight}**`
                ),
                'text-accent-yellow'
              )
            : slide.heading}
        </h2>

        <div className="flex flex-1 flex-col justify-evenly gap-2.5">
          {slide.pairs.map((pair, i) => (
            <div key={i} className="flex flex-1 items-stretch gap-2">
              <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-accent-blue/40 bg-accent-blue/10 p-[3%] text-center">
                <div className="font-heading text-[clamp(13px,3.8vw,17px)] font-bold text-accent-blue">
                  {pair.left.label}
                </div>
                <div className="font-body text-[clamp(9.5px,2.4vw,11px)] leading-snug text-white/70">
                  {pair.left.desc}
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center justify-center self-center">
                <span className="flex h-[clamp(26px,7vw,32px)] w-[clamp(26px,7vw,32px)] items-center justify-center rounded-full bg-white/10 font-heading text-[clamp(10px,2.6vw,13px)] font-bold text-accent-yellow">
                  VS
                </span>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-accent-red/40 bg-accent-red/10 p-[3%] text-center">
                <div className="font-heading text-[clamp(13px,3.8vw,17px)] font-bold text-accent-red">
                  {pair.right.label}
                </div>
                <div className="font-body text-[clamp(9.5px,2.4vw,11px)] leading-snug text-white/70">
                  {pair.right.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {slide.quote && (
          <div className="rounded-lg border-l-4 border-accent-yellow bg-black/20 p-[4%]">
            <p className="font-heading text-[clamp(13px,3.8vw,17px)] leading-relaxed text-white/80">
              {renderHighlighted(slide.quote, 'text-accent-yellow')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
