import './App.css'

const profile = {
  name: '박건우',
  role: '소프트웨어 개발자 (QA · 임베디드 · 프론트엔드)',
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
    name: '비접촉 온도측정기',
    period: '2021.06 - 2021.07',
    description:
      '코로나19 확산 시기, 식당·소상공인을 대상으로 한 비접촉식 발열 체크 및 출입 관리 시스템. ESP32 기반으로 초음파/적외선 센서와 TFT LCD를 통합해 하드웨어 제작부터 펌웨어 개발, 상용화 판매까지 전 과정을 주도했습니다.',
    highlights: [
      '기획 → 하드웨어 패키징 → 필드 테스트를 거쳐 지역 상권(식당 3곳)에 총 300만 원 규모 판매 달성',
      '초음파·적외선 센서의 노이즈를 이동 평균(Moving Average) 필터로 직접 구현해 측정 오차 최소화',
      'KC 인증 및 EMC(EMI/EMS) 규격 시험을 통과해 제품 신뢰성 확보',
      '지속 가능한 생산·유지보수를 위한 전체 개발 프로세스 기술 문서화',
    ],
    tech: 'OpenCV, Arduino C++',
    link: '',
  },
]

const education = [
  { school: '대림대학교', period: '2024.03 - 2027.02 (졸업 예정)', major: '컴퓨터정보학부' },
  { school: '삼일공업고등학교', period: '2017.03 - 2020.02 (졸업)', major: '정보통신학과' },
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
  { period: '기초', title: '서호중학교', detail: '관심을 진로로 구체화하기 시작' },
  { period: '2017 - 2020', title: '삼일공업고등학교', detail: '정보통신과 · 기술의 기본기를 쌓음' },
  { period: '2019 - 2021', title: '(주)날다', detail: '개발부 주임 · 현장에서 제품을 만들고 운영' },
  { period: '군 복무', title: '대한민국 육군', detail: '행정병 · 병장 만기 전역' },
  { period: '2024 - 2027', title: '대림대학교', detail: '컴퓨터정보학부 · 개발 역량을 확장하는 중' },
]

function App() {
  return (
    <main>
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
              <li key={item.title}>
                <span className="journey-period">{item.period}</span>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
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
        {projects.map((proj) => (
          <article key={proj.name}>
            <div className="article-heading">
              <h3>
                {proj.link ? <a href={proj.link} target="_blank" rel="noreferrer">{proj.name}</a> : proj.name}
              </h3>
              <p className="period">{proj.period}</p>
            </div>
            <p>{proj.description}</p>
            <ul>
              {proj.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="tag-list" aria-label="사용 기술">
              {proj.tech.split(', ').map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </article>
        ))}
      </section>

      <section id="education">
        <h2>학력</h2>
        {education.map((edu) => (
          <article key={edu.school}>
            <h3>{edu.school}</h3>
            <p className="period">{edu.period} · {edu.major}</p>
          </article>
        ))}
      </section>

      <section id="ai-tools">
        <h2>AI 활용 경험</h2>
        <div className="tag-list">
          {aiTools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      <section id="certifications">
        <h2>자격증</h2>
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert.name}>
              {cert.name} <span className="period">({cert.date})</span>
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
