"use client"

import { useState } from 'react'
import { CheckCircle2, XCircle, ArrowRight, Award } from 'lucide-react'

export interface QuizQuestion {
  question: string
  options: string[]
  answerIndex: number
  explanation: string
}

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = questions[currentIndex]

  const handleSelect = (index: number) => {
    if (showExplanation) return // prevent changing answer after submission
    setSelectedOption(index)
  }

  const handleCheck = () => {
    if (selectedOption === null) return
    
    if (selectedOption === currentQuestion.answerIndex) {
      setScore((s) => s + 1)
    }
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((c) => c + 1)
      setSelectedOption(null)
      setShowExplanation(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowExplanation(false)
    setScore(0)
    setIsComplete(false)
  }

  if (isComplete) {
    const passed = score === questions.length
    return (
      <div className="my-8 rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
        <div className="mb-6 flex justify-center">
          <div className={`flex h-20 w-20 items-center justify-center rounded-full ${passed ? 'bg-accent-green/10' : 'bg-accent-yellow/10'}`}>
            <Award className={`h-10 w-10 ${passed ? 'text-accent-green' : 'text-accent-yellow'}`} />
          </div>
        </div>
        <h3 className="mb-2 font-heading text-3xl font-bold text-ink">
          {passed ? 'Perfect Score!' : 'Quiz Complete'}
        </h3>
        <p className="mb-8 font-body text-lg text-muted-light">
          You scored <strong className="text-ink">{score}</strong> out of <strong className="text-ink">{questions.length}</strong>.
        </p>
        {!passed && (
          <button
            onClick={handleRestart}
            className="rounded-full bg-bg px-6 py-3 font-heading font-semibold text-ink border border-border hover:bg-white/5 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="my-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-heading text-sm font-bold uppercase tracking-wider text-accent-blue">
          Checkpoint Quiz
        </span>
        <span className="font-body text-sm font-medium text-muted-light">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <h3 className="mb-6 font-heading text-xl font-bold leading-relaxed text-ink sm:text-2xl">
        {currentQuestion.question}
      </h3>

      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedOption === idx
          const isCorrectAnswer = idx === currentQuestion.answerIndex
          
          let stateClass = "border-border bg-bg hover:border-accent-blue/50"
          
          if (showExplanation) {
            if (isCorrectAnswer) {
              stateClass = "border-accent-green bg-accent-green/10"
            } else if (isSelected && !isCorrectAnswer) {
              stateClass = "border-accent-red bg-accent-red/10 opacity-70"
            } else {
              stateClass = "border-border bg-bg opacity-50"
            }
          } else if (isSelected) {
            stateClass = "border-accent-blue bg-accent-blue/10"
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showExplanation}
              className={`flex w-full items-center justify-between rounded-xl border p-4 text-left font-body text-sm sm:text-base transition-all ${stateClass}`}
            >
              <span className="font-medium text-ink">{option}</span>
              {showExplanation && isCorrectAnswer && <CheckCircle2 className="h-5 w-5 text-accent-green" />}
              {showExplanation && isSelected && !isCorrectAnswer && <XCircle className="h-5 w-5 text-accent-red" />}
            </button>
          )
        })}
      </div>

      {showExplanation && (
        <div className="mt-6 rounded-xl border border-accent-yellow/20 bg-accent-yellow/10 p-5">
          <p className="font-body text-sm leading-relaxed text-ink/90">
            <strong className="font-bold text-accent-yellow">Explanation: </strong>
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      <div className="mt-8 flex justify-end">
        {!showExplanation ? (
          <button
            onClick={handleCheck}
            disabled={selectedOption === null}
            className="flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 font-heading text-sm font-bold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-full bg-accent-blue px-6 py-2.5 font-heading text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
