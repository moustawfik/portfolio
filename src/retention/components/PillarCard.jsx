import { Link } from 'react-router-dom';

const pillarIcons = {
  1: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  2: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  3: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6" />
      <path d="M23 11h-6" />
    </svg>
  ),
  4: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="6" height="6" rx="1" />
      <rect x="16" y="2" width="6" height="6" rx="1" />
      <rect x="9" y="16" width="6" height="6" rx="1" />
      <path d="M5 8v3a1 1 0 001 1h12a1 1 0 001-1V8" />
      <path d="M12 12v4" />
    </svg>
  ),
  5: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  6: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3" />
      <path d="M7 14l4-4 4 4 6-6" />
    </svg>
  ),
  7: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  ),
  8: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  ),
  9: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 010 4H8" />
      <path d="M12 18V6" />
    </svg>
  ),
};

export default function PillarCard({ pillar, index }) {
  const renderIcon = pillarIcons[pillar.number];

  return (
    <Link
      to={`/retention-architecture/${pillar.slug}`}
      className="pillar-card glass"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div
        className="pillar-card__accent"
        style={{ background: pillar.accentGradient }}
      />

      <div className="pillar-card__top">
        <span
          className="pillar-card__number"
          style={{
            background: pillar.accentGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {String(pillar.number).padStart(2, '0')}
        </span>
        <div className="pillar-card__icon">
          {renderIcon && renderIcon(pillar.accentColor)}
        </div>
      </div>

      <h3 className="pillar-card__title">{pillar.title}</h3>
      <p className="pillar-card__desc">{pillar.description}</p>

      <div className="pillar-card__footer">
        {pillar.hasDiagram && (
          <span className="pillar-card__badge pillar-card__badge--diagram">
            Interactive
          </span>
        )}
<svg className="pillar-card__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>

      <style>{`
        .pillar-card {
          display: flex;
          flex-direction: column;
          padding: 28px 24px 20px;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          transition: all var(--transition);
          cursor: pointer;
        }

        .pillar-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .pillar-card__accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          border-radius: var(--radius-md) var(--radius-md) 0 0;
        }

        .pillar-card__top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .pillar-card__number {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -1px;
          line-height: 1;
        }

        .pillar-card__icon {
          opacity: 0.7;
          transition: opacity var(--transition);
        }

        .pillar-card:hover .pillar-card__icon {
          opacity: 1;
        }

        .pillar-card__title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
          line-height: 1.4;
          letter-spacing: -0.1px;
        }

        .pillar-card__desc {
          font-size: 13px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.6;
          flex: 1;
        }

        .pillar-card__footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
        }

        .pillar-card__badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 6px;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
        }

        .pillar-card__badge--diagram {
          color: var(--accent);
          border-color: rgba(255, 107, 107, 0.15);
          background: var(--accent-soft);
        }

        .pillar-card__arrow {
          margin-left: auto;
          color: var(--text-tertiary);
          transition: all var(--transition);
        }

        .pillar-card:hover .pillar-card__arrow {
          color: var(--accent);
          transform: translate(2px, -2px);
        }
      `}</style>
    </Link>
  );
}
