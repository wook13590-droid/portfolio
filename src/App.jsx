import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'HTML', description: '의미 있는 구조의 웹 페이지를 작성합니다.', level: 90 },
  { name: 'CSS', description: '반응형 레이아웃과 일관된 UI를 구현합니다.', level: 85 },
  { name: 'JavaScript', description: '인터랙션과 화면 동작을 설계합니다.', level: 85 },
  { name: 'React', description: '컴포넌트 기반의 화면을 개발합니다.', level: 80 },
  { name: 'Vite', description: '빠른 개발 환경을 구성하고 활용합니다.', level: 75 },
  { name: 'Figma', description: '사용자 흐름을 고려한 UI를 설계합니다.', level: 80 },
  { name: 'Git', description: '버전 관리로 작업 변경 사항을 관리합니다.', level: 75 },
  { name: 'GitHub', description: '협업을 위한 코드 저장소를 활용합니다.', level: 75 },
]

const projects = [
  {
    title: 'React Portfolio',
    description: '개인 브랜딩과 프로젝트를 소개하는 반응형 포트폴리오 웹사이트입니다.',
    image: 'project-card__image--portfolio',
    skills: ['React', 'CSS', 'Vite'],
    demo: null,
    github: null,
  },
  {
    title: 'Shopping Web App',
    description: '상품을 탐색하고 장바구니에 담을 수 있는 쇼핑 웹 애플리케이션입니다.',
    image: 'project-card__image--shopping',
    skills: ['React', 'JavaScript', 'CSS'],
    demo: null,
    github: null,
  },
  {
    title: 'Movie Search App',
    description: '원하는 영화를 검색하고 정보를 확인할 수 있는 웹 애플리케이션입니다.',
    image: 'project-card__image--movie',
    skills: ['React', 'API', 'JavaScript'],
    demo: null,
    github: null,
  },
]

const experiences = [
  {
    year: '2026',
    title: 'React Frontend Project',
    description: 'React와 Vite를 활용한 웹 애플리케이션 제작',
  },
  {
    year: '2025',
    title: 'UI/UX Design Project',
    description: 'Figma를 활용한 웹앱 UI/UX 기획 및 디자인',
  },
  {
    year: '2024',
    title: 'Web Publishing',
    description: 'HTML, CSS, JavaScript 기반 반응형 웹 제작',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleContactChange(event) {
    const { name, value } = event.target

    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleContactSubmit(event) {
    event.preventDefault()
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <div className="portfolio-page">
      <header id="header" className="site-header">
        <div className="site-header__inner container">
          <a className="site-logo" href="#hero">JIAE PORTFOLIO</a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="menu-toggle__line" />
            <span className="menu-toggle__line" />
            <span className="menu-toggle__line" />
          </button>

          <nav
            id="site-navigation"
            className={`site-navigation ${isMenuOpen ? 'site-navigation--open' : ''}`}
            aria-label="주요 메뉴"
          >
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main className="site-main container">
        <section id="hero" className="portfolio-section hero-section">
          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-greeting">안녕하세요.</p>
              <h1 className="section-title hero-title">
                사용자 경험을 생각하며 구현하는
                <br />
                <strong>Frontend Developer 장태욱입니다.</strong>
              </h1>
              <p className="hero-description">
                React와 JavaScript를 활용하여 사용하기 편리하고 직관적인 웹
                서비스를 만드는 것을 좋아합니다.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  프로젝트 보기
                </a>
                <a className="button button--secondary" href="#contact">
                  연락하기
                </a>
              </div>
            </div>

            <div className="profile-area">
              {/* 실제 프로필 이미지를 사용할 때 이 영역 안에 img 태그를 추가하세요. */}
              <div
                className="profile-placeholder"
                role="img"
                aria-label="프로필 이미지 영역"
              >
                Profile Image
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="portfolio-section about-section">
          <div className="about-content">
            <div className="about-introduction">
              <p className="section-label">ABOUT ME</p>
              <h2 className="section-title">사용자 관점에서 구현합니다.</h2>
              <p className="about-description">
                새로운 기술을 배우고 실제 결과물로 구현하는 것을 좋아하는
                프론트엔드 개발자입니다.
              </p>
              <p className="about-description">
                UI/UX 디자인부터 React 기반 웹 개발까지 사용자 관점에서 고민하며
                작업합니다.
              </p>
            </div>

            <aside className="card about-profile" aria-label="개인 정보">
              <dl className="profile-details">
                <div className="profile-details__item">
                  <dt>Name</dt>
                  <dd>장태욱</dd>
                </div>
                <div className="profile-details__item">
                  <dt>Position</dt>
                  <dd>Frontend Developer</dd>
                </div>
                <div className="profile-details__item">
                  <dt>Focus</dt>
                  <dd>React / UI·UX / AI</dd>
                </div>
                <div className="profile-details__item">
                  <dt>Location</dt>
                  <dd>Seoul, Korea</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="skills" className="portfolio-section skills-section">
          <p className="section-label">SKILLS</p>
          <h2 className="section-title">사용하는 기술들</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="card skill-card" key={skill.name}>
                <h3 className="skill-card__name">{skill.name}</h3>
                <p className="skill-card__description">{skill.description}</p>
                <div className="skill-card__level">
                  <div className="skill-card__level-label">
                    <span>숙련도</span>
                    <span>{skill.level}%</span>
                  </div>
                  <progress value={skill.level} max="100">
                    {skill.level}%
                  </progress>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="portfolio-section projects-section">
          <p className="section-label">PROJECTS</p>
          <h2 className="section-title">프로젝트</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="card project-card" key={project.title}>
                <div
                  className={`project-card__image ${project.image}`}
                  role="img"
                  aria-label={`${project.title} 프로젝트 이미지`}
                >
                  <span>{project.title}</span>
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <ul className="project-card__technologies" aria-label="사용 기술">
                    {project.skills.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className="project-card__actions">
                    {project.demo ? (
                      <a
                        className="button button--primary"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        프로젝트 보기
                      </a>
                    ) : (
                      <button className="button button--primary" type="button" disabled>
                        프로젝트 보기 준비 중
                      </button>
                    )}
                    {project.github ? (
                      <a
                        className="button button--secondary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : (
                      <button className="button button--secondary" type="button" disabled>
                        GitHub 준비 중
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="portfolio-section experience-section">
          <p className="section-label">EXPERIENCE</p>
          <h2 className="section-title">성장 과정</h2>
          <ol className="timeline">
            {experiences.map((experience) => (
              <li className="timeline__item" key={`${experience.year}-${experience.title}`}>
                <div className="timeline__year">{experience.year}</div>
                <article className="card timeline__content">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="portfolio-section contact-section">
          <div className="contact-content">
            <div className="contact-introduction">
              <p className="section-label">CONTACT</p>
              <h2 className="section-title">LET&apos;S WORK TOGETHER</h2>
              <p className="contact-description">
                프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.
              </p>
              <address className="contact-links">
                <a href="mailto:wook1359@naver.com">
                  <span>Email</span>
                  wook1359@naver.com
                </a>
                <a
                  href="https://github.com/your-github-id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  github.com/your-github-id
                </a>
              </address>
            </div>

            <form className="card contact-form" onSubmit={handleContactSubmit}>
              <div className="form-field">
                <label htmlFor="name">이름</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">이메일</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">메시지</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <button className="button button--primary" type="submit">
                메시지 보내기
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="site-footer__inner container">
          <p className="site-footer__text">© 2026 JIAE Portfolio. All Rights Reserved.</p>
          <nav className="site-footer__links" aria-label="Footer 링크">
            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:wook1359@naver.com">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
