import React, { useState, useEffect } from 'react';
import SectionHeader from '../common/SectionHeader';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiAward, FiExternalLink, FiX, FiMaximize2, FiEye, FiFileText } from 'react-icons/fi';

export default function Certifications({ certs = [] }) {
  const revealRef = useScrollReveal();
  const [selectedCert, setSelectedCert] = useState(null);

  const defaultCerts = [
    {
      title: 'Information Technology Specialist: JavaScript',
      issuer: 'Certiport (A Pearson VUE Business)',
      date: 'Jan 13, 2025',
      credentialId: 'mTp4-DwVM',
      verificationLink: 'https://verify.certiport.com/',
      grade: 'Certified',
      image: '/cert-js.png',
      fileUrl: '/cert-js.png',
      isInternational: true,
      badgeLabel: 'International Certification'
    },
    {
      title: 'Javascript Fullstack MERN Development',
      issuer: 'NAVTTC & KICS UET Lahore',
      date: 'Dec 16, 2024',
      credentialId: 'P-24-895714',
      grade: 'Grade A+',
      image: '/cert-mern.jpg',
      fileUrl: '/cert-mern.jpg'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'LUMSx / ilmX — Lahore University of Management Sciences (LUMS)',
      date: 'Dec 22, 2024',
      credentialId: 'c17846ddd6c44266b817017e3045c766',
      verificationLink: 'https://ilmx.org',
      grade: 'Verified Certificate',
      image: '/cert-lums-datascience.png',
      fileUrl: '/Introduction  to data science  LUMS.pdf'
    },
    {
      title: 'Machine Learning & Deep Learning Internship Certificate',
      issuer: 'National Center for Physics (NCP), Islamabad — Artificial Intelligence Technology Center (AITeC)',
      date: 'May 27, 2024 – August 27, 2024',
      credentialId: 'NCP-CAAD/HR/Int-1455/AITeC',
      grade: 'Internship Completed',
      image: '/cert-ncp-internship.png',
      fileUrl: '/Abdullah Internship NCP.pdf'
    },
    {
      title: 'International Symposium on AI and Medical Imaging and Pattern Recognition (ISAIMP-2023)',
      issuer: 'Artificial Intelligence Technology Center (AITeC), National Center for Physics (NCP), Islamabad',
      date: 'July 24–25, 2023',
      grade: 'Certified Participant',
      image: '/cert-ncp-symposium.png',
      fileUrl: '/International sympouism on AI medical imagining and pattren recognition confrence NCP.pdf',
      isInternational: true,
      badgeLabel: 'International Symposium'
    },
    {
      title: 'Scientific Writing for Impact Factor Journals',
      issuer: 'University of Engineering and Technology (UET), Lahore',
      date: 'Nov 06, 2023',
      credentialId: 'Serial No. 014-2023 | PEB-P-UETLHR-0034',
      grade: '1.0 CPD Credit Point',
      image: '/cert-scientific-writing.jpg',
      fileUrl: '/Scientific writing for impact factor journels 1 Credit point workshop.jpeg'
    },
    {
      title: 'Tools to Improve Your Professional Writing',
      issuer: 'University of Engineering and Technology (UET), Lahore',
      date: 'Nov 13, 2023',
      credentialId: 'Serial No. 34-2023 | PEB-P-UETLHR-0034',
      grade: '1.0 CPD Credit Point',
      image: '/cert-tools-writing.jpg',
      fileUrl: '/Tools to improve your professional writing 1 Credit point workshop.jpeg'
    },
    {
      title: 'Introduction to Web Development',
      issuer: 'IBM (Coursera)',
      date: 'Nov 18, 2023',
      verificationLink: 'https://coursera.org/verify/E8X42H6HASJL',
      grade: 'Certified',
      image: '/cert-ibm.png',
      fileUrl: '/cert-ibm.png'
    },
    {
      title: 'Prompt Engineering Certification',
      issuer: 'NCAI & KICS UET Lahore',
      date: 'December 2023',
      grade: 'Certified',
      image: '/cert-prompt.jpg',
      fileUrl: '/cert-prompt.jpg'
    },
    {
      title: 'IT Career Symposium Recognition',
      issuer: 'IEEE ComSoc & IEEE Computer Society Lahore Section',
      date: 'Oct 15, 2024',
      grade: 'Certified Participant',
      image: '/cert-ieee.jpg',
      fileUrl: '/cert-ieee.jpg'
    },
    {
      title: '14th National Youth Peace Festival 2024',
      issuer: 'CHANAN Development Association & NED',
      date: 'September 24-25, 2024',
      grade: 'Certified Participant',
      image: '/cert-peace.jpg',
      fileUrl: '/cert-peace.jpg'
    }
  ];

  const displayCerts = certs.length ? certs : defaultCerts;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeader
          label=""
          title="Certificates"
          subtitle="Verified academic and industry credentials in Full-Stack Web Development, Artificial Intelligence, and Computer Science."
        />

        <div className="certs-slip-grid">
          {displayCerts.map((cert, idx) => {
            const isIntl = cert.isInternational || cert.credentialId === 'mTp4-DwVM';
            return (
              <div
                key={cert._id || idx}
                className={`cert-slip ${isIntl ? 'cert-slip-international' : ''}`}
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                title="Click to view full certificate"
              >
                <div className="cert-slip-preview">
                  <img
                    src={cert.image || `/images/cert-${idx + 1}.png`}
                    alt={cert.title}
                    className="cert-slip-img"
                    loading="lazy"
                  />
                  <div className="cert-slip-overlay">
                    <FiMaximize2 className="cert-slip-icon" />
                  </div>
                </div>

                <div className="cert-slip-info">
                  {isIntl && (
                    <div className="cert-intl-badge-inline">
                      <span>🌐 International Certification</span>
                    </div>
                  )}
                  <h4>{cert.title}</h4>
                  <p className="cert-slip-issuer">
                    {cert.issuer}
                    {cert.trainingPartner && ` • ${cert.trainingPartner}`}
                    {cert.venue && ` • ${cert.venue}`}
                    {cert.location && ` • ${cert.location}`}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center', marginTop: '0.35rem' }}>
                    {cert.credentialId && (
                      <code className="cert-slip-id">{cert.credentialId}</code>
                    )}
                    {cert.date && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                        {cert.date}
                      </span>
                    )}
                    {cert.verificationLink && (
                      <a
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--accent-primary)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          textDecoration: 'none'
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Verify <FiExternalLink size={11} />
                      </a>
                    )}
                  </div>

                  <div className="cert-slip-actions">
                    <button
                      type="button"
                      className="btn-cert-view"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      title="View Certificate"
                    >
                      <FiEye style={{ marginRight: '0.3rem' }} /> View Certificate
                    </button>
                    {cert.fileUrl && (
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cert-download"
                        onClick={(e) => e.stopPropagation()}
                        title="Open Original Document"
                      >
                        <FiFileText style={{ marginRight: '0.25rem' }} /> Original
                      </a>
                    )}
                  </div>
                </div>

                {cert.grade && <span className="cert-slip-badge">{cert.grade}</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* ══ CERTIFICATE LIGHTBOX MODAL ══ */}
      {selectedCert && (
        <div
          className="cert-lightbox-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="cert-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-lightbox-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close Certificate Preview"
              title="Close (Esc)"
            >
              <FiX />
            </button>

            <div className="cert-lightbox-img-wrapper">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-lightbox-img"
              />
            </div>

            <div className="cert-lightbox-footer">
              <div>
                <h4 className="cert-lightbox-title">{selectedCert.title}</h4>
                <p className="cert-lightbox-issuer">
                  {selectedCert.issuer} {selectedCert.date ? `• ${selectedCert.date}` : ''}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {selectedCert.credentialId && (
                  <code className="cert-slip-id">{selectedCert.credentialId}</code>
                )}
                {selectedCert.fileUrl && (
                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <FiFileText size={12} /> Open Original File <FiExternalLink size={11} />
                  </a>
                )}
                {selectedCert.verificationLink && (
                  <a
                    href={selectedCert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    Verify Credential <FiExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



