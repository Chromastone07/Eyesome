import { CardsSlide } from '@/lib/quickread-types'
import { accentBorderClass } from './helpers'
import { renderHeading } from './helpers'

export default function CardsSlideView({ slide }: { slide: CardsSlide }) {
  return (
    <div className="h-full overflow-y-auto bg-[#1a1f3a]">
      <div className="flex min-h-full flex-col gap-3 p-[6%] sm:p-[7%]">
        <div className="font-heading text-[clamp(9px,2.2vw,12px)] uppercase tracking-[0.2em] text-white/50">
          {slide.eyebrow}
        </div>
        <h2 className="font-heading text-[clamp(22px,7vw,34px)] font-bold leading-[1.1] text-white">
          {renderHeading(
            slide.heading,
            slide.highlight,
            'bg-accent-yellow rounded px-1'
          )}
        </h2>

        <div className="flex flex-1 flex-col gap-3">
          {slide.cards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-1 flex-col gap-1.5 rounded-lg border-l-4 bg-white/10 p-[4%] shadow-sm ${
                accentBorderClass[card.accent ?? 'yellow']
              }`}
            >
              {card.icon && (
                <div className="text-[clamp(18px,5vw,24px)] leading-none">
                  {card.icon}
                </div>
              )}
              <div className="font-heading text-[clamp(15px,4.5vw,19px)] font-bold text-white">
                {card.title}
              </div>
              <p className="font-body text-[clamp(11px,2.8vw,12.5px)] leading-relaxed text-white/65">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
