import CircularCarousel from '../components/CircularCarousel'
import './Projects.css'

// Each project: image, title, subtitle, and the link that opens on click
const projects = [
  {
    title: 'Fitry',
    subtitle: 'Tech career discovery · React',
    alt: 'Fitry tech career discovery platform',
    src: '/public/projects/fitry.webp',
    href: 'https://fitry-2df38.web.app',
  },
  {
    title: 'Guess It',
    subtitle: 'Guessing game',
    alt: 'Guess It game',
    src: '/assets/projects/guess-it.jpg',
    href: 'https://github.com/FOSS-Club-MPSTME/Guess-It',
  },
  {
    title: 'Tranzlator',
    subtitle: 'Translation app',
    alt: 'Tranzlator translation app',
    src: '/public/projects/tranzlator.webp',
    href: 'https://tranzlator-translate.vercel.app ',
  },
  {
    title: 'Study Forge',
    subtitle: 'Study planner',
    alt: 'Study Forge study planner',
    src: '/public/projects/studyforge.webp',
    href: 'https://study-ai-forge.netlify.app',
  },
  {
    title: 'Simulator FC',
    subtitle: 'Simulator',
    alt: 'Simulator FC',
    src: '/public/projects/simulator-fc.webp',
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
          autoplay="off"
          focusOnClick={false}
          onItemClick={openProject}
        />
      </div>
    </section>
  )
}