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
      { title: '더기프트쇼 2020 전시 참여', period: '2020.07', description: '수원컨벤션센터 부스 운영, 음성인식 키오스크 전시·시연.' },
      { title: 'World IT Show 전시 참여', period: '2021.04', description: 'COEX 키오스크 설치·시연 환경 구축, 방문객 시연 및 현장 이슈 대응.' },
      { title: '비접촉 온도측정기 개발', period: '2021.06–2021.07', description: 'ESP32 기반 하드웨어·펌웨어 개발부터 판매까지 전 과정 주도.', tech: 'ESP32 · OpenCV · Arduino C++' },
    ],
  },
  {
    company: '원할머니보쌈 (화서점)',
    period: '2023.08 - 현재',
    title: '홀서빙·포장 아르바이트',
    highlights: [
      { title: '매장 고객 응대', description: '주문 접수와 서빙, 손님 요청 응대.' },
      { title: '포장 주문 처리', description: '포장 주문 준비와 바쁜 시간대 주문 처리.' },
      { title: '학업 병행 장기 근무', description: '학업과 병행하며 3년 넘게 꾸준히 근무.' },
    ],
  },
]

const projectGroups = ['대림대학교', '개인', '회사']

const projects = [
  {
    name: '포폴링',
    group: '대림대학교',
    langs: ['Dart'],
    summary: '프로젝트 실행·관리 데스크톱 앱',
    flowTitle: '내 프로젝트 실행 관리',
    flowMode: 'features',
    flow: [['프로젝트 목록', 'list'], ['실행·종료', 'tools'], ['상태·로그', 'dashboard']],
    kind: '데스크톱 앱 · 팀 프로젝트 · PM',
    period: '2026.11 - 진행 중',
    description:
      '여러 개발 프로젝트를 한곳에 모아 실행하고 상태와 로그를 확인하는 데스크톱 앱. 4인 팀에서 PM과 실행 제어를 맡아 전체 실행·종료, 앱 재시작 후 상태 복구, Git 연동을 구현하고 있습니다.',
    tech: 'Flutter, Dart, macOS · Windows',
    link: 'https://github.com/App-Legend/POPOL-ing',
    photo: '/popoling.jpg',
    photoAlt: '포폴링 앱의 포트폴리오 카테고리 선택 화면',
    photoSize: [1000, 790],
  },
  {
    name: 'MgrS',
    group: '대림대학교',
    langs: ['Dart'],
    summary: 'AI 에이전트 스킬 관리 데스크톱 앱',
    flowTitle: 'AI 에이전트 스킬 관리',
    flowMode: 'features',
    flow: [['스킬 스캔', 'search'], ['배포·동기화', 'tools'], ['스킬 랭킹', 'list']],
    kind: '데스크톱 앱 · 팀 프로젝트',
    period: '2026.10 - 2026.11',
    description:
      'Claude Code, Codex 등 여러 AI 코딩 에이전트의 스킬을 한 화면에서 보고, 배포하고, 찾고, 비교하는 데스크톱 앱. 스킬을 스캔해 한국어 요약과 카테고리로 정리하고, 세션 로그로 미사용 스킬을 찾으며, 업데이트 확인과 인기 랭킹을 제공합니다. AI 해커톤 출품작.',
    tech: 'Flutter, Dart, macOS · Windows',
    link: 'https://github.com/App-Legend/Skills-GUI',
    photo: '/mgrs.jpg',
    photoAlt: 'MgrS에서 설치된 AI 에이전트 스킬을 카드로 보여주는 화면',
    photoSize: [1000, 628],
  },
  {
    name: 'Alpha Mail',
    group: '대림대학교',
    langs: ['Dart'],
    summary: '음성으로 듣고 답장하는 메일 앱',
    flowTitle: '음성으로 쓰는 메일',
    flowMode: 'features',
    flow: [['메일 확인', 'phone'], ['음성 낭독', 'wave'], ['말로 답장', 'edit']],
    kind: '모바일 앱 · 개인 프로젝트',
    period: '2026.09 - 진행 중',
    description:
      '네이버·Gmail·Outlook 메일을 음성으로 확인하고 말로 답장하는 앱. 음성 인식·요약·낭독을 기기 안에서 처리해 메일 내용을 외부 AI 서버로 보내지 않으며, 확인한 답장만 발송하도록 설계했습니다.',
    tech: 'Flutter, 로컬 LLM, IMAP',
    link: 'https://github.com/AppLegend-boys/alpha-mail',
    photo: '/alpha-mail.jpg',
    photoAlt: '안 읽은 메일을 읽어줄지 묻는 Alpha Mail 홈 화면',
    photoSize: [483, 1000],
  },
  {
    name: '나문비',
    group: '개인',
    langs: ['Python', 'TS'],
    summary: '로컬 LLM 기반 RAG 문서 비서',
    flowTitle: '문서 질의응답 과정',
    flow: [['문서 임베딩', 'document'], ['벡터 검색', 'search'], ['로컬 LLM 답변', 'list']],
    kind: '로컬 LLM · RAG · 개인 프로젝트',
    period: '2026.08 - 2026.09',
    description:
      '외부 LLM API 없이 로컬 LLM(Qwen3)과 RAG로 업무 문서를 검색·요약하고 질문에 답하는 서비스. PDF·HWPX·엑셀과 스캔 문서(OCR)를 임베딩해 pgvector에 저장하고, 질문과 관련된 부분을 찾아 로컬 LLM이 파일명·페이지 근거와 함께 답합니다. 문서와 질문을 외부 AI 서비스로 보내지 않습니다.',
    tech: '로컬 LLM, RAG, FastAPI, React, vLLM, Docker',
    link: 'https://github.com/gunoo-p/local_document_ai',
    photo: '/namunbi.jpg',
    photoAlt: '나문비에서 문서를 올리고 관리하는 화면',
    photoSize: [1000, 480],
  },
  {
    name: '반도체 클린룸 모니터링 대시보드',
    group: '대림대학교',
    langs: ['Python', 'JS'],
    summary: '클린룸 환경 실시간 모니터링 웹',
    flowTitle: '센서 데이터 전달 과정',
    flow: [['센서 수집', 'wave'], ['FastAPI', 'api'], ['대시보드', 'dashboard']],
    kind: 'IoT · 웹 대시보드',
    period: '2026.07',
    description:
      '센서(온도·습도·차압·가스·공기질)로 반도체 클린룸 환경을 실시간 모니터링하고, 추세 기반 설비 이상 예측과 과거 이벤트 로그를 보여주는 웹 대시보드. MQTT로 센서 데이터를 전달하고 TimescaleDB에 저장하며, Gemini API로 로그를 요약합니다.',
    tech: 'ESP32, FastAPI, React, Docker',
    link: 'https://github.com/gunoo-p/cleanroom-dashboard',
    photo: '/cleanroom-dashboard.jpg',
    photoAlt: '온도·습도·가스·공기질·차압을 보여주는 클린룸 모니터링 대시보드 화면',
    photoSize: [1000, 556],
  },
  {
    name: 'HUR',
    group: '대림대학교',
    langs: ['Dart', 'JS'],
    summary: '퍼스널 컬러 기반 뷰티 커뮤니티 앱',
    flowTitle: '나만의 뷰티 스타일 탐색',
    flowMode: 'features',
    flow: [['메이크업 피드', 'phone'], ['화장품 탐색', 'search'], ['사진 공유', 'edit']],
    kind: '백엔드 메인 · DevOps',
    period: '2026.03 - 2026.06',
    description: '퍼스널 컬러와 선호 스타일을 바탕으로 메이크업 피드와 화장품을 탐색하는 뷰티 커뮤니티 앱입니다.',
    tech: 'Flutter, Node.js, PostgreSQL, Docker',
    link: 'https://github.com/App-Legend/HUR',
    plan: 'https://polished-jodhpur-0f6.notion.site/HUR-3dd68d782ff4807e82fdfe1801261b14',
    photo: '/techfair-hur.jpg',
    photoAlt: '테크페어 부스에 전시한 HUR 포스터와 시연용 태블릿',
    photoSize: [750, 1000],
  },
  {
    name: '비접촉 온도측정기',
    group: '회사',
    langs: ['Arduino'],
    summary: '비접촉 발열 체크·출입 관리 기기',
    flowTitle: '비접촉 측정 · 동작 예시',
    flowMode: 'temperature',
    kind: '하드웨어 · 펌웨어',
    period: '2021.06 - 2021.07',
    description: 'ESP32와 초음파·적외선 센서를 활용한 비접촉식 발열 체크 및 출입 관리 시스템.',
    tech: 'ESP32, Arduino C++, OpenCV',
    photo: '/thermometer.jpg',
    photoAlt: 'QR 스캔 화면이 함께 있는 일체형 비접촉 온도측정기',
    photoSize: [1000, 688],
  },
  {
    name: '음성인식 키오스크',
    group: '회사',
    langs: ['C++'],
    summary: '키오스크 기능·하드웨어 테스트',
    flowTitle: 'QA · 유지보수 업무',
    flowMode: 'checklist',
    flow: [['기능 테스트', 'search'], ['오류 수정', 'tools'], ['현장 테스트', 'kiosk']],
    kind: 'QA · 유지보수',
    period: '2020.09 - 2021.07',
    description: '사용자 시나리오 기반 기능·예외 테스트와 하드웨어 점검을 수행한 키오스크 QA 프로젝트.',
    tech: 'C++, Windows, Hardware QA',
    photo: '/kiosk.jpg',
    photoAlt: '커피 메뉴를 고르는 음성인식 키오스크 주문 화면',
    photoSize: [817, 1000],
  },
  {
    name: '사내 인트라넷',
    group: '회사',
    langs: ['Java'],
    summary: '사내 게시판 웹 화면 구현',
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
    group: '회사',
    langs: ['Java'],
    summary: '카페 Android 앱 화면 구현',
    flowTitle: '모바일 프론트엔드 구현',
    flowMode: 'features',
    flow: [['화면 구성', 'phone'], ['사용자 입력', 'tap'], ['화면 전환', 'navigate']],
    kind: 'Android 프론트엔드',
    period: '2021.01 - 2021.02',
    description: '카페 모바일 앱의 사용자 화면을 구현한 프론트엔드 프로젝트.',
    tech: 'Java',
    photo: '/cafe-app.jpg',
    photoAlt: '커피 종류와 수량을 고르는 카페 앱 주문 화면',
    photoSize: [494, 1000],
    video: 'https://www.youtube.com/watch?v=k2CxAvBhnM0',
  },
]

