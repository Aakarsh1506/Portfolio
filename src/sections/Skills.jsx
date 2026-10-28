import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Git', 'GitHub', 'Firebase'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <header className="skills-header">
        <p className="skills-eyebrow">04 / Skills</p>
        <h2 className="skills-title">Skills</h2>
      </header>

      <div className="skills-timeline">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills-step">
            <span className="skills-node" aria-hidden="true" />

            <article className="skills-card">
              <h3 className="skills-card-title">{group.title}</h3>

              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item} className="skills-item">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}