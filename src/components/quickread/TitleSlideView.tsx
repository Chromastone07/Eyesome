import { TitleSlide } from '@/lib/quickread-types'
import { renderHeading } from './helpers'

export default function TitleSlideView({ slide }: { slide: TitleSlide }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#1a1f3a]">
      {/* glow blobs */}
      <div
        className="pointer-events-none absolute -right-1/5 -top-1/5 aspect-square w-2/3 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(253,233,104,0.14) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-1/6 -left-1/6 aspect-square w-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(224,68,104,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-[6%] sm:p-[7%]">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full border border-accent-yellow/35 px-2.5 py-1 font-heading text-[clamp(9px,2.5vw,12px)] uppercase tracking-[0.15em] text-accent-yellow">
            {slide.series}
          </span>
          <span className="whitespace-nowrap rounded-full bg-accent-yellow px-3 py-1 font-heading text-[clamp(11px,2.8vw,14px)] font-bold text-ink">
            Day {slide.day}
          </span>
        </div>

        <div>
          <h1 className="font-heading text-[clamp(32px,11vw,56px)] font-bold leading-[1.05] text-white">
            {renderHeading(slide.heading, slide.highlight, 'text-accent-yellow')}
          </h1>
          <p className="mt-3 max-w-[90%] font-body text-[clamp(12px,3.2vw,14.5px)] leading-relaxed text-white/70">
            {slide.hook}
          </p>
        </div>

        <div className="flex items-center gap-1.5 font-heading text-[clamp(12px,3vw,15px)] text-accent-yellow/55">
          <span>Swipe to start</span>
          <span className="inline-block animate-pulse">→</span>
        </div>
      </div>
    </div>
  )
}
