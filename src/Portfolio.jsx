import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Briefcase, GraduationCap, Code, Database, Globe } from 'lucide-react';
import './Portfolio.css';
import Lenis from '@studio-freight/lenis';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date());

  // 🔥 Lenis smooth scroll + blur эффект (ОБЪЕДИНЕНО)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false
    });

    // Обработчик скролла для blur и секций
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;

      const blurAmount = Math.min(scrollY / maxScroll * 20, 20);
      const bgOpacity = Math.min(scrollY / maxScroll * 0.8, 0.8);

      document.querySelector('.nav')?.style.setProperty('--blur-amount', `${blurAmount}px`);
      document.querySelector('.nav')?.style.setProperty('--bg-opacity', bgOpacity);
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

    // 🔥 Lenis интегрируется с handleScroll
    lenis.on('scroll', handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Часы
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const follower = document.querySelector('.cursor-follower');

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const offsetX = 14; // вправо
    const offsetY = 14; // вниз
    const speed = 0.2; // плавность (меньше = медленнее)

    const move = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      follower.style.transform = `translate(
      ${currentX + offsetX}px,
      ${currentY + offsetY}px
    )`;

      requestAnimationFrame(move);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo" onClick={() => scrollToSection('home')}>MUNIRA</div>
          <div className="menu-icon">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>
      </nav>

      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-group">
            <span className="top-bar-text">
              {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
            <span className="top-bar-text">
              {time.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="top-bar-group top-bar-status">
            <div className="status-dot"></div>
            <span className="top-bar-text">Looking for Werkstudent internship</span>
          </div>
          <div className="top-bar-group">
            <div className="profile-container">
              <div className="profile-bars">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
                <div className="bar bar4"></div>
              </div>
              <div className="profile-image">
                <img src="src/assets/img/moe_ebalo.jpg" alt="Munira" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-title-container">
              <h1 className="hero-title">FULLSTACK DEV</h1>
              <div className="hero-title-gif">
                <img src="https://framerusercontent.com/images/4CXxaChy4DWdxp8HB0coVXQTNB8.gif" alt="Developer Animation" />
              </div>
            </div>
            <p className="hero-description">
              Hi, I'm <span style={{ color: '#000' }}>Munira Satanova</span>. I turn <span style={{ color: '#000' }}>front-end dreams</span> and <span style={{ color: '#000' }}>back-end nightmares</span> into one seamless, mind-blowing reality. <br />
              I build worlds where <span style={{ color: '#000' }}>pixels meet APIs</span>, making apps that feel alive and think for themselves.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-container">
          {/* 🔥 НОВЫЙ ЗАГОЛОВОК */}
          <div className="projects-header">
            <div className="projects-header-left">
              <div className="projects-span-container">
                <div className="projects-graphic">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                <div className="projects-span-text">
                  <span className="bracket">(</span>
                  <span className="text">PROJECTS</span>
                  <span className="bracket">)</span>
                </div>
              </div>
              <h2 className="projects-main-title">Freshly Cooked Designs</h2>
            </div>
            <div className="projects-header-right">
              <p className="projects-description">
                (Some of my <span className="highlight">best projects</span> highlighting everything I have to offer)
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {[
              {
                title: 'Uniflow',
                desc: 'UniFlow is a full-stack student productivity platform for managing schedules, tasks, projects, and study workflows.',
                github: 'https://github.com/SatMunira/uniflow'
              },
              {
                title: 'Finance Analytics App',
                desc: 'A modern profit and loss management system that visualizes financial performance through monthly trends, category insights, and net/gross calculations.',
                github: 'https://github.com/SatMunira/guv-app'
              },
              {
                title: 'Paperless',
                desc: 'A paperless document management app focused on organizing, structuring, and accessing digital documents with clarity and ease.',
                github: 'https://github.com/SatMunira/paperless_react'
              },
              {
                title: 'Kafka',
                desc: 'A modern dark-mode app that lets users discover new books, browse by genres, and organize their personal library effortlessly.',
                github: 'https://github.com/SatMunira/Kafka-React'
              }
            ].map((project, i) => (
              <div key={i} className="project-card">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                  onMouseMove={(e) => {
                    const badge = e.currentTarget.querySelector('.project-badge');
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    badge.style.transform = `translate(${x}px, ${y}px)`;
                  }}
                  onMouseEnter={(e) => {
                    const badge = e.currentTarget.querySelector('.project-badge');
                    badge.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    const badge = e.currentTarget.querySelector('.project-badge');
                    badge.style.opacity = '0';
                  }}
                >
                  <div className="project-image">
                    <div className="project-badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>VIEW PROJECT</span>
                    </div>
                  </div>
                </a>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.desc}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Building the future, one line of code at a time</p>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I'm a dedicated Computer Science student with a strong foundation in both frontend and backend development. My journey in tech has been driven by curiosity and a desire to solve real-world problems through elegant code.
              </p>
              <p className="about-text">
                Currently, I'm expanding my frontend expertise at Siemens while maintaining my strong backend capabilities with Java. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the forefront of web development.
              </p>
            </div>
            <div className="experience-cards">
              <div className="experience-card">
                <div className="experience-icon"><Briefcase size={28} /></div>
                <div className="experience-details">
                  <h3>Frontend Developer Intern</h3>
                  <div className="company">Siemens</div>
                  <div className="period">2024 - Present</div>
                  <p>Working on modern web applications using React, TypeScript, and other cutting-edge technologies. Contributing to large-scale enterprise projects and collaborating with international teams.</p>
                </div>
              </div>
              <div className="experience-card">
                <div className="experience-icon"><GraduationCap size={28} /></div>
                <div className="experience-details">
                  <h3>Computer Science Student</h3>
                  <div className="company">Westsächsische Hochschule Zwickau</div>
                  <div className="period">2021 - Present</div>
                  <p>Pursuing comprehensive education in software engineering, algorithms, data structures, and system design. Active participant in coding competitions and tech communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-icon"><Code size={32} /></div>
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
              <div className="skill-category-icon"><Database size={32} /></div>
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
              <div className="skill-category-icon"><Globe size={32} /></div>
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

      <section id="contact" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's create something amazing together</p>
          </div>
          <div className="contact-container">
            <div className="contact-content">
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon"><Mail size={24} /></div>
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </div>
                <div className="contact-method">
                  <div className="contact-icon"><Linkedin size={24} /></div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={24} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={24} /></a>
                <a href="mailto:your.email@example.com" className="social-link"><Mail size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Munira Satanova. Built with React & Love ❤️</p>
      </footer>
      <div className="cursor-follower"></div>
    </div>
  );
}