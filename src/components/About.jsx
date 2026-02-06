import { about } from '../data';

const traitAccents = [
  { color: '#ff6b6b', gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)' },
  { color: '#ffad76', gradient: 'linear-gradient(135deg, #ffad76, #f7797d)' },
  { color: '#fbd786', gradient: 'linear-gradient(135deg, #fbd786, #f7797d)' },
];

const traitIcons = [
  // Shield — Winston Wolfe Energy
  <svg key="shield" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>,
  // CPU — AI-Driven
  <svg key="cpu" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
  </svg>,
  // Chat — Radical Candor
  <svg key="chat" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    <path d="M8 10h8M8 14h4"/>
  </svg>,
];

export default function About() {
  return (
    <section id="about">
      <div className="section">
        <p className="section-label">Get to Know Me</p>
        <h2 className="section-title">About</h2>

        <div className="about__intro">
          <p className="about__intro-text">{about.intro}</p>
          <p className="about__intro-context">{about.context}</p>
        </div>

        <p className="about__sub-label">What I Bring to the Table</p>

        <div className="about__traits">
          {about.traits.map((trait, i) => {
            const accent = traitAccents[i];
            return (
              <div
                key={trait.title}
                className="about__trait-card glass"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="about__trait-icon"
                  style={{ color: accent.color }}
                >
                  {traitIcons[i]}
                </div>
                <h3
                  className="about__trait-title"
                  style={{
                    background: accent.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {trait.title}
                </h3>
                <p className="about__trait-desc">{trait.description}</p>
              </div>
            );
          })}
        </div>

        <div className="about__beyond glass">
          <p className="about__beyond-label">Beyond the Spreadsheet</p>
          <p className="about__beyond-text">{about.beyond}</p>
        </div>

        <div className="about__closing">
          <hr className="about__rule" />
          <p className="about__quote">{about.closing}</p>
        </div>
      </div>

      <style>{`
        .about__intro {
          border-left: 2px solid var(--accent);
          padding-left: 24px;
          margin-bottom: 40px;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }

        .about__intro-text {
          font-size: 16px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .about__intro-context {
          font-size: 15px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .about__sub-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .about__traits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .about__trait-card {
          padding: 28px;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          transition: all var(--transition);
        }

        .about__trait-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .about__trait-icon {
          margin-bottom: 16px;
          opacity: 0.9;
        }

        .about__trait-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.2px;
        }

        .about__trait-desc {
          font-size: 13px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .about__beyond {
          padding: 28px;
          margin-bottom: 32px;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          animation-delay: 0.3s;
          transition: all var(--transition);
        }

        .about__beyond:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .about__beyond-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
        }

        .about__beyond-text {
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .about__closing {
          text-align: center;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          animation-delay: 0.4s;
        }

        .about__rule {
          border: none;
          height: 2px;
          width: 80px;
          margin: 0 auto 24px;
          background: var(--gradient-primary);
          border-radius: 1px;
        }

        .about__quote {
          font-size: 16px;
          font-weight: 500;
          font-style: italic;
          line-height: 1.6;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .about__traits {
            grid-template-columns: 1fr;
          }

          .about__trait-card {
            padding: 22px;
          }

          .about__beyond {
            padding: 22px;
          }

          .about__intro {
            padding-left: 18px;
          }

          .about__quote {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