const activities = [
  { name: '8개 전문대학 연합 캡스톤 디자인 경진대회', date: '2026.11', detail: '도전정신상(사업단장협의회장상) 수상 · 부스 운영 · 반도체 부트캠프 작품 클린룸 모니터링 대시보드 출품', photo: '/capstone-award.jpg', photoAlt: '캡스톤 디자인 경진대회 도전정신상 시상 보드', photoSize: [902, 1000] },
  { name: '대림대학교 AI-Thon', date: '2026.11', detail: '교내 AI 해커톤 참여 · MgrS 출품', photo: '/aithon-mgrs.jpg', photoAlt: 'MgrS 발표 자료 표지', photoSize: [1000, 564] },
  { name: '대림대학교 테크페어', date: '2026.11', detail: '졸업작품 우수작 선정 · 학과 부스 운영 · HUR 전시·시연', photo: '/techfair-hur.jpg', photoAlt: '테크페어 부스에 전시한 HUR 포스터와 시연용 태블릿', photoSize: [750, 1000] },
  { name: '반도체 부트캠프 마이크로디그리', date: '2026', detail: '중급·고급 과정 이수 · 클린룸 모니터링 대시보드 개발', photo: '/cleanroom-dashboard.jpg', photoAlt: '온도·습도·가스·공기질·차압을 보여주는 클린룸 모니터링 대시보드 화면', photoSize: [1000, 556] },
  { name: 'World IT Show 2021', date: '2021.04', detail: '(주)날다 키오스크 설치·시연 환경 구축 · 방문객 시연 (COEX)', photo: '/world-it-show.jpg', photoAlt: 'World IT Show 2021 날다 부스에 전시한 음성인식 키오스크', photoSize: [650, 1000] },
  { name: '더기프트쇼 2020', date: '2020.07', detail: '(주)날다 부스 운영 · 음성인식 키오스크 전시·시연 (수원컨벤션센터)', photo: '/giftshow.jpg', photoAlt: '더기프트쇼 날다 부스에 전시한 음성인식 키오스크', photoSize: [960, 467] },
]

