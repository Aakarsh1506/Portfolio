import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import useIsMobile from './hooks/useIsMobile'
import './App.css'

export default function App() {
  const isMobile = useIsMobile()

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <Particles
          particleColors={['#38bdf8', '#ffffff']}
          particleCount={isMobile ? 120 : 400}
          particleSpread={10}
          speed={0.1}
          moveParticlesOnHover={!isMobile}
          alphaParticles={false}
          particleBaseSize={100}
          disableRotation={false}
          connections={!isMobile}
        />
      </div>

      <Navbar />
      <main className="site-main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}