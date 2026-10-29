import { useEffect, useState } from 'react'
import FolderFloat from '../components/FolderFloat'
import useIsMobile from '../hooks/useIsMobile'
import './Hero.css'

// Your details: change these
const EMAIL = 'singhaakarsh1506@gmail.com'
const GITHUB = 'https://github.com/Aakarsh1506'
const RESUME = '/Aakarsh Singh - Resume.pdf' // file inside the public folder

const quickLinks = [
  { label: 'Download Resume', value: 'resume' },
  { label: 'Contact Me', value: 'contact' },
  { label: 'Check GitHub', value: 'github' },
  { label: 'See Projects', value: 'projects' },
]

const handleQuickLink = (value) => {
  if (value === 'resume') {
    const a = document.createElement('a')
    a.href = RESUME
    a.download = 'Aakarsh_Singh_Resume.pdf'
    document.body.appendChild(a)
    a.click()
    a.remove()
  } else if (value === 'contact') {
    window.location.href = `mailto:${EMAIL}`
  } else if (value === 'github') {
    window.open(GITHUB, '_blank', 'noopener,noreferrer')
  } else if (value === 'projects') {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const lines = [
  { text: 'Welcome!', className: 'hero-line hero-line-big' },
  { text: "I'm", className: 'hero-line hero-line-big' },
  { text: 'Aakarsh', className: 'hero-line hero-line-name' },
  { text: 'Singh', className: 'hero-line hero-line-name' },
  {
    text: "I am a second year B.Tech Information Technology student at SVKM'S NMIMS MPSTME.",
    className: 'hero-line hero-line-body',
  },
]

// The last line is the paragraph. It is not typed, it appears all at once.
const headingLines = lines.slice(0, -1)
const bodyIndex = lines.length - 1

const TYPING_SPEED = 50 // milliseconds per letter (lower = faster)
const headingTotal = headingLines.reduce((sum, line) => sum + line.text.length, 0)

export default function Hero() {
  const [count, setCount] = useState(0)
  const isMobile = useIsMobile()

  // Type only the heading. Stop once every heading letter is shown.
  useEffect(() => {
    if (count >= headingTotal) return
    const timer = setTimeout(() => setCount((c) => c + 1), TYPING_SPEED)
    return () => clearTimeout(timer)
  }, [count])

  // True once the heading and the paragraph are fully shown
  const textDone = count >= headingTotal

  // Find which heading line is being typed right now, so only that line shows the caret
  let activeIndex = -1
  let start = 0
  for (let i = 0; i < headingLines.length; i++) {
    if (count < start + headingLines[i].text.length) {
      activeIndex = i
      break
    }
    start += headingLines[i].text.length
  }

  let remaining = count

  return (
    <section id="top" className="hero">
      <div className="hero-layout">
        <div className="hero-content">
          {lines.map((line, index) => {
            const isBody = index === bodyIndex
            let shown

            if (isBody) {
              // Paragraph appears all at once after the heading finishes
              shown = textDone ? line.text : ''
            } else {
              shown = line.text.slice(0, Math.max(0, Math.min(line.text.length, remaining)))
              remaining -= line.text.length
            }

            const showCaret = !isBody && index === activeIndex

            return (
              <p key={index} className={line.className} aria-label={line.text}>
                {shown}
                {showCaret && <span className="caret" aria-hidden="true" />}
              </p>
            )
          })}
        </div>

        {/* Folder appears on desktop only, after the text has finished */}
        {!isMobile && textDone && (
          <div className="hero-side hero-side--show">
            <FolderFloat
              items={quickLinks}
              label="Quick links"
              sublabel="Tap to open"
              onSelect={handleQuickLink}
              folderColor="#38bdf8"
              frontColor="#7dd3fc"
              paperColor="#f5f5f0"
              itemColor="#e0f2fe"
              itemTextColor="#0a0a0a"
              labelColor="#0a0a0a"
              width={240}
              height={180}
            />
          </div>
        )}
      </div>
    </section>
  )
}