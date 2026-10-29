import Lanyard from '../components/Lanyard'
import useIsMobile from '../hooks/useIsMobile'
import './About.css'

export default function About() {
  const isMobile = useIsMobile()

  return (
    <section id="about" className="about">
      <div className="about-text">
        <p className="about-eyebrow">01 / About</p>
        <h2 className="about-title">About me</h2>

        <p className="about-body">
          I am a second year B.Tech Information Technology student at SVKM&apos;S NMIMS MPSTME, Mumbai. I like
          building things for the web and turning ideas into working products.
        </p>

        <p className="about-body">
          I am the Sub-Head of Technicals at FOSS Club MPSTME, where I help plan events, hackathons and technical
          initiatives. I am also the Sub Head of the Technical Dept at Social Conclave, where I am building the
          website and the attendance system for the event.
        </p>

        <p className="about-body">
          I am a big football fan and I support Manchester City. In my free time I play football and badminton,
          and I like keeping active alongside the technical work.
        </p>
      </div>

      <div className="about-visual">
        <Lanyard
          className="about-lanyard"
          frontImage="/assets/Profile.jpeg"
          imageFit="cover"
          cardColor="#f5f5f0"
          strapColor="#38bdf8"
          finish="glossy"
          orientation="portrait"
          anchor={isMobile ? 'center' : 'right'}
          strapLength={isMobile ? 0 : 0.5}
        />
      </div>
    </section>
  )
}