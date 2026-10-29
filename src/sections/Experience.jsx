import { useLayoutEffect, useRef, useState } from 'react'
import './Experience.css'

// Edit the description and skills for each role here
const experiences = [
  {
    role: 'Sub Head - Technical Dept.',
    org: 'FOSS MPSTME',
    period: 'Apr 2026 – Present',
    description:
      'As Sub Head of the Technical Dept, I make the final decisions on what each event will be and how it is planned, from the concept to the execution.',
    skills: ['JavaScript', 'React.js', 'Python'],
  },
  {
    role: 'Executive - Technical Dept.',
    org: 'FOSS MPSTME',
    period: 'Aug 2025 – Apr 2026',
    description:
      'Worked as an Executive in the Technical Dept, supporting the club\'s events and technical initiatives and learning how a tech team plans and delivers them.',
    skills: ['C', 'Python'],
  },
  {
    role: 'Sub Head - Technical Dept.',
    org: 'Social Conclave',
    period: 'Sep 2026 – Present',
    description:
      'As Sub Head of the Technical Dept, I am building the website for Social Conclave and developing its attendance system, so the event runs smoothly from registration to check-in.',
    skills: ['JavaScript', 'React.js', 'Node.js', 'Express.js'],
  },
  {
    role: 'AGM Executive',
    org: 'Sattva NMIMS',
    period: 'Dec 2025 – May 2026',
    description:
      'As AGM Executive, I managed the artists and guests for Sattva events, handling their coordination so each performance and guest visit ran on schedule.',
    skills: ['Public Speaking', 'Event Management'],
  },
  {
    role: 'Executive - Technical Dept.',
    org: 'ACM MPSTME',
    period: 'Sep 2025 – May 2026',
    description:
      'Worked as an Executive in the Technical Dept, learning through project work and building Fitry, a personalised tech-career discovery platform for beginners.',
    skills: ['JavaScript', 'React.js', 'Python', 'MySQL'],
  },
]

// One tab per organisation, in the order they first appear
const orgs = [...new Set(experiences.map((item) => item.org))]

export default function Experience() {
  const [activeOrg, setActiveOrg] = useState(orgs[0])
  const [underline, setUnderline] = useState({ left: 0, width: 0 })
  const tabRefs = useRef({})

  // Position the sliding underline under the active tab.
  // It runs again on resize so the line stays aligned.
  useLayoutEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[activeOrg]
      if (tab) setUnderline({ left: tab.offsetLeft, width: tab.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [activeOrg])

  const roles = experiences.filter((item) => item.org === activeOrg)

  return (
    <section id="experience" className="experience">
      <header className="experience-header">
        <p className="experience-eyebrow">03 / Experience</p>
        <h2 className="experience-title">Experience</h2>
      </header>

      <div className="experience-tabs" role="tablist" aria-label="Organisations">
        {orgs.map((org) => (
          <button
            key={org}
            ref={(el) => {
              tabRefs.current[org] = el
            }}
            type="button"
            role="tab"
            aria-selected={activeOrg === org}
            className="experience-tab"
            onClick={() => setActiveOrg(org)}
          >
            {org}
          </button>
        ))}
        <span
          className="experience-underline"
          aria-hidden="true"
          style={{ transform: `translateX(${underline.left}px)`, width: underline.width }}
        />
      </div>

      <div className="exp-panel" key={activeOrg} role="tabpanel">
        {roles.map((item) => (
          <article key={item.role + item.period} className="exp-role">
            <p className="exp-period">{item.period}</p>
            <h3 className="exp-role-title">{item.role}</h3>
            <p className="exp-text">{item.description}</p>

            {item.skills.length > 0 && (
              <ul className="exp-skills">
                {item.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}