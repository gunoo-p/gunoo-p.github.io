import { useEffect, useRef, useState } from 'react'
import './App.css'

const profile = {
  name: '박건우',
  role: '소프트웨어 개발자',
  birthday: '2001-04-05',
  email: 'gunoo0387@naver.com',
  github: 'https://github.com/gunoo-p',
  photo: '/profile.jpg',
  intro:
    '음성인식 키오스크 QA·유지보수부터 비접촉 온도측정기 개발, 웹/모바일 프론트엔드 개발까지 다양한 환경에서 직접 문제를 찾아 해결해온 개발자입니다. 최신 기술 동향을 꾸준히 살피고, 새로운 변화를 열린 자세로 받아들이며 배우고 있습니다.',
}

const experiences = [
  {
    company: '주식회사날다',
    period: '2019.12 - 2021.09 (1년 10개월)',
    title: '개발부 주임',
    highlights: [
      { title: '음성인식 키오스크 QA · 유지관리', period: '2020.09–2021.07', description: '사용자 시나리오 기반 기능·예외 테스트, 전원·센서 점검과 현장 오류 수정.', tech: 'C++ · Windows' },
      { title: '사내 인트라넷 프론트엔드 개발', period: '2020.09–2020.10', description: '게시판 목록·등록·수정·상세 화면 구현.', tech: 'JSP · HTML · CSS · JavaScript · eGovFrame' },
      { title: '카페 모바일 앱 프론트엔드 개발', period: '2021.01–2021.02', description: 'Android UI 구성과 화면 전환, 사용자 입력 이벤트 처리.', tech: 'Java · Android Studio' },
      { title: 'World IT Show 전시 참여', period: '2021.04', description: 'COEX 키오스크 설치·시연 환경 구축, 방문객 시연 및 현장 이슈 대응.' },
      { title: '비접촉 온도측정기 개발', period: '2021.06–2021.07', description: 'ESP32 기반 하드웨어·펌웨어 개발부터 판매까지 전 과정 주도.', tech: 'ESP32 · OpenCV · Arduino C++' },
    ],
  },
]

const projects = [
  {
    name: '반도체 클린룸 모니터링 대시보드',
    flowTitle: '센서 데이터 전달 과정',
    flow: [['센서 수집', 'wave'], ['FastAPI', 'api'], ['대시보드', 'dashboard']],
    kind: 'IoT · 웹 대시보드',
    period: '2026.07',
    description:
      '센서(온도·습도·차압·가스·공기질)로 반도체 클린룸 환경을 실시간 모니터링하고, 추세 기반 설비 이상 예측과 과거 이벤트 로그를 보여주는 웹 대시보드. MQTT로 센서 데이터를 전달하고 TimescaleDB에 저장하며, Claude API로 로그를 요약합니다.',
    tech: 'ESP32, FastAPI, React, Docker',
    link: 'https://github.com/gunoo-p/cleanroom-dashboard',
  },
  {
    name: 'HUR',
    flowTitle: '나만의 뷰티 스타일 탐색',
    flowMode: 'features',
    flow: [['메이크업 피드', 'phone'], ['화장품 탐색', 'search'], ['사진 공유', 'edit']],
    kind: '백엔드 메인 · DevOps',
    period: '2026.03 - 2026.06',
    description: '퍼스널 컬러와 선호 스타일을 바탕으로 메이크업 피드와 화장품을 탐색하는 뷰티 커뮤니티 앱입니다.',
    tech: 'Flutter, Node.js, PostgreSQL, Docker',
    link: 'https://github.com/App-Legend/HUR',
    plan: 'https://polished-jodhpur-0f6.notion.site/HUR-3dd68d782ff4807e82fdfe1801261b14',
  },
  {
    name: '비접촉 온도측정기',
    flowTitle: '비접촉 측정 · 동작 예시',
    flowMode: 'temperature',
    kind: '하드웨어 · 펌웨어',
    period: '2021.06 - 2021.07',
    description: 'ESP32와 초음파·적외선 센서를 활용한 비접촉식 발열 체크 및 출입 관리 시스템.',
    tech: 'ESP32, Arduino C++, OpenCV',
  },
  {
    name: '음성인식 키오스크',
    flowTitle: 'QA · 유지보수 업무',
    flowMode: 'checklist',
    flow: [['기능 테스트', 'search'], ['오류 수정', 'tools'], ['현장 테스트', 'kiosk']],
    kind: 'QA · 유지보수',
    period: '2020.09 - 2021.07',
    description: '사용자 시나리오 기반 기능·예외 테스트와 하드웨어 점검을 수행한 키오스크 QA 프로젝트.',
    tech: 'C++, Windows, Hardware QA',
  },
  {
    name: '사내 인트라넷',
    flowTitle: '게시판 프론트엔드 구현',
    flowMode: 'features',
    flow: [['게시글 목록', 'list'], ['작성·수정', 'edit'], ['상세 보기', 'document']],
    kind: '웹 프론트엔드',
    period: '2020.09 - 2020.10',
    description: 'JSP·eGovFrame 환경에서 사내 게시판의 사용자 화면을 구현한 프론트엔드 프로젝트.',
    tech: 'JSP, JavaScript, eGovFrame',
  },
  {
    name: '카페 모바일 앱',
    flowTitle: '모바일 프론트엔드 구현',
    flowMode: 'features',
    flow: [['화면 구성', 'phone'], ['사용자 입력', 'tap'], ['화면 전환', 'navigate']],
    kind: 'Android 프론트엔드',
    period: '2021.01 - 2021.02',
    description: '카페 모바일 앱의 사용자 화면을 구현한 프론트엔드 프로젝트.',
    tech: 'Java',
  },
]

