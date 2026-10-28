import Lanyard from '../components/Lanyard'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <p className="about-eyebrow">01 / About</p>
        <h2 className="about-title">About me</h2>

        <p className="about-body">
          I am a second year B.Tech Information Technology student at SVKM&apos;S NMIMS MPSTME, Mumbai.
          I enjoy building things for the web and turning ideas into working products.
        </p>

        <p className="about-body">
          I am the Sub-Head of Technicals at FOSS Club MPSTME, where I organise events, hackathons and
          technical initiatives for the club. Working on projects with other students has taught me
          how much better things get when a team builds them together.
        </p>

        <p className="about-body">
          Outside of code I play football and I am learning game development. Those interests keep me
          curious, competitive and always looking for the next thing to build.
        </p>
      </div>

      <div className="about-visual">
        <Lanyard
          frontImage="/assets/Profile.jpeg"
          imageFit="cover"
          cardColor="#f5f5f0"
          strapColor="#38bdf8"
          finish="glossy"
          orientation="portrait"
          anchor="right"
        />
      </div>
    </section>
  )
}