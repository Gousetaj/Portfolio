import { useState } from "react";
import { profile, experience, projects, skills } from "./data.js";

const PLATE = "TS 09 EB 4821";

function GateDemo() {
  const [open, setOpen] = useState(false);
  const c = open ? "var(--ok)" : "#5b8cff";
  return (
    <figure className="demo">
      <svg viewBox="0 0 400 250" role="img" aria-label="Camera view of a car at a gate with a detection box around the number plate">
        <rect width="400" height="250" fill="#18213a" />
        <rect y="190" width="400" height="60" fill="#222c47" />
        <g stroke="#2f3b5c"><path d="M0 205H400M0 225H400" /></g>
        <ellipse cx="200" cy="203" rx="118" ry="9" fill="#0b1020" opacity=".55" />
        {/* barrier */}
        <rect x="14" y="150" width="14" height="52" rx="3" fill="#8793ad" />
        <g style={{ transformOrigin: "21px 158px", transition: "transform .7s ease", transform: open ? "rotate(-72deg)" : "none" }}>
          <rect x="21" y="154" width="86" height="8" rx="3" fill="#f2f4f8" />
          <path d="M40 154h12l-8 8h-12zM64 154h12l-8 8h-12zM88 154h12l-8 8h-12z" fill="#e5484d" />
        </g>
        {/* car, rear view */}
        <rect x="112" y="186" width="38" height="16" rx="4" fill="#0d1224" />
        <rect x="250" y="186" width="38" height="16" rx="4" fill="#0d1224" />
        <path d="M128 122l16-42q4-9 14-9h84q10 0 14 9l16 42z" fill="#b9c2d3" />
        <path d="M148 118l12-32q2-5 8-5h64q6 0 8 5l12 32z" fill="#2a3552" />
        <rect x="96" y="116" width="208" height="76" rx="18" fill="#cfd6e4" />
        <rect x="96" y="160" width="208" height="32" rx="12" fill="#a4aec2" />
        <rect x="104" y="128" width="42" height="16" rx="5" fill="#e5484d" />
        <rect x="254" y="128" width="42" height="16" rx="5" fill="#e5484d" />
        <rect x="168" y="151" width="64" height="21" rx="3" fill="#fff" stroke="#1b2236" />
        <text x="200" y="165.5" textAnchor="middle" fontSize="10.5" fontWeight="700" fontFamily="Inter, sans-serif" fill="#1b2236">{PLATE}</text>
        {/* detection zone + box */}
        <rect x="84" y="104" width="232" height="96" rx="6" fill="none" stroke="#5b8cff" strokeDasharray="5 4" opacity=".6" />
        <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round">
          <path d="M158 160v-14h14M242 160v-14h-14M158 163v14h14M242 163v14h-14" />
        </g>
        <rect x="158" y="124" width={open ? 78 : 112} height="17" rx="3" fill={c} />
        <text x="164" y="136" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif" fill="#fff">{open ? "Gate open" : "Plate read · 96%"}</text>
        <text x="14" y="24" fontSize="10" fontFamily="Inter, sans-serif" fill="#b3bdd4">GATE A · CAMERA 02</text>
        <circle cx="352" cy="20" r="4" fill="#e5484d" />
        <text x="388" y="24" textAnchor="end" fontSize="10" fontFamily="Inter, sans-serif" fill="#b3bdd4">LIVE</text>
      </svg>
      <figcaption>
        <div>
          <strong>Manual gate fallback</strong>
          <span>If auto-open fails, the operator opens the gate and the OCR-read plate fills the entry.</span>
        </div>
        <button onClick={() => setOpen(!open)} aria-pressed={open}>{open ? "Close gate" : "Open gate"}</button>
      </figcaption>
    </figure>
  );
}

const Section = ({ id, title, children }) => (
  <section id={id} className="wrap sec">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="navin">
          <a href="#top" className="brand">Mohammed Gouse</a>
          <nav>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div>
            <p className="meta">{profile.role} · {profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.intro}</p>
            <p className="facts">3 years in enterprise SaaS · React.js · Vue.js · TypeScript</p>
            <p className="links">
              <a className="btn" href="#contact">Get in touch</a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
          <GateDemo />
        </section>

        <Section id="experience" title="Experience">
          <div className="timeline">
            {experience.map((j) => (
              <article key={j.role}>
                <div className="row"><h3>{j.role}</h3><span className="meta">{j.when}</span></div>
                <p className="org">{j.company} · Client: {j.client}</p>
                <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          {projects.map((p) => (
            <article className="project" key={p.name}>
              <h3>{p.name}</h3>
              <p className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</p>
              <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="lead">Open to frontend roles building React and Vue products.</p>
          <p className="links">
            <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </p>
        </Section>
      </main>
      <footer className="wrap foot">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
