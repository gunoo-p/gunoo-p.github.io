import './App.css'

const profile = {
  name: '박건우',
  role: '소프트웨어 개발자',
  email: 'gunwoo405@naver.com',
  github: 'https://github.com/gunoo-p',
  photo: '/profile.jpg',
  intro:
    '음성인식 키오스크 QA·유지보수부터 비접촉 온도측정기 상용화, 웹/모바일 프론트엔드 개발까지 다양한 환경에서 직접 문제를 찾아 해결해온 개발자입니다. Claude Code 등 AI 도구를 적극 활용해 개발 생산성을 높이고 있습니다.',
}

const experiences = [
  {
    company: '주식회사날다',
    period: '2019.12 - 2021.09 (1년 10개월)',
    title: '개발부 주임',
    highlights: [
      '음성인식 키오스크 QA 및 유지관리 (2020.09-2021.07): 사용자 시나리오 기반 기능/예외 테스트, 하드웨어(전원·센서) 점검 및 재연결, 현장 QA, 운영 중 발견된 오류 직접 수정 — C++, Windows',
      '사내 인트라넷 프론트엔드 개발 (2020.09-2020.10): JSP·eGovFrame 기반 게시판(BBS) 목록/등록/수정/상세 화면 구현 — Java, JSP, HTML, CSS, JavaScript, eGovFrame, MySQL',
      '카페 모바일 애플리케이션 개발 (2021.01-2021.02): Android Studio 기반 UI 및 화면 전환/이벤트 처리 구현 — Java, MySQL',
      '2021 World IT Show(COEX) 전시 참여 (2021.04): 음성인식 키오스크 설치·시연 환경 구축, 방문객 대상 시연 및 현장 이슈 대응',
      '비접촉 온도측정기 개발 (2021.06-2021.07): ESP32 기반 하드웨어·펌웨어 개발부터 상용 판매까지 전 과정 주도 — OpenCV, Arduino C++ (상세 내용은 아래 프로젝트 참고)',
    ],
  },
]

const projects = [
  {
    name: '반도체 클린룸 모니터링 대시보드',
    period: '2026.07',
    description:
      'ESP32 센서(온도·습도·차압·가스·공기질)로 반도체 클린룸 환경을 실시간 모니터링하고, 추세 기반 설비 이상 예측과 과거 이벤트 로그를 보여주는 웹 대시보드.',
    result:
      '임계치 초과 시 텔레그램 알림, 하루치 로그는 Claude API로 자연어 요약까지 받아보도록 펌웨어부터 백엔드·프론트엔드까지 직접 구축했습니다.',
    tech: 'ESP32, FastAPI, TimescaleDB, MQTT, React, Docker, Claude API',
    link: 'https://github.com/gunoo-p/cleanroom-dashboard',
  },
  {
    name: '비접촉 온도측정기',
    period: '2021.06 - 2021.07',
    description: 'ESP32와 초음파·적외선 센서를 활용한 비접촉식 발열 체크 및 출입 관리 시스템.',
    result: '하드웨어부터 펌웨어·인증·판매까지 주도해 식당 3곳에 총 300만 원 규모로 판매했습니다.',
    tech: 'ESP32, Arduino C++, OpenCV',
  },
  {
    name: '음성인식 키오스크',
    period: '2020.09 - 2021.07',
    description: '사용자 시나리오 기반 기능·예외 테스트와 하드웨어 점검을 수행한 키오스크 QA 프로젝트.',
    result: '현장 QA와 운영 오류 수정, World IT Show 설치·시연 및 현장 대응까지 담당했습니다.',
    tech: 'C++, Windows, Hardware QA',
  },
  {
    name: '사내 인트라넷',
    period: '2020.09 - 2020.10',
    description: '사내 구성원이 사용하는 게시판의 목록·등록·수정·상세 화면을 구현한 웹 프로젝트.',
    result: 'eGovFrame 환경에서 화면부터 데이터 연동까지 게시판 기능 전반을 개발했습니다.',
    tech: 'Java, JSP, eGovFrame, JavaScript, MySQL',
  },
  {
    name: '카페 모바일 앱',
    period: '2021.01 - 2021.02',
    description: '카페 이용 흐름을 모바일 화면으로 구현한 Android 애플리케이션.',
    result: 'UI 구성과 화면 전환, 사용자 이벤트 처리를 중심으로 애플리케이션을 개발했습니다.',
    tech: 'Java, Android Studio, MySQL',
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

const aiTools = ['Claude Code', 'Codex', 'ChatGPT']

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
  { href: '#projects', label: '프로젝트' },
  { href: '#ai-tools', label: 'AI 활용' },
  { href: '#certifications', label: '자격증' },
  { href: '#contact', label: '연락처' },
]

function App() {
  return (
    <main>
      <nav className="dot-nav" aria-label="섹션 이동">
        {sections.map((s) => (
          <a key={s.href} href={s.href} aria-label={s.label}>
            <span />
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
            </div>
          </div>
          <p className="intro-copy">{profile.intro}</p>
          <nav aria-label="연락처">
            <a className="contact-link primary" href={`mailto:${profile.email}`}>이메일 보내기</a>
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
          <article key={exp.company + exp.period}>
            <div className="article-heading">
              <h3>{exp.title} · {exp.company}</h3>
              <p className="period">{exp.period}</p>
            </div>
            <ul>
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="projects">
        <h2>프로젝트</h2>
        <p className="section-lead">{projects.length}개의 프로젝트 · 옆으로 넘겨서 살펴보세요</p>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <article className="project-card" key={proj.name}>
              <div className="project-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{proj.period}</span>
              </div>
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <p className="project-result">{proj.result}</p>
              <div className="tag-list" aria-label="사용 기술">
                {proj.tech.split(', ').map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              {proj.link && (
                <a className="project-link" href={proj.link} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="ai-tools">
        <h2>AI 활용 경험</h2>
        <div className="tag-list">
          {aiTools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      <section id="certifications">
        <h2>자격증</h2>
        <p className="section-lead">기술 기반을 꾸준히 넓혀온 {certifications.length}개의 자격</p>
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <time dateTime={cert.date}>{cert.date}</time>
              <strong>{cert.name}</strong>
            </li>
          ))}
        </ul>
      </section>

      <footer id="contact">
        <p>함께 만들 일이 있다면 편하게 연락해 주세요.</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </main>
  )
}

export default App
