import './App.css'

// TODO: 실제 내용으로 교체
const profile = {
  name: '이름',
  role: '직무 / 한 줄 소개',
  email: 'gunwoo405@gmail.com',
  github: 'https://github.com/gunoo',
  intro: '자기소개를 여기에 작성하세요.',
}

const experiences = [
  {
    company: '회사/조직명',
    period: '2023.01 - 현재',
    title: '직책',
    description: '담당 업무를 여기에 작성하세요.',
  },
]

const projects = [
  {
    name: '프로젝트명',
    period: '2023',
    description: '프로젝트 설명을 여기에 작성하세요.',
    link: '',
  },
]

function App() {
  return (
    <>
      <header id="intro">
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p>{profile.intro}</p>
      </header>

      <section id="experience">
        <h2>경력</h2>
        {experiences.map((exp) => (
          <article key={exp.company + exp.period}>
            <h3>{exp.title} · {exp.company}</h3>
            <p className="period">{exp.period}</p>
            <p>{exp.description}</p>
          </article>
        ))}
      </section>

      <section id="projects">
        <h2>프로젝트</h2>
        {projects.map((proj) => (
          <article key={proj.name}>
            <h3>
              {proj.link ? <a href={proj.link} target="_blank" rel="noreferrer">{proj.name}</a> : proj.name}
            </h3>
            <p className="period">{proj.period}</p>
            <p>{proj.description}</p>
          </article>
        ))}
      </section>

      <footer id="contact">
        <h2>연락처</h2>
        <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p><a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></p>
      </footer>
    </>
  )
}

export default App
