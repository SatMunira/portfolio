import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Briefcase, GraduationCap, Code, Database, Globe } from 'lucide-react';

export default function Portfolio() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

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
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          color: #2c3e50;
          overflow-x: hidden;
        }

        .portfolio {
          position: relative;
        }

        /* Decorative Background Elements */
        .portfolio::before {
          content: '';
          position: fixed;
          top: -50%;
          right: -10%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(52, 152, 219, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          animation: float 20s ease-in-out infinite;
        }

        .portfolio::after {
          content: '';
          position: fixed;
          bottom: -30%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(46, 204, 113, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          animation: float 15s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 5%;
          transition: all 0.3s ease;
          background: ${scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(10px)' : 'none'};
          box-shadow: ${scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #2c3e50;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo:hover {
          color: #3498db;
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: #34495e;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #3498db;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #3498db;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 5%;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          z-index: 1;
        }

        .hero-text {
          animation: slideInLeft 1s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-greeting {
          font-size: 1.2rem;
          color: #3498db;
          font-weight: 600;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          font-weight: 900;
          color: #2c3e50;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #7f8c8d;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #5a6c7d;
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #3498db;
          border: 2px solid #3498db;
        }

        .btn-secondary:hover {
          background: #3498db;
          color: white;
          transform: translateY(-3px);
        }

        .hero-visual {
          position: relative;
          animation: slideInRight 1s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-card {
          background: white;
          border-radius: 30px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }

        .hero-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #3498db, #2ecc71, #3498db);
          background-size: 200% 100%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #3498db;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #7f8c8d;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Section Styles */
        .section {
          padding: 6rem 5%;
          position: relative;
          z-index: 1;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #2ecc71);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          max-width: 600px;
          margin: 1.5rem auto 0;
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-content {
          animation: fadeInLeft 1s ease-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #5a6c7d;
          margin-bottom: 2rem;
        }

        .experience-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .experience-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s ease;
          animation: fadeInRight 1s ease-out;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .experience-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .experience-details h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .experience-details .company {
          color: #3498db;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .experience-details .period {
          color: #7f8c8d;
          font-size: 0.9rem;
          margin-bottom: 0.8rem;
        }

        .experience-details p {
          color: #5a6c7d;
          line-height: 1.6;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: white;
          padding: 2.5rem;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          animation: scaleIn 0.6s ease-out;
          animation-fill-mode: both;
        }

        .skill-category:nth-child(1) { animation-delay: 0.1s; }
        .skill-category:nth-child(2) { animation-delay: 0.2s; }
        .skill-category:nth-child(3) { animation-delay: 0.3s; }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .skill-category:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .skill-category-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
        }

        .skill-category:nth-child(2) .skill-category-icon {
          background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
        }

        .skill-category:nth-child(3) .skill-category-icon {
          background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        }

        .skill-category h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          padding: 0.6rem 1.2rem;
          background: #f8f9fa;
          border-radius: 25px;
          font-size: 0.9rem;
          color: #34495e;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .skill-tag:hover {
          background: #3498db;
          color: white;
          border-color: #2980b9;
          transform: translateY(-2px);
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: white;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          height: 250px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .project-card:nth-child(2) .project-image {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .project-card:nth-child(3) .project-image {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .project-image::before {
          content: 'Project Image';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          opacity: 0.7;
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #5a6c7d;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          padding: 0.4rem 1rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 20px;
          font-size: 0.85rem;
          color: #34495e;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: #3498db;
          color: white;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: #2980b9;
          transform: translateX(5px);
        }

        /* Contact Section */
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-content {
          background: white;
          padding: 4rem;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          animation: scaleIn 0.8s ease-out;
        }

        .contact-text {
          font-size: 1.2rem;
          color: #5a6c7d;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .contact-methods {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .contact-method {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 20px;
          min-width: 200px;
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          color: white;
        }

        .contact-method:hover .contact-icon {
          background: white;
          color: #3498db;
        }

        .contact-method:hover a {
          color: white;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .contact-method a {
          color: #34495e;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-5px) rotate(360deg);
          box-shadow: 0 10px 25px rgba(52, 152, 219, 0.4);
        }

        /* Footer */
        .footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 2rem;
        }

        .footer p {
          margin: 0;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content,
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .nav-links {
            display: none;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .stat-grid {
            grid-template-columns: 1fr;
          }

          .contact-content {
            padding: 2rem;
          }

          .contact-methods {
            flex-direction: column;
            align-items: stretch;
          }
        }

        /* Scroll Animation Observer */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

            {/* Navigation */}
            <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-content">
                    <div className="logo" onClick={() => scrollToSection('home')}>Portfolio</div>
                    <ul className="nav-links">
                        <li className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</li>
                        <li className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</li>
                        <li className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</li>
                        <li className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</li>
                        <li className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-greeting">Hello, I'm</div>
                        <h1 className="hero-title">Your Name</h1>
                        <div className="hero-subtitle">Fullstack Developer</div>
                        <p className="hero-description">
                            Computer Science student at Westsächsische Hochschule Zwickau, currently doing
                            frontend development internship at Siemens. Passionate about creating elegant
                            solutions with modern technologies.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                                View Projects
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-card">
                            <div className="stat-grid">
                                <div className="stat-item">
                                    <span className="stat-number">3+</span>
                                    <span className="stat-label">Years Coding</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">Java</span>
                                    <span className="stat-label">Backend Expert</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">React</span>
                                    <span className="stat-label">Frontend Focus</span>
                                </div>
                            </div>
                        </div>
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