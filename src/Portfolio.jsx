import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Briefcase, GraduationCap, Code, Database, Globe } from 'lucide-react';
import './Portfolio.css';
import Lenis from '@studio-freight/lenis';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date());

  // Testimonials scroll animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Анимация счётчика статистики при скролле
  useEffect(() => {
    const animateValue = (valueElement, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);

        // 🔥 Обновляем только текст числа, не трогая .stat-unit
        const textNode = Array.from(valueElement.childNodes).find(node => node.nodeType === 3);
        if (textNode) {
          textNode.textContent = current;
        } else {
          // Если текстового узла нет, создаём
          const unit = valueElement.querySelector('.stat-unit');
          valueElement.textContent = current;
          if (unit) valueElement.appendChild(unit);
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const statItems = entry.target.querySelectorAll('.stat-item');

          if (entry.isIntersecting) {
            // 🔥 Появляется - запускаем анимацию
            entry.target.classList.add('animated');

            // Code Enthusiast: 0 → 100%
            const value1 = statItems[0]?.querySelector('.stat-value');
            if (value1) animateValue(value1, 0, 100, 2000);

            // Projects Completed: 0 → 15+
            const value2 = statItems[1]?.querySelector('.stat-value');
            if (value2) animateValue(value2, 0, 15, 2000);

            // Learning Mode: 0 → 110%
            const value3 = statItems[2]?.querySelector('.stat-value');
            if (value3) animateValue(value3, 0, 110, 2000);
          } else {
            // 🔥 Уходит - сбрасываем
            entry.target.classList.remove('animated');

            // Сбрасываем значения обратно, сохраняя .stat-unit
            statItems.forEach((item, index) => {
              const valueEl = item.querySelector('.stat-value');
              if (valueEl) {
                const unit = valueEl.querySelector('.stat-unit');
                const textNode = Array.from(valueEl.childNodes).find(node => node.nodeType === 3);
                if (textNode) {
                  textNode.textContent = '0';
                } else {
                  valueEl.textContent = '0';
                  if (unit) valueEl.appendChild(unit);
                }
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

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
          <div className="top-bar-group">
            <span className="top-bar-text">Kyrgyz Republic</span>
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
              <h1 className="hero-title">FULLSTACK &nbsp; DEV</h1>
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
          {/* ТОЛЬКО ЗАГОЛОВОК */}
          <div className="about-header">
            <div className="about-header-left">
              <div className="about-span-container">
                <div className="about-graphic">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                <div className="about-span-text">
                  <span className="bracket">(</span>
                  <span className="text">ABOUT ME</span>
                  <span className="bracket">)</span>
                </div>
              </div>
              <h2 className="about-main-title">Fullstack Developer.<br />Tech Enthusiast.</h2>
            </div>

            <div className="about-header-right">
              <p className="about-description">
                Building digital experiences that feel as smooth as your favorite workflow.
              </p>
            </div>
          </div>

          {/* КОНТЕНТ ОТДЕЛЬНО */}
          <div className="about-content-wrapper">
            <div className="about-text-column">
              <p className="about-text">
                Hey, I’m Munira. I’m someone who finds satisfaction in{" "}
                <span style={{ color: "#000" }}>things being finished</span> — not rushed, not abandoned halfway, but calmly brought to a point where they finally feel complete.
              </p>

              <p className="about-text">
                I tend to notice{" "}
                <span style={{ color: "#000" }}>details others overlook</span>. When something is almost right, I feel it immediately — and I can’t leave it there. A small adjustment, another pass, a quiet refinement, until everything{" "}
                <span style={{ color: "#000" }}>settles into place</span>.
              </p>

              <p className="about-text">
                When I’m not focused on a task, I usually slow things down:{" "}
                <span style={{ color: "#000" }}>a cup of cappuccino</span>, good music, observing how things connect — visually, structurally, intuitively. I care about{" "}
                <span style={{ color: "#000" }}>harmony, character, and intention</span>.
              </p>


            </div>

            <div className="stat-item">
              <div className="stat-label">Music Lover</div>
              <div className="stat-value">110<span className="stat-unit">%</span></div>
            </div>

            <div className="stat-item">
              <div className="stat-label">Cups of Cappuccino / Week</div>
              <div className="stat-value">15<span className="stat-unit">+</span></div>
            </div>

            <div className="stat-item">
              <div className="stat-label">Traveller Enthusiast</div>
              <div className="stat-value">100<span className="stat-unit">%</span></div>
            </div>


            <div className="about-image-column">
              <img src="src/assets/img/moe_ebalo2.jpg" alt="Munira Satanova" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        {/* Заголовок */}
        <div className="testimonials-header">
          <span className="testimonials-header-slash">//</span>
          <h2 className="testimonials-header-title">TESTIMONIALS</h2>
          <span className="testimonials-header-slash">//</span>
        </div>
        <p className="testimonials-subtitle">(© all bragging rights reserved by me)</p>

        <div className="testimonials-container">
          {/* 🔥 Sticky круг - остаётся в центре */}
          <div className="testimonials-circle-wrapper">
            <div className="testimonials-circle">
              <svg className="rotating-text" viewBox="0 0 200 200">
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  fill="none"
                />
                <text fontSize="12" fill="#fff" letterSpacing="7.5">
                  <textPath href="#circlePath">
                    TESTIMONIAL - SEASONED WITH LOVE -
                  </textPath>
                </text>
              </svg>

              <div className="quote-marks">
                <span style={{ fontWeight: 700 }}>,,</span>
              </div>
            </div>
          </div>

          {/* Testimonials - скроллятся под кругом */}
          <div className="testimonials-content">
            <div className="testimonial-card testimonial-right">
              <p className="testimonial-text">
                Munira was a pleasure to work with at Siemens. Her frontend skills were invaluable to our team during her 6-month period with us. I recommend Munira for any frontend project and wish her all the best.
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Alexis Delauney</span>
                  <span className="author-company">Siemens</span>
                </div>
                <img src="src/assets/img/siemens-logo.png" alt="Siemens" className="author-logo" />
              </div>
            </div>

            <div className="testimonial-card testimonial-left">
              <p className="testimonial-text">
                Munira and I worked on the same team on a project for a few months. Undoubtedly, she has amazing skills. She understands the requirements and has ideas to make the outcome better.
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Adelya Musaeva</span>
                  <span className="author-company">BOSCH</span>
                </div>
                <img src="src/assets/img/bosch-logo.png" alt="Bosch" className="author-logo" />
              </div>
            </div>

            <div className="testimonial-card testimonial-right">
              <p className="testimonial-text">
                Munira is quick to learn and incredibly responsive. I worked with her in a team, and I can confidently say she never lets anyone down - she delivers on time, every time. Communicating and collaborating with her is easy, and she brings both skill and reliability to any project. </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Azilia Adylgazieva</span>
                  <span className="author-company">Deutsche Telekom</span>
                </div>
                <img src="src/assets/img/dtelekom.png" alt="Deutsche Telekom" className="author-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cursor-follower"></div>
    </div>
  );
}