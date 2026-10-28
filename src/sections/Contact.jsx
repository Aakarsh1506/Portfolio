import './Contact.css'

const contacts = [
  {
    label: 'Phone',
    value: '+91-9833303063',
    href: 'tel:+919833303063',
    icon: (
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    ),
  },
  {
    label: 'Email',
    value: 'singhaakarsh1506@gmail.com',
    href: 'mailto:singhaakarsh1506@gmail.com',
    icon: (
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Aakarsh Singh',
    href: 'https://www.linkedin.com/in/YOUR-USERNAME',
    external: true,
    icon: (
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18v-8.5H5.5V18h2.84zM6.92 8.32a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3zM18.5 18v-4.9c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.2.8-2.5 1.4V9.5h-2.8c0 .6 0 8.5 0 8.5h2.8v-4.7c0-.3 0-.5.1-.7.2-.5.7-1 1.4-1 1 0 1.4.7 1.4 1.8V18h2.8z" />
    ),
  },
  {
    label: 'GitHub',
    value: 'Aakarsh Singh',
    href: 'https://github.com/YOUR-USERNAME',
    external: true,
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <header className="contact-header">
        <p className="contact-eyebrow">05 / Contact</p>
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">Let&apos;s build something amazing together.</p>
      </header>

      <ul className="contact-list">
        {contacts.map((item) => (
          <li key={item.label}>
            <a
              className="contact-item"
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  {item.icon}
                </svg>
              </span>

              <span className="contact-text">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </span>

              <span className="contact-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="contact-footer">© 2026 Aakarsh Singh</footer>
    </section>
  )
}