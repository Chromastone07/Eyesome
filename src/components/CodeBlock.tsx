import { HTMLAttributes, isValidElement } from 'react'
import MermaidDiagram from './MermaidDiagram'

interface CodeChildProps {
  className?: string
  children?: string
}

export default function CodeBlock(props: HTMLAttributes<HTMLPreElement>) {
  const child = props.children

  if (!isValidElement(child)) {
    return (
      <pre className="not-prose my-6 overflow-x-auto rounded-lg bg-ink p-4">
        {props.children}
      </pre>
    )
  }

  const { className, children } = child.props as CodeChildProps
  const language = className?.replace('language-', '') ?? ''
  const code = typeof children === 'string' ? children.trim() : ''

  if (language === 'mermaid') {
    return <MermaidDiagram chart={code} />
  }

  return (
    <pre className="not-prose my-6 overflow-x-auto rounded-lg bg-ink p-4">
      <code
        className={`font-mono text-[13px] leading-relaxed text-white/90 ${
          className ?? ''
        }`}
      >
        {children}
      </code>
    </pre>
  )
}
