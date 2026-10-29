import CircularCarousel from '../components/CircularCarousel'
import './Projects.css'

// Each project: image, title, subtitle, and the link that opens on click
const projects = [
  {
    title: 'Fitry',
    subtitle: 'Tech career discovery',
    alt: 'Fitry tech career discovery platform',
    src: '/public/assets/projects/fitry.webp',
    href: 'https://fitry-2df38.web.app',
  },
  {
    title: 'Guess It',
    subtitle: '4 Guessing games in one',
    alt: 'Guess It game',
    src: '/public/assets/projects/guess-it.webp',
    href: 'https://github.com/FOSS-Club-MPSTME/Guess-It',
  },
  {
    title: 'Tranzlator',
    subtitle: 'Lnaguage Translation app',
    alt: 'Tranzlator translation app',
    src: '/public/assets/projects/tranzlator.webp',
    href: 'https://tranzlator-translate.vercel.app ',
  },
  {
    title: 'Study Forge',
    subtitle: 'Ai study Planner for students',
    alt: 'Study Forge study planner',
    src: '/public/assets/projects/studyforge.webp',
    href: 'https://study-ai-forge.netlify.app',
  },
  {
    title: 'Simulator FC',
    subtitle: 'FIFA World Cup 2026 Simulator',
    alt: 'Simulator FC',
    src: '/public/assets/projects/simulator-fc.webp',
    href: 'https://simulator-fc.vercel.app',
  },
]

export default function Projects() {
  // Opens the project link in a new tab
  const openProject = (item) => {
    window.open(item.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <p className="projects-eyebrow">02 / Projects</p>
        <h2 className="projects-title">Projects</h2>
        <p className="projects-hint">Drag or scroll to browse. Click a card to open the project.</p>
      </div>

      <div className="projects-carousel">
        <CircularCarousel
          items={projects}
          preset="cylinder"
          captions
          cardWidth={300}
          aspectRatio={1.5}
          gap={200}
          tilt={-8}
          autoplay="drift"
          focusOnClick={false}
          onItemClick={openProject}
        />
      </div>
    </section>
  )
}