const certifications = [
  { name: 'SQLD', date: '2026.03' },
  { name: '정보통신기능사', date: '2025.12' },
  { name: '자동차운전면허증 2종 보통', date: '2021.10' },
  { name: '통신선로기능사', date: '2019.07' },
  { name: '프로그래밍기능사', date: '2018.10' },
  { name: '정보기기운용기능사', date: '2017.12' },
  { name: '컴퓨터활용능력2급', date: '2017.12' },
  { name: '워드프로세서', date: '2017.07' },
]

const journey = [
  { period: '2014 - 2017', title: '서호중학교' },
  { period: '2017 - 2020', title: '삼일공업고등학교', detail: '정보통신과 · 기술의 기본기를 쌓음' },
  { period: '2019 - 2021', title: '(주)날다', detail: '개발부 주임 · 현장에서 제품을 만들고 운영' },
  { period: '군 복무', title: '대한민국 육군', detail: '행정병 · 병장 만기 전역' },
  { period: '2024 - 2027', title: '대림대학교', detail: '컴퓨터정보학부 · 개발 역량을 확장하는 중' },
]

const sections = [
  { href: '#intro', label: '인트로' },
  { href: '#experience', label: '경력' },
  { href: '#projects', label: '경험한 프로젝트' },
  { href: '#certifications', label: '자격증' },
  { href: '#contact', label: '연락처' },
]

const flowIcons = {
  wave: 'M0 20H9L14 15L20 26L27 8L34 32L41 15L48 22L54 20H64',
  api: 'M20 7H44Q49 7 49 12V28Q49 33 44 33H20Q15 33 15 28V12Q15 7 20 7M26 14L20 20L26 26M38 14L44 20L38 26M35 12L29 28',
  dashboard: 'M14 5H50Q54 5 54 9V31Q54 35 50 35H14Q10 35 10 31V9Q10 5 14 5M10 12H54M18 28V23M26 28V18M34 28V21M42 28V16',
  search: 'M35 8A11 11 0 1 1 19 24A11 11 0 0 1 35 8M36 25L46 35M22 18L26 22L33 14',
  tools: 'M39 5A10 10 0 0 0 27 18L15 30A4 4 0 0 0 21 36L33 24A10 10 0 0 0 46 12L39 18L33 12Z',
  kiosk: 'M20 3H44V29H20ZM24 8H40V21H24ZM28 29V35M36 29V35M24 36H40',
  list: 'M11 5H53V35H11ZM11 12H53M18 19H21M26 19H46M18 25H21M26 25H46M18 31H21M26 31H40',
  edit: 'M37 7H16V35H44V24M26 24L28 17L42 3L48 9L34 23L26 24M38 7L44 13M23 30H36',
  document: 'M18 4H38L47 13V36H18ZM38 4V13H47M24 19H40M24 25H40M24 31H34',
  phone: 'M24 3H40Q43 3 43 6V34Q43 37 40 37H24Q21 37 21 34V6Q21 3 24 3M28 7H36M26 13H38V23H26ZM29 31H35',
  tap: 'M27 29V16A3 3 0 0 1 33 16V23L39 20L46 25L43 36H30L22 27ZM24 10A9 9 0 1 1 39 13',
  navigate: 'M10 5H27V35H10ZM39 5H56V35H39ZM23 20H44M37 14L44 20L37 26',
}

