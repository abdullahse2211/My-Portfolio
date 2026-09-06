import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin } from 'react-icons/fi';

const WEB3FORMS_ACCESS_KEY = 'c5e5a78a-47a4-4eed-96a1-b657c95f6e29';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const revealRef = useScrollReveal();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          label=""
          title="Let's Discuss AI Engineering & Research"
          subtitle="Open to AI/ML Engineer roles, Computer Vision research collaborations, or full-stack model deployments."
        />

        <div ref={revealRef} className="contact-content reveal">
          <div className="contact-info">
            <h3>Direct Contact</h3>
            <p>
              Whether you are an engineering manager looking to discuss benchmark metrics or an AI laboratory seeking research collaboration, feel free to reach out directly.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">
                  <FiMail />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>EMAIL</span>
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    <a href={`mailto:${profile?.email || 'abdullahse2211@gmail.com'}`}>
                      {profile?.email || 'abdullahse2211@gmail.com'}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <FiPhone />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>PHONE</span>
                  <p style={{ margin: 0, fontWeight: 500 }}>{profile?.phone || '+92 3094157102'}</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <FiMapPin />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>LOCATION</span>
                  <p style={{ margin: 0, fontWeight: 500 }}>{profile?.location || 'Lahore, Punjab, Pakistan'}</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <FiGithub />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>GITHUB</span>
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    <a href={profile?.socialLinks?.github || 'https://github.com/abdullahse2211'} target="_blank" rel="noopener noreferrer">
                      github.com/abdullahse2211
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <FiLinkedin />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>LINKEDIN</span>
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    <a href={profile?.socialLinks?.linkedin || 'https://linkedin.com/in/muhammad-abdullah2211'} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/muhammad-abdullah2211
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <FiCheckCircle style={{ fontSize: '3rem', marginBottom: '1rem' }} />
                <h3>Message Sent Successfully! ✨</h3>
                <p>Thank you for reaching out. Abdullah will get back to you shortly.</p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Alex Vance"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@ai-lab.org"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Inquire about project benchmarks, job roles, or research..."
                  />
                </div>

                {error && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    marginBottom: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#ef4444',
                    fontSize: '0.9rem'
                  }}>
                    <FiAlertCircle />
                    {error}
                  </div>
                )}

                <Button type="submit" variant="primary" disabled={loading} icon={FiSend}>
                  {loading ? 'Transmitting...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
