import { profile } from '../data';

export default function Contact() {
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
            <a href={`mailto:${profile.email}`} className="contact__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 7L2 7"/>
              </svg>
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
              GitHub
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
          margin-bottom: 24px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact__links {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .contact__link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          padding: 10px 20px;
          border-radius: var(--radius-sm);
          transition: all var(--transition);
        }

        .contact__link:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
          background: rgba(255, 107, 107, 0.06);
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .contact__card {
            padding: 32px 24px;
          }

          .contact__title {
            font-size: 22px;
          }

          .contact__links {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
