import { DiagramSlide } from '@/lib/quickread-types'
import { accentColors } from './helpers'

export default function DiagramSlideView({ slide }: { slide: DiagramSlide }) {
  return (
    <div className="h-full overflow-y-auto bg-[#1a1f3a]">
      <div className="flex min-h-full flex-col gap-2 p-[6%] sm:p-[7%]">
        <div className="font-heading text-[clamp(9px,2.2vw,12px)] uppercase tracking-[0.2em] text-white/50">
          {slide.eyebrow}
        </div>
        <h2 className="font-heading text-[clamp(20px,6.5vw,30px)] font-bold leading-tight text-white">
          {slide.heading}
        </h2>

        <div className="flex flex-1 flex-col items-center justify-evenly gap-3 rounded-lg border border-white/10 bg-black/20 p-[4%]">
          {slide.rows.map((row, i) => (
            <div key={i} className="contents">
              <div className="flex w-full flex-wrap items-center justify-center gap-2">
                {row.nodes.map((node, j) => {
                  const c = accentColors[node.accent]
                  return (
                    <div key={j} className="contents">
                      <div className="flex flex-col items-center gap-1">
                        <div
                          className="rounded-md border-2 px-3 py-2 text-center font-heading text-[clamp(11px,3vw,14px)] font-bold leading-tight"
                          style={{
                            borderColor: c.border,
                            color: c.text,
                            backgroundColor: c.bg,
                            minWidth: 'clamp(56px, 16vw, 80px)',
                          }}
                        >
                          {node.label}
                        </div>
                        {node.sublabel && (
                          <div className="font-heading text-[clamp(8px,2vw,10.5px)] text-white/60">
                            {node.sublabel}
                          </div>
                        )}
                      </div>
                      {j < row.nodes.length - 1 && (
                        <span className="font-heading text-[clamp(14px,4vw,20px)] text-white/40">
                          →
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
              {i < slide.rows.length - 1 && slide.rowConnector !== 'none' && (
                <span className="font-heading text-[clamp(14px,4vw,20px)] text-white/40">
                  ↓
                </span>
              )}
            </div>
          ))}

          {slide.note && (
            <div className="mt-1 text-center font-heading text-[clamp(10px,2.6vw,12px)] text-white/50">
              {slide.note}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
