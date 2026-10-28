import DriftWall from '../components/DriftWall'
import './Experience.css'

// Roles at the same organisation are grouped, newest first
const experiences = [
  {
    org: 'FOSS MPSTME',
    duration: '1 yr 3 mos',
    roles: [
      { title: 'Sub Head - Technical Dept.', period: 'Apr 2026 – Present' },
      { title: 'Executive - Technical Dept.', period: 'Aug 2025 – Apr 2026' },
    ],
  },
  {
    org: 'Social Conclave',
    roles: [{ title: 'Sub Head - Technical Dept.', period: 'Sep 2026 – Present' }],
  },
  {
    org: 'Sattva NMIMS',
    roles: [{ title: 'AGM Executive', period: 'Dec 2025 – May 2026' }],
  },
  {
    org: 'ACM MPSTME',
    roles: [{ title: 'Executive - Technical Dept.', period: 'Sep 2025 – May 2026' }],
  },
]

// Photos for the wall: add files to public/assets/experience/ as photo-1.jpg ... photo-10.jpg
const wallPhotos = Array.from({ length: 9 }, (_, i) => ({
  image: `/experience/photo-${i + 1}.webp`,
  title: `Experience photo ${i + 1}`,
}))

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <div className="experience-main">
          <header className="experience-header">
            <p className="experience-eyebrow">03 / Experience</p>
            <h2 className="experience-title">Experience</h2>
          </header>

          <ol className="timeline">
            {experiences.map((item) => (
              <li key={item.org} className="timeline-group">
                <div className="timeline-org">
                  <span className="timeline-org-node" aria-hidden="true" />
                  <h3 className="timeline-org-name">{item.org}</h3>
                  {item.duration && <span className="timeline-duration">{item.duration}</span>}
                </div>

                {item.roles.map((role) => (
                  <div key={role.title + role.period} className="timeline-role">
                    <span className="timeline-role-node" aria-hidden="true" />
                    <p className="timeline-role-title">{role.title}</p>
                    <p className="timeline-date">{role.period}</p>
                  </div>
                ))}
              </li>
            ))}
          </ol>
        </div>

        <div className="experience-wall">
          <DriftWall
            items={wallPhotos}
            columns={3}
            tileWidth={180}
            tileHeight={120}
            gap={14}
            speed={30}
          />
        </div>
      </div>
    </section>
  )
}