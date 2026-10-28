import { useEffect, useState } from 'react'
import Particles from '../components/Particles'
import FolderFloat from '../components/FolderFloat'
import './Hero.css'

// Your details: change these
const EMAIL = 'your-email@example.com'
const GITHUB = 'https://github.com/Aakarsh1506'
const RESUME = '/assets/Aakarsh Singh - Resume.pdf'

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

const TYPING_SPEED = 60 // milliseconds per letter
const total = lines.reduce((sum, line) => sum + line.text.length, 0)

export default function Hero() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= total) return
    const timer = setTimeout(() => setCount((c) => c + 1), TYPING_SPEED)
    return () => clearTimeout(timer)
  }, [count])

  // Find which line is being typed right now, so only that line shows the caret
  let activeIndex = -1
  let start = 0
  for (let i = 0; i < lines.length; i++) {
    if (count < start + lines[i].text.length) {
      activeIndex = i
      break
    }
    start += lines[i].text.length
  }

  let remaining = count

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Particles
          particleColors={['#38bdf8', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          moveParticlesOnHover={true}
          alphaParticles={false}
          particleBaseSize={100}
          disableRotation={false}
          connections={true}
        />
      </div>

      <div className="hero-layout">
        <div className="hero-content">
          {lines.map((line, index) => {
            const shown = line.text.slice(0, Math.max(0, Math.min(line.text.length, remaining)))
            remaining -= line.text.length
            const showCaret = index === activeIndex

            return (
              <p key={index} className={line.className} aria-label={line.text}>
                {shown}
                {showCaret && <span className="caret" aria-hidden="true" />}
              </p>
            )
          })}
        </div>

        <div className="hero-side">
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
      </div>
    </section>
  )
}