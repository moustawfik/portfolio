import { useState } from 'react';
import { profile } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact">
      <div className="section">
        <div className="contact__card glass">
          <p className="section-label">Let's Connect</p>
          <h2 className="contact__title">Interested in working together?</h2>
          <p className="contact__desc">
            I'm always open to new opportunities, collaborations, and conversations.
            Feel free to reach out.
          </p>
          <div className="contact__links">
            <button
              onClick={handleEmailClick}
              className="contact__icon-btn"
              title={copied ? 'Copied!' : `Copy email: ${profile.email}`}
            >
              <span className="contact__icon-wrap">
                {copied ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                )}
              </span>
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__icon-btn"
              title="LinkedIn"
            >
              <span className="contact__icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact__card {
          padding: 36px;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          position: relative;
        }

        .contact__card .section-label {
          margin-bottom: 12px;
        }

        .contact__title {
          font-size: 26px;
          font-weight: 700;
          background: linear-gradient(135deg, #f2f0ed 0%, #ff6b6b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.3px;
          margin-bottom: 12px;
        }

        .contact__desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact__links {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .contact__icon-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          color: inherit;
          text-decoration: none;
        }

        .contact__icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          transition: all var(--transition);
        }

        .contact__icon-wrap svg {
          stroke: url(#contact-gradient);
          transition: all var(--transition);
        }

        .contact__icon-btn:hover .contact__icon-wrap {
          border-color: var(--border-hover);
          background: rgba(255, 107, 107, 0.08);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255, 107, 107, 0.15);
        }

        @media (max-width: 640px) {
          .contact__card {
            padding: 32px 24px;
          }

          .contact__title {
            font-size: 22px;
          }
        }
      `}</style>

      {/* SVG gradient definition for icon strokes */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#ee5a24" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
