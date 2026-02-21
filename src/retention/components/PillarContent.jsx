import { Link } from 'react-router-dom';
import { pillars } from '../data/pillars';
import ContentSection from './ContentSection';
import DiagramWrapper from './DiagramWrapper';

export default function PillarContent({ pillar, content, DiagramComponent }) {
  const currentIndex = pillars.findIndex(p => p.slug === pillar.slug);
  const prev = currentIndex > 0 ? pillars[currentIndex - 1] : null;
  const next = currentIndex < pillars.length - 1 ? pillars[currentIndex + 1] : null;

  return (
    <article className="pillar">
      <header className="pillar__header">
        <Link to="/retention-architecture" className="pillar__breadcrumb">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          All Frameworks
        </Link>
        <span
          className="pillar__number"
          style={{
            background: pillar.accentGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {String(pillar.number).padStart(2, '0')}
        </span>
        <h1 className="pillar__title">{pillar.title}</h1>
        {content?.lede && (
          <p className="pillar__lede">{content.lede}</p>
        )}
      </header>

      {DiagramComponent && (
        <DiagramWrapper title="Interactive Diagram">
          <DiagramComponent />
        </DiagramWrapper>
      )}

      {content?.sections?.map((section, i) => (
        <ContentSection key={i} section={section} />
      ))}

      <nav className="pillar__nav-footer">
        {prev ? (
          <Link to={`/retention-architecture/${prev.slug}`} className="pillar__nav-link pillar__nav-link--prev">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <div>
              <span className="pillar__nav-label">Previous</span>
              <span className="pillar__nav-title">{prev.title}</span>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/retention-architecture/${next.slug}`} className="pillar__nav-link pillar__nav-link--next">
            <div>
              <span className="pillar__nav-label">Next</span>
              <span className="pillar__nav-title">{next.title}</span>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        ) : <div />}
      </nav>

      <style>{`
        .pillar {
          max-width: 760px;
          margin: 0 auto;
          padding: 48px 40px 80px;
          animation: fadeInUp 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }

        .pillar__header {
          margin-bottom: 48px;
        }

        .pillar__breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-tertiary);
          margin-bottom: 24px;
          transition: color var(--transition);
        }

        .pillar__breadcrumb:hover {
          color: var(--text-secondary);
        }

        .pillar__number {
          display: block;
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 12px;
        }

        .pillar__title {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .pillar__lede {
          font-size: 17px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 600px;
        }

        .pillar__nav-footer {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }

        .pillar__nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border);
          transition: all var(--transition);
          max-width: 50%;
        }

        .pillar__nav-link:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }

        .pillar__nav-link--next {
          margin-left: auto;
          text-align: right;
        }

        .pillar__nav-link svg {
          flex-shrink: 0;
          color: var(--text-tertiary);
        }

        .pillar__nav-label {
          display: block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-bottom: 4px;
        }

        .pillar__nav-title {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.3;
        }

        @media (max-width: 640px) {
          .pillar {
            padding: 36px 24px 60px;
          }

          .pillar__number {
            font-size: 36px;
          }

          .pillar__title {
            font-size: 24px;
          }

          .pillar__lede {
            font-size: 15px;
          }

          .pillar__nav-footer {
            flex-direction: column;
          }

          .pillar__nav-link {
            max-width: 100%;
          }
        }
      `}</style>
    </article>
  );
}