const certifications = [
  { name: 'SQLD', date: '2026.03' },
  { name: '정보처리산업기사 (필기)', date: '2026.02' },
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
  { href: '#activities', label: '대외활동' },
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
  const [openProject, setOpenProject] = useState(null)
  const projectDialog = useRef(null)
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
          <nav aria-label="프로필 링크">
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="contact-link" href="/resume.pdf" download="박건우_이력서.pdf">이력서 ⤓</a>
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
        {projectGroups.map((group) => (
          <div className="project-group" key={group}>
            <h3>{group}</h3>
            <ul className="folder-grid">
              {projects.filter((proj) => proj.group === group).map((proj) => (
                <li key={proj.name}>
                  <button className="folder" type="button" aria-haspopup="dialog" onClick={() => { setOpenProject(proj); projectDialog.current.showModal() }}>
                    <span className="folder-art">
                      <svg className="folder-icon" viewBox="0 0 120 90" aria-hidden="true">
                        <path className="folder-back" d="M6 14Q6 8 12 8H40Q44 8 47 11L53 17H108Q114 17 114 23V80Q114 86 108 86H12Q6 86 6 80Z" />
                        <rect className="folder-paper" x="16" y="22" width="88" height="44" rx="3" />
                        <path className="folder-front" d="M4 36Q4 30 10 30H110Q116 30 116 36L113 80Q113 86 107 86H13Q7 86 7 80Z" />
                      </svg>
                      <span className="folder-langs">
                        {proj.langs.map((lang) => <span key={lang} className="folder-lang">{lang}</span>)}
                      </span>
                    </span>
                    <span className="folder-name">{proj.name}</span>
                    <span className="folder-summary">{proj.summary}</span>
                    <span className="folder-period">{proj.period}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <dialog className="project-dialog" ref={projectDialog} onClose={() => setOpenProject(null)} onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}>
          {openProject && (
            <article className="project-card">
              <button className="project-dialog-close" type="button" aria-label="닫기" onClick={() => projectDialog.current.close()}>×</button>
              <div className="project-meta">
                <span>{openProject.kind}</span>
                {openProject.period && <span>{openProject.period}</span>}
              </div>
              <h3>{openProject.name}</h3>
              {openProject.photo && <img className="project-photo" src={openProject.photo} alt={openProject.photoAlt} width={openProject.photoSize[0]} height={openProject.photoSize[1]} />}
              <ProjectFlow steps={openProject.flow} title={openProject.flowTitle} mode={openProject.flowMode} />
              <p className="project-description">{openProject.description}</p>
              <div className="tag-list">
                {openProject.tech.split(', ').map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              {(openProject.link || openProject.plan || openProject.video) && <div className="project-links">
                {openProject.link && <a className="project-link" href={openProject.link} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {openProject.plan && <a className="project-link" href={openProject.plan} target="_blank" rel="noreferrer">기획서 ↗</a>}
                {openProject.video && <a className="project-link" href={openProject.video} target="_blank" rel="noreferrer">소개 영상 ↗</a>}
              </div>}
            </article>
          )}
        </dialog>
      </section>

      <section id="activities">
        <h2>대외활동</h2>
        <ul className="cert-list">
          {activities.map((act) => (
            <li key={act.name}>
              <time dateTime={act.date.replace('.', '-')}>{act.date}</time>
              <div>
                <strong>{act.name}</strong>
                <p className="activity-detail">{act.detail}</p>
                {act.photo && <img className="activity-photo" src={act.photo} alt={act.photoAlt} width={act.photoSize[0]} height={act.photoSize[1]} loading="lazy" />}
              </div>
            </li>
          ))}
        </ul>
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
