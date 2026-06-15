'use client'

import { useState, useRef } from 'react'
import { Slide } from '@/lib/quickread-types'
import TitleSlideView from './quickread/TitleSlideView'
import CardsSlideView from './quickread/CardsSlideView'
import DiagramSlideView from './quickread/DiagramSlideView'
import ConceptsSlideView from './quickread/ConceptsSlideView'
import CompareSlideView from './quickread/CompareSlideView'
import RecapSlideView from './quickread/RecapSlideView'

function renderSlide(slide: Slide, index: number) {
  switch (slide.type) {
    case 'title':
      return <TitleSlideView key={index} slide={slide} />
    case 'cards':
      return <CardsSlideView key={index} slide={slide} />
    case 'diagram':
      return <DiagramSlideView key={index} slide={slide} />
    case 'concepts':
      return <ConceptsSlideView key={index} slide={slide} />
    case 'compare':
      return <CompareSlideView key={index} slide={slide} />
    case 'recap':
      return <RecapSlideView key={index} slide={slide} />
    default:
      return null
  }
}

export default function QuickRead({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0)
  const total = slides.length
  const startX = useRef(0)

  function go(n: number) {
    setCurrent(Math.max(0, Math.min(total - 1, n)))
  }

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - startX.current
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1))
  }

  let mouseStartX = 0
  function onMouseDown(e: React.MouseEvent) {
    mouseStartX = e.clientX
  }
  function onMouseUp(e: React.MouseEvent) {
    const dx = e.clientX - mouseStartX
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1))
  }

  return (
    <div className="not-prose mx-auto w-full max-w-[420px]">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/30"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-[cubic-bezier(.77,0,.18,1)]"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${(current * 100) / total}%)`,
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="h-full flex-shrink-0" style={{ width: `${100 / total}%` }}>
              {renderSlide(slide, i)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => go(current - 1)}
          disabled={current === 0}
          aria-label="Previous slide"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border bg-surface text-lg text-white transition-colors hover:border-accent-yellow/50 disabled:opacity-20"
        >
          ‹
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current
                  ? 'w-5 bg-accent-yellow'
                  : 'w-1.5 bg-border hover:bg-muted-light'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(current + 1)}
          disabled={current === total - 1}
          aria-label="Next slide"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border bg-surface text-lg text-white transition-colors hover:border-accent-yellow/50 disabled:opacity-20"
        >
          ›
        </button>
      </div>
    </div>
  )
}
