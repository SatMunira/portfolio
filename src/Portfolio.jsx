import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Briefcase, GraduationCap, Code, Database, Globe } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // blur достигнет максимума через 200px

      // Прогрессивный blur от 0 до 20px
      const blurAmount = Math.min(scrollY / maxScroll * 20, 20);
      // Прогрессивная прозрачность фона от 0 до 0.8
      const bgOpacity = Math.min(scrollY / maxScroll * 0.8, 0.8);

      document.querySelector('.nav').style.setProperty('--blur-amount', `${blurAmount}px`);
      document.querySelector('.nav').style.setProperty('--bg-opacity', bgOpacity);

      setScrolled(scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo" onClick={() => scrollToSection('home')}>MUNIRA</div>
          <div className="menu-icon">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">MUNIRA</h1>
            <div className="hero-subtitle">Fullstack Developer</div>
            <div className="hero-location">Based in Germany</div>
            <p className="hero-description">
              Computer Science student at Westsächsische Hochschule Zwickau, currently doing
              frontend development internship at Siemens. Passionate about creating elegant
              solutions with modern technologies.
            </p>
            <a href="#about" className="hero-cta" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>
              About Me
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Building the future, one line of code at a time
            </p>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I'm a dedicated Computer Science student with a strong foundation in both
                frontend and backend development. My journey in tech has been driven by
                curiosity and a desire to solve real-world problems through elegant code.
              </p>
              <p className="about-text">
                Currently, I'm expanding my frontend expertise at Siemens while maintaining
                my strong backend capabilities with Java. I believe in writing clean,
                maintainable code and continuously learning new technologies to stay at
                the forefront of web development.
              </p>
            </div>

            <div className="experience-cards">
              <div className="experience-card">
                <div className="experience-icon">
                  <Briefcase size={28} />
                </div>
                <div className="experience-details">
                  <h3>Frontend Developer Intern</h3>
                  <div className="company">Siemens</div>
                  <div className="period">2024 - Present</div>
                  <p>
                    Working on modern web applications using React, TypeScript, and other
                    cutting-edge technologies. Contributing to large-scale enterprise projects
                    and collaborating with international teams.
                  </p>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-icon">
                  <GraduationCap size={28} />
                </div>
                <div className="experience-details">
                  <h3>Computer Science Student</h3>
                  <div className="company">Westsächsische Hochschule Zwickau</div>
                  <div className="period">2021 - Present</div>
                  <p>
                    Pursuing comprehensive education in software engineering, algorithms,
                    data structures, and system design. Active participant in coding
                    competitions and tech communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-icon">
                <Code size={32} />
              </div>
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Webpack</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-icon">
                <Database size={32} />
              </div>
              <h3>Backend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">GraphQL</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-icon">
                <Globe size={32} />
              </div>
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Some of my recent work that I'm proud of
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  A full-stack e-commerce solution with modern UI, secure payment integration,
                  and real-time inventory management. Built with React and Spring Boot.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Spring Boot</span>
                  <span className="tech-badge">PostgreSQL</span>
                  <span className="tech-badge">Docker</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <Github size={18} /> Code
                  </a>
                  <a href="#" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3 className="project-title">Task Management App</h3>
                <p className="project-description">
                  Collaborative task management tool with real-time updates, team workspaces,
                  and productivity analytics. Features drag-and-drop interface.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Socket.io</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <Github size={18} /> Code
                  </a>
                  <a href="#" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3 className="project-title">Weather Dashboard</h3>
                <p className="project-description">
                  Real-time weather monitoring dashboard with interactive maps, forecasts,
                  and historical data visualization. Clean and intuitive interface.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">D3.js</span>
                  <span className="tech-badge">Weather API</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <Github size={18} /> Code
                  </a>
                  <a href="#" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's create something amazing together
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-content">
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <Linkedin size={24} />
                  </div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:your.email@example.com" className="social-link">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Your Name. Built with React & Love ❤️</p>
      </footer>
    </div>
  );
}