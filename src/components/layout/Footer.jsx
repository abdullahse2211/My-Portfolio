import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer({ socials }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-socials">
            <a
              href={socials?.github || 'https://github.com/abdullahse2211'}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={socials?.linkedin || 'https://linkedin.com/in/muhammad-abdullah2211'}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={socials?.email?.startsWith('mailto:') ? socials.email : `mailto:${socials?.email || 'abdullahse2211@gmail.com'}`}
              className="footer-social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          <p className="footer-copyright">
            © {currentYear} Muhammad Abdullah. Engineered with PyTorch & React.
          </p>
        </div>
      </div>
    </footer>
  );
}
