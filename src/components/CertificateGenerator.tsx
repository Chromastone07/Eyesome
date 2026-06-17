"use client"

import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import { Download, Award } from 'lucide-react'

interface CertificateProps {
  challengeTitle: string
}

export default function CertificateGenerator({ challengeTitle }: CertificateProps) {
  const [name, setName] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const certificateRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!certificateRef.current || !name) return
    setIsGenerating(true)
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3, // High resolution
        backgroundColor: '#ffffff', // Force white background for download
        useCORS: true,
      })
      
      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = `${name.replace(/\s+/g, '_')}_Certificate_${challengeTitle.replace(/\s+/g, '_')}.png`
      link.click()
    } catch (err) {
      console.error('Failed to generate certificate', err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-border bg-surface sm:p-8 p-4">
      <div className="mb-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
          Claim Your Certificate
        </h3>
        <p className="mt-2 font-body text-muted-light">
          You did it! Enter your name below to download your official completion certificate.
        </p>
        
        <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className="flex-1 rounded-lg border border-border bg-bg px-4 py-3 font-body text-ink placeholder:text-muted focus:border-accent-yellow focus:outline-none focus:ring-1 focus:ring-accent-yellow"
          />
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="overflow-x-auto rounded-xl border border-border bg-bg p-4 shadow-sm sm:p-8">
        <div 
          ref={certificateRef}
          className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-[#fdfbf7] px-8 py-16 text-center shadow-xl sm:px-16 sm:py-24"
          style={{ width: '850px', minHeight: '600px' }}
        >
          {/* Rich Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1a1f3a 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          
          {/* Watermark Logo */}
          <Award className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 text-[#1a1f3a] opacity-[0.02]" />

          {/* Elaborate Double Border */}
          <div className="absolute inset-6 border-[3px] border-[#1a1f3a]/10" />
          <div className="absolute inset-8 border border-[#1a1f3a]/20" />
          
          {/* Corner Ornaments */}
          <div className="absolute left-6 top-6 h-4 w-4 border-l-[3px] border-t-[3px] border-[#fac63a]" />
          <div className="absolute right-6 top-6 h-4 w-4 border-r-[3px] border-t-[3px] border-[#fac63a]" />
          <div className="absolute bottom-6 left-6 h-4 w-4 border-b-[3px] border-l-[3px] border-[#fac63a]" />
          <div className="absolute bottom-6 right-6 h-4 w-4 border-b-[3px] border-r-[3px] border-[#fac63a]" />

          {/* Top Seal */}
          <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#fac63a] bg-[#fac63a]/10">
            <Award className="h-10 w-10 text-[#fac63a]" />
          </div>
          
          <span className="relative z-10 mb-3 font-heading text-sm font-bold uppercase tracking-[0.4em] text-[#1a1f3a]/60">
            Official Certificate of Completion
          </span>
          
          <h2 className="relative z-10 mb-10 mt-4 font-heading text-5xl font-extrabold text-[#1a1f3a] sm:text-6xl" style={{ textShadow: '2px 2px 0px rgba(26,31,58,0.05)' }}>
            {name || "Your Name Here"}
          </h2>
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="h-px w-16 bg-[#1a1f3a]/20" />
            <p className="max-w-lg font-body text-lg italic text-[#1a1f3a]/80">
              has demonstrated outstanding dedication and technical excellence by successfully completing the rigorous requirements of the
            </p>
            <span className="h-px w-16 bg-[#1a1f3a]/20" />
          </div>
          
          <h3 className="relative z-10 mt-8 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1f3a]">
            {challengeTitle}
          </h3>
          
          <p className="relative z-10 mt-3 rounded-full border border-[#1a1f3a]/10 bg-[#1a1f3a]/5 px-4 py-1 font-body text-sm font-medium uppercase tracking-widest text-[#1a1f3a]/60">
            30-Day Technical Challenge
          </p>
          
          <div className="relative z-10 mt-20 flex w-full max-w-2xl items-end justify-between px-12">
            <div className="flex flex-col items-center">
              <span className="font-heading text-lg font-bold text-[#1a1f3a]">Eyesome Tech</span>
              <div className="mt-2 h-[2px] w-40 bg-[#1a1f3a]/30" />
              <span className="mt-2 font-body text-xs font-semibold uppercase tracking-widest text-[#1a1f3a]/50">Learning Platform</span>
            </div>

            {/* Verification Seal */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a1f3a]">
              <span className="font-heading text-xs font-bold uppercase text-white">Verified</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-heading text-lg font-bold text-[#1a1f3a]">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <div className="mt-2 h-[2px] w-40 bg-[#1a1f3a]/30" />
              <span className="mt-2 font-body text-xs font-semibold uppercase tracking-widest text-[#1a1f3a]/50">Date of Award</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleDownload}
          disabled={!name || isGenerating}
          className="flex items-center gap-2 rounded-full bg-accent-yellow px-8 py-3 font-heading font-bold text-bg transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGenerating ? (
            'Generating...'
          ) : (
            <>
              Download Certificate <Download className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
