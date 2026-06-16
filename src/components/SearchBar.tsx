"use client"

import { useState, useEffect, useRef } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type SearchItem = {
  id: string
  title: string
  description: string
  type: string
  url: string
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/search')
      .then(res => res.json())
      .then(data => {
        setFuse(new Fuse(data, {
          keys: ['title', 'description'],
          threshold: 0.3
        }))
      })
  }, [])

  useEffect(() => {
    if (query.length > 1 && fuse) {
      setResults(fuse.search(query).map(result => result.item).slice(0, 5))
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, fuse])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={wrapperRef} className="relative hidden sm:block">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (query.length > 1) setIsOpen(true) }}
          className="w-48 rounded-full border border-border bg-surface py-1.5 pl-9 pr-4 font-body text-sm text-ink placeholder:text-muted-light focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all focus:w-64"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-border bg-surface p-2 shadow-xl">
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.url}
              onClick={() => { setIsOpen(false); setQuery(''); }}
              className="block rounded-lg px-3 py-2 transition-colors hover:bg-border/30"
            >
              <div className="font-heading text-sm font-bold text-ink">{result.title}</div>
              <div className="truncate font-body text-xs text-muted-light">{result.description}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
