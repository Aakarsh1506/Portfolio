import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { id: 'top', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu when the screen is resized to desktop
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="site-nav"
      >
        <span>{open ? 'CLOSE' : 'MENU'}</span>
        <b aria-hidden="true">{open ? '×' : '+'}</b>
      </button>

      <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.id === 'top' ? '#top' : `#${link.id}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}