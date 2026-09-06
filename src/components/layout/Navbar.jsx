import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ resumeUrl }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'experience', 'techstack', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#techstack', id: 'techstack' },
    { name: 'Research & Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="navbar-logo">
          ABDULLAH<span style={{ color: 'var(--accent-primary)' }}>.AI</span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeUrl || '/ABDULLAH_RESUME.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download="ABDULLAH_RESUME.pdf"
            className="navbar-cta"
          >
            Resume PDF
          </a>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href={resumeUrl || '/ABDULLAH_RESUME.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          download="ABDULLAH_RESUME.pdf"
          className="navbar-cta"
          style={{ marginTop: '1rem', textAlign: 'center' }}
          onClick={() => setMenuOpen(false)}
        >
          Resume PDF
        </a>
      </div>
    </nav>
  );
}
