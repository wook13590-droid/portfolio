import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'HTML', description: '웹 문서의 구조와 접근성을 설계합니다.', level: 90 },
  { name: 'CSS', description: '반응형 레이아웃과 일관된 UI를 구현합니다.', level: 88 },
  { name: 'JavaScript', description: '동적인 사용자 경험과 기능을 개발합니다.', level: 85 },
  { name: 'React', description: '재사용 가능한 컴포넌트를 설계합니다.', level: 82 },
  { name: 'Vite', description: '빠르고 효율적인 개발 환경을 구성합니다.', level: 78 },
  { name: 'Figma', description: '사용자 흐름과 화면을 시각화합니다.', level: 80 },
  { name: 'Git', description: '변경 이력을 관리하고 협업합니다.', level: 80 },
  { name: 'GitHub', description: '코드를 공유하고 프로젝트를 관리합니다.', level: 78 },
]

const projects = [
  {
    title: 'React Portfolio',
    description: '개인 소개와 프로젝트를 한눈에 보여주는 반응형 포트폴리오입니다.',
    image: 'https://placehold.co/800x500/dbeafe/1e3a8a?text=React+Portfolio',
    skills: ['React', 'CSS', 'Vite'],
    demo: 'https://example.com/react-portfolio',
    github: 'https://github.com/wook13590/react-portfolio',
    iconOnly: 'code',
  },
  {
    title: 'Shopping Web App',
    description: '상품을 탐색하고 장바구니에 담을 수 있는 쇼핑 웹 앱입니다.',
    image: 'https://placehold.co/800x500/dcfce7/166534?text=Shopping+Web+App',
    skills: ['React', 'JavaScript', 'CSS'],
    demo: 'https://example.com/shopping-web-app',
    github: 'https://github.com/wook13590/shopping-web-app',
    iconOnly: 'shopping',
  },
  {
    title: 'Movie Search App',
    description: '영화 정보를 검색하고 관심 있는 작품을 확인할 수 있는 앱입니다.',
    image: 'https://placehold.co/800x500/fef3c7/92400e?text=Movie+Search+App',
    skills: ['React', 'API', 'CSS'],
    demo: 'https://example.com/movie-search-app',
    github: 'https://github.com/wook13590/movie-search-app',
    iconOnly: 'movie',
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      <header id="header" className="site-header">
        <div className="container site-header__inner">
          <a className="site-header__logo" href="#hero">
            TAEWOOK PORTFOLIO
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <nav
            id="primary-navigation"
            className={`site-nav${isMenuOpen ? ' site-nav--open' : ''}`}
            aria-label="주요 메뉴"
          >
            <a href="#hero" onClick={handleMenuItemClick}>Home</a>
            <a href="#about" onClick={handleMenuItemClick}>About</a>
            <a href="#skills" onClick={handleMenuItemClick}>Skills</a>
            <a href="#projects" onClick={handleMenuItemClick}>Projects</a>
            <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section id="hero" className="content-section content-section--hero">
          <div className="container">
            <div className="hero">
              <div className="hero__content">
                <p className="hero__greeting">안녕하세요.</p>
                <h1 className="section-title section-title--hero">
                  사용자 경험을 생각하며 구현하는
                  <br />
                  <strong>Front Developer 장태욱</strong>입니다.
                </h1>
                <p className="section-description">
                  React와 JavaScript를 활용하여
                  <br />
                  사용하기 편리하고 직관적인 웹 서비스를 만드는 것을 좋아합니다.
                </p>
                <div className="hero__actions">
                  <a className="button button--primary" href="#projects">
                    프로젝트 보기
                  </a>
                  <a className="button button--secondary" href="#contact">
                    연락하기
                  </a>
                </div>
              </div>

              <div className="hero__visual">
                <div className="hero__profile-image" role="img" aria-label="장태욱 프로필 아이콘">
                  <svg viewBox="0 0 160 190" aria-hidden="true">
                    <circle cx="80" cy="58" r="32" />
                    <path d="M23 166c4-36 27-57 57-57s53 21 57 57" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="container">
            <div className="about">
              <div className="about__copy">
                <p className="section-eyebrow">ABOUT ME</p>
                <h2 className="section-title">ABOUT ME</h2>
                <p className="section-description">
                  새로운 기술을 배우고 실제 결과물로 구현하는 것을 좋아하는 프론트엔드 개발자입니다.
                  <br />
                  UI/UX 디자인부터 React 기반 웹 개발까지 사용자 관점에서 고민하며 작업합니다.
                </p>
              </div>

              <div className="about-card">
                <dl className="about-card__list">
                  <div className="about-card__item">
                    <dt>Name</dt>
                    <dd>장태욱</dd>
                  </div>
                  <div className="about-card__item">
                    <dt>Position</dt>
                    <dd>Frontend Developer</dd>
                  </div>
                  <div className="about-card__item">
                    <dt>Focus</dt>
                    <dd>React / UI·UX / AI</dd>
                  </div>
                  <div className="about-card__item">
                    <dt>Location</dt>
                    <dd>Seoul, Korea</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <p className="section-description">주요 기술과 활용 역량을 소개합니다.</p>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card__header">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <p>{skill.description}</p>
                  <progress value={skill.level} max="100" aria-label={`${skill.name} 숙련도`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <p className="section-description">주요 프로젝트와 사용 기술을 소개합니다.</p>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__image-wrap">
                    {project.iconOnly ? (
                      <div
                        className={`project-icon-art project-icon-art--${project.iconOnly}`}
                        aria-label={project.iconOnly === 'shopping' ? '장바구니 아이콘' : '코드 아이콘'}
                        role="img"
                      >
                        {project.iconOnly === 'shopping' ? (
                          <svg viewBox="0 0 200 200" aria-hidden="true">
                            <path d="M56 70h88l-12 94H68l-12-94Z" fill="none" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" />
                            <path d="M78 70V54a22 22 0 0 1 44 0v16" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                            <path d="M90 96c0 10 7 18 20 18s20-8 20-18" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                          </svg>
                        ) : project.iconOnly === 'code' ? (
                          <svg viewBox="0 0 200 200" aria-hidden="true">
                            <path d="M58 60 30 100l28 40" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M142 60l28 40-28 40" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M110 42 90 158" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <span className="movie-emoji" aria-hidden="true">🎬</span>
                        )}
                      </div>
                    ) : (
                      <img className="project-card__image" src={project.image} alt={`${project.title} 미리보기`} />
                    )}
                  </div>
                  <div className="project-card__body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="project-card__technologies" aria-label="사용 기술">
                      {project.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <div className="project-card__actions">
                      <a
                        className="button button--primary"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        프로젝트 보기
                      </a>
                      <a
                        className="button button--secondary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <p className="section-description">교육과 프로젝트 경험을 시간순으로 소개합니다.</p>
            <ol className="timeline">
              {experiences.map((experience) => (
                <li className="timeline__item" key={experience.year}>
                  <time className="timeline__year" dateTime={experience.year}>
                    {experience.year}
                  </time>
                  <div className="timeline__content">
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="container">
            <div className="contact">
              <div className="contact__intro">
                <p className="section-eyebrow">CONTACT</p>
                <h2 className="section-title">LET'S WORK TOGETHER</h2>
                <p className="section-description">
                  프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.
                </p>
                <address className="contact__links">
                  <a href="mailto:wook1359@naver.com">
                    <span>Email</span>
                    wook1359@naver.com
                  </a>
                  <a href="https://github.com/wook13590" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                    github.com/wook13590
                  </a>
                </address>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                  <label htmlFor="name">이름</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">이메일</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">메시지</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="메시지를 입력해주세요"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </div>
                <button className="contact-form__submit" type="submit">
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="container site-footer__inner">
          <p>© 2026 TAEWOOK Portfolio. All Rights Reserved.</p>
          <nav className="site-footer__links" aria-label="푸터 링크">
            <a href="https://github.com/wook13590" target="_blank" rel="noopener noreferrer">
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
