import { useEffect, useRef, useState } from 'react';
import { portfolioData as D } from './portfolioData';

const PATHS = {
  home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  briefcase: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  message: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6',
  play: 'M5 3l14 9-14 9z',
  image: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M21 15l-5-5L5 21',
  code: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
  mouse: 'M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z M12 6v4',
};
const Icon = ({ n, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>
);

const MODES = [
  { id: 'dark', label: 'Volt', dots: ['#030407', '#1558C9', '#D4FF24'] },
  { id: 'light', label: 'Orchid', dots: ['#E7B0DE', '#400849', '#FF5A0A'] },
];
const NAV = [['home', 'home'], ['about', 'user'], ['skills', 'book'], ['work', 'briefcase'], ['contact', 'message']];

const initialMode = () => {
  try { const m = localStorage.getItem('kv-mode'); if (m) return m; } catch { /* ignore */ }
  return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};
const initials = (t) => t.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
const isAI = (p) => /\b(AI|ML|CNN|LLM|RAG)\b|Deep|Generative|Agent|Machine|Evals/.test(`${p.category} ${p.technologies.join(' ')}`);
const isWeb = (p) => /React|Node|Express|FastAPI|Full Stack|Streamlit/.test(`${p.category} ${p.technologies.join(' ')}`);
const split = (s = '') => s.split(/,\s*/).map((x) => x.trim()).filter(Boolean);

const tiltMove = (e) => {
  if (e.pointerType !== 'mouse') return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
  e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
};
const tiltEnd = (e) => { e.currentTarget.style.transform = ''; };

const Cover = ({ pr, big }) => (
  <div className={`cover${big ? ' big' : ''}${pr.image ? '' : ' empty'}`}>
    {pr.image ? <img src={pr.image} alt={pr.title} loading="lazy" /> : <><Icon n="image" size={34} /><b>{initials(pr.title)}</b><small>Add screenshot: src/assets/projects/{pr.slug}.png</small></>}
  </div>
);

function Rv({ className = '', children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${className}`}>{children}</div>;
}

export default function App() {
  const p = D.personalInfo;
  const [mode, setMode] = useState(initialMode);
  const [active, setActive] = useState('home');
  const [filter, setFilter] = useState('all');
  const [sel, setSel] = useState(null);
  const bar = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    try { localStorage.setItem('kv-mode', mode); } catch { /* ignore */ }
  }, [mode]);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    const onScroll = () => {
      const m = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${m > 0 ? scrollY / m : 0})`;
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => {
    if (!sel) return undefined;
    const onKey = (e) => e.key === 'Escape' && setSel(null);
    addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [sel]);

  const projects = D.projects.filter((x) => filter === 'all' || (filter === 'ai' ? isAI(x) : isWeb(x)));
  const send = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    location.href = `mailto:${p.email}?subject=${encodeURIComponent('Portfolio message from ' + f.get('n'))}&body=${encodeURIComponent(f.get('t') + '\n\n' + f.get('n') + ' (' + f.get('m') + ')')}`;
  };
  const photo = (cls) => (p.image ? <img className={cls} src={p.image} alt={p.name} /> : <span className="ph">{initials(p.name)}</span>);
  const social = [['linkedin', p.linkedin], ['github', p.github]].filter(([, u]) => u);

  return (
    <>
      <div className="bar" ref={bar} />
      <header className="top">
        <a className="logo" href="#home">{p.name.split(' ')[1]}</a>
        <div className="seg" role="group" aria-label="Colour mode">
          {MODES.map((m) => (
            <button key={m.id} className={mode === m.id ? 'on' : ''} aria-pressed={mode === m.id} onClick={() => setMode(m.id)}>
              <span className="sw">{m.dots.map((c) => <i key={c} style={{ background: c }} />)}</span><span className="lb">{m.label}</span>
            </button>
          ))}
        </div>
      </header>

      <nav className="dock" aria-label="Sections">
        {NAV.map(([id, icon]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-label={id}><Icon n={icon} /></a>
        ))}
      </nav>

      <section id="home">
        <div className="rail">{social.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer" aria-label={n}><Icon n={n} size={20} /></a>)}<span className="line" /></div>
        <a className="sd" href="#about"><Icon n="mouse" size={26} /><span>Scroll Down</span></a>
        <div className="wrap hero">
          <div className="hero-text">
            <div className="sub">Hello, I’m</div>
            <h1>{p.name}</h1>
            <div className="role">{p.role}</div>
            <p className="mute">{p.tagline || p.aboutText}</p>
            {p.resumeUrl && <a className="btn fill" href={p.resumeUrl} target="_blank" rel="noreferrer">Download CV</a>}
            <a className={`btn${p.resumeUrl ? '' : ' fill'}`} href="#about">About me</a>
          </div>
          <div className="arch" onPointerMove={tiltMove} onPointerLeave={tiltEnd}>{photo()}</div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="sub">My intro</div><h2>About me</h2>
          <div className="about">
            <Rv><div className="pic">{photo()}</div></Rv>
            <Rv>
              <div className="stats">
                <div className="card stat"><b>{p.stats.projects}</b><span>Projects</span></div>
                <div className="card stat"><b>{p.stats.satisfaction}</b><span>Satisfaction</span></div>
                <div className="card stat"><b>{p.stats.internship}</b><span>Internships</span></div>
              </div>
              <p>{p.aboutText}</p><p>{p.aboutText2}</p>
              <a className="btn fill" href="#contact">Contact me</a>
              {D.currentlyExploring?.length > 0 && (
                <div className="exp"><b>Currently exploring</b><div className="tags">{D.currentlyExploring.map((x) => <span className="chip" key={x}>{x}</span>)}</div></div>
              )}
            </Rv>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="sub">My abilities</div><h2>Skills</h2>
          {Object.entries(D.skills).map(([g, items], i) => (
            <Rv key={g}><details open={i === 0}><summary>{g}</summary><div>{[...new Set(items)].map((s) => <span className="chip" key={s}>{s}</span>)}</div></details></Rv>
          ))}
          <h2 style={{ marginTop: 56 }}>Experience</h2>
          {D.experiences.map((x) => (
            <Rv key={x.company + x.duration} className="tl">
              <h3>{x.role} · {x.company}</h3><small>{x.duration}</small>
              <p>{x.description}</p><p className="mute">{x.achievements.trim()}</p>
              <div className="tags">{x.technologies.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </Rv>
          ))}
          <h2 style={{ marginTop: 56 }}>Certifications</h2>
          <div className="grid">
            {D.certifications.map((c) => (
              <Rv key={c.name}><div className="card"><h3>{c.name}</h3><p className="mute">{c.organization} · {c.date}</p>{c.link && <a className="lnk" href={c.link} target="_blank" rel="noreferrer">View certificate</a>}</div></Rv>
            ))}
            {D.achievements.map((a) => (
              <Rv key={a.title}><div className="card"><h3>{a.title}</h3><p className="mute">{a.organization} · {a.details}</p></div></Rv>
            ))}
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="sub">My portfolio</div><h2>Recent works</h2>
          <div className="filters">
            {[['all', 'All'], ['ai', 'AI'], ['web', 'Web']].map(([k, l]) => <button key={k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>{l}</button>)}
          </div>
          <div className="grid work">
            {projects.map((pr) => (
              <Rv key={pr.title} className="proj">
                <article className="card tilt click" role="button" tabIndex={0} aria-label={`Open details: ${pr.title.trim()}`} onClick={() => setSel(pr)} onKeyDown={(e) => e.key === 'Enter' && setSel(pr)} onPointerMove={tiltMove} onPointerLeave={tiltEnd}>
                  <Cover pr={pr} />
                  <h3>{pr.title.trim()}</h3>
                  <div className="links" onClick={(e) => e.stopPropagation()}>
                    {pr.live && pr.live !== '#' && <a href={pr.live} target="_blank" rel="noreferrer">Demo <Icon n="play" size={15} /></a>}
                    {pr.github && <a href={pr.github} target="_blank" rel="noreferrer">Code <Icon n="code" size={15} /></a>}
                  </div>
                  <span className="more">View full details</span>
                </article>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="sub">Get in touch</div><h2>Contact me</h2>
          <div className="about">
            <Rv>
              {p.email && <p><b>Email</b><br /><a className="lnk" href={`mailto:${p.email}`}>{p.email}</a></p>}
              {p.github && <p><b>GitHub</b><br /><a className="lnk" href={p.github} target="_blank" rel="noreferrer">{p.github}</a></p>}
              {p.linkedin && <p><b>LinkedIn</b><br /><a className="lnk" href={p.linkedin} target="_blank" rel="noreferrer">{p.linkedin}</a></p>}
            </Rv>
            <Rv>
              <form onSubmit={send}>
                <input name="n" placeholder="Your name" aria-label="Your name" required />
                <input name="m" type="email" placeholder="Your email" aria-label="Your email" required />
                <textarea name="t" rows="5" placeholder="Your message" aria-label="Your message" required />
                <button className="btn fill" type="submit">Send message</button>
              </form>
            </Rv>
          </div>
        </div>
        <footer>© 2026 {p.name}. All rights reserved.</footer>
      </section>
      {sel && (
        <div className="modal" onClick={() => setSel(null)}>
          <div className="sheet card" role="dialog" aria-modal="true" aria-label={sel.title} onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => setSel(null)} aria-label="Close">✕</button>
            <Cover pr={sel} big />
            <div className="sub" style={{ marginTop: 16 }}>{sel.category}</div>
            <h3>{sel.title.trim()}</h3>
            <p>{sel.description.trim()}</p>
            {split(sel.features).length > 0 && (<><h4>Key features</h4><ul>{split(sel.features).map((f) => <li key={f}>{f}</li>)}</ul></>)}
            <h4>Tech stack</h4>
            <div className="tags">{sel.technologies.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <div className="links">
              {sel.live && sel.live !== '#' && <a className="btn fill" href={sel.live} target="_blank" rel="noreferrer">Live demo</a>}
              {sel.github && <a className="btn" href={sel.github} target="_blank" rel="noreferrer">View code</a>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}