function ProjectFlow({ steps = [], title, mode = 'flow' }) {
  const figure = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5)
    }, { threshold: [0, 0.5] })
    observer.observe(figure.current)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="sensor-flow" ref={figure} data-visible={visible}>
      <figcaption>{title}</figcaption>
      {mode === 'temperature' ? (
        <svg className="temperature-scene" viewBox="0 0 250 96" role="img" aria-label="손이 센서에 다가오면 감지 신호가 나타나고 LCD에 예시 온도 36.5도가 표시됩니다">
          <rect className="temperature-device" x="132" y="8" width="88" height="76" rx="12" />
          <circle cx="142" cy="46" r="3" />
          <rect className="temperature-screen" x="155" y="24" width="55" height="35" rx="5" />
          <text className="temperature-reading" x="182" y="46" textAnchor="middle">36.5°C</text>
          <text className="temperature-caption" x="182" y="74" textAnchor="middle">측정 예시</text>
          <g className="temperature-signal"><path d="M123 35Q113 46 123 57M114 29Q99 46 114 63" /></g>
          <g className="temperature-hand"><path d="M20 61H38L49 70H74Q81 70 84 62L91 46Q93 40 88 39Q84 38 81 44L77 49V26Q77 20 72 20Q67 20 67 26V43L62 36Q58 31 54 35L48 43H20Z" /></g>
        </svg>
      ) : (
      <div className="sensor-flow-stages" role="img" aria-label={`${title}: ${steps.map(([label]) => label).join(mode === 'flow' ? ' → ' : ', ')}`}>
        {steps.map(([label, icon], index) => (
          <div className="sensor-stage" key={label}>
            {mode === 'flow' && index > 0 && <span className="sensor-connector" aria-hidden="true">→</span>}
            <svg viewBox="0 0 64 40" aria-hidden="true">
              <path className={mode === 'checklist' ? undefined : 'flow-icon'} pathLength="1" d={flowIcons[icon]} style={{ animationDelay: `${index * 0.9}s` }} />
              {mode === 'checklist' && (
                <g className="qa-check-badge" style={{ animationDelay: `${0.5 + index * 0.7}s` }}>
                  <circle cx="46" cy="10" r="8" />
                  <path d="m42 10 3 3 5-6" />
                </g>
              )}
            </svg>
            <span>{label}</span>
          </div>
        ))}
      </div>
      )}
    </figure>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('#intro')
  const [projectPage, setProjectPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(() => window.matchMedia('(max-width: 800px)').matches ? 1 : 3)
  const projectPages = Math.ceil(projects.length / cardsPerPage)
  const currentPage = Math.min(projectPage, projectPages - 1)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 800px)')
    const resize = () => {
      setCardsPerPage(media.matches ? 1 : 3)
      setProjectPage(0)
    }
    media.addEventListener('change', resize)
    return () => media.removeEventListener('change', resize)
  }, [])
  const today = new Date()
  const [birthYear, birthMonth, birthDay] = profile.birthday.split('-').map(Number)
  const birthdayPending = today.getMonth() + 1 < birthMonth ||
    (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)
  const age = today.getFullYear() - birthYear - Number(birthdayPending)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
      })
    }, { rootMargin: '-10% 0px -85% 0px', threshold: 0 })
    sections.forEach(({ href }) => observer.observe(document.querySelector(href)))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <nav className="dot-nav" aria-label="섹션 이동">
        {sections.map((s) => (
          <a key={s.href} href={s.href} aria-label={s.label} aria-current={activeSection === s.href ? 'location' : undefined}>
            <span className="nav-label">{s.label}</span>
            <span className="nav-dot" />
          </a>
        ))}
      </nav>

      <header id="intro">
        <div className="hero-copy">
          <div className="profile-row">
            {profile.photo && <img className="photo" src={profile.photo} alt={profile.name} />}
            <div>
              <p className="eyebrow">PORTFOLIO · 2026</p>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p className="profile-age"><time dateTime={profile.birthday}>2001.04.05</time> · 만 {age}세</p>
            </div>
          </div>
          <p className="intro-copy">{profile.intro}</p>
          <nav aria-label="외부 프로필">
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
        <div className="journey" aria-label="학업과 경력 흐름">
          <p className="journey-label">MY JOURNEY</p>
          <ol>
            {journey.map((item) => (
              <li className={item.detail ? undefined : 'compact'} key={item.title}>
                <span className="journey-period">{item.period}</span>
                <strong>{item.title}</strong>
                {item.detail && <span>{item.detail}</span>}
              </li>
            ))}
          </ol>
        </div>
      </header>

      <section id="experience">
        <h2>경력</h2>
        {experiences.map((exp) => (
          <article className="experience-layout" key={exp.company + exp.period}>
            <div className="experience-summary">
              <h3>{exp.company}</h3>
              <p className="experience-role">{exp.title}</p>
              <p className="period">{exp.period}</p>
            </div>
            <ul className="experience-list">
              {exp.highlights.map((h) => (
                <li key={h.title}>
                  <div className="experience-item-heading"><h4>{h.title}</h4><span>{h.period}</span></div>
                  <p>{h.description}</p>
                  {h.tech && <p className="experience-tech">{h.tech}</p>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="projects">
        <h2>경험한 프로젝트</h2>
        <div className="project-pages">
        <button className="project-page-arrow previous" type="button" aria-label="이전 프로젝트 페이지" aria-controls="project-page" onClick={() => setProjectPage((currentPage - 1 + projectPages) % projectPages)}>←</button>
        <div className="project-grid" id="project-page">
          {projects.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((proj) => (
            <article className="project-card" key={proj.name}>
              <div className="project-meta">
                <span>{proj.kind}</span>
                {proj.period && <span>{proj.period}</span>}
              </div>
              <h3>{proj.name}</h3>
              <ProjectFlow steps={proj.flow} title={proj.flowTitle} mode={proj.flowMode} />
              <p className="project-description">{proj.description}</p>
              <div className="tag-list">
                {proj.tech.split(', ').map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              {(proj.link || proj.plan) && <div className="project-links">
                {proj.link && <a className="project-link" href={proj.link} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {proj.plan && <a className="project-link" href={proj.plan} target="_blank" rel="noreferrer">기획서 ↗</a>}
              </div>}
            </article>
          ))}
        </div>
        <button className="project-page-arrow next" type="button" aria-label="다음 프로젝트 페이지" aria-controls="project-page" onClick={() => setProjectPage((currentPage + 1) % projectPages)}>→</button>
        </div>
        <p className="project-page-status" aria-live="polite">{currentPage + 1} / {projectPages} · 총 {projects.length}개 프로젝트</p>
      </section>

      <section id="certifications">
        <h2>자격증</h2>
        <p className="section-lead">총 {certifications.length}개 · 최근 취득순</p>
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <time dateTime={cert.date.replace('.', '-')}>{cert.date}</time>
              <strong>{cert.name}</strong>
            </li>
          ))}
        </ul>
      </section>

      <footer id="contact">
        <h2>편하게 연락해 주세요.</h2>
        <p>채용 및 협업 제안은 아래 이메일로 보내주세요.</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </main>
  )
}

export default App
