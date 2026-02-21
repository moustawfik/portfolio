import { Link } from 'react-router-dom';

export default function FrameworksBanner() {
  return (
    <section className="fw-banner">
      <div className="section">
        <Link to="/retention-architecture" className="fw-banner__card glass">
          <div className="fw-banner__accent" />
          <div className="fw-banner__content">
            <p className="fw-banner__label">Featured</p>
            <h3 className="fw-banner__title">Retention Architecture</h3>
            <p className="fw-banner__desc">
              Nine frameworks for building CS organizations that protect and grow revenue. Tool-agnostic. Built from the operator's seat.
            </p>
          </div>
          <div className="fw-banner__cta">
            <span className="fw-banner__cta-text">Explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8"/>
            </svg>
          </div>
        </Link>
      </div>

      <style>{`
        .fw-banner .section {
          padding-top: 0;
          padding-bottom: 0;
        }

        .fw-banner__card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 32px 36px;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          cursor: pointer;
          transition: all var(--transition);
        }

        .fw-banner__card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }

        .fw-banner__accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
          border-radius: 2px 2px 0 0;
        }

        .fw-banner__content {
          flex: 1;
          min-width: 0;
        }

        .fw-banner__label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .fw-banner__title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.3px;
          margin-bottom: 8px;
        }

        .fw-banner__desc {
          font-size: 13px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 520px;
        }

        .fw-banner__cta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-tertiary);
          transition: all var(--transition);
        }

        .fw-banner__card:hover .fw-banner__cta {
          color: var(--accent);
        }

        .fw-banner__card:hover .fw-banner__cta svg {
          transform: translate(2px, -2px);
        }

        .fw-banner__cta svg {
          transition: transform var(--transition);
        }

        @media (max-width: 640px) {
          .fw-banner__card {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 22px;
            gap: 16px;
          }

          .fw-banner__title {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
