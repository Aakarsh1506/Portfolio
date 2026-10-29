# Aakarsh Singh - Portfolio

Personal portfolio website for **Aakarsh Singh**, a second-year B.Tech Information Technology student at SVKM's NMIMS MPSTME, Mumbai.

Live sections: Hero, About, Projects, Experience, Skills and Contact.

---

## About me

I am a second-year B.Tech Information Technology student at SVKM's NMIMS MPSTME. I am the Sub-Head of Technicals at FOSS Club MPSTME, and the Sub Head of the Technical Dept at Social Conclave. I enjoy building things for the web and turning ideas into working products.

Outside of college I support Manchester City, play football and badminton, and enjoy keeping active alongside the technical work.

**Projects featured on the site:** Fitry, Guess It, Tranzlator, Study Forge and Simulator FC.

---

## Folder structure

```
portfolio/
├── node_modules/
├── public/
│   ├── assets/
│   │   ├── projects/        # Project card images (.webp)
│   │   └── Profile.jpeg     # Photo on the lanyard ID card
│   ├── experience/          # Photos (photo-1.webp ... photo-9.webp)
│   └── Aakarsh Singh - Resume.pdf
├── src/
│   ├── components/
│   │   ├── CircularCarousel.jsx / .css   # Projects carousel
│   │   ├── FolderFloat.jsx / .css        # Quick links folder (desktop Hero)
│   │   ├── Lanyard.jsx / .css            # 3D ID card (About)
│   │   ├── Navbar.jsx / .css             # Sticky navigation bar
│   │   └── Particles.jsx / .css          # WebGL particle background
│   ├── hooks/
│   │   └── useIsMobile.js                # Detects phone-sized screens
│   ├── sections/
│   │   ├── About.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   └── Skills.jsx / .css
│   ├── App.css              # Particle background layer
│   ├── App.jsx              # Page layout and section order
│   ├── index.css            # Global styles and design tokens
│   └── main.jsx             # App entry point
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Running locally

**Requirements:** Node.js 18 or newer, and npm.

1. **Clone or download** the project and open the `portfolio` folder in a terminal.

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open the site.** Run locally on `http://localhost:3000`. If the port is busy, Vite picks the next free one and prints it.

5. **Build for production** (optional):

   ```bash
   npm run build
   npm run preview
   ```

**Testing on a phone:** `vite.config.js` can be set to `host: true` so a phone on the same Wi-Fi can open the address printed as `Network:` in the terminal.

---

## Tech stack

| Area | Technology |
| --- | --- |
| UI library | React |
| Build tool | Vite |
| Styling | Plain CSS with custom properties |
| 3D ID card | Three.js |
| Particle background | WebGL2 (custom component) |
| Folder animation | matter-js |
| Font | Terminess (monospace headings and labels) |
| Linting | oxlint |
| Package manager | npm |

---

## Customising

- **Your details:** edit the `EMAIL`, `GITHUB` and `RESUME` constants at the top of `src/sections/Hero.jsx`.
- **Projects:** edit the `projects` array in `src/sections/Projects.jsx`.
- **Experience:** edit the `experiences` array in `src/sections/Experience.jsx`.
- **Skills:** edit `skillGroups` in `src/sections/Skills.jsx`.
- **Contact links:** edit the `contacts` array in `src/sections/Contact.jsx`.
- **Colours:** change the design tokens in `:root` in `src/index.css`.

---

## Contact

- Email: singhaakarsh1506@gmail.com
- GitHub: https://github.com/Aakarsh